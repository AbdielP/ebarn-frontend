import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', component: PublicComponent, children: [
    {
      path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'ofertas', loadChildren: () => import('./oferts/oferts.module').then(m => m.OfertsModule)
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
