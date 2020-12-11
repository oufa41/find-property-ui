import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  @Input() latitude: number;
  @Input() longitude: number;
  @Input() markerTitle: string;

  googleMapType = 'satellite';
  constructor() { }

  ngOnInit(): void {
  }

}
