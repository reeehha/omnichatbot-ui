
import { Component, Input } from '@angular/core';

export interface BlogStepContent {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

@Component({
  selector: 'app-blog-step-with-image',
  standalone: true,
  template: `
    <section class="article-section">
      <div class="section-image">
        <div class="image-frame">
          <img [src]="image" [alt]="imageAlt" />
        </div>

        @if (caption) {
          <p class="image-caption">{{ caption }}</p>
        }
      </div>

      <div class="section-text">
        @if (stepNumber) {
          <span class="step-number">{{ stepNumber }}</span>
        }

        <h2>{{ heading }}</h2>

        @for (paragraph of paragraphs; track $index) {
          <p [class.example-callout]="isExampleParagraph(paragraph)" [class.example-conversation]="isConversationParagraph(paragraph)">
            @if (isExampleParagraph(paragraph)) { <span class="example-label">Example</span> }
            @if (isConversationParagraph(paragraph)) { <span class="example-speaker">{{ getConversationSpeaker(paragraph) }}</span> }
            {{ isExampleParagraph(paragraph) ? getExampleBody(paragraph) : isConversationParagraph(paragraph) ? getConversationBody(paragraph) : paragraph }}
          </p>
        }

        @for (item of content; track $index) {
          @if (item.heading) {
            <h3 [class.example-heading]="isExampleParagraph(item.heading)">{{ item.heading }}</h3>
          }

          @for (paragraph of item.paragraphs ?? []; track $index) {
            <p [class.example-callout]="isExampleParagraph(paragraph)" [class.example-conversation]="isConversationParagraph(paragraph)">
              @if (isExampleParagraph(paragraph)) { <span class="example-label">Example</span> }
              @if (isConversationParagraph(paragraph)) { <span class="example-speaker">{{ getConversationSpeaker(paragraph) }}</span> }
              {{ isExampleParagraph(paragraph) ? getExampleBody(paragraph) : isConversationParagraph(paragraph) ? getConversationBody(paragraph) : paragraph }}
            </p>
          }

          @if (item.bullets?.length) {
            <ul>
              @for (bullet of item.bullets; track $index) {
                <li>{{ bullet }}</li>
              }
            </ul>
          }

          @if (item.table; as table) {
            <div class="comparison-table-wrap">
              <table class="comparison-table">
                <thead>
                  <tr>
                    @for (header of table.headers; track $index) {
                      <th scope="col">{{ header }}</th>
                    }
                  </tr>
                </thead>
                <tbody>
                  @for (row of table.rows; track $index) {
                    <tr>
                      @for (cell of row; track $index) {
                        <td>{{ cell }}</td>
                      }
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
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
      display: flex;
      flex-direction: column;
      gap: 24px;
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

    .image-frame {
      display: flex;
      justify-content: center;
      overflow: visible;
      background: transparent;
    }

    .image-frame img {
      display: block;
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 520px;
      object-fit: contain;
      background: transparent;
      border-radius: 12px;
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
        gap: 20px;
      }
    }

    @media (max-width: 600px) {
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
