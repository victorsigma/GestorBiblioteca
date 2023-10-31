import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EjemplaresService } from 'src/app/servicios/ejemplares.service';

@Component({
  selector: 'app-gestion-ejemplares',
  templateUrl: './gestion-ejemplares.component.html',
  styleUrls: ['./gestion-ejemplares.component.css']
})
export class GestionEjemplaresComponent implements OnInit {
  @ViewChild('search') busqueda: ElementRef;

  ejemplares: any = [];
  isbn: number = 0;
  visible: boolean = false;

  constructor(private servEjemplares: EjemplaresService) {}

  ngOnInit(): void {

  }

  mostrarTabla() {
    this.isbn = this.busqueda.nativeElement.value;

    this.servEjemplares.getEjemplares(this.isbn).subscribe(
      resp => {
        this.ejemplares = resp;
        this.visible = true;
      },
      err => console.error(err)
    );

  }

}
