import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //Fer//

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private API_URL = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getLibros() {
    return this.http.get('http://localhost:3000/api/libros');
  }

  altaLibro(libro): Observable<any> {
     return this.http.post('http://localhost:3000/api/libros', libro);
  }

  borrarLibro(ISBN: number) {
    return this.http.delete("http://localhost:3000/api/libros/${ISBN}");
  }
}
