import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'ofertas', loadChildren: () => import('./public/pages/oferts/oferts.module').then(m => m.OfertsModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'}, // Ruta vacía.
  { path: '**', redirectTo: 'home', pathMatch: 'full'} // NOT-PAGE-FOUND iría aquí.
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true, scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
