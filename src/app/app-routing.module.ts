import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPortfolioComponent } from './components/add-portfolio/add-portfolio.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { PortfoliosListComponent } from './components/portfolios-list/portfolios-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'portfolios', pathMatch: 'full' },
  { path: 'portfolios', component: PortfoliosListComponent },
  { path: 'portfolios/:id', component: PortfolioDetailsComponent },
  { path: 'add', component: AddPortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
