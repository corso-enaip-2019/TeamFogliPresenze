import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service';
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
    let self = this;
    this._DataService.listaDipendenti(function(data) {
      self.dipendenti = data;
    })
  }

  onSelect(dipendente){
    this.router.navigate(['/dipendenti', dipendente.Id, dipendente.Nome, dipendente.Cognome]);
  }

}
