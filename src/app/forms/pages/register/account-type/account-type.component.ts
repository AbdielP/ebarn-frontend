import { RegisterService } from 'src/app/services/accounts/register.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {

  typeAccounts = '';
  infoAccounts = [];
  ocultarTipoCuenta = false;

  @Output() emititirTipoCuenta: EventEmitter<any> = new EventEmitter();

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.selectAccountTypes();
  }

  private selectAccountTypes(): void {
    this.registerService.registerService(`sp_select_tipo_cuentas()`).subscribe((resp: any) => {
      // console.log(resp);
      this.typeAccounts = resp.regist;
    });
  }

  getTypeAcc(tacc: Array<any>): void {
    this.ocultarTipoCuenta = true;
    this.infoAccounts = tacc;
    // this.emititirTipoCuenta.emit(tacc);
  }

  persona(tipopersona: number): void {
    this.emititirTipoCuenta.emit({tipocuenta: this.infoAccounts, persona: tipopersona});
  }

  mostrarTipoCuenta(): void {
    this.ocultarTipoCuenta = false;
  }

}
