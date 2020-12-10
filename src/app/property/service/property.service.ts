import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from 'src/app/property/model/property.model';
import { API } from 'src/app/constants/api-url';
import { shareReplay } from 'rxjs/operators';
import { PropertyParams } from './data/property-params';


@Injectable({
  providedIn: 'root'
})

export class PropertyService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProperties(parameters?: PropertyParams): Observable<Property[]> {
    return this.httpClient.get<Property[]>(API.PROPERTY_URL, { params: this.getHttpParams(parameters) }).pipe(shareReplay());
  }

  getPropertyById(id: number): Observable<Property> {
    console.log(id);
    return this.httpClient.get<Property>(API.PROPERTY_URL + `${id}`).pipe(shareReplay());
  }

  postProperty(property: Property): Observable<Property> {
    return this.httpClient.post<Property>(API.PROPERTY_URL, property);
  }

  putProperty(id: number, property: Property): Observable<Property> {
    return this.httpClient.put<Property>(API.PROPERTY_URL + `${id}`, property);
  }

  deleteProperty(id: number): Observable<number> {
    return this.httpClient.delete<number>(API.PROPERTY_URL + `${id}`);
  }


  private getHttpParams(parameters: PropertyParams): HttpParams {
    let params = new HttpParams();

    // Begin assigning parameters
    if (parameters) {
      params = (parameters.sellingType && parameters.sellingType !== '') ? params.append('type', parameters.sellingType) : params.delete('type');
      params = parameters.address ? params.append('address', parameters.address) : params;
    }
    return params;
  }
}
