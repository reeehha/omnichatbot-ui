
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-tips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="article-tip">
      <h3>{{ title }}</h3>

      <ul>
        <li *ngFor="let tip of tips">{{ tip }}</li>
      </ul>
    </aside>
  `,
  styles: [`
    .article-tip {
      margin-top: 28px;
      padding: 22px 24px;
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 243, 252, 0.92)),
        radial-gradient(circle at top left, rgba(124, 58, 237, 0.16), transparent 34%);
      border-left: 4px solid #7c3aed;
      border-radius: 8px;
      color: #374151;
    }

    .article-tip h3 {
      margin: 0 0 12px;
      font-size: 18px;
      font-weight: 700;
      color: #5b21b6;
    }

    .article-tip ul {
      margin: 0;
      padding-left: 22px;
    }

    .article-tip li {
      margin-bottom: 9px;
      line-height: 1.7;
    }

    .article-tip li:last-child {
      margin-bottom: 0;
    }
  `]
})
export class BlogTipsComponent {
  @Input() title = 'Tips to Remember';
  @Input() tips: string[] = [];
}
