import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista-dipendenti',
  templateUrl: './lista-dipendenti.component.html',
  styleUrls: ['./lista-dipendenti.component.css']
})
export class ListaDipendentiComponent implements OnInit {

  userFilter: any = { Nome: '', Cognome: '', Sede: '', CodiceTeam: '' };

  public dipendenti = [];

  constructor( private _DataService: DataService, private router: Router ) { }
  
  ngOnInit() {
    this._DataService.getDipendenti()
    .subscribe(data => this.dipendenti = data);
  }

  onSelect(dipendente){
    this.router.navigate(['/dipendenti', dipendente.Id, dipendente.Nome, dipendente.Cognome]);
  }

}
