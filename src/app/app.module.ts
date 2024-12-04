import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// import { AccountComponent } from './account/account.component';
// import { LoanComponent } from './loan/loan.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    // AccountComponent,
    // LoanComponent,
    HomeComponent,
    AccountDetailsComponent,
    DepositComponent,
    WithdrawComponent,
    LoanApplicationComponent,
    LoanDetailsComponent,
    FrontComponent,
    LoginComponent,
    UserhomeComponent,
    RegisterComponent,
    CheckBalanceComponent,
    // Add other components here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
