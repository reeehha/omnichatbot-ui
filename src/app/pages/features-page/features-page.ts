import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './features-page.html',
  styleUrl: './features-page.css',
})
export class FeaturesPage {
  messages = [
    { type: 'bot', text: 'Hi, welcome to OmnifAI 👋', delay: '0s' },
    { type: 'user', text: 'What can it automate for my business?', delay: '0.7s' },
    { type: 'bot', text: 'WhatsApp replies, lead capture, catalog sharing, and follow-ups.', delay: '1.4s' },
    { type: 'user', text: 'Can it connect with my tools?', delay: '2.1s' },
    { type: 'bot', text: 'Yes.  Calendar, team access, and broadcasts all work together.', delay: '2.8s' },
  ];

  featurePoints = [
    { icon: '🤖', title: 'AI chatbot', text: 'Instant conversational help across WhatsApp.' },
    { icon: '📅', title: 'Calendar sync', text: 'Appointments, scheduling, and reminders.' },
    // { icon: '📊', title: 'Sheets sync', text: 'Auto-save form and chat data without manual entry.' },
    { icon: '📢', title: 'Broadcasts', text: 'Send announcements to customers fast.' },
    { icon: '👥', title: 'Team access', text: 'Share inboxes and keep the team aligned.' },
    { icon: '🛒', title: 'Catalog', text: 'Show products and services right in chat.' },
  ];
}
