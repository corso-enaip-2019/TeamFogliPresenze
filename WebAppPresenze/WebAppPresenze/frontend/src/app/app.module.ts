import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { DataService } from './services/data-service';
import { TabellaFoglio } from './components/tabella-foglio/tabella-foglio.component';
import { RoutingModule, RoutingComponents } from './services/routing-module';
import { CSVComponent } from './components/csv/csv.component';
import { ListaFogliComponent } from './components/lista-fogli/lista-fogli.component';
import { HomeComponent } from './components/home/home.component';
import { ListaDipendentiComponent } from './components/lista-dipendenti/lista-dipendenti.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    TabellaFoglio,
    CSVComponent,
    ListaFogliComponent,
    HomeComponent,
    ListaDipendentiComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FilterPipeModule,
    RoutingModule
    
  ],
  providers: [
    DataService,
    RoutingModule,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
