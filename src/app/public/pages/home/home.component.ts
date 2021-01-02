import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Recibe el idcat emitido desde el componente hijo: app-categorias
  getIdcategories(e: any): void {
    console.log(e);
  }

}
