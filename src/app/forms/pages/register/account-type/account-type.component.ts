import { RegisterService } from 'src/app/services/accounts/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {

  typeAccounts = '';

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.selectAccountTypes();
  }

  private selectAccountTypes(): void {
    this.registerService.registerService(`sp_select_tipo_cuentas()`).subscribe((resp: JSON) => {
      // console.log(resp);
      this.typeAccounts = resp.regist;
      // console.log(this.typeAccounts);
    });
  }

  getTypeAcc(tacc: Array<any>): void {
    console.log(tacc);
  }

}
