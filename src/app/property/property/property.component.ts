import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from 'src/app/property/service/property.service';
import { PropertyStoreService } from 'src/app/property/service/property-store.service';
import { Property, SellingType } from '../model/property.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PropertyParams } from '../service/data/property-params';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyComponent implements OnInit, OnChanges{

  properties$: Observable<Property[]>;

  @Input() filterParams: PropertyParams;

  searchParams$: Observable<Params>;
  activePropertyDetails: Property;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService) { }

  ngOnInit(): void {
    console.log('list component');
    this.getRoutingSearchParams();
  }
  ngOnChanges(): void {
    this.updateSearch(this.filterParams);

  }


  getRoutingSearchParams(): void {
    this.searchParams$ = this.activatedRoute.queryParams;
    console.log(this.searchParams$);
    this.properties$ = this.searchParams$.pipe(
      switchMap(params => {
        console.log(params);
        return this.propertyService.getAllProperties(params as PropertyParams);
      })
    );
  }
  updateSearch(params: Partial<PropertyParams>): void {
    this.properties$ = this.propertyService.getAllProperties(this.filterParams);
    this.router.navigate(['/properties/list'], {
      queryParams: params,
      queryParamsHandling: 'merge'
    });

  }
  openPropertyDetails(property: Property): void {
    this.activePropertyDetails = property;
    console.log(property.id);
    this.router.navigate(['/properties/details', property.id], {
      queryParamsHandling: 'merge'
    });
  }

}
