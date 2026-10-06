import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatingWhatsApp } from './core/components/floating-whatsapp/floating-whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FloatingWhatsApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'omnifai';
}
