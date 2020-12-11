import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { PropertyComponent } from './property/property/property.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', redirectTo: '', pathMatch: 'full',
  },
  {
    path: 'properties/list', component: PropertyComponent
  },
  {
    path: 'properties/details/:propertyId', component: PropertyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
