import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from 'src/app/property/service/property.service';
import { PropertyStoreService } from 'src/app/property/service/property-store.service';
import { Property, SellingType } from '../model/property.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyComponent implements OnInit {

  @Input() properties$: Observable<Property[]>;

  activePropertyDetails: Property;

  constructor(private propertyService: PropertyStoreService) { }

  ngOnInit(): void {

  }

  openPropertyDetails(property: Property): void {
       this.activePropertyDetails = property;
  }

}
