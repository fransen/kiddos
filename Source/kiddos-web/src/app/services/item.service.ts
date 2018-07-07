import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  constructor(private http: HttpClient) {}

  kiddosJsonUrl = 'assets/kiddos.json';

  getItems() : Observable<Item[]> {
    return this.http.get<Item[]>(this.kiddosJsonUrl);
  }
}
