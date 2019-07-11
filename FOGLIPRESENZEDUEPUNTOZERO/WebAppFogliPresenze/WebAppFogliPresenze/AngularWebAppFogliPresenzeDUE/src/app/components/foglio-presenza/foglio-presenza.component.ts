import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

// import { ListaDipendentiComponent} from 'src/app/components/lista-dipendenti/lista-dipendenti.component';

@Component({
  selector: 'app-foglio-presenza',
  templateUrl: './foglio-presenza.component.html',
  styleUrls: ['./foglio-presenza.component.css']
})
export class FoglioPresenzaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public dipendenteNome;
  public dipendenteCognome;
  public dipendenteId;

  ngOnInit() {
    // let Id=parseInt(this.route.snapshot.paramMap.get('Id'));
    // let Nome= this.route.snapshot.paramMap.get('Nome');
    // let Cognome= this.route.snapshot.paramMap.get('Cognome');

    // this.dipendenteId= Id;
    // this.dipendenteNome = Nome;
    // this.dipendenteCognome= Cognome;

    this.route.paramMap.subscribe((params: ParamMap)=> {

        let Id = parseInt(params.get('Id'));
        let Nome = params.get('Nome');
        let Cognome = params.get('Cognome');

        this.dipendenteId= Id;
        this.dipendenteNome = Nome;
        this.dipendenteCognome= Cognome;

    });

  }

}
