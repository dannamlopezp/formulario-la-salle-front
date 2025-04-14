import { Component } from '@angular/core';
import { FormService } from '../services/form.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  nombre = '';
  telefono = '';
  correo = '';
  clave = '';

  constructor(private api: FormService) {}

  onSubmit() {
    const payload = {
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo,
      clave: this.clave
    };

    this.api.register(payload).subscribe({
      next: res => console.log('Registro exitoso', res),
      error: err => console.error('Error en registro', err)
    });
  }
}
