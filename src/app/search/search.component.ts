import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Property } from '../property/model/property.model';
import { PropertyService } from '../property/service/property.service';
import { Routing } from 'src/app/constants/routing-url';
import { PropertyHttpParams } from '../property/service/data/property-http-params';
import { switchMap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

export interface SearchParams {
  department: string;
  priceLimit: string;
  search: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchParams$: Observable<Params>;


  SELECT_FORM_SELLINGTYPE_DEFAULT_VALUE = 'Select Selling Type';
  advancedSearchForm: FormGroup;
  filterPropertyParams: PropertyHttpParams = new PropertyHttpParams();
  searchResult$: Observable<Property[]>;

  constructor(
    private propertyService: PropertyService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.initForm();
    this.getRoutingSearchParams();
  }


  getRoutingSearchParams(): void {
    this.searchParams$ = this.activatedRoute.queryParams;
    this.searchResult$ = this.searchParams$.pipe(
      switchMap(params => {
        return this.propertyService.getAllProperties(params as PropertyHttpParams);
      })
    );
  }

  initForm(): void {
    this.advancedSearchForm = this.formBuilder.group({
      address: [''],
      sellingType: [''],
    });
  }
  onSearch(value: PropertyHttpParams): void {
    this.filterPropertyParams = value;
    this.updateSearch(this.filterPropertyParams);
  }
  updateSearch(params: Partial<PropertyHttpParams>): void {
    this.searchResult$ = this.propertyService.getAllProperties(this.filterPropertyParams);
    this.router.navigate(['.'], {
      queryParams: params,
      queryParamsHandling: 'merge'
    });

  }
}
