
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BlogTipsComponent } from '../blog-tips/blog-tips';

export interface TextSectionContent {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

@Component({
  selector: 'app-blog-text-section',
  standalone: true,
  imports: [CommonModule, BlogTipsComponent],
  template: `
    <section class="article-section text-only">

      <div class="section-text">
        <span class="step-number">{{ stepNumber }}</span>

        <h2>{{ heading }}</h2>

        <ng-container *ngFor="let paragraph of paragraphs">
          <p>{{ paragraph }}</p>
        </ng-container>

        <ng-container *ngFor="let item of content">
          <h3>{{ item.heading }}</h3>

          <ul *ngIf="item.bullets?.length">
            <li *ngFor="let bullet of item.bullets">
              {{ bullet }}
            </li>
          </ul>

          <p *ngFor="let paragraph of item.paragraphs">
            {{ paragraph }}
          </p>
        </ng-container>

        <app-blog-tips
          *ngIf="tips.length"
          title="Tips to Remember"
          [tips]="tips">
        </app-blog-tips>
      </div>

    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .article-section {
      padding: 32px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 22px;
      box-shadow: 0 8px 30px rgba(15, 23, 42, 0.045);
      transition: box-shadow 0.25s ease;
    }

    .article-section:hover {
      box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
    }

    .section-text {
      min-width: 0;
    }

    .step-number {
      display: inline-block;
      margin-bottom: 14px;
      color: #0078ff;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1.5px;
    }

    .section-text h2 {
      margin: 0 0 18px;
      color: #111827;
      font-size: clamp(23px, 3vw, 30px);
      font-weight: 700;
      line-height: 1.35;
      letter-spacing: -0.5px;
    }

    .section-text h3 {
      margin: 24px 0 12px;
      color: #111827;
      font-size: 19px;
      font-weight: 700;
      line-height: 1.5;
    }

    .section-text p {
      margin: 0 0 16px;
      color: #6b7280;
      font-size: 15px;
      line-height: 1.9;
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

    @media (max-width: 768px) {
      .article-section {
        padding: 22px;
      }
    }
  `]
})
export class BlogTextSectionComponent {
  @Input() stepNumber = '';
  @Input() heading = '';
  @Input() paragraphs: string[] = [];
  @Input() content: TextSectionContent[] = [];
  @Input() tips: string[] = [];
}
