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
  token: string;

  constructor(private http: HttpClient, private errorHandler: ErrorhandlerService) {
    this.loadSession();
  }

  login(form: NgForm, storedprocedure: string): Observable<any> {
    return this.http.post(`${this.SERVER_URL}/login/${storedprocedure}`, form.value)
    .pipe(map((resp: any) => {
      this.sessionStorage(resp.token);
      return resp;
    }))
    .pipe(catchError(err => of([
      this.errorHandler.errorHandler(err)
    ])));
  }

  loadSession(): void {
    if (localStorage.getItem('sti')) {
      this.token = localStorage.getItem('sti');
    } else {
      this.token = '';
    }
  }

  sessionStorage(token: string): any {
    localStorage.setItem('sti', token); // STI: Session token info
    this.token = token;
  }

  isLogedIn(): boolean {
    return (this.token.length > 5) ? true : false;
  }

  logOut(): void {
    this.token = '';
    this.clearStorage();
  }

  clearStorage(): void {
    localStorage.removeItem('sti');
    localStorage.clear();
  }
}
