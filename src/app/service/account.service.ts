import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAccountDetails() {
    return this.http.get("http://localhost:8080/getall");
  }

  public create(account:any){
    return this.http.post("http://localhost:8080/create",account)

  }
  public login(account:any){
    return this.http.post("http://localhost:8080/log",account);
  }
  public register(registration:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/create", registration)
   }

  // Deposit Method
  deposit(accountNumber: any, amount:any) {
    return this.http.put(`${this.apiUrl}/deposit/${accountNumber}/${amount}`, {});
  }

  // Withdraw Method
  withdraw(accountNumber: number, amount: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/withdraw/${accountNumber}/${amount}`, {});
  }

    // Method to fetch balance
    getBalance(accountHolderName: string): Observable<number> {
      return this.http.get<number>(`${this.apiUrl}/balance/${accountHolderName}`);
    }
}
