import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/properties', pathMatch: 'full'
  },
 {
  path: 'properties',
  loadChildren: () => import('src/app/property/property.module').then(mod => mod.PropertyModule),
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
