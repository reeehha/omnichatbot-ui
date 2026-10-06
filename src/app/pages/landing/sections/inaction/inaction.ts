import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-inaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inaction.html',
  styleUrl: './inaction.css',
})
export class Inaction {
  constructor(private sanitizer: DomSanitizer) {}

  channels = [
    { label: 'AI Assistant', icon: 'AA', className: 'ads' },
    { label: 'Redirection Flows', icon: 'FLOW', className: 'flows' },
    { label: 'Broadcast Messaging', icon: 'BULK', className: 'broadcasts' },
    // { label: 'CRM Sync', icon: 'CRM', className: 'crm' },
    { label: 'Team Sharing', icon: 'TEAM', className: 'team' },
    { label: 'Catalog Updates', icon: 'CAT', className: 'catalog' },
    { label: 'Support Bot', icon: 'BOT', className: 'support' },
  ];

  readonly whatsappIcon = `
    <svg viewBox="0 0 64 64" fill="none" role="img" aria-label="WhatsApp">
      <defs>
        <linearGradient id="whatsappBubbleGrad" x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop stop-color="#25D366" />
          <stop offset="1" stop-color="#128C7E" />
        </linearGradient>
        <linearGradient id="whatsappGlow" x1="20" y1="14" x2="44" y2="50" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A8F7C1" stop-opacity="0.8" />
          <stop offset="1" stop-color="#A8F7C1" stop-opacity="0" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="26" fill="url(#whatsappBubbleGrad)" />
      <path d="M18 46l2.8-8.2A17.4 17.4 0 0 1 14.6 26c0-9.4 7.7-17 17.2-17S49 16.6 49 26s-7.7 17-17.2 17a17.7 17.7 0 0 1-5.2-.8L18 46Z" fill="url(#whatsappGlow)" opacity="0.55" />
      <path
        d="M39.8 34.7c-.6-.3-3.5-1.7-4.1-1.9-.5-.2-.9-.3-1.3.3-.4.6-1.5 1.9-1.8 2.3-.3.4-.7.4-1.3.1-.6-.3-2.5-.9-4.7-2.9-1.7-1.5-2.9-3.4-3.3-4-.3-.6 0-.9.3-1.2.3-.3.6-.7.8-1 .3-.3.4-.5.6-.8.2-.3.1-.6 0-.9-.1-.3-1.3-3.2-1.8-4.4-.5-1.1-1-1-1.3-1h-1.1c-.4 0-1 .1-1.5.7s-2 1.9-2 4.7 2 5.6 2.3 6c.3.5 4.1 6.3 10 8.8 1.4.6 2.6 1 3.5 1.3 1.5.5 2.8.5 3.8.3 1.2-.2 3.5-1.4 4-2.8.5-1.4.5-2.6.3-2.8-.1-.2-.5-.3-1.1-.6Z"
        fill="#fff"
      />
      <path
        d="M44.5 19.5C41.2 12.4 32.7 9 25.4 12.3c-7.2 3.2-10.6 11.7-7.4 18.9A17.6 17.6 0 0 0 24.1 38l-2.3 6.8 7-2.2c2.1.6 3.8.8 5.5.8 7.7 0 14-6.2 14-13.9 0-3-.9-5.7-2.5-8Z"
        stroke="#fff"
        stroke-width="1.6"
        opacity="0.3"
      />
    </svg>
  `;

  iconSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
