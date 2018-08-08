import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
menuEntradas = "SOPA DEL DÍA $ 18mil inspiración del mercado ENSALADA CARMEN $ 29mil lechugas baby, tocineta de la casa"
menuPlatosFuertes= "VEG $ 44mil steak de lentejas & granos andinos saborizados con garam masala de la casa, verduras de la finca Pomario, kimchi & hierbas, curry verde DE BAHÍA SOLANO $ 52mil pesca del día, costra de guineo, risotto de arroz con coco, corozo costeño, murrapos al ron, palmitos frescos, vinagreta de coriandros"
menuPostres="NAPOLEÓN $ 17mil torta de chocolate cremoso, pavlova de coco, mousse de chocolate oscuro, anglaise de coco & chocolate blanco, sopa caliente de chocolate & chipotle 5 CHOCOLATES $ 17mil galletas de chips de chocolate, helado de cacao al 100%, merengue de chocolate blanco quemado, ganache de chocolate oscuro, mousse de chocolate al 70%, tejas de chocolate de leche, espuma de mantequilla de maní"
}
