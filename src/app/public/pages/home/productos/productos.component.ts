import { ProductsService } from 'src/app/services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  products = '';
  eventSubscription: Subscription;
  @Input() events: Observable<any>;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.subscribeEventIdcategoria();
    this.selectProducts();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  subscribeEventIdcategoria(): void {
    this.eventSubscription = this.events.subscribe(({idcategoria}) => {
      console.log(idcategoria);
    });
  }

  private selectProducts(): void{
    this.productService.getProducts('sp_select_productos()').subscribe((resp: any) => {
      this.products = resp.products;
    });
  }

}
