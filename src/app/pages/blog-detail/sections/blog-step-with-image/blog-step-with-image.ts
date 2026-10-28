
import { Component, Input } from '@angular/core';

export interface BlogStepContent {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

@Component({
  selector: 'app-blog-step-with-image',
  standalone: true,
  template: `
    <section class="article-section" [class.reverse]="reverse">
      <div class="section-text">
        @if (stepNumber) {
          <span class="step-number">{{ stepNumber }}</span>
        }

        <h2>{{ heading }}</h2>

        @for (paragraph of paragraphs; track $index) {
          <p>{{ paragraph }}</p>
        }

        @for (item of content; track $index) {
          <h3>{{ item.heading }}</h3>

          @if (item.bullets?.length) {
            <ul>
              @for (bullet of item.bullets; track $index) {
                <li>{{ bullet }}</li>
              }
            </ul>
          }

          @for (paragraph of item.paragraphs ?? []; track $index) {
            <p>{{ paragraph }}</p>
          }
        }
      </div>

      <div class="section-image">
        <div class="image-frame">
          <img [src]="image" [alt]="imageAlt" />
        </div>

        @if (caption) {
          <p class="image-caption">{{ caption }}</p>
        }
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      font-family: inherit;
    }

    .article-section {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      align-items: center;
      gap: 45px;
      padding: 32px;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 22px;
      box-shadow: 0 8px 30px rgba(15, 23, 42, 0.045);
    }

    .article-section.reverse .section-text {
      order: 2;
    }

    .article-section.reverse .section-image {
      order: 1;
    }

    .section-text {
      min-width: 0;
    }

    .step-number {
      display: inline-block;
      margin-bottom: 12px;
      color: #2563eb;
      font-size: 14px;
      font-weight: 700;
    }

    .section-text h2 {
      margin: 0 0 18px;
      color: #111827;
      font-size: 26px;
      font-weight: 700;
      line-height: 1.4;
    }

    .section-text p {
      margin: 0 0 16px;
      color: #6b7280;
      font-size: 16px;
      line-height: 1.9;
    }

    .section-text h3 {
      margin: 24px 0 12px;
      color: #111827;
      font-size: 19px;
      font-weight: 700;
      line-height: 1.5;
    }

    .section-text ul {
      margin: 18px 0;
      padding-left: 22px;
      color: #4b5563;
    }

    .section-text li {
      margin-bottom: 10px;
      padding-left: 4px;
      font-size: 14px;
      line-height: 1.8;
    }

    .section-text li::marker {
      color: #0078ff;
    }

    .image-frame {
      overflow: hidden;
      aspect-ratio: 4 / 3;
      background: #f8fafc;
      border: 1px solid #e5e7eb;
      border-radius: 15px;
    }

    .image-frame img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #f8fafc;
      transition: transform 0.3s ease;
    }

    @media (hover: hover) and (prefers-reduced-motion: no-preference) {
      .image-frame:hover img {
        transform: scale(1.06);
      }
    }

    .image-caption {
      margin: 10px 0 0;
      color: #6b7280;
      font-size: 13px;
      line-height: 1.6;
      text-align: center;
    }

    @media (max-width: 800px) {
      .article-section {
        grid-template-columns: 1fr;
        gap: 24px;
        padding: 24px;
      }

      .article-section.reverse .section-text,
      .article-section.reverse .section-image {
        order: initial;
      }
    }

    @media (max-width: 600px) {
      .article-section {
        padding: 18px;
        border-radius: 16px;
      }

      .section-text h2 {
        font-size: 22px;
      }
    }
  `]
})
export class BlogStepWithImageComponent {
  @Input() stepNumber = '';
  @Input() heading = '';
  @Input() paragraphs: string[] = [];
  @Input() content: BlogStepContent[] = [];
  @Input() image = '';
  @Input() imageAlt = '';
  @Input() caption = '';
  @Input() reverse = false;
}
