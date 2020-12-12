import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Address } from '../../model/address.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {


  @Input() address: Address;


  googleMapType = 'satellite';
  constructor() { }

  ngOnInit(): void {
  }

}
