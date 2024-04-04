import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transactions';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private client: HttpClient) { }

  public getAll(dateFrom: string, dateTo: String): Observable<Transaction[]> {
    return this.client.get<Transaction[]>(`/api/transactions/by-date-interval?dateFrom=${dateFrom}&dateTo=${dateTo}`);
  }

}
