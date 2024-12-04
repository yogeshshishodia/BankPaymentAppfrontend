import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  accountHolderName: string = '';
  balance: number | null = null;
  errorMessage: string = '';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // Retrieve accountHolderName from localStorage (set after login)
    this.accountHolderName = localStorage.getItem('accountHolderName') || '';

    // If logged in, check balance
    if (this.accountHolderName) {
      this.checkBalance();
    }
  }

  checkBalance(): void {
    // Call the service to get the balance for the logged-in user
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
