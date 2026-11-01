export const shopifyIntegrationArticle = {
  title: 'How to Integrate Your Shopify Store with Omnifai',
  slug: 'integrate-shopify-with-omnifai',
  category: 'Shopify Integration Guide',
  readTime: '8 min read',
  excerpt:
    'Connect Shopify events to Omnifai and send timely WhatsApp updates using message templates and Zapier.',
  introHeading: 'Connect Shopify Events to WhatsApp',
  intro: [
    'Integrating your Shopify store with Omnifai helps automate customer communication through WhatsApp. By connecting Shopify events with WhatsApp message templates, you can send timely updates when specific events occur, such as an order being created.',
    'Follow these steps to configure your Shopify integration in Omnifai.'
  ],
  sections: [
    {
      stepNumber: 'STEP 1',
      heading: 'Open the Shopify Integration Setup',
      paragraphs: [
        'Navigate to the Shopify Integration Setup page in your Omnifai dashboard. Here, you can configure your organization token, map Shopify events to WhatsApp message templates, and generate the information needed to connect your store through Zapier.'
      ],
      content: [],
       image: 'assets/shopify/shopify.png',
        imageAlt: '',
        caption: '', 
        reverse: false
    },
    {
      stepNumber: 'STEP 2',
      heading: 'Generate an Organization Token',
      paragraphs: [
        'Under the Org Token section, click Generate Token. Omnifai generates a token for your organization. If you already have one, you can paste it into the field instead.',
        'The token authorizes the integration and is reused across the configured event mappings.'
      ],
      content: [
        {
          heading: 'Keep your token secure',
          paragraphs: ['Avoid sharing your organization token publicly or including it in screenshots shared outside your team.']
        }
      ], image: 'assets/shopify/orgtoken.png',
       imageAlt: '',
        caption: '', 
        reverse: false
    },
    {
      stepNumber: 'STEP 3',
      heading: 'Add an Event Mapping',
      paragraphs: [
        'In the Event Mappings section, click the + button to add a mapping. An event mapping connects a Shopify event to a WhatsApp message template.',
        'Select the relevant Shopify event from the Event dropdown. For example, an Order Created event can trigger a WhatsApp message when a customer places an order.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 4',
      heading: 'Select a WhatsApp Message Template',
      paragraphs: [
        'Under the Template dropdown, select the WhatsApp message template to use for the chosen event. Choose one that matches the event and the information you want to send.',
        'If you need a new template, create one in the Template Dashboard. After it has been approved and is available for selection, return to the Shopify integration page.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 5',
      heading: 'Map Template Variables to Shopify Data',
      paragraphs: [
        'After selecting the event and template, configure the template variables using the available Shopify payload fields. Map customer details or order information to the corresponding template variables.',
        'Check that each required variable is mapped correctly so the message contains the expected customer and order details.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 6',
      heading: 'Copy the Template URL',
      paragraphs: [
        'In the Template URL section, click Copy URL. You will use this URL to create a new Zap in Zapier and connect the Shopify event to Omnifai. Keep it available for the next step.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 7',
      heading: 'Configure the Zap in Zapier',
      paragraphs: ['Open your Zapier account and create a new Zap using the copied template URL.'],
      content: [
        {
          heading: 'Set up the Shopify trigger',
          bullets: [
            'Set Shopify as the trigger application.',
            'Select the appropriate Shopify event, such as Order Created.',
            'Connect your Shopify store and configure the trigger.',
            'Ensure the trigger provides all required customer details, including the phone number and any other fields needed by your message template.',
            'Configure the remaining steps according to the generated Zap template.'
          ],
          paragraphs: ['Use the same event and field mappings configured in Omnifai so the integration works as expected.']
        }
      ], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 8',
      heading: 'Add Your WhatsApp Number and Token',
      paragraphs: [
        'In the Zap configuration, replace the chatbot number with your Omnifai WhatsApp number. Enter the country code followed by the phone number, without spaces or special characters. For example: 919876543210.',
        'Replace the token in the Zap with the organization token generated from your Omnifai dashboard. Verify both values carefully before proceeding.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 9',
      heading: 'Save and Publish the Integration',
      paragraphs: [
        'Return to Omnifai and review your event mapping. Click Submit Mappings to submit the configured mappings, or click Save Draft to save your work and continue later.',
        'Then return to Zapier and publish your Zap when configuration is complete. Confirm that the mapping is enabled and the selected template is correct.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 10',
      heading: 'Test Your Integration',
      paragraphs: ['After publishing the Zap, test it with a suitable Shopify event. Check that:'],
      content: [
        {
          heading: 'Integration checks',
          bullets: [
            'The Shopify trigger detects the event successfully.',
            'The required customer and order details are available.',
            'The correct WhatsApp template is selected.',
            'The mapped variables contain the expected values.',
            'The WhatsApp message is delivered successfully to the intended recipient.'
          ],
          paragraphs: ['If a message is not sent, review the event configuration, template approval status, variable mappings, organization token, chatbot number, and Zapier task history.']
        }
      ], image: '', imageAlt: '', caption: '', reverse: false
    }
  ],
  tips: [
    'Keep your organization token secure.',
    'Check that every required template variable maps to the correct Shopify payload field.',
    'Test the integration before relying on it for customer updates.'
  ],
  conclusionTitle: 'Keep Customers Informed with Shopify and Omnifai',
  conclusion: [
    'Connecting Shopify with Omnifai links store events to WhatsApp message templates. Once the integration is configured and tested, you can create additional event mappings to manage more Shopify events and keep customers informed throughout their shopping journey.'
  ]
};
