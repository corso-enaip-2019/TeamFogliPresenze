import { Component, OnInit } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CSVComponent implements OnInit {
  public wait = false;

  constructor( private _DataService: DataService) { }
  
  ngOnInit() {
    
  }

  csvOptions = {
    fieldSeparator: '|',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Fogli Presenze Euris:',
    useBom: true,
    noDownload: false,
    headers: ["IDFoglio", "Nome", "Cognome", "Mese", "Anno", "Stato", "Anomalie", "OreOrdinarie", "OreAssenza" ]
  };

  downloadCSV(){
    this.wait = true;
    let self = this;
    this._DataService.getCSV(function(data) {
      new  AngularCsv(data, "FogliPresenze", self.csvOptions);
      self.wait = false;
    });
    
  }

}