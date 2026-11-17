
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface ConclusionInlineLink {
  prefix: string;
  text: string;
  suffix: string;
  url: string;
}

@Component({
  selector: 'app-blog-conclusion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="article-conclusion">
    
      <h2>{{ title }}</h2>

      <p *ngFor="let paragraph of paragraphs">
        {{ paragraph }}
      </p>

      <p class="conclusion-link-line" *ngIf="inlineLink">
        {{ inlineLink.prefix }}
        <a [href]="inlineLink.url" target="_blank" rel="noopener noreferrer">{{ inlineLink.text }}</a>
        {{ inlineLink.suffix }}
      </p>

      <a routerLink="/blog" class="back-to-blogs">
        Back to Blogs
      </a>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .article-conclusion {
      padding: 42px 34px;
      border: 1px solid #e9d5ff;
      border-radius: 22px;
      background: linear-gradient(145deg, #faf5ff, #f5f3ff 72%, #ffffff);
      box-shadow: 0 12px 34px rgba(109, 40, 217, 0.08);
      text-align: center;
    }

    .section-label {
      display: inline-block;
      padding: 7px 14px;
      border: 1px solid #dbeafe;
      border-radius: 30px;
      background: #eff6ff;
      color: #0078ff;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .article-conclusion h2 {
      margin: 0 0 18px;
      color: #5b21b6;
      font-size: clamp(23px, 3vw, 30px);
      font-weight: 700;
      line-height: 1.35;
      letter-spacing: -0.5px;
    }

    .article-conclusion p {
      max-width: 720px;
      margin: 0 auto 20px;
      color: #5b556b;
      font-size: 15px;
      line-height: 1.9;
    }

    .article-conclusion p:last-of-type {
      margin-bottom: 25px;
    }

    .conclusion-link-line a {
      color: #6d28d9;
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .back-to-blogs {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 34px;
      padding: 0.55rem 0.8rem;
      border: 0;
      border-radius: 999px;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: #ffffff;
      font-size: 0.88rem;
      font-weight: 800;
      text-decoration: none;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .back-to-blogs:hover {
      transform: translateY(-1px);
      box-shadow: 0 12px 24px rgba(37, 99, 235, 0.18);
    }

    @media (max-width: 600px) {
      .article-conclusion {
        padding: 30px 20px;
        border-radius: 16px;
      }

      .article-conclusion h2 {
        font-size: 24px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        transition: none !important;
      }
    }
  `]
})
export class BlogConclusionComponent {
  @Input() title = 'Conclusion';
  @Input() paragraphs: string[] = [];
  @Input() inlineLink?: ConclusionInlineLink;
}
