import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Property } from '../property/model/property.model';
import { PropertyService } from '../property/service/property.service';
import { Routing } from 'src/app/constants/routing-url';
import { PropertyHttpParams } from '../property/service/data/property-http-params';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SELECT_FORM_SELLINGTYPE_DEFAULT_VALUE = 'Select Selling Type';
  searchResult$: Observable<Property[]>;
  advancedSearchForm: FormGroup;
  filterPropertyParams: PropertyHttpParams = new PropertyHttpParams();

  constructor(
    private propertyService: PropertyService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(): void {
    this.advancedSearchForm = this.formBuilder.group({
      address: [''],
      city: [''],
      sellingType: [''],
    });
  }
  onSearch(value: any): void {

    this.filterPropertyParams.address = value.address;
    this.filterPropertyParams.sellingType = value.sellingType;
    this.searchResult$ = this.propertyService.getAllProperties(this.filterPropertyParams);
    this.router.navigate([Routing.PROPERTY_LIST_URL], { relativeTo: this.activatedRoute });
  }

}
