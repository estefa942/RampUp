import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ReservasComponent } from './reservas/reservas.component';
import { MenuComponent } from './menu/menu.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes=[
  {path:'home',component:HomeComponent},
  {path:'restaurante',component:RestauranteComponent},
  {path:'reservas',component:ReservasComponent},
  {path:'menu',component:MenuComponent},
  {path:'contactenos',component:ContactenosComponent},  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    RestauranteComponent,
    ReservasComponent,
    MenuComponent,
    ContactenosComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
