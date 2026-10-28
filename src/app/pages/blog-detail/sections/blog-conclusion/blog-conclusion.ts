
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
      padding: 45px 35px;
      border: 1px solid #e5e7eb;
      border-radius: 22px;
      background: #f8fafc;
      text-align: center;
      transition: box-shadow 0.25s ease;
    }

    .article-conclusion:hover {
      box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
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
      margin: 20px 0 18px;
      color: #111827;
      font-size: clamp(23px, 3vw, 30px);
      font-weight: 700;
      line-height: 1.35;
      letter-spacing: -0.5px;
    }

    .article-conclusion p {
      max-width: 720px;
      margin: 0 auto 20px;
      color: #6b7280;
      font-size: 15px;
      line-height: 1.9;
    }

    .article-conclusion p:last-of-type {
      margin-bottom: 25px;
    }

    .back-to-blogs {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 13px 22px;
      border-radius: 9px;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .back-to-blogs:hover {
      background: #005fd4;
      transform: translateY(-2px);
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
}
