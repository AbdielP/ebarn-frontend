import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OfertaRecienteComponent } from './estadisticas/oferta-reciente/oferta-reciente.component';
import { OfertaMinmaxComponent } from './estadisticas/oferta-minmax/oferta-minmax.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [HomeComponent, OfertaRecienteComponent, OfertaMinmaxComponent, ProductosComponent, CategoriasComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
