import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

// import { ListaDipendentiComponent} from 'src/app/components/lista-dipendenti/lista-dipendenti.component';

@Component({
  selector: 'app-foglio-presenza',
  templateUrl: './foglio-presenza.component.html',
  styleUrls: ['./foglio-presenza.component.css']
})
export class FoglioPresenzaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _DataService: DataService) { }

  public dipendenteNome;
  public dipendenteCognome;
  public dipendenteId;
  public foglio;

  ngOnInit() {
  
    
    this.route.paramMap.subscribe((params: ParamMap)=> {
      
      let Id = parseInt(params.get('Id'));
      let Nome = params.get('Nome');
      let Cognome = params.get('Cognome');
      
      self.dipendenteId= Id;
      self.dipendenteNome = Nome;
      self.dipendenteCognome= Cognome;
    });
    
    let self = this;
    self._DataService.getFogliPresenze()
    .subscribe(data => self.foglio = data);

  }

}
