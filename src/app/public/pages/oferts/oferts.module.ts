import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertsRoutingModule } from './oferts-routing.module';
import { OfertsComponent } from './oferts.component';


@NgModule({
  declarations: [OfertsComponent],
  imports: [
    CommonModule,
    OfertsRoutingModule
  ]
})
export class OfertsModule { }
