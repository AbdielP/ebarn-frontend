import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import { FormNaturalComponent } from './form-natural/form-natural.component';
import { FormJuridicaComponent } from './form-juridica/form-juridica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent, AccountTypeComponent, FormNaturalComponent, FormJuridicaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
