import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Property } from '../property/model/property.model';
import { PropertyService } from '../property/service/property.service';
import { Routing } from 'src/app/constants/routing-url';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult$: Observable<Property[]>;
  advancedSearchForm: FormGroup;
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
      sellingType: ['Select Selling Type'],
    });
  }
  onSearch(value: any): void {
    console.log(value);
    this.searchResult$ = this.propertyService.getAllProperties();
    this.router.navigate([Routing.PROPERTY_LIST_URL], {relativeTo: this.activatedRoute});
  }

}
