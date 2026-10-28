export const crmWebhookArticle = {
  title: 'Automating CRM Workflows with Webhooks',
  slug: 'automating-crm-workflows-with-webhooks',
  category: 'CRM Webhook Guide',
  readTime: '5 min read',
  introHeading: 'Automate WhatsApp Communications with Webhooks',
  intro: [
    'Omnifai lets you connect your CRM or online store using webhooks to capture business data and automate WhatsApp communications.',
    'Follow these steps to create and configure a webhook workflow.'
  ],
  sections: [
    {
      stepNumber: 'STEP 1',
      heading: 'Create a New Workflow',
      paragraphs: [
        'Navigate to CRM Webhook Workflows in your Omnifai workspace and choose the option to create a new workflow.',
        'Enter a workflow name that fits your business needs, such as Order Updates or New Lead Notifications. Select the appropriate WhatsApp template from the dropdown menu.'
      ],
      content: [],
      image: 'assets/webhook-workflow/createworkflow.png',
      imageAlt: '',
      caption: '',
      reverse: false
    },
    {
      stepNumber: 'STEP 2',
      heading: 'Generate the Webhook URL',
      paragraphs: [
        'Click Generate to create the webhook for your workflow. Omnifai provides a unique callback URL that you can copy and use to connect your external CRM or online store.'
      ],
      content: [],
      image: 'assets/webhook-workflow/generatewebhook.png',
      imageAlt: '',
      caption: '',
      reverse: false
    },
    {
      stepNumber: 'STEP 3',
      heading: 'Enable Payload Capture',
      paragraphs: [
        'After generating the webhook, open the workflow configuration and enable Capture Enabled.',
        'Configure your external system to send relevant event data to the generated webhook URL. For example, send order details when a new order is created in your store.'
      ],
      content: [],
      image: 'assets/webhook-workflow/payload.png',
      imageAlt: '',
      caption: '',
      reverse: false
    },
    {
      stepNumber: 'STEP 4',
      heading: 'Map the Payload Fields',
      paragraphs: ['After sample payload data is available, configure the required fields:'],
      content: [
        {
          heading: 'Payload mapping',
          bullets: [
            'Recipient Phone Number: Select the field containing the customer’s WhatsApp phone number.',
            'Variable Mappings: Map incoming payload fields to the corresponding variables in your selected WhatsApp template.',
            'Live Preview: Review the message using the selected template and mapped values.'
          ],
          paragraphs: [
            'If sample payload fields are not available, trigger a test event from your connected system to provide sample data.'
          ]
        }
      ],
      image: '',
      imageAlt: '',
      caption: '',
      reverse: false
    },
    {
      stepNumber: 'STEP 5',
      heading: 'Save and Test the Workflow',
      paragraphs: [
        'Click Save Mappings to save your configuration. Send a test event from your CRM or store and verify that the payload is received and the fields are mapped correctly.',
        'Before using the workflow for automated customer communications, ensure it is enabled and the WhatsApp template and recipient details are configured correctly.'
      ],
      content: [],
      image: '',
      imageAlt: '',
      caption: '',
      reverse: false
    }
  ],
  tips: [],
  conclusionTitle: 'Automate Customer Communications with Omnifai',
  conclusion: [
    'With Omnifai CRM Webhook Workflows, you can connect business systems, capture relevant event data, and map it to WhatsApp templates.',
    'This helps simplify customer communication and reduce manual work.'
  ]
};
