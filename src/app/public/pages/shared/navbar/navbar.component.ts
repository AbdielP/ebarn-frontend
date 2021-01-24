import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: AuthenticationService) { }

  closeSession(): void {
    Swal.fire({
      title: '¿Desea cerrar la sesión?',
      text: `Haga click en el botón "Confirmar" para cerrar sesión.`,
      icon: 'warning',
      backdrop: `
        rgba(0,0,0,0.4)`,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logOut();
      }
    });
  }

}
