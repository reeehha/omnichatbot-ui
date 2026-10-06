import { Component } from '@angular/core';
import { Footer } from '../../core/components/footer/footer';
import { Header } from '../../core/components/header/header';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-landing-layout',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css',
})
export class LandingLayout {

}
