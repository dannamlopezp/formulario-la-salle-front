import { Component } from '@angular/core';
import { FormService } from '../services/form.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mensaje = '';

  constructor(private api: FormService) {}

  onSubmit() {
    const id = sessionStorage.getItem('id') || '';
    this.api.sendMessage({userId: id, message: this.mensaje }).subscribe({
      next: res => console.log('Mensaje enviado', res),
      error: err => console.error('Error al enviar', err)
    });
  }
}
