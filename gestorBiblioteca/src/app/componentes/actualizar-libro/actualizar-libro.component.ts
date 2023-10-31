import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/servicios/libros.service';
import { Libro } from 'src/app/modelos/Libro';

@Component({
  selector: 'app-actualizar-libro',
  templateUrl: './actualizar-libro.component.html',
  styleUrls: ['./actualizar-libro.component.css']
})
export class ActualizarLibroComponent implements OnInit {
  libros:any = [];

  constructor(private servLibros: LibrosService) {}

  ngOnInit() {
    this.servLibros.getLibros().subscribe(
      resp => {
        this.libros = resp;
      },
      err => console.error(err)
    );
  }

}
