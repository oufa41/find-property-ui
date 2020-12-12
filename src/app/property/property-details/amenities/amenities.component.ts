import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Amenities } from '../../model/amenities.model';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmenitiesComponent implements OnInit {

  @Input() amenities: Amenities;

  constructor() { }

  ngOnInit(): void {
  }

}
