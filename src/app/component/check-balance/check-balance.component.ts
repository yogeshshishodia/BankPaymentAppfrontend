import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {
  accountHolderName: string = '';
  balance: number | null = null;
  errorMessage: string = '';

  constructor(
    private _route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    // Retrieve the accountHolderName from localStorage
    this.accountHolderName = localStorage.getItem('accountHolderName') || '';

    // Fetch the balance for the logged-in user only
    if (this.accountHolderName) {
      this.checkBalance();
    }
  }

  checkBalance(): void {
    this.accountService.getBalance(this.accountHolderName).subscribe(
      (response) => {
        this.balance = response;
        this.errorMessage = '';
      },
      (error) => {
        this.balance = null;
        this.errorMessage = 'Account not found or error retrieving balance';
      }
    );
  }
}
