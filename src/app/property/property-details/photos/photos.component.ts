import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../model/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[];

  constructor() { }

  ngOnInit(): void {
  }

}
