import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  msg='';

  regis={
    accountNumber:'',
    accountHolderName:'',
    emailId:'',
    mobileNo:'',
  };
  constructor(private _service:AccountService,private _router:Router){}


  signup() {
    this._service.register(this.regis).subscribe(
      data =>{
        console.log("respose received");
        this._router.navigate(['/login'])
      },
      error => {
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  } 

}
