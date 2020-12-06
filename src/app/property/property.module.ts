import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property/property.component';
import { PropertyRoutingModule } from './property-routing.module';



@NgModule({
  declarations: [PropertyComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule,
  ]
})
export class PropertyModule { }
