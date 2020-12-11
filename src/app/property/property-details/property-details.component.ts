import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Property } from '../model/property.model';
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
    this.getPropertyById();
  }

  getPropertyById(): void {
    const propertyId = this.activatedRoute.snapshot.params.propertyId;
    this.property$ = this.propertyService.getPropertyById(propertyId);
  }


}
