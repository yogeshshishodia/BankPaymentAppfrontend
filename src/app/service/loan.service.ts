import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://localhost:8080/api/loans';

  constructor(private http: HttpClient) {}

  // Apply for a loan
  applyForLoan(accountId: number, loanAmount: number, interestRate: number, tenure: number): Observable<any> {
    const loanRequest = {
      accountId: accountId,
      loanAmount: loanAmount,
      interestRate: interestRate,
      tenure: tenure
    };
    return this.http.post(`${this.apiUrl}/apply`, loanRequest);  // Make POST request to apply for loan
  }
  approveLoan(loanId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${loanId}/approve`, {});
  }

  getLoansForAccount(accountId: number): Observable<any> {
    // Make sure this URL is correct, with proper backend API path
    return this.http.get(`http://localhost:8080/api/loans/${accountId}/details`);
  }
  
}
