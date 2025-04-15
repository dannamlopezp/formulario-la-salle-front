import { Component } from '@angular/core';
import { FormService } from '../services/form.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  correo = '';
  clave = '';

  constructor(private api: FormService, private router: Router ) {}

  onSubmit() {
    const payload = { email: this.correo, password: this.clave };
    this.api.login(payload).subscribe({
      next: (res: any) => {
        sessionStorage.setItem('authToken', res.token);
        sessionStorage.setItem('id', res.id);
        this.router.navigate(['/contact']);
      },
      error: err => console.error('Login failed', err)
    });
  }
}