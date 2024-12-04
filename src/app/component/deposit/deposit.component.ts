import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../service/account.service';  // Import the AccountService

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  acc:any={
    accountNumber:'',
    amount:'',
    accountHolderName:''
  };

  constructor(private accountService: AccountService,private router:Router) {}



  deposit() {
    this.accountService.deposit(this.acc.accountNumber,this.acc.amount).subscribe(
      (data:any) => {
        this.acc = Object.values(data);  // Convert object to array
        // this.loadAccountDetails();
        alert("sent Successfully")
        // this.router.navigate(['/account']);

        console.log('Deposit successful', data);
        this.router.navigate(['user']);
      },
      (error) => {
        console.error('Error depositing', error);
        alert("Invalid")
      }
    );
  }

}
