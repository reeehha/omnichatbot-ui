import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { BlogIntroComponent } from './sections/blog-intro/blog-intro';
import { BlogStepWithImageComponent } from './sections/blog-step-with-image/blog-step-with-image';
import { blogArticles } from '../blog-detail/articles/blog-articles';
import { BlogTextSectionComponent, TextSectionContent } from './sections/blog-text-section/blog-text-section';
import { BlogTipsComponent } from './sections/blog-tips/blog-tips'
import { BlogConclusionComponent } from './sections/blog-conclusion/blog-conclusion';
@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BlogIntroComponent,
    BlogStepWithImageComponent,
    BlogTextSectionComponent,
    BlogTipsComponent,
    BlogConclusionComponent
  ],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetail {
  article: (typeof blogArticles)[number] | undefined;
  blog: any;

  get relatedArticle(): { slug: string; linkText: string } | undefined {
    return (this.article as (typeof blogArticles)[number] & {
      relatedArticle?: { slug: string; linkText: string };
    } | undefined)?.relatedArticle;
  }

  getSectionContent(section: unknown): TextSectionContent[] {
    if (typeof section !== 'object' || section === null || !('content' in section)) {
      return [];
    }

    const content = section.content;
    return Array.isArray(content) ? content as TextSectionContent[] : [];
  }

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      this.article = blogArticles.find(
        item => item.slug === slug
      );

      this.blog = this.article
        ? {
            title: this.article.title,
            category: this.article.category,
            excerpt: this.article.intro[0] ?? '',
            readTime: this.article.readTime
          }
        : undefined;
    });
  }
}
