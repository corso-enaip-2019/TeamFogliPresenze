import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Sidebar } from './sidebar/sidebar.component';
import { Navbar } from './navbar/navbar.component';
import { Content } from './content/content.component';
import { Csv } from './csv/csv.component';
import { Presenza } from './presenza/presenza.component';
import { IEmployeeListComponent } from './list/IEmployee-list.component';
import { IEmployeeService } from './IEmployee.service';



@NgModule({
  declarations: [
    AppComponent,
    Sidebar,
    Navbar,
    Content,
    Csv,
    Presenza,
    IEmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
