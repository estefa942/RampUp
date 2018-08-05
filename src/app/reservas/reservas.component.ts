import { Component, OnInit } from '@angular/core';
import { IButton } from 'selenium-webdriver';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  tables:string[]=["1","2","3","4","5","6","7","más"];
  reservationOptions:string[]=["Almuerzo","Cena"];
  numberPersons:string="";
  reservationOption:string="";
  constructor() { }
  
  ngOnInit() {
  }

 chooseTable(table) {
   this.numberPersons=table;
   if (table==="más"){
     this.numberPersons="+7"
   } 
   return this.numberPersons;
 }

 chooseOptionReservation(reservation){
     this.reservationOption=reservation;
     return this.reservationOption;
 }

}
