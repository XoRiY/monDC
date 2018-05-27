import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos = {
    name: '',
    email: ''
  }

  constructor() { }

  ngOnInit() {
    this.infos.email = "test"
    this.infos.name = "test2"
  }

}
