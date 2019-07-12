import { Component, OnInit } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CSVComponent implements OnInit {

  public dipendenti = [];

  constructor( private _DataService: DataService) { }
  
  ngOnInit() {
    this._DataService.getDipendenti()
    .subscribe(data => this.dipendenti = data);
  }

  csvOptions = {
    fieldSeparator: '|',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Lista dei tuoi Dipendenti :',
    useBom: true,
    noDownload: false,
    headers: ["  Dipendente ID  ", "  Dipendente Nome  ", "  Dipendente Cognome  ", "  Dipendente Sede ", "  Dipendente Codice Team  "]
  };

  downloadCSV(){
    //this.dtHolidays : DATA , HolidayList : CSV file Name, this.csvOptions : file options
    new  AngularCsv(this.dipendenti, "ListaDipendenti", this.csvOptions);
  }

}
