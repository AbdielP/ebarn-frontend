import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import { FormNaturalComponent } from './form-natural/form-natural.component';
import { FormJuridicaComponent } from './form-juridica/form-juridica.component';


@NgModule({
  declarations: [RegisterComponent, AccountTypeComponent, FormNaturalComponent, FormJuridicaComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
