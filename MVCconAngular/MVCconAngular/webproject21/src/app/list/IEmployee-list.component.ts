import { Component, OnInit } from '@angular/core';
import { IEmployeeService } from './../IEmployee.service';
import { IEmployee } from '../IEmployee';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'IEmployee-list',
  templateUrl: "/IEmployee-list.component.html",
  styleUrls: ["/IEmployee-list.component.css"]
})

export class IEmployeeListComponent implements OnInit {

  public employees = [];
  public edit: string = 'menu';
  public chosen: IEmployee = null;
  public newEmployee: IEmployee = null;

  constructor(private _IEmployeeService: IEmployeeService) { }

  ngOnInit() {
    this._IEmployeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

  insertEmployee(newEmployee: IEmployee){
    this._IEmployeeService.insertEmployee(newEmployee)
      .subscribe(
        data => {this.employees.push(newEmployee)},
        error => {}
      );
      this.edit = 'menu';
  }

  deleteEmployee(Id: number) {
      this._IEmployeeService.deleteEmployee(Id)
      .subscribe(
        data => {let index = this.employees.findIndex(e => e.Id == Id)
          this.employees.splice(index, 1)},
        error => {}
      );
    }

  updateEmployee(selected: IEmployee){
    this._IEmployeeService.updateEmployee(selected)
    .subscribe();
    this.edit = 'menu';
  }
        
  loadEmployeeToEdit(selected: IEmployee){
    this.chosen = selected;
    this.edit = 'edit';
  }

  back(){
    this.edit = 'menu';
  }

  newPageInsert(){
    this.edit = 'new';
  }
}