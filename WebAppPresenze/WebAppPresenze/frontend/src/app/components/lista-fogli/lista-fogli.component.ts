import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { IFoglio } from 'src/app/models/IFoglio';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-lista-fogli',
  templateUrl: './lista-fogli.component.html',
  styleUrls: ['./lista-fogli.component.css']
})
export class ListaFogliComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) { }

  public dipendenteNome;
  public dipendenteCognome;
  public dipendenteId;
  public listaFogli: Array<IFoglio>;
  public isLoaded: boolean;
  public userFilter: any = { Mese: '', Anno: '' };
  public months: Array<string>;

  ngOnInit() {
    let self = this;
    self.isLoaded = false;
    self.months = this.getMonths();
    self.route.paramMap.subscribe((params: ParamMap)=> {

      let Id = parseInt(params.get('Id'));
      let Nome = params.get('Nome');
      let Cognome = params.get('Cognome');

      self.dipendenteId= Id;
      self.dipendenteNome = Nome;
      self.dipendenteCognome= Cognome;

      self.data.listaFogli(Id, function (data) {
        self.listaFogli = data;
        self.isLoaded = true;
      });
    });

  }

  onSelect(foglio: IFoglio){
    this.router.navigate(['/tabella', foglio.Id, this.dipendenteNome, this.dipendenteCognome]);
  }

  getMonths(): Array<string> {
    let months = [];
    for (let i = 0; i < 12; i++) {
      months.push(new Date(2019, i, 1).toLocaleDateString("it-IT", { month: "long"}));
    }
    return months;
  }
}
