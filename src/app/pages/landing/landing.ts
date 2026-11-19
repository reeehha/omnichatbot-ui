import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Hero } from './sections/hero/hero';
import { Features } from './sections/features/features';
import { Antidotes } from './sections/antidotes/antidotes';
import { Inaction } from './sections/inaction/inaction';
import { Contact } from './sections/contact/contact';
import { Testimonial } from '../../components/testimonial/testimonial';
import { VideoSection } from '../../components/video-section/video-section';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Hero, Features, Antidotes, Inaction, VideoSection, Contact, Testimonial],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class Landing {
  constructor(titleService: Title, metaService: Meta) {
    const title = ' OmnifAI  | WhatsApp Automation for UAE Businesses';
    const description = 'Help your UAE business manage WhatsApp conversations with automation, AI chatbots, marketing tools, and team workflows.';

    titleService.setTitle(title);
    metaService.updateTag({ name: 'description', content: description });
    metaService.updateTag({ property: 'og:title', content: title }, "property='og:title'");
    metaService.updateTag({ property: 'og:description', content: description }, "property='og:description'");
  }
}
