import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:4200/api/';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(url);
  }

  get(id): Observable<any> {
    return this.httpClient.get(`${url}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(url, data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${url}/update/${id}`, data)
  }

  destroy(id): Observable<any> {
    return this.httpClient.delete(`${url}/destroy/${id}`);
  }
}
