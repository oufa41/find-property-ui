import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from 'src/app/property/service/property.service';
import { PropertyStoreService } from 'src/app/property/service/property-store.service';
import { Property, SellingType } from '../model/property.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyComponent implements OnInit {

  @Input() properties$: Observable<Property[]>;

  activePropertyDetails: Property;

  constructor(
    private router: Router,
    private propertyService: PropertyStoreService) { }

  ngOnInit(): void {
    console.log('list component');

  }

  openPropertyDetails(property: Property): void {
    this.activePropertyDetails = property;
    this.router.navigate(['.'], {
      queryParams: {id: property.id},
      queryParamsHandling: 'merge'
    });
  }

}
