import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { ImportComponent } from './import/import.component';
import { ExportComponent } from './export/export.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  { path: 'import', component: ImportComponent },
  { path: 'export', component: ExportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
