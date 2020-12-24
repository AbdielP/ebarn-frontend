import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
