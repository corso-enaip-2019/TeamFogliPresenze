import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDipendente } from 'src/app/models/iDipendente';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class DataService {

  private _url: string = "http://localhost:51268/Api/";

  constructor(private http: HttpClient) { }
  
  getDipendenti(): Observable<IDipendente[]>{
    return this.http.get<IDipendente[]>(this._url+'getDipendenti')
  }

  
}

