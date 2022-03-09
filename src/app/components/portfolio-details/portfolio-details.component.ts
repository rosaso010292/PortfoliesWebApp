import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  currentPortfolio = null;
  message = '';
  emailValid = true;
  phoneValid = true;
  zipCodeValid = true;
  descriptionFc: FormControl;
  experienceSummaryFc: FormControl;
  imageUrlFc: FormControl;
  lastNamesFc: FormControl;
  namesFc: FormControl;
  tittleFc: FormControl;
  twitterUserNameFc: FormControl;
  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.descriptionFc = new FormControl(null, Validators.required);
    this.experienceSummaryFc = new FormControl(null, Validators.required);
    this.imageUrlFc = new FormControl(null, Validators.required);
    this.lastNamesFc = new FormControl(null, Validators.required);
    this.namesFc = new FormControl(null, Validators.required);
    this.tittleFc = new FormControl(null, Validators.required);
    this.twitterUserNameFc = new FormControl(null, Validators.required);
    this.message = '';
    this.getPortfolio(this.route.snapshot.paramMap.get('id'));
  }
  getPortfolio(id) {
    this.portfolioService.get(id)
      .subscribe(
        data => {
          this.currentPortfolio = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePortfolio() {
    if (this.currentPortfolio.email != '' && this.currentPortfolio.email.match('/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,3})$/')){
      this.emailValid = false;
    }
    if (this.currentPortfolio.phone != '' && this.currentPortfolio.phone.length < 10) {
      this.phoneValid = false;
    }
    if (this.currentPortfolio.zipCode != '' && this.currentPortfolio.zipCode.length < 5) {
      this.zipCodeValid = false;
    }
    if (this.descriptionFc.invalid || this.experienceSummaryFc.invalid 
      || this.imageUrlFc.invalid || this.lastNamesFc.invalid 
      || this.namesFc.invalid || this.tittleFc.invalid 
      || this.twitterUserNameFc.invalid ||!this.emailValid 
      || !this.phoneValid || !this.zipCodeValid) {
      return;
    }
    this.portfolioService.update(this.currentPortfolio.idPortfolio, this.currentPortfolio)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The portfolio was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
