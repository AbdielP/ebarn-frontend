import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PublicComponent, NavbarComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule
  ]
})
export class PublicModule { }
