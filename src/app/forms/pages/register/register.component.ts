import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  tipoCuenta = '';

  constructor() { }

  ngOnInit(): void {
  }

  getTipoCuenta(tipoCuenta: any): void {
    // console.log(tipoCuenta);
    this.tipoCuenta = tipoCuenta;
  }

}
