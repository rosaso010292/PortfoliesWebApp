import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.css']
})
export class AddPortfolioComponent implements OnInit {
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
  portfolio = {
    idPortfolio: 0,
    description: '',
    experienceSummary: '',
    id: 0,
    imageUrl: '',
    lastNames: '',
    names: '',
    tittle: '',
    twitterUserId: '',
    twitterUserName: '',
    userId: '',
    address: '',
    email: '',
    experience: '',
    imagePath: '',
    name: '',
    phone: '',
    twitterUser: '',
    zipCode: ''
  };
  submitted = false;
  constructor(private portfolioService: PortfolioService) {}
  ngOnInit() {
    this.descriptionFc = new FormControl(null, Validators.required);
    this.experienceSummaryFc = new FormControl(null, Validators.required);
    this.imageUrlFc = new FormControl(null, Validators.required);
    this.lastNamesFc = new FormControl(null, Validators.required);
    this.namesFc = new FormControl(null, Validators.required);
    this.tittleFc = new FormControl(null, Validators.required);
    this.twitterUserNameFc = new FormControl(null, Validators.required);
  }

  savePortfolio() {
    if (this.portfolio.email != '' && this.portfolio.email.match('/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,3})$/')){
      this.emailValid = false;
    }
    if (this.portfolio.phone != '' && this.portfolio.phone.length < 10) {
      this.phoneValid = false;
    }
    if (this.portfolio.zipCode != '' && this.portfolio.zipCode.length < 5) {
      this.zipCodeValid = false;
    }
    if (this.descriptionFc.invalid || this.experienceSummaryFc.invalid 
      || this.imageUrlFc.invalid || this.lastNamesFc.invalid 
      || this.namesFc.invalid || this.tittleFc.invalid 
      || this.twitterUserNameFc.invalid ||!this.emailValid 
      || !this.phoneValid || !this.zipCodeValid) {
      return;
    }
    const data = {
      description: this.portfolio.description,
      experienceSummary: this.portfolio.experienceSummary,
      id: this.portfolio.id,
      imageUrl: this.portfolio.imageUrl,
      lastNames: this.portfolio.lastNames,
      names: this.portfolio.names,
      tittle: this.portfolio.tittle,
      twitterUserId: this.portfolio.twitterUserId,
      twitterUserName: this.portfolio.twitterUserName,
      userId: this.portfolio.userId,
      address: this.portfolio.address,
      email: this.portfolio.email,
      experience: this.portfolio.experience,
      imagePath: this.portfolio.imagePath,
      name: this.portfolio.name,
      phone: this.portfolio.phone,
      twitterUser: this.portfolio.twitterUser,
      zipCode: this.portfolio.zipCode
    };
    this.portfolioService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newTutorial() {
    this.submitted = false;
    this.portfolio = {
      idPortfolio: 0,
      description: '',
      experienceSummary: '',
      id: 0,
      imageUrl: '',
      lastNames: '',
      names: '',
      tittle: '',
      twitterUserId: '',
      twitterUserName: '',
      userId: '',
      address: '',
      email: '',
      experience: '',
      imagePath: '',
      name: '',
      phone: '',
      twitterUser: '',
      zipCode: ''
    };
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}

