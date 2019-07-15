import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { ListaDipendentiComponent } from 'src/app/components/lista-dipendenti/lista-dipendenti.component';
import { CSVComponent } from 'src/app/components/csv/csv.component';

import { HomeComponent } from 'src/app/components/home/home.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { ListaFogliComponent } from 'src/app/components/lista-fogli/lista-fogli.component';
import { TabellaFoglio } from '../components/tabella-foglio/tabella-foglio.component';

const routes: Routes=[
{path: 'dipendenti', component: ListaDipendentiComponent },
{path: 'dipendenti/:Id/:Nome/:Cognome', component: ListaFogliComponent},
{path: 'stampaCSV', component: CSVComponent },
{path: 'home', component: HomeComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'tabella/:Id/:Nome/:Cognome', component: TabellaFoglio},
{path: '**', component: PageNotFoundComponent}


];

@NgModule ({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})

export class RoutingModule {}

export const RoutingComponents = [ ListaDipendentiComponent, ListaFogliComponent, TabellaFoglio, CSVComponent, HomeComponent, PageNotFoundComponent ]