export const customTemplatesArticle = {
  title: 'Creating Custom Templates for Your Business in Omnifai',
  slug: 'creating-custom-whatsapp-templates',
  category: 'WhatsApp Template Guide',
  readTime: '8 min read',
  excerpt:
    'A step-by-step guide to creating General and Carousel Media WhatsApp message templates for your business.',
  introHeading: 'Create WhatsApp Templates for Your Business',
  intro: [
    'Every business communicates with customers differently. Whether you want to share promotional offers, introduce new products, display a menu, or send important updates, WhatsApp message templates help you communicate consistently.',
    'Omnifai allows you to create custom WhatsApp templates to suit your business needs. Create a General Template for standard messages with text, media, variables, and interactive elements, or a Carousel Media Template to showcase multiple products or services in swipeable cards. This guide walks you through creating both types.'
  ],
  sections: [
    {
      stepNumber: 'STEP 1',
      heading: 'Open the Template Section',
      paragraphs: [
        'Navigate to Template in your Omnifai dashboard to view your existing templates and their statuses. Click + Create Template to begin creating a new template.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 2',
      heading: 'Choose a Template Type',
      paragraphs: ['Choose the format that fits your communication needs.'],
      content: [
        {
          heading: 'General Template',
          paragraphs: ['Create a standard WhatsApp message with text, media, variables, or interactive elements, depending on the available options.']
        },
        {
          heading: 'Carousel Media Template',
          paragraphs: ['Showcase multiple products, services, or offers in swipeable cards. This format can suit restaurant menus, product collections, and promotional campaigns.']
        }
      ], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 3',
      heading: 'Create a General Template',
      paragraphs: ['Select General Template to open the template builder, then complete the sections below.'],
      content: [
        {
          heading: '3.1 Enter the Template Details',
          bullets: [
            'Template Name: Enter a descriptive name, such as welcome_message or order_update.',
            'Category: Select the category that matches the purpose of your message, such as Utility or Marketing.',
            'Language: Choose the language in which your message is written.',
            'Org ID: Confirm the organization associated with the template, if displayed.'
          ]
        },
        {
          heading: '3.2 Configure the Header',
          paragraphs: ['Select a Header Type from the available options. Depending on your selection, you may be able to add text or media. If you select a text header, enter the required content in the Header Text field.']
        },
        {
          heading: '3.3 Write the Message Body',
          paragraphs: [
            'Enter a clear, concise message in the Body field. For example: “Hi {{1}}, welcome to Omnifai.”',
            'Use + Add Variable to insert placeholders for dynamic information, or + WA Name where appropriate. These placeholders can be populated with customer-specific data when the message is sent.'
          ]
        },
        {
          heading: '3.4 Add Footer Text and Buttons',
          bullets: [
            'Footer Text: Add optional supporting text, such as an opt-out instruction.',
            'Buttons: Use + Add Button to configure available interactive options, such as quick replies or other supported button types.'
          ],
          paragraphs: ['For example, add a Get Started quick-reply button to a welcome message.']
        },
        {
          heading: '3.5 Add Sample Values and Review',
          paragraphs: [
            'If your template contains variables, provide sample values where required. These demonstrate how the message will appear when placeholders are populated.',
            'Review the message layout, text, variables, and buttons in Live Preview. You can also inspect the payload preview to review the generated template structure. When ready, click Submit Template to submit it for the applicable approval process.'
          ]
        }
      ], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 4',
      heading: 'Create a Carousel Media Template',
      paragraphs: ['Select Carousel Media Template from the template type selection screen to showcase multiple products or services.'],
      content: [
        {
          heading: '4.1 Enter the Template Details',
          bullets: [
            'Template Name: Enter a descriptive name, such as restaurant_menu or weekend_specials.',
            'Category: Select the category that matches the message purpose.',
            'Language: Choose the language of your message.',
            'Card Source: Select how media will be provided for each card, such as uploading an image or video per card, depending on the available options.'
          ]
        },
        {
          heading: '4.2 Write the Introductory Message',
          paragraphs: [
            'Enter a short message in the Body field to introduce the carousel and explain what customers can explore. For example: “Explore our menu! Swipe through our favourites and discover something you love.”',
            'Use variables if personalization is required.'
          ]
        },
        {
          heading: '4.3 Configure the Card Header',
          paragraphs: [
            'Select a Card Header Format, such as Image, based on the available options. Ensure all cards use the same supported header format.',
            'Choose the format before uploading media, as changing it later may clear uploaded files.'
          ]
        },
        {
          heading: '4.4 Add Cards and Buttons',
          paragraphs: [
            'Click + Add Card to add products, services, or offers to the carousel.',
            'For example, a restaurant could create separate cards for popular dishes, each with an image, a short description, and an appropriate button.'
          ],
          bullets: [
            'Upload the relevant image or video.',
            'Enter the card text or description.',
            'Configure the button label and action using the available options.'
          ]
        },
        {
          heading: '4.5 Preview and Submit',
          paragraphs: [
            'Review the carousel in Live Preview. Check that the introductory message, media, card descriptions, and buttons appear correctly.',
            'When you are satisfied with the layout, click Submit Template to send it for the applicable approval process.'
          ]
        }
      ], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 5',
      heading: 'Check the Template Status',
      paragraphs: [
        'After submitting either template type, return to the Template section to check its status.',
        'Templates that require approval may not be available for use immediately. Once the required approval is complete, use them according to their status and the applicable WhatsApp messaging rules.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    }
  ],
  tips: [
    'Use clear, descriptive template names.',
    'Keep message content short and customer-friendly.',
    'Choose the correct category for your message purpose.',
    'Use relevant, high-quality images for carousel cards.',
    'Make button labels clear and action-oriented.',
    'Provide sample values for variables where required.',
    'Review the Live Preview before submitting.'
  ],
  conclusionTitle: 'Create Templates That Fit Your Business',
  conclusion: [
    'Omnifai makes it easy to create WhatsApp templates tailored to your business needs. Whether you need a standard message for customer updates or a carousel to showcase products and services, you can customize the content, configure interactive elements, and submit your templates for approval from one workspace.'
  ]
};
