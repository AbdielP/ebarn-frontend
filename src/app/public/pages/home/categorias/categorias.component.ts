import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categories = '';
  @Output() emitirCategoria: EventEmitter<any> = new EventEmitter();

  constructor(private categoriesService: CategoriesService, private localStorageService: LocalstorageService) { }

  ngOnInit(): void {
    this.selectCategories();
  }

  private selectCategories(): void {
    this.categoriesService.getCategories('sp_select_categorias()').subscribe((resp: any) => {
      this.categories = resp.categories;
      // console.log(resp.categories);
    });
  }

  selectCategory(categoria): void {
    this.emitirCategoria.emit(categoria);
    this.localStorageService.setCategory(categoria);
  }

}
