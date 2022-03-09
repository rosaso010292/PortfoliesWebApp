import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolios-list',
  templateUrl: './portfolios-list.component.html',
  styleUrls: ['./portfolios-list.component.css']
})
export class PortfoliosListComponent implements OnInit {
  portfolios: any;
  tweets: any;
  currentPortfolio = null;
  currentIndex = -1;
  tittle = '';
  constructor(
    private portfolioService: PortfolioService) { }
  ngOnInit() {
    this.retrievePortfolios();
  }
  retrievePortfolios() {
    this.portfolioService.getAll()
      .subscribe(
        data => {
          this.portfolios = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrievePortfolios();
    this.currentPortfolio = null;
    this.currentIndex = -1;
  }
  setActivePortfolio(porfolio, index) {
    this.currentPortfolio = porfolio;
    this.getTweets(this.currentPortfolio.twitterUserName);
    this.currentIndex = index;
  }
  searchTittle() {
    this.portfolioService.findByTittle(this.tittle)
      .subscribe(
        data => {
          this.portfolios = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    this.currentPortfolio = null;
    this.tweets = null;
  } 

  getTweets(userName) {
    this.portfolioService.getTweets(userName)
      .subscribe(
        data => {
          this.tweets = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.tweets = null;
        });
  }

}
