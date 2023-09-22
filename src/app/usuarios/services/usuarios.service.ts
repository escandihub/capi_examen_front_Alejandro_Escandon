import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }

  optenerUsuarios(): Observable<any>{
    return this.http.get(`${this.url}users`)
  }
  // npm install --legacy-peer-deps
}
