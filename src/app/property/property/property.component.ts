import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from 'src/app/property/service/property.service';
import { PropertyStoreService } from 'src/app/property/service/property-store.service';
import { Property, SellingType } from '../model/property.model';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  sellingType = SellingType;

  properties$: Observable<Property[]>;
  constructor(private propertyService: PropertyStoreService) { }

  ngOnInit(): void {
    this.properties$ = this.propertyService.getAllProperitesState();
  }

}
