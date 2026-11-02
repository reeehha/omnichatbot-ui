
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  initials?: string;
  image?: string;
  message: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css'
})
export class Testimonial {
  activeIndex = 0;

  testimonials: TestimonialItem[] = [
    {
      name: 'Aisha Rahman',
      role: 'Business Owner',
      company: 'Glow Beauty Salon',
      initials: 'AR',
      message:
        'Omnifai helps us manage customer enquiries and appointments more easily, giving our team more time to focus on customers.'
    },
    {
      name: 'Mohammed Ali',
      role: 'Operations Manager',
      company: 'Urban Living Properties',
      initials: 'MA',
      message:
        'The AI chatbot helps us respond to common property enquiries quickly, while our team handles conversations that need personal attention.'
    },
    {
      name: 'Sarah Thomas',
      role: 'Marketing Manager',
      company: 'Fresh Basket Market',
      initials: 'ST',
      message:
        'Managing customer conversations and sharing promotions is simpler with Omnifai. Having our messaging tools in one place helps us stay organised.'
    },
    {
      name: 'Daniel Joseph',
      role: 'Founder',
      company: 'QuickFix Services',
      initials: 'DJ',
      message:
        'Omnifai makes it easier to organise bookings, respond to customer requests, and manage everyday communication.'
    },
    {
      name: 'Fatima Hassan',
      role: 'Customer Experience Lead',
      company: 'Connect Plus',
      initials: 'FH',
      message:
        'The shared inbox and automated replies make customer support easier to manage and help our team keep track of conversations.'
    }
  ];

  get visibleTestimonials(): TestimonialItem[] {
    return [0, 1, 2].map(offset =>
      this.testimonials[
        (this.activeIndex + offset) % this.testimonials.length
      ]
    );
  }

  previous(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  next(): void {
    this.activeIndex =
      (this.activeIndex + 1) % this.testimonials.length;
  }
}
