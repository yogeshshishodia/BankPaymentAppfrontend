import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../service/account.service';  // Import the AccountService
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  acc:any={
    accountNumber:'',
    amount:'',
    accountHolderName:''
  };

  constructor(private accountService: AccountService,private router:Router) {}

  ngOnInit(): void {
    this.loadAccountDetails();
  }

  loadAccountDetails() {
    // Call a service to load the account details (you can implement this based on your backend)
    this.accountService.getAccountDetails().subscribe((data:any) => {
      this.acc = Object.values(data);

      });
  }

}
