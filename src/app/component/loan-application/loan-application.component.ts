import { Component } from '@angular/core';
import { LoanService } from '../../service/loan.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent {

  loans: any;
  loanAmount:any;
  loanInterestRate:any;
  loanTenure:any;
  accountId: number = 17; // Example account ID, replace with actual


  constructor(private loanService: LoanService) {}

  applyForLoan(amount: number, interestRate: number, tenure: number) {
    this.loanService.applyForLoan(this.accountId, amount, interestRate, tenure).subscribe(
      (response) => {
        console.log("Loan application successful", response);
      //  this.loadLoans(); // Reload loans after applying to show the updated list
        alert("apply successfull")
      },
      (error) => {
        console.error("Error applying for loan", error);
        alert("error")
      }
    );
  }

}
