import { OffertService } from 'src/app/services/offert.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ofert',
  templateUrl: './ofert.component.html',
  styleUrls: ['./ofert.component.css']
})
export class OfertComponent implements OnInit {

  params: any;
  offerts = '';

  constructor(private activatedRoute: ActivatedRoute, private offertService: OffertService) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams(): void {
    this.activatedRoute.params.subscribe(params => {
      this.params = params.codpr;
      this.getOfferts(this.params);
    });
  }

  getOfferts(codigo: string): void {
     this.offertService.selectOferts(`sp_select_ofertas_codigo('${codigo}')`).subscribe((resp: any) => {
      this.offerts = resp.offerts;
      console.log(resp.offerts);
    });
  }

}
