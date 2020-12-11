import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Property } from '../property/model/property.model';
import { PropertyService } from '../property/service/property.service';
import { Routing } from 'src/app/constants/routing-url';
import { PropertyParams } from '../property/service/data/property-params';
import { switchMap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { PropertyStoreService } from '../property/service/property-store.service';

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
  filterPropertyParams: PropertyParams = new PropertyParams();
  searchResult$: Observable<Property[]>;

  constructor(
    private propertyService: PropertyService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log('search component');
    this.initForm();
    this.router.navigate([Routing.PROPERTY_LIST_URL]);
  }



  initForm(): void {
    this.advancedSearchForm = this.formBuilder.group({
      address: [''],
      sellingType: [''],
    });
  }
  onSearch(value: PropertyParams): void {
    this.filterPropertyParams = value;
  }

}
