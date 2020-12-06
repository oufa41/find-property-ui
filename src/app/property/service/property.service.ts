import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from 'src/app/property/model/property.model';
import { API } from 'src/app/constants/api-url';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) { }

  getAllProperties(): Observable<Property[]> {
    return this.httpClient.get<Property[]>(API.PROPERTY_URL);
  }

  getPropertyById(id: number): Observable<Property>{
    return this.httpClient.get<Property>(API.PROPERTY_URL + `${id}`);
  }

  postProperty(property: Property): Observable<Property>{
    return this.httpClient.post<Property>(API.PROPERTY_URL, property);
  }

  putProperty(id: number, property: Property): Observable<Property> {
    return this.httpClient.put<Property>(API.PROPERTY_URL + `${id}`, property);
  }

  deleteProperty(id: number): Observable<number> {
    return this.httpClient.delete<number>(API.PROPERTY_URL + `${id}`);
  }
}
