import { ProductsService } from 'src/app/services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

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

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.subscribeEventIdcategoria();
    // this.selectProducts();
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

}
