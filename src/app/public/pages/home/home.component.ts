import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  eventSubject: Subject<any> = new Subject<any>();

  ngOnInit(): void {
  }
  // Recibe el idcat emitido desde el componente hijo: app-categorias
  getIdcategories(e: any): void {
    // Emite al idcat recibido hacia el componente hijo: app-productos
    this.emitToChildProductos(e);
  }

  emitToChildProductos(idcategoria: number): void {
    this.eventSubject.next({idcategoria});
  }

}
