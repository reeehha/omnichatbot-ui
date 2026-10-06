import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-whatsapp.html',
  styleUrl: './floating-whatsapp.css',
})
export class FloatingWhatsApp {
  readonly whatsappUrl = 'https://wa.me/971522672743';
}
