import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ImportComponent } from './import/import.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpInternalService } from './services/http-internal.service';
import { TransactionsService } from './services/transactions.service';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    MenuToolbarComponent,
    TransactionsComponent,
    ImportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    MatDividerModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule

  ],
  providers: [HttpInternalService, TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
