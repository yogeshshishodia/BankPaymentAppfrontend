import { Component } from '@angular/core';
import { LoanService } from '../../service/loan.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent {
  loans: any;
  accountId: number = 17; // Example account ID, replace with actual

      // Define the displayed columns for the table
      displayedColumns: string[] = ['id', 'loanAmount','accountHolderName','accountNumber', 'status'];

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans() {
    this.loanService.getLoansForAccount(this.accountId).subscribe((data) => {
      this.loans = [data];
      console.log(data); // Inspect the structure here // Wrap data in an array if it's a single object
    });
  }

}
