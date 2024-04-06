import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent {
  constructor(private http: HttpClient) {}

  downloadFile() {
    return this.http
      .get('/api/transactions/export-to-excel', { responseType: 'blob' })
      .subscribe((data) => saveAs(data, 'Transactions.xlsx'));
  }
}
