import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Features } from './sections/features/features';
import { Antidotes } from './sections/antidotes/antidotes';
import { Inaction } from './sections/inaction/inaction';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Hero, Features, Antidotes, Inaction, Contact],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class Landing {}
