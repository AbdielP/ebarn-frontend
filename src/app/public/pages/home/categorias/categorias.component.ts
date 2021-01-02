import { CategoriesService } from 'src/app/services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categories = '';

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.selectCategories();
  }

  private selectCategories(): void {
    this.categoriesService.getCategories('sp_select_categorias()').subscribe((resp: any) => {
      this.categories = resp.categories;
      // console.log(resp.categories);
    });
  }

  selectCategory(event, item): void {
    console.log(item);
  }

}
