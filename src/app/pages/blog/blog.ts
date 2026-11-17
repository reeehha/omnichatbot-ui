
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SearchComponent } from '../../components/search/search';
import { blogArticles } from '../blog-detail/articles/blog-articles';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  constructor(titleService: Title, metaService: Meta) {
    const title = 'WhatsApp Business and Automation Guides | OmnifAI Blog';
    const description = 'Explore Omnifai guides on WhatsApp Business API, automation, broadcast campaigns, customer management, and business workflows.';
    titleService.setTitle(title);
    metaService.updateTag({ name: 'description', content: description });
    metaService.updateTag({ property: 'og:title', content: title }, "property='og:title'");
    metaService.updateTag({ property: 'og:description', content: description }, "property='og:description'");
  }

  searchText = '';

get filteredBlogs() {
  const query = this.searchText.toLowerCase().trim();

  if (!query) {
    return this.blogs;
  }

  return this.blogs.filter(blog =>
    [
      blog.title,
      blog.excerpt,
      blog.category,
      blog.slug,
      this.getArticleSearchText(blog.slug),
    ]
      .filter(value => typeof value === 'string')
      .some(value => value.toLowerCase().includes(query))
  );
}

  private getArticleSearchText(slug: string): string {
    const article = blogArticles.find(item => item.slug === slug);
    if (!article) return '';

    const collectText = (value: unknown): string[] => {
      if (typeof value === 'string') return [value];
      if (Array.isArray(value)) return value.flatMap(collectText);
      if (typeof value === 'object' && value !== null) {
        return Object.values(value).flatMap(collectText);
      }
      return [];
    };

    return collectText(article).join(' ');
  }

  blogs = [
    {
      title: '10 WhatsApp Marketing Mistakes That Could Hurt Your Business',
      slug: 'whatsapp-marketing-mistakes-to-avoid',
      category: 'WhatsApp Marketing - Business Guide',
      excerpt: 'Discover WhatsApp marketing mistakes that could affect your business and learn how consent, automation, chatbots, and broadcast messaging can improve customer engagement.',
      readTime: '10 min read',
      image: 'assets/blogs/mistakes.webp'
    },
    {
      title: 'WhatsApp Coexistence: Keep Your Business Number and Add Automation',
      slug: 'whatsapp-coexistence-business-app-api',
      category: 'WhatsApp Automation Guide',
      excerpt: 'Learn how eligible UAE businesses can keep using their WhatsApp Business App number while connecting automation and team tools through the API.',
      readTime: '9 min read',
      image: 'assets/blogs/coexistance.png'
    },
    {
      title: 'WhatsApp for Food Delivery Businesses in the UAE: Automate Orders, Promote Menus and Increase Customer Engagement',
      slug: 'whatsapp-for-food-delivery-businesses-uae',
      category: 'Food Delivery WhatsApp Guide',
      excerpt: 'Explore how UAE food businesses can use WhatsApp automation, chatbots, templates, and broadcasts to manage orders and engage customers.',
      readTime: '15 min read',
      image: 'assets/blogs/fooddelivery.png'
    },
    {
      title: 'How to Protect Your WhatsApp Business Account from Being Banned: A Guide for UAE Businesses',
      slug: 'avoid-whatsapp-business-account-ban-uae',
      category: 'WhatsApp Business Account Guide',
      excerpt: 'Learn how UAE businesses can reduce WhatsApp account restriction risks with permission-based messaging, official tools, and responsible automation.',
      readTime: '8 min read',
      image: 'assets/blogs/whatsappban.webp'
    },
    {
      title: 'What Is a WhatsApp AI Agent and How Can It Help Businesses in the UAE?',
      slug: 'whatsapp-ai-agent-businesses-uae',
      category: 'WhatsApp AI Agent Guide',
      excerpt: 'Discover how UAE businesses can use WhatsApp AI agents, chatbots, and automation to manage enquiries, bookings, sales, and customer support.',
      readTime: '12 min read',
      image: 'assets/blogs/ai-agent.png'
    },
    {
      title: 'Omnifai: All-in-One Business Automation Platform for Every Business in the UAE',
      slug: 'all-in-one-business-automation-platform-uae',
      category: 'Business Automation Guide',
      excerpt: 'Explore how Omnifai brings WhatsApp communication, AI workflows, customer management, and business operations together for UAE businesses.',
      readTime: '14 min read',
      image: '/assets/blogs/omnifaisevices.png'
    },
    {
      title: 'WhatsApp Marketing for Real Estate Agencies in the UAE: A Complete Guide to WhatsApp Automation',
      slug: 'whatsapp-marketing-real-estate-agencies-uae',
      category: 'Real Estate WhatsApp Marketing Guide',
      excerpt: 'Learn how UAE real estate agencies can use WhatsApp API, automation, chatbots, and campaigns to manage property enquiries.',
      readTime: '15 min read',
      image: '/assets/blogs/Realestate.png'
    },
    {
      title: 'How WhatsApp Broadcast Messaging Helps Businesses Grow Across Different Industries in the UAE',
      slug: 'whatsapp-broadcast-messaging-uae-businesses',
      category: 'WhatsApp Marketing Guide',
      excerpt: 'See how UAE businesses can use WhatsApp campaigns to reach opted-in audiences, promote offers, and build customer relationships.',
      readTime: '12 min read',
      image: '/assets/blogs/Broadcastmessaging.png'    },
    {
      title: 'WhatsApp Business API in UAE: How It Works, Benefits, Features and WhatsApp Automation',
      slug: 'whatsapp-business-api-uae',
      category: 'WhatsApp Business API Guide',
      excerpt: 'Learn how the WhatsApp Business Platform works, how it compares with the Business App, and how UAE businesses can use automation.',
      readTime: '14 min read',
      image: '/assets/blogs/whatsappApi.png'
    },
    {
      title: 'WhatsApp Automation with Omnifai Makes Running Your Business Easier',
      slug: 'whatsapp-automation-business-easier',
      category: 'WhatsApp Automation Guide',
      excerpt: 'Explore how Omnifai helps UAE businesses automate customer conversations, campaigns, team workflows, and more.',
      readTime: '10 min read',
      image: '/assets/blogs/whatsappAutomation.png'
    },
   
    
  ];

}
