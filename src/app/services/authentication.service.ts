import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ErrorhandlerService } from 'src/app/services/error/errorhandler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient, private errorHandler: ErrorhandlerService) { }

  login(form: NgForm, storedprocedure: string): Observable<any> {
    return this.http.post(`${this.SERVER_URL}/login/${storedprocedure}`, form.value)
    .pipe(map((resp: any) => {
      // this.setStorage(resp.token);
      return resp;
    }))
    .pipe(catchError(err => of([
      this.errorHandler.errorHandler(err)
    ])));
  }
}
