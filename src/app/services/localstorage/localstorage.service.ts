import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() {
    // Se limpia al cargar el servicio para eliminar el storage cuando se recarga la página.
    this.clearLocalstorageCategory();
  }

  // Almacena la categoría de los productos seleccionados en 'home-component'
  setCategory(item: any): void {
    localStorage.setItem('category', JSON.stringify(item));
  }
  // Retorna la categoria seleccionada en el 'home-component'
  getCategory(): any {
    return localStorage.getItem('category');
  }

  clearLocalstorageCategory(): void {
    localStorage.removeItem('category');
  }
}
