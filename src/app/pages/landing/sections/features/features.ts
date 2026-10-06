import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  constructor(private sanitizer: DomSanitizer) {}

  scrollY = 0;

  cards = [
    {
      icon: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#111827" />
          <rect x="7.4" y="7.4" width="9.2" height="9.2" rx="2.2" fill="#22c55e" opacity="0.95" />
          <rect x="9.4" y="9.4" width="5.2" height="5.2" rx="1.2" fill="#111827" />
          <path d="M12 5.8v2.1M12 16.1v2.1M5.8 12h2.1M16.1 12h2.1" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" />
          <path d="M8.4 8.4 7.2 7.2M15.6 8.4l1.2-1.2M8.4 15.6l-1.2 1.2M15.6 15.6l1.2 1.2" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" />
          <path d="M10.2 12h3.6M12 10.2v3.6" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" />
        </svg>
      `,
      title: 'AI-powered WhatsApp chatbot',
      desc: 'Capture leads, answer FAQs, and guide prospects with intelligent WhatsApp flows.',
      align: 'left',
      delay: 0,
      drift: 0.12,
    },
    {
      icon: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#7c3aed" />
          <path d="M7 8h4.2a3.8 3.8 0 0 1 3.8 3.8V12" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" />
          <path d="M7 16h4.2a3.8 3.8 0 0 0 3.8-3.8V12" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="17" cy="12" r="2" fill="#ffffff" />
          <path d="M15.6 12H10.6" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" />
          <path d="M16.8 10.8 18 12l-1.2 1.2" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      `,
      title: 'Automation that keeps moving',
      desc: 'Handle replies, follow-ups, routing, and broadcasts without manual effort.',
      align: 'right',
      delay: 0.2,
      drift: 0.18,
    },
    {
      icon: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#2563eb" />
          <path d="M6.5 16.5h11" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" />
          <rect x="7" y="11.5" width="2.3" height="4.8" rx="1.1" fill="#ffffff" />
          <rect x="10.85" y="8.8" width="2.3" height="7.5" rx="1.1" fill="#ffffff" opacity="0.9" />
          <rect x="14.7" y="6.8" width="2.3" height="9.5" rx="1.1" fill="#ffffff" opacity="0.85" />
        </svg>
      `,
      title: 'Business tools in one place',
      desc: 'Connect Calendar, team access, and your product catalog in a single workflow.',
      align: 'left',
      delay: 0.1,
      drift: 0.1,
    },
    {
      icon: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#f59e0b" />
          <rect x="6" y="7" width="12" height="10" rx="2" stroke="#ffffff" stroke-width="1.6" />
          <path d="M8.2 5.8v3M15.8 5.8v3M6 10h12" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" />
          <circle cx="12" cy="13.5" r="2.1" fill="none" stroke="#ffffff" stroke-width="1.4" />
          <path d="M12 12.6v1.2l.8.6" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      `,
      title: 'Google Calendar integration',
      desc: 'Book appointments and manage scheduling without back-and-forth.',
      align: 'right',
      delay: 0.35,
      drift: 0.14,
    },
    {
      icon: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#10b981" />
          <circle cx="9" cy="9.5" r="2.4" fill="#ffffff" />
          <circle cx="15.2" cy="10.2" r="2.1" fill="#ffffff" opacity="0.9" />
          <path d="M4.8 17.8a4.4 4.4 0 0 1 8.4 0" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" />
          <path d="M12.8 17a3.8 3.8 0 0 1 6 0" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      `,
      title: 'Team sharing & multi-user access',
      desc: 'Let your team collaborate in one shared WhatsApp workspace.',
      align: 'left',
      delay: 0.15,
      drift: 0.16,
    },
    {
      icon: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#f97316" />
          <path d="M5.2 13h3.6l4.8 3.4V7.6L8.8 11H5.2z" fill="#ffffff" />
          <path d="M15.2 9.6a3 3 0 0 1 0 4.8" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" />
          <path d="M17.8 7.4a6 6 0 0 1 0 9.2" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      `,
      title: 'Broadcast messaging',
      desc: 'Send promotions and updates to customers in one shot.',
      align: 'right',
      delay: 0.28,
      drift: 0.08,
    },
    {
      icon: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#0f766e" />
          <rect x="6.2" y="6.2" width="4.7" height="4.7" rx="1.2" fill="#ffffff" />
          <rect x="13.1" y="6.2" width="4.7" height="4.7" rx="1.2" fill="#ffffff" opacity="0.92" />
          <rect x="6.2" y="13.1" width="4.7" height="4.7" rx="1.2" fill="#ffffff" opacity="0.9" />
          <rect x="13.1" y="13.1" width="4.7" height="4.7" rx="1.2" fill="#ffffff" opacity="0.84" />
        </svg>
      `,
      title: 'Catalog management',
      desc: 'Showcase products and services directly inside WhatsApp.',
      align: 'left',
      delay: 0.05,
      drift: 0.15,
    },
    {
      icon: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#db2777" />
          <path d="M7.2 11.2a4.8 4.8 0 0 1 9.6 0v2.8a1.6 1.6 0 0 1-1.6 1.6h-1.1" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" />
          <path d="M8.8 16.2h1.8a1.3 1.3 0 0 0 1.3-1.3v-1" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" />
          <path d="M7.6 12.2h-.6a1.5 1.5 0 0 0 0 3h.6" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      `,
      title: 'Automated support',
      desc: 'Reduce response time with self-service flows and support handoff.',
      align: 'right',
      delay: 0.22,
      drift: 0.11,
    },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrollY = window.scrollY || 0;
  }

  bubbleTransform(index: number, drift: number): string {
    const direction = index % 2 === 0 ? -1 : 1;
    const parallax = Math.min(this.scrollY * drift * 0.06, 42) * direction;
    const sway = Math.sin((this.scrollY + index * 180) / 260) * 8 * direction;
    return `translate3d(${sway}px, ${parallax}px, 0)`;
  }

  iconSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
