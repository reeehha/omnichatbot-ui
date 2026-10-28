export const aiChatbotIntegrationArticle = {
  title: 'How to Integrate AI into Your Chatbot',
  slug: 'integrate-ai-into-chatbot',
  category: 'AI Chatbot Setup Guide',
  readTime: '6 min read',
  excerpt:
    'Configure an AI model, customize your chatbot’s response tone, and add business knowledge sources in Omnifai.',
  introHeading: 'Configure AI for Your Chatbot',
  intro: [
    'Integrating AI into your chatbot helps provide more helpful, natural, and consistent responses to customers. With Omnifai, you can configure an AI model, connect it using a secret key, and customize how your chatbot responds to customer messages.',
    'Follow these steps to enable AI, configure the model, and customize your chatbot’s response style and knowledge sources.'
  ],
  sections: [
    {
      stepNumber: 'STEP 1',
      heading: 'Open the AI Agent Section',
      paragraphs: [
        'Log in to your Omnifai workspace and navigate to AI Agent from the dashboard sidebar. The AI Agent page lets you configure your AI integration and manage settings that influence your chatbot’s responses.'
      ],
      content: [],
      image: 'assets/ai-integration/ai-dashboard.png', 
      imageAlt: 'AI Agent page in the Omnifai dashboard',
      caption: 'Open AI Agent from the dashboard sidebar',
      reverse: false
    },
    {
      stepNumber: 'STEP 2',
      heading: 'Enable AI Mode and Configure the Model',
      paragraphs: [
        'In the AI Mode section, turn on the toggle to enable AI configuration. Select your preferred AI model from the Model dropdown. Available options depend on your Omnifai configuration.',
        'Enter the secret API key associated with your selected AI provider. Keep your key confidential. It is sent to the AI configuration API when you validate and save your settings.',
        'Click Validate & Save to validate your configuration and save it. Once it is saved successfully, click Next to continue.'
      ],
      content: [],
      image: 'assets/ai-integration/ai-integrationdashboard.png',
      imageAlt: 'AI Mode configuration with model selection, secret key, Validate & Save, and Next controls',
      caption: 'Configure and save the AI model settings',
      reverse: true
    },
    {
      stepNumber: 'STEP 3',
      heading: 'Configure Reply Settings, Response Tone, and Knowledge Sources',
      paragraphs: [
        'In the Reply & Tone section, configure how your chatbot should respond to customers.',
        'Then provide relevant business information so your chatbot can generate responses based on your content.'
      ],
      content: [
        {
          heading: 'Reply and tone options',
          bullets: [
            'Unsupported File Reply: Customize the message displayed when a customer sends a file format that AI mode does not support.',
            'Response Tone: Choose the preferred tone for your chatbot, such as friendly, upbeat, and conversational, depending on the available options.'
          ],
          paragraphs: ['Click Save Reply & Tone to save your changes.']
        },
        {
          heading: 'Knowledge sources',
          bullets: [
            'Upload Document: Upload supported documents containing business information, such as PDF, DOC, DOCX, TXT, or RTF files.',
            'Enter Company Info: Add your company information directly.',
            'Add Website: Provide a website as a source of business information.'
          ],
          paragraphs: [
            'Select an option, add your content, and click Save Content. Use one knowledge source at a time. You can switch between options without losing your current draft.'
          ]
        }
      ],
      image: 'assets/ai-integration/aiagent-setup.png',
      imageAlt: '',
      caption: '',
      reverse: false
    },
    {
      stepNumber: 'STEP 4',
      heading: 'Review and Save Your Configuration',
      paragraphs: [
        'Review your AI settings, response tone, and knowledge sources. Confirm that the AI configuration has been saved successfully and that your business information is up to date.',
        'Test your chatbot with a few common customer questions to check whether its responses are relevant and consistent with your business information.'
      ],
      content: [],
      image: '',
      imageAlt: '',
      caption: '',
      reverse: false
    }
  ],
  tips: [
    'Keep your AI provider secret key confidential.',
    'Check your knowledge sources are accurate and up to date.',
    'Test common customer questions after saving your settings.'
  ],
  conclusionTitle: 'Create a Chatbot That Reflects Your Business',
  conclusion: [
    'With Omnifai, you can configure an AI model, customize your chatbot’s response tone, and provide business information through knowledge sources. These settings help create a chatbot experience that reflects your business and supports customer communication.'
  ]
};
