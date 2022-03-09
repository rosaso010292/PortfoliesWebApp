import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPortfolioComponent } from './components/add-portfolio/add-portfolio.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { PortfoliosListComponent } from './components/portfolios-list/portfolios-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddPortfolioComponent,
    PortfolioDetailsComponent,
    PortfoliosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
