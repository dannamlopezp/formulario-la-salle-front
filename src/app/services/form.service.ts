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
    return this.http.post('https://formulario-la-salle-api.onrender.com/api/login', data, { headers });
  }

  register(data: any) {
    return this.http.post('https://formulario-la-salle-api.onrender.com/api/register', data);
  }

  sendMessage(data: any) {
    const token = sessionStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.http.post('https://formulario-la-salle-api.onrender.com/api/contact', data);
  }
}
