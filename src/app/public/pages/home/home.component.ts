import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventSubject: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit(): void {
  }

  // Recibe el idcat emitido desde el componente hijo: app-categorias
  getCategories(e: any): void {
    // Emite al idcat recibido hacia el componente hijo: app-productos
    this.emitToChildProductos(e);
  }

  emitToChildProductos(categoria: number): void {
    this.eventSubject.next({categoria});
  }

}
