import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { DateService } from 'src/app//services/date.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  year: number;

  constructor(private router: Router, private authService: AuthenticationService, private dateService: DateService) {
    this.year = this.dateService.actualYear();
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) { return; }
    this.authService.login(form, `sp_select_datos_usuario('${form.value.usrn}')`).subscribe((resp: any) => {
      if (resp.ok) {
        this.router.navigate([`/`]);
      }
    });
  }
}
