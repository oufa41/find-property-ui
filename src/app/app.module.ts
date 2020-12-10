import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { PropertyComponent } from 'src/app/property/property/property.component';
import { PropertyDetailsComponent } from 'src/app/property/property-details/property-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PropertyComponent,
    PropertyDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCn_n9EIFDBgo1zP5o6ir425AYoIfNcarY'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
