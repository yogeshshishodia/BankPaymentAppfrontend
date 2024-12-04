import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../service/account.service';  // Import the AccountService

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  acc:any={
    accountNumber:'',
    amount:'',
    accountHolderName:''
  };

  constructor(private accountService: AccountService,private router:Router) {}



  withdraw() {
    this.accountService.withdraw(this.acc.accountNumber, this.acc.amount).subscribe(
      (data) => {
        this.acc = data;  // Update account details after withdrawal
        console.log('Withdrawal successful', data);
        // this.loadAccountDetails();
        alert("withdraw successfully")
        this.router.navigate(['user']);
      },
      (error) => {
        console.error('Error withdrawing', error);
        alert("invalid")
      }
    );
  }

}
