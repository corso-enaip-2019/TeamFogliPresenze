import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { ListaDipendentiComponent } from 'src/app/components/lista-dipendenti/lista-dipendenti.component';
import { CSVComponent } from 'src/app/components/csv/csv.component';

import { HomeComponent } from 'src/app/components/home/home.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { FoglioPresenzaComponent } from 'src/app/components/foglio-presenza/foglio-presenza.component';

const routes: Routes=[
{path: 'dipendenti', component: ListaDipendentiComponent },
{path: 'dipendenti/:Id/:Nome/:Cognome', component: FoglioPresenzaComponent},
{path: 'stampaCSV', component: CSVComponent },
{path: 'home', component: HomeComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: '**', component: PageNotFoundComponent}


];

@NgModule ({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})

export class RoutingModule {}

export const RoutingComponents = [ ListaDipendentiComponent, FoglioPresenzaComponent, CSVComponent, HomeComponent, PageNotFoundComponent ]