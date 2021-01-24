import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: AuthenticationService) { }

  closeSession(): void {
    // console.log('lol')
    // Colocar aquí un mensaje de confirmación, si desea cerrar sesión. si=llamar a authservice.logout()
  }

}
