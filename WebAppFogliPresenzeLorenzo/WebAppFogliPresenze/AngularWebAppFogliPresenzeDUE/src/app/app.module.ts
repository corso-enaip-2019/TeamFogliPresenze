import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoutingModule, RoutingComponents } from './service/routing-module';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FoglioPresenzaComponent } from './components/foglio-presenza/foglio-presenza.component';
// import { CSVComponent } from './components/csv/csv.component';
// import { ListaDipendentiComponent } from './components/lista-dipendenti/lista-dipendenti.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    RoutingComponents,
    HomeComponent,
    PageNotFoundComponent,
    FoglioPresenzaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FilterPipeModule,
    FormsModule,
  ],
  providers: [DataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
