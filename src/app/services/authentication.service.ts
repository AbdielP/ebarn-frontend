import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  login(form: NgForm): Observable<any> {
    return this.http.post(`${this.SERVER_URL}/login`, form.value)
    .pipe(map((resp: any) => {
      // this.setStorage(resp.token);
      return resp;
    }))
    .pipe(catchError(err => of([
      // this.authErrorService.handleError(err)
      console.log(err)
    ])));
  }
}
