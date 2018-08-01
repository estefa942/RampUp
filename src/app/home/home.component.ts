import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 imagenes:string[]= ["../../assets/Recursos/restaurante1.jpeg",
 "../../assets/Recursos/restaurante2.jpg","../../assets/Recursos/restaurante3.jpg"];  

  constructor() { }

  ngOnInit() {
  }


  
}
