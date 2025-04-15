import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class FormService {
  
  private http = inject(HttpClient);

  

  login(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/api/login', data, { headers });
  }

  register(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/api/register', data, { headers });
  }

  sendMessage(data: any) {
    const token = sessionStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.http.post('https://formulario-la-salle-api.onrender.com/api/contact', data, { headers });
  }
}
