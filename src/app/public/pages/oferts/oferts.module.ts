import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertsRoutingModule } from './oferts-routing.module';
import { OfertsComponent } from './oferts.component';
import { OfertComponent } from './ofert/ofert.component';


@NgModule({
  declarations: [OfertsComponent, OfertComponent],
  imports: [
    CommonModule,
    OfertsRoutingModule
  ]
})
export class OfertsModule { }
