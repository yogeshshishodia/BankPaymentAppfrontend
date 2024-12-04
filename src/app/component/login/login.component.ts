import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // accountHolderName:any='';
  msg = '';
  log = {
    accountNumber: '',
    accountHolderName: '',
  };

  constructor(private _service: AccountService, private router: Router,private _route: ActivatedRoute,) {}

  // ngOnInit(): void {
  //   this.accountHolderName = this._route.snapshot.params['accountHolderName'];
  // }

  login(): void {
    this._service.login(this.log).subscribe(
      (data) => {
        const accountNumberAsNumber = Number(this.log.accountNumber); // Convert to number
        if (accountNumberAsNumber === 1) {
          console.log("Account number is 1. Navigating to admin route.");
          this.router.navigate(["/admin"]); // Route for account number 1
        } else {
          console.log("Account number is not 1. Navigating to user route.");
          localStorage.setItem('accountHolderName', this.log.accountHolderName);
          this.router.navigate(["/user"]
             , {
            queryParams: { accountHolderName: this.log.accountHolderName }
          });
        }
      },
      (error) => {
        console.log("Exception occurred:", error);
        this.msg = "*Enter valid Account Number/Account Holder Name";
      }
    );
  }
  
}
