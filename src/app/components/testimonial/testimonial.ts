
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TestimonialItem {
  name: string;
  role?: string;
  location: string;
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
  testimonials: TestimonialItem[] = [
    {
      name: 'Faisal',
      location: 'Marketing Manager, United Arab Emirates',
      message:
        "I've worked with several companies for WhatsApp messaging services, but honestly, this one stands out as the best. Their technical support is excellent, flexible, and incredibly responsive. Whenever I need help, they're quick to assist. I think I've finally found the right company to stick with!"
    },
    {
      name: 'Naseeb',
      role: 'Digital Marketing Expert',
      location: 'Qatar',
      message:
        'An excellent platform with outstanding customer service! The team is always helpful and responsive.'
    },
    {
      name: 'Gopika',
      role: 'Operations Lead',
      location: 'Qatar',
      message:
        'Our ads now bring potential customers directly to WhatsApp, and WhatChimp makes handling those enquiries effortless. The chatbot engages with customers, asks the right questions, filters genuine leads, and seamlessly connects them with our team. It’s made our entire lead management process faster, smoother, and more organised!'
    }
  ];
}
