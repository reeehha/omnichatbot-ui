import { Component, AfterViewInit, Renderer2, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [FormsModule, CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class Hero implements AfterViewInit {

  messages = [
    { text: "Hi there 👋", type: "user" },
    { text: "Hello! Ready to grow your business?", type: "bot" },
    { text: "Absolutely! How can you help?", type: "user" },
    { text: "We automate replies, manage leads, and boost engagement 🚀", type: "bot" }
  ];

  visibleMessages: any[] = [];
  index = 0;
  messageHeight = 60; // approximate height of one bubble
  interval: any;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngAfterViewInit() {
    // Load Spline script dynamically
    const script = this.renderer.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.11.2/build/spline-viewer.js';
    this.renderer.appendChild(document.body, script);

    // Start chat loop
    this.startLoop();
  }

  startLoop() {
    this.visibleMessages = [];
    this.index = 0;

    // Initialize first 2 messages
    this.visibleMessages.push(this.messages[this.index]);
    this.index = (this.index + 1) % this.messages.length;
    this.visibleMessages.push(this.messages[this.index]);
    this.index = (this.index + 1) % this.messages.length;

    this.interval = setInterval(() => {
      // If next message is the first one, clear the chat first
      if (this.index === 0) {
        this.visibleMessages = [];
      }

      this.addMessage();
    }, 2200); // 2.2s for smooth transition
  }

  addMessage() {
    // Remove top if already 2
    if (this.visibleMessages.length >= 2) {
      this.visibleMessages.shift();
    }

    // Add next message
    this.visibleMessages.push(this.messages[this.index]);

    // Move to next message in loop
    this.index = (this.index + 1) % this.messages.length;
  }

  goToPricing(){
 this.router.navigate(['/pricing']);
  }
}
