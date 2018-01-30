import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() {
    // let headers = new HttpHeaders();
    // let token = localStorage.getItem('token');
    // headers.append('Authorization', `Bearer ${token}`);

    // in Angular 5+ any requests contain Authorization header with token attached to it
    return this.http.get<any[]>('/api/orders');
  }

}
