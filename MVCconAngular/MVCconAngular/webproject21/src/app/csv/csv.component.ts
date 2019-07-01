import { Component } from "@angular/core";
import { IEmployeeService } from '../IEmployee.service';
import { ngxCsv } from 'ngx-csv';

@Component({
    selector: "csv",
    templateUrl: "/csv.component.html",
    styleUrls: ["/csv.component.css"]
})

export class Csv{
    
    public employees = [];
    public options: any;
    public item: any;

    constructor (private _IEmployeeService: IEmployeeService){
        
        this.options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.'
        };   
    }

    ngOnInit() {
        this._IEmployeeService.getEmployees()
          .subscribe(data => this.employees = data);
    }

    createCSV(){
        this.item = new ngxCsv(this.employees, 'Fogli Presenze dipendenti Euris', this.options);
    }
}