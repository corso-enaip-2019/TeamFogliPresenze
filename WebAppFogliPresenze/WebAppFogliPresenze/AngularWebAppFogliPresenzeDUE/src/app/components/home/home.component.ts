import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _DataService: DataService) { }
  public user;

  ngOnInit() {
    this._DataService.getUserIdentity()
    .subscribe(data => this.user = data);
  }
}


