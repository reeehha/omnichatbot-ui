
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-intro',
  standalone: true,
  template: `
    <section class="article-intro-card">
      <h2>{{ heading }}</h2>

      @for (paragraph of paragraphs; track $index) {
        <p>{{ paragraph }}</p>
      }
    </section>
  `,
  styles: [`
    

   :host {
  display: block;
  font-family: inherit;
  color: inherit;
}

.article-intro h2 {
  margin: 0 0 18px;
  color: #111827;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.35;
}

.article-intro p {
  margin: 0 0 16px;
  color: #6b7280;
  font-size: 15px;
  line-height: 1.9;
}
  `]
})
export class BlogIntroComponent {
  @Input() heading = '';
  @Input() paragraphs: string[] = [];
}
