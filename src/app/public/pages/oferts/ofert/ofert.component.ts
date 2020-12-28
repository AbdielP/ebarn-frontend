import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ofert',
  templateUrl: './ofert.component.html',
  styleUrls: ['./ofert.component.css']
})
export class OfertComponent implements OnInit {

  params: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams(): void {
    this.activatedRoute.params.subscribe(params => {
      this.params = params.codpr;
      console.log(this.params);
      // TENGO EL CODIGO, LLAMAR LOS SERVICIOS DE LAS OFERTAS..
    });
  }

}
