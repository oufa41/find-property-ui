import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Property } from '../property/model/property.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult$: Observable<Property[]>;
  advancedSearchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

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

  }

}
