import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyStoreService } from '../service/property-store.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private router: Router, private propertyStoreService: PropertyStoreService) { }

  ngOnInit(): void {
  }

}
