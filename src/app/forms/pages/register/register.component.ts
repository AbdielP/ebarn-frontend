import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  tipoCuenta: any = [];
  eventSubject: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit(): void {}

  getTipoCuenta(tipoCuenta: any): void {
    this.tipoCuenta = tipoCuenta;
    this.emitToChildForms(this.tipoCuenta);
  }

  emitToChildForms(tipoCuenta: any): void{
    this.eventSubject.next({tipoCuenta});
  }

  ocultarForm(e: any): void {
    console.log(e.persona);
    this.tipoCuenta = [];
    // this.tipoCuenta.persona = e.persona;
  }

}
