import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  homeBg: string = '../../assets/img/home-bg.jpg';

  constructor() { }

  ngOnInit() { } 
}