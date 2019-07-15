import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFoglio } from '../models/IFoglio';
import { IDipendente } from '../models/iDipendente';

@Injectable()
export class DataService {

  private _url: string = "http://localhost:59675/api/";

  constructor(private _http: HttpClient){  }

  getUser(callback: (data: string) => void): void {
    this._http.get<string>(this._url + "currentUser")
    .subscribe(
        data => { 
            callback(data); 
        },
        error => {
            console.log(error);
        }
    );
    }
  
  listaDipendenti(callback: (data: Array<IDipendente>) => void): void {
    this._http.get<Array<IDipendente>>(this._url + "dipendenti/lista")
        .subscribe(
            data => { 
                callback(data); 
            },
            error => {
                console.log(error);
            }
        );
    }

    listaFogli(dipId: number, callback: (data: Array<IFoglio>) => void): void {
        this._http.get<Array<IFoglio>>(this._url + "presenze/lista?id=" + dipId)
        .subscribe(
            data => { 
                callback(data); 
            },
            error => {
                console.log(error);
            }
        );
    }

    dettaglioFoglio(id: number, callback: (data: IFoglio) => void): void{
        this._http.get<IFoglio>(this._url + "presenze/foglio?id=" + id)
        .subscribe(
            data => { 
                callback(data); 
            },
            error => {
                console.log(error);
            }
        );
    }

    inviaFoglio(foglio: IFoglio): Observable<any> {
        return this._http.post(this._url + "presenze/aggiorna", foglio);
    }

    getCSV(callback: (data: Array<any>) => void): void {
        this._http.get<Array<any>>(this._url + "presenze/listaCSV")
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    console.log(error);
                }
            );

    }
  }
