import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  workers: any[];
  constructor() {
    this.workers=[
      {
        name: 'Natalia Mendoza',
        information:'Administradora de Laoba, egresada de administración de empresa de la Universidad de Antioquia',
        photo:'../../assets/Recursos/administradora.jpg'
      
      },
      {
        name:'Juan Sebastián Russo',
        information:'Chef pricipal de nuestra cocina, realizó sus estudios en la Universidad triangulito',
        photo:'../../assets/Recursos/chef.jpg'
      },
      {
        name: 'Lorena Delgado',
        information:'Chef auxilair de nuestra cocina, realizó sus estudios en la universidad cuadrito',
        photo:'../../assets/Recursos/chef2.jpg'
      }
    ];
   }
   

  ngOnInit() {
  }
  tittle="Restaurante Laoba"
  description="Dentro de una linda casa en Laureles, Restaurante Laoba cuenta \ncon un ambiente acogedor y elegante. \nOfreciendo comida contemporánea, la carta respira con ingredientes y sabores locales en platos y preparaciones creativos y modernos. Siempre enfocado en calidad y técnica, la propuesta gastronómica es diversa, innovadora y siempre deliciosa."

}
