import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Property } from '../model/property.model';
import { PropertyService } from './property.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyStoreService {

  private subject = new BehaviorSubject<Property[]>([]);
  properties$: Observable<Property[]> = this.subject.asObservable();
  constructor(private propertyService: PropertyService) {
    this.storeProperties().subscribe();
  }

  private storeProperties(): Observable<Property[]> {

   return this.propertyService.getAllProperties().pipe(
      tap(properties => {
        this.subject.next(properties);
      }),
      shareReplay());
  }

  getAllProperitesState(): Observable<Property[]> {

    return this.properties$;
  }
}
