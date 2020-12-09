import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Property } from '../model/property.model';
import { PropertyService } from './property.service';
import { StateService } from 'src/app/shared/state.service';
import { PropertyParams } from './data/property-params';

interface PropertyState {
  properties: Property[];
  selectedPropertyId: number;
  filter: PropertyParams;
}

const initialState: PropertyState = {
  properties: [],
  selectedPropertyId: undefined,
  filter: new PropertyParams()
};
@Injectable({
  providedIn: 'root'
})
export class PropertyStoreService extends StateService<PropertyState> {

  filter$: Observable<PropertyParams> = this.select((state) => state.filter);
  selectedTodo$: Observable<Property> = this.select((state) => {
    if (state.selectedPropertyId === 0) {
      return new Property();
    }
    return state.properties.find((item) => item.id === state.selectedPropertyId);
  }).pipe(
    // Multicast to prevent multiple executions due to multiple subscribers
    shareReplay({ refCount: true, bufferSize: 1 })
  );
  constructor(private propertyService: PropertyService) {
    super(initialState);
    this.load();
  }

  load(): void {
    this.propertyService.getAllProperties().subscribe((properties) => this.updateState({ properties }));
  }
  create(property: Property): void {
    this.propertyService.postProperty(property).subscribe((newProperty) => {
      this.updateState({
        properties: [...this.state.properties, newProperty],
        selectedPropertyId: newProperty.id,
      });
    });
  }

  update(property: Property): void {
    this.propertyService.putProperty(property.id, property).subscribe((updatedProperty) => {
      this.updateState({
        properties: this.state.properties.map((item) => (item.id === property.id ? updatedProperty : item)),
      });
    });
  }

  delete(property: Property): void {
    this.propertyService.deleteProperty(property.id).subscribe(() => {
      this.updateState({
        selectedPropertyId: undefined,
        properties: this.state.properties.filter((item) => item.id !== property.id),
      });
    });
  }
}
