import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

const routes: Routes = [
  { path: 'forms', component: FormsComponent, children: [
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
