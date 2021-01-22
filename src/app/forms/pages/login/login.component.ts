import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthenticationService) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) { return; }
    this.authService.login(form).subscribe((resp: any) => {
      if (resp.ok) {
        console.log(resp);
      }
    });
  }
}
