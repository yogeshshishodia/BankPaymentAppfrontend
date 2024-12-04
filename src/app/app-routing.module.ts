import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './component/home/home.component';
import { AccountDetailsComponent } from './component/account-details/account-details.component';
import { DepositComponent } from './component/deposit/deposit.component';
import { WithdrawComponent } from './component/withdraw/withdraw.component';
import { LoanApplicationComponent } from './component/loan-application/loan-application.component';
import { LoanDetailsComponent } from './component/loan-details/loan-details.component';
import { FrontComponent } from './component/front/front.component';
import { LoginComponent } from './component/login/login.component';
import { UserhomeComponent } from './component/userhome/userhome.component';
import { RegisterComponent } from './component/register/register.component';
import { CheckBalanceComponent } from './component/check-balance/check-balance.component';

const routes: Routes = [


      { path: 'admin', component: HomeComponent },                                    // Home page as default
     { path: 'account-details', component: AccountDetailsComponent },            // Account Details page
     { path: 'deposit', component: DepositComponent },                         // Deposit page
     { path: 'withdraw', component: WithdrawComponent},                      // Withdraw page
     { path: 'loan-application', component:LoanApplicationComponent },       // Loan application route
     { path: 'loan-details', component:LoanDetailsComponent },                // Loan details route
    //  { path: '**', redirectTo: '' },                                      // Redirect unknown paths to home
     {path:  '', component:FrontComponent},
     {path:'login', component:LoginComponent},
     {path:'user', component:UserhomeComponent},
     {path:'register', component:RegisterComponent},
     { path:'checkbalance/:accountHolderName', component: CheckBalanceComponent},
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
