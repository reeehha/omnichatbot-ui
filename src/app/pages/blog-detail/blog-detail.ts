import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { BlogIntroComponent } from './sections/blog-intro/blog-intro';
import { BlogStepWithImageComponent } from './sections/blog-step-with-image/blog-step-with-image';
import { blogArticles } from '../blog-detail/articles/blog-articles';
import { BlogTextSectionComponent, TextSectionContent } from './sections/blog-text-section/blog-text-section';
import { BlogTipsComponent } from './sections/blog-tips/blog-tips'
import { BlogConclusionComponent, ConclusionInlineLink } from './sections/blog-conclusion/blog-conclusion';
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

  get conclusionInlineLink(): ConclusionInlineLink | undefined {
    return (this.article as (typeof blogArticles)[number] & {
      conclusionInlineLink?: ConclusionInlineLink;
    } | undefined)?.conclusionInlineLink;
  }

  getSectionContent(section: unknown): TextSectionContent[] {
    if (typeof section !== 'object' || section === null || !('content' in section)) {
      return [];
    }

    const content = section.content;
    return Array.isArray(content) ? content as TextSectionContent[] : [];
  }

  scrollToSection(event: MouseEvent, index: number): void {
    event.preventDefault();
    document.getElementById(`article-section-${index}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
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

      this.updatePageMetadata(this.article);
    });
  }

  private updatePageMetadata(article: (typeof blogArticles)[number] | undefined): void {
    if (!article) {
      const title = 'Article Not Found | OmnifAI';
      const description = 'The requested Omnifai blog article could not be found.';
      this.titleService.setTitle(title);
      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.updateTag({ property: 'og:title', content: title }, "property='og:title'");
      this.metaService.updateTag({ property: 'og:description', content: description }, "property='og:description'");
      return;
    }

    const seo = article as (typeof blogArticles)[number] & {
      seoTitle?: string;
      metaDescription?: string;
    };
    const title = seo.seoTitle || `${article.title} | OmnifAI`;
    const description = seo.metaDescription || article.intro[0] || article.title;

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:title', content: title }, "property='og:title'");
    this.metaService.updateTag({ property: 'og:description', content: description }, "property='og:description'");
    this.metaService.updateTag({ property: 'og:type', content: 'article' }, "property='og:type'");
  }
}
