import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EjemplaresService {

  constructor(private http:HttpClient) { }

  getEjemplares(ISBN: number) {
    return this.http.get("http://localhost:3000/api/ejemplares/${ISBN}");
  }

}
