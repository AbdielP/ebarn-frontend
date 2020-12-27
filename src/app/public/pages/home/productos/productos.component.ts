import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  products = '';

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.selectProducts();
  }

  private selectProducts(): void{
    this.productService.getProducts('sp_select_productos()').subscribe((resp: any) => {
      this.products = resp.products;
    });
  }

}
