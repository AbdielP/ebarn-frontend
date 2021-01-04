import { ProductsService } from 'src/app/services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  infocategory: any = '';
  products = '';
  eventSubscription: Subscription;
  @Input() events: Observable<any>;

  constructor(private productService: ProductsService, private localstorageService: LocalstorageService) {}

  ngOnInit(): void {
    this.subscribeEventIdcategoria();
    this.localstorageGetSelectedCategory();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  subscribeEventIdcategoria(): void {
    this.eventSubscription = this.events.subscribe(({categoria}) => {
      this.infocategory = categoria;
      this.selectProducts(this.infocategory.idcat);
    });
  }

  private selectProducts(idcategoria: number): void{
    this.productService.getProducts(`sp_select_productos(${idcategoria})`).subscribe((resp: any) => {
      this.products = resp.products;
    });
  }

  // Obtiene del localstorage los productos de la última categoría elegida.
  localstorageGetSelectedCategory(): void {
    if (this.localstorageService.getCategory() != null) {
      this.infocategory = JSON.parse(this.localstorageService.getCategory());
      this.selectProducts(this.infocategory.idcat);
    }
  }

}
