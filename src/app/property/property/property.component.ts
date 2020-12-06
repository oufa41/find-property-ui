import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from 'src/app/property/service/property.service';
import { Property } from '../model/property.model';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {


  properties$: Observable<Property[]>;
  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.properties$ = this.propertyService.getAllProperties();
  }

}
