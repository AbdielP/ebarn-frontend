import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor() { }

  errorHandler(error: any): Promise<any> {
    console.log(error);
    // Se podría definir cuando usar 'error' o 'question' según el tipo de error? probablemente desde el backend?
    return Swal.fire('Error', `${error.error.message}`, 'error');
  }
}
