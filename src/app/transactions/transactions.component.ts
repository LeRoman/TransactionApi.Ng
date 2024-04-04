import { Component, ViewChild } from '@angular/core';
import { Transaction } from '../models/transactions';
import { TransactionsService } from '../services/transactions.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']

})
export class TransactionsComponent {

  transactions: Transaction[] = [];
  dataSource: MatTableDataSource<Transaction> = new MatTableDataSource;
  displayedColumns: string[] = ['id', 'name', 'email', 'amount', 'transactionDate', 'timeZone'];
  dateFrom: Date = new Date;
  dateTo: Date = new Date;

  @ViewChild(MatTable) table!: MatTable<Transaction>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private transactionService: TransactionsService) { }

  getDate(date: Date): string {
    return (`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
  }

  onButtonClick() {
    this.transactionService.getAll(this.getDate(this.dateFrom), this.getDate(this.dateTo)).subscribe(data => {
      this.transactions = data;
      this.dataSource = new MatTableDataSource<Transaction>(this.transactions);
      this.dataSource.paginator = this.paginator;
      this.table.renderRows();
    })
  }
}



