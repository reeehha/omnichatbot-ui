
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BlogTipsComponent } from '../blog-tips/blog-tips';

export interface TextSectionContent {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

@Component({
  selector: 'app-blog-text-section',
  standalone: true,
  imports: [CommonModule, BlogTipsComponent],
  template: `
    <section class="article-section text-only">

      <div class="section-text">
        @if (stepNumber) {
          <span class="step-number">{{ stepNumber }}</span>
        }

        <h2>{{ heading }}</h2>

        <ng-container *ngFor="let paragraph of paragraphs">
          <p [class.example-callout]="isExampleParagraph(paragraph)" [class.example-conversation]="isConversationParagraph(paragraph)">
            <span class="example-label" *ngIf="isExampleParagraph(paragraph)">Example</span>
            <span class="example-speaker" *ngIf="isConversationParagraph(paragraph)">{{ getConversationSpeaker(paragraph) }}</span>
            {{ isExampleParagraph(paragraph) ? getExampleBody(paragraph) : isConversationParagraph(paragraph) ? getConversationBody(paragraph) : paragraph }}
          </p>
        </ng-container>

        <ng-container *ngFor="let item of content">
          <h3 *ngIf="item.heading" [class.example-heading]="isExampleParagraph(item.heading)">{{ item.heading }}</h3>

          <p *ngFor="let paragraph of item.paragraphs"
             [class.example-callout]="isExampleParagraph(paragraph)"
             [class.example-conversation]="isConversationParagraph(paragraph)">
            <span class="example-label" *ngIf="isExampleParagraph(paragraph)">Example</span>
            <span class="example-speaker" *ngIf="isConversationParagraph(paragraph)">{{ getConversationSpeaker(paragraph) }}</span>
            {{ isExampleParagraph(paragraph) ? getExampleBody(paragraph) : isConversationParagraph(paragraph) ? getConversationBody(paragraph) : paragraph }}
          </p>

          <ul *ngIf="item.bullets?.length">
            <li *ngFor="let bullet of item.bullets">
              {{ bullet }}
            </li>
          </ul>

          <div class="comparison-table-wrap" *ngIf="item.table">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th *ngFor="let header of item.table.headers" scope="col">{{ header }}</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let row of item.table.rows">
                  <td *ngFor="let cell of row">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>
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
      padding: 0;
      background: transparent;
      border: 0;
      border-radius: 0;
      box-shadow: none;
    }

    .section-text {
      min-width: 0;
      width: 100%;
      margin: 0;
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

    .section-text p.example-callout {
      margin: 18px 0 22px;
      padding: 13px 17px;
      border-left: 3px solid #7c3aed;
      border-radius: 0 10px 10px 0;
      background: #faf5ff;
      color: #4b5563;
    }

    .example-label {
      display: block;
      margin-bottom: 4px;
      color: #6d28d9;
      font-size: 0.68rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      line-height: 1.4;
      text-transform: uppercase;
    }

    .section-text p.example-conversation {
      margin: 10px 0;
      padding: 7px 0 7px 14px;
      border-left: 2px solid #c4b5fd;
      color: #4b5563;
    }

    .example-speaker {
      margin-right: 5px;
      color: #6d28d9;
      font-weight: 700;
    }

    .section-text h3.example-heading {
      padding-left: 12px;
      border-left: 3px solid #7c3aed;
      color: #6d28d9;
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

    .comparison-table-wrap {
      max-width: 100%;
      margin: 18px 0 24px;
      overflow-x: auto;
      border: 1px solid #dbe3ef;
      border-radius: 12px;
      background: #ffffff;
      -webkit-overflow-scrolling: touch;
    }

    .comparison-table {
      width: 100%;
      min-width: 560px;
      border-collapse: collapse;
      color: #475569;
      font-size: 14px;
      line-height: 1.6;
    }

    .comparison-table th,
    .comparison-table td {
      padding: 12px 14px;
      border-bottom: 1px solid #e5e7eb;
      text-align: left;
      vertical-align: top;
    }

    .comparison-table th {
      background: #eff6ff;
      color: #1e3a8a;
      font-weight: 700;
    }

    .comparison-table td:first-child {
      color: #1f2937;
      font-weight: 600;
    }

    .comparison-table tbody tr:last-child td {
      border-bottom: 0;
    }

    @media (max-width: 768px) {
      .article-section {
        padding: 0;
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

  isExampleParagraph(text: string): boolean {
    return /^(?:for\s+)?examples?(?:\s+include)?\s*[:,]/i.test(text.trim());
  }

  getExampleBody(text: string): string {
    return text.trim().replace(/^(?:for\s+)?examples?(?:\s+include)?\s*[:,]\s*/i, '').trim();
  }

  isConversationParagraph(text: string): boolean {
    return /^(?:customer|whatsapp ai agent|ai agent|assistant|bot):/i.test(text.trim());
  }

  getConversationSpeaker(text: string): string {
    return text.trim().slice(0, text.indexOf(':') + 1);
  }

  getConversationBody(text: string): string {
    return text.trim().slice(text.indexOf(':') + 1).trim();
  }

}
