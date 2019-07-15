import { Component } from '@angular/core';
import { IFoglio } from '../../models/IFoglio';
import { DataService } from '../../services/data-service';
import { ICategoria } from '../../models/ICategoria';
import { IOra } from '../../models/IOra'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'tabella-foglio',
  templateUrl: './tabella-foglio.component.html',
  styleUrls: ['./tabella-foglio.component.css']
})
export class TabellaFoglio {

  public foglio: IFoglio;
  public isLoaded: boolean;
  public editD: number;
  public editCat: ICategoria;
  public editValue: number;
  public isChanged: boolean;
  foglioId: number;
  nomeDip: string;
  cognomeDip: string;

  constructor(private _data: DataService, private router: Router, private route: ActivatedRoute, private location: Location) {
    this.loadData();
  }

  loadData(): void {
    let self = this;
    self.isLoaded = false;
    self.isChanged = false;
    self.editValue = null;

    self.route.paramMap.subscribe((params: ParamMap)=> {

      let id = parseInt(params.get('Id'));
      let nome = params.get('Nome');
      let cognome = params.get('Cognome');

      self.foglioId = id;
      self.nomeDip = nome;
      self.cognomeDip = cognome;

      self._data.dettaglioFoglio(id, function (data) {
        self.foglio = data;
        self.isLoaded = true;
      });
    });


  }

  confirmReload(): void {
    if (confirm("Ricaricare il foglio? ATTENZIONE: tutte le informazioni non salvate andranno perse!")) {
      this.loadData();
    }
  }

  getName(d: number): string {
    return new Date(this.foglio.Anno, this.foglio.Mese - 1, d).toLocaleDateString("it-IT", { weekday: "short" })
  }

  isFestive(d: number): boolean {
    return this.foglio.GiorniFestivi.includes(d);
  }
  
  getTotal(): number {
    return this.foglio.TotaliGiornalieri.reduce((a, b) => a + b, 0)
  }

  getHours(d: number, cat: string): number {
    let ora = this.foglio.Ore.find(o => o.Giorno == d && o.Tipo == cat);
    if (ora == null)
      return null;

    return ora.Quantita;
  }

  isEdit(d: number, cat: ICategoria): boolean {
    return this.editCat == cat && this.editD == d;
  }

  setEdit(d: number, cat: ICategoria): void {
    if (this.editD == d && this.editCat == cat){
      return;
    }
    this.editCat = cat;
    this.editD = d;
    if (d == 0 || cat == null) {
      this.editValue = 0;
    }
    else {
      this.editValue = this.getHours(d, cat.Nome);
    }
  }

  saveValue(): void {
    if (this.editValue > 8 || this.editValue < 0) {
      alert("Inserisci un valore da 0 a 8.");
      return;
    }
    let ora = this.foglio.Ore.find(o => o.Giorno == this.editD && o.Tipo == this.editCat.Nome);
    if (ora == null) {
      if (this.editValue != 0 && this.editValue != null) {
        this.newHour();
      }
    }
    else {
      if (this.editValue == 0 || this.editValue == null) {
        this.deleteHour(ora);
      }
      else if (this.editValue != ora.Quantita) {
        this.updateHour(ora);
      }
    }
    this.setEdit(-1, null);
  }

  newHour(): void {
    let newOra: IOra = {
      Id: 0,
      FoglioPresenzeId: this.foglio.Id,
      Giorno: this.editD,
      Quantita: this.editValue,
      Tipo: this.editCat.Nome
    }
    this.foglio.Ore.push(newOra);
    this.isChanged = true;
    this.recalculate(this.editD - 1, this.editCat, this.editValue);
  }

  deleteHour(ora: IOra): void {
    let q = ora.Quantita;
    this.foglio.Ore.splice(this.foglio.Ore.indexOf(ora), 1);
    this.isChanged = true;
    this.recalculate(this.editD - 1, this.editCat, -q);
  }

  updateHour(ora: IOra): void {
    let q = ora.Quantita;
    ora.Quantita = this.editValue;
    this.isChanged = true;
    this.recalculate(this.editD - 1, this.editCat, this.editValue - q);
  }

  recalculate(d: number, cat: ICategoria, val: number): void {
    this.foglio.TotaliGiornalieri[d] += val;
    cat.OreTotali += val;
  }

  saveToDb(): void {
    this._data.inviaFoglio(this.foglio).subscribe(
      data => {
          console.log(data);
          this.loadData();
      },
      error => {
          console.log(error);
      }
    );
  }

  goBack(){
    this.location.back();
  }
}
