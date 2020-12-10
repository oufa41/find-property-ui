import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Property } from '../model/property.model';
import { PropertyStoreService } from '../service/property-store.service';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyDetailsComponent implements OnInit {

  property$: Observable<Property>;
  constructor(private activatedRoute: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {
    const propertyId = this.activatedRoute.snapshot.queryParams.id;
    console.log(propertyId);
    this.property$ = this.propertyService.getPropertyById(propertyId);
  }

}
