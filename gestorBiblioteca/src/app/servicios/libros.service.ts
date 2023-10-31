import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  API_URL = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getLibros() {
    return this.http.get('http://localhost:3000/api/libros');
  }

  borrarLibro(ISBN: number) {
    return this.http.delete("http://localhost:3000/api/libros/${ISBN}");
  }
}
