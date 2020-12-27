import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OfertaRecienteComponent } from './estadisticas/oferta-reciente/oferta-reciente.component';
import { OfertaMinmaxComponent } from './estadisticas/oferta-minmax/oferta-minmax.component';


@NgModule({
  declarations: [HomeComponent, OfertaRecienteComponent, OfertaMinmaxComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
