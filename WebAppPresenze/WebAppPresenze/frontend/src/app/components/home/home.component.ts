import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public username: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    let self = this;
    self.data.getUser(function(data) {
      self.username = data;
    })
  }

}
