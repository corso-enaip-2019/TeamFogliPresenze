import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 
import { IEmployee } from './IEmployee';
import { Observable } from 'rxjs';


@Injectable()
export class IEmployeeService {

  private _url: string = "http://localhost:59429/Api/";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url+'getEmployees')
  }

  insertEmployee(employee: IEmployee): Observable<IEmployee>{
    return this.http.post<IEmployee>(this._url+'insertEmployee', employee)
  }

  deleteEmployee(Id: number): Observable<number> {  
    return this.http.post<number>(this._url+'deleteEmployee', Id);  
  }  

  updateEmployee(employee: IEmployee): Observable<IEmployee> {   
    return this.http.put<IEmployee>(this._url + 'updateEmployee',  
    employee);  
  }  

}