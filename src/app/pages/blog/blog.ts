
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  blogs = [
    {
      title: 'A Step-by-Step Guide to Managing Customer Bookings in Omnifai',
      slug: 'manage-customer-bookings',
      category: 'Step-by-Step Guide',
      excerpt: 'Learn how to manage customer bookings and streamline appointments using Omnifai.',
      readTime: '6 min read',
      image: 'assets/Addbooking.png'
    },
    {
      title: 'Contact Management and Campaign Creation in Omnifai',
      slug: 'contact-management-campaign-creation',
      category: 'Contact Management Guide',
      excerpt: 'Learn how to add contact information and create campaigns in Omnifai.',
      readTime: '6 min read',
      image: 'assets/Addbooking.png'
    },
    {
      title: 'Manage Business Services and Appointments in One Place',
      slug: 'manage-business-services-and-appointments',
      category: 'Guide to Service Management',
      excerpt: 'Guide to managing business services, appointments, and availability using Omnifai.',
      readTime: '6 min read',
      image: 'assets/servicemanagement.png'
    },
    {
      title: 'How to Manage WhatsApp Contacts and Conversations in Omnifai',
      slug: 'manage-whatsapp-contacts-and-conversations',
      category: 'Guide to efficient conversation management',
      excerpt: 'Guide to managing WhatsApp contacts and conversations in Omnifai.',
      readTime: '6 min read',
      image: 'assets/servicemanagement.png'
    },
    {
      title: 'Automating CRM Workflows with Webhooks',
      slug: 'automating-crm-workflows-with-webhooks',
      category: 'CRM Webhook Guide',
      excerpt: 'Connect your CRM or online store to Omnifai and automate WhatsApp communications with webhooks.',
      readTime: '5 min read',
      image: 'assets/dashboard.png'
    },
    {
      title: 'A Complete Guide to Managing Your Store Inventory with Omnifai',
      slug: 'manage-store-inventory',
      category: 'Inventory Management Guide',
      excerpt: 'Manage your product catalog from one dashboard: add products, update details, monitor stock, and upload products in bulk.',
      readTime: '7 min read'
    },
    {
      title: 'Switch to Human Enabled Mode Whenever Human Assistance Is Required',
      slug: 'switch-to-human-enabled-mode',
      category: 'Conversation Management Guide',
      excerpt: 'Learn how to turn off bot mode for a conversation and assign it to a team member when a customer needs personal assistance.',
      readTime: '4 min read'
    },
    {
      title: 'Creating Custom Templates for Your Business in Omnifai',
      slug: 'creating-custom-whatsapp-templates',
      category: 'WhatsApp Template Guide',
      excerpt: 'A step-by-step guide to creating General and Carousel Media WhatsApp message templates for your business.',
      readTime: '8 min read'
    },
    {
      title: 'How to Add a Team Member in Omnifai',
      slug: 'add-team-member',
      category: 'Team Management Guide',
      excerpt: 'Add team members to your Omnifai organization so they can help manage customer conversations and support daily operations.',
      readTime: '4 min read'
    },
    {
      title: 'How to Integrate Your Shopify Store with Omnifai',
      slug: 'integrate-shopify-with-omnifai',
      category: 'Shopify Integration Guide',
      excerpt: 'Connect Shopify events to Omnifai and send timely WhatsApp updates using message templates and Zapier.',
      readTime: '8 min read'
    },
    {
      title: 'How to Integrate AI into Your Chatbot',
      slug: 'integrate-ai-into-chatbot',
      category: 'AI Chatbot Setup Guide',
      excerpt: 'Configure an AI model, customize your chatbot’s response tone, and add business knowledge sources in Omnifai.',
      readTime: '6 min read'
    },
    {
      title: 'How to Create Your Own Chatbot Flow in Omnifai Using Flow Builder',
      slug: 'create-chatbot-flow-with-flow-builder',
      category: 'Step-by-Step Guide',
      excerpt: 'Build a structured chatbot conversation in Omnifai using messages, buttons, input fields, lists, and connected nodes.',
      readTime: '6 min read'
    },
    {
      title: 'How to Connect Omnifai with AI Tools Using MCP',
      slug: 'connect-omnifai-with-ai-tools-using-mcp',
      category: 'AI Tool Integration Guide',
      excerpt: 'Connect Omnifai to Claude, ChatGPT, and other MCP-compatible AI tools so they can work with your workspace data.',
      readTime: '5 min read'
    }
    
  ];

}
