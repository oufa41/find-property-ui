import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './property/property/property.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', redirectTo: '', pathMatch: 'full',
  },
  {
    path: 'properties/list', component: PropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
