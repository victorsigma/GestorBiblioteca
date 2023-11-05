import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjemplaresService {

  constructor(private http:HttpClient) { }

  getEjemplares(ISBN: number): Observable<any> {
    return this.http.get(`http://localhost:3000/api/ejemplares/${ISBN}`);
  }

}
