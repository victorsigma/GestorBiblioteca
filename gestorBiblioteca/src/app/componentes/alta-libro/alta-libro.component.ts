import { Component } from '@angular/core';
import { from } from 'rxjs';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-alta-libro',
  templateUrl: './alta-libro.component.html',
  styleUrls: ['./alta-libro.component.css']
})
export class AltaLibroComponent {

  constructor(private librosService:LibrosService) { }

  ISBND: number;
  Titulo: string;
  Autores: string;
  fPublicacion: string;
  Editorial: string;
  cantEjemplares: number;
  Categoria: string;

  libro:any = {}

  altaLibro() {
    this.libro = {
      ISBN: this.ISBND,
      titulo: this.Titulo,
      autores: this.Autores,
      fPublicacion: this.fPublicacion,
      editorial: this.Editorial, 
      cantEjemplares: this.cantEjemplares,
      categoria: this.Categoria
    };

    this.librosService.altaLibro(this.libro).subscribe(
      data => {
        console.log('Libro creado:', data);
        // Resetear los campos del formulario
        this.ISBND = null;
        this.Titulo = '';
        this.Autores = '';
        this.fPublicacion = '';
        this.Editorial = '';
        this.cantEjemplares = null;
        this.Categoria = '';
        // Mostrar el mensaje
        alert('Datos guardados correctamente.');
      },
      error => console.log('Error al crear el libro:', error)
    );

    
    this.librosService.altaLibro(this.libro).subscribe(
      data => console.log('Libro creado:', data),
      error => console.log('Error al crear el libro:', error)
    )
  }

  categorias: any[] = [
    { nombre: 'Ficción' },
    { nombre: 'No ficción' },
    { nombre: 'Ciencia ficción' },
    { nombre: 'Infantil' },
    { nombre: 'Misterio' },
    { nombre: 'Aventura' },
    { nombre: 'Romance' },
    { nombre: 'Histórico' },
    { nombre: 'Biografía' },
    { nombre: 'Poesía' },
    { nombre: 'Ensayo' },
    { nombre: 'Teatro' },
    { nombre: 'Crónica' },
    { nombre: 'Memorias' },
    { nombre: 'Novela policiaca' },
    { nombre: 'Suspense' },
    { nombre: 'Género' },
    { nombre: 'Literatura infantil' },
    { nombre: 'Narrativa juvenil' },
    { nombre: 'Psicológico' }
  ];

}
