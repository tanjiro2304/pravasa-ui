import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<{token:string}>{
    console.log('Attempting to log in user:', user.username);
    return this.http.post<{token:string}>('http://localhost:8001/user/login', user).pipe(
      tap(response => {
        console.log('Received token:', response.token);
        localStorage.setItem('token', response.token);
      })
    );
  }
}



