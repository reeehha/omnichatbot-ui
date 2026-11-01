export const mcpConnectorArticle = {
  title: 'How to Connect Omnifai with AI Tools Using MCP',
  slug: 'connect-omnifai-with-ai-tools-using-mcp',
  category: 'AI Tool Integration Guide',
  readTime: '5 min read',
  excerpt:
    'Connect Omnifai to Claude, ChatGPT, and other MCP-compatible AI tools so they can work with your workspace data.',
  introHeading: 'Connect Omnifai to Your AI Tools',
  intro: [
    'Omnifai lets you connect your workspace with AI tools using the Model Context Protocol (MCP). This integration allows assistants such as Claude and ChatGPT to access your WhatsApp conversations, contacts, bookings, and orders. You can use AI to analyse business activity, understand customer needs, identify areas for improvement, and get actionable insights to make better business decisions.',
    'Follow this guide to generate your connector URL, connect your preferred AI tool, and authorize access to your Omnifai workspace.'
  ],
  sections: [
    {
      stepNumber: 'STEP 1',
      heading: 'Open the AI Tool Connection Page in Omnifai',
      paragraphs: [
        'Log in to your Omnifai workspace and open the AI Agent section from the dashboard. Then open the Connect your AI tool page and locate the Connector URL section.',
        'Click Copy to copy your unique Omnifai MCP connector URL. You will need this URL when configuring your AI tool.'
      ],
      content: [],
      image: 'assets/mcp-connectors/ai-connectors.png',
      imageAlt: 'AI Connectors',
      caption: 'Omnifai MCP Connector',
      reverse: false
    },
    {
      stepNumber: 'STEP 2',
      heading: 'Connect Omnifai with Claude',
      paragraphs: [
        'Open Claude and navigate to Settings. Go to the Connectors section, then select the option to add a custom connector.'
      ],
      content: [
        {
          heading: 'Set up the connection',
          bullets: [
            'Open Claude and go to Settings.',
            'Select Connectors from the settings menu.',
            'Choose the option to add a custom connector.',
            'Enter Omnifai as the connector name.',
            'Paste the copied Omnifai Connector URL into the server URL field.',
            'Click Save to store the connector configuration.',
            'Click Add, then Connect and sign in with your Omnifai account to approve access.',
            'In a new chat, enable the Omnifai connector from the tools menu.'
          ],
          paragraphs: [
            'After saving, click Add, then Connect and sign in with your Omnifai account to approve access.',
            'In a new chat, enable the Omnifai connector from the tools menu and start asking about your conversations, contacts, bookings, and orders.'
          ]
        }
      ],
      image: 'assets/mcp-connectors/claude.png',
      imageAlt: 'AI Connectors',
      caption: 'Omnifai MCP Connector',
      reverse: true
    },
    {
      stepNumber: 'STEP 3',
      heading: 'Connect Omnifai with ChatGPT',
      paragraphs: [
        'Open ChatGPT and go to Settings → Apps & Connectors to begin the setup.'
      ],
      content: [
        {
          heading: 'Configure the ChatGPT connector',
          bullets: [
            'Open ChatGPT and go to Settings.',
            'Open Plugins.',
            'Click the + button.',
            'Select Add custom MCP server.',
            'Enter the Omnifai connector URL.',
            'If prompted, choose OAuth as the authentication method.',
            'Save the configuration and sign in with your Omnifai account.'
          ],
          paragraphs: [
            'Sign in with your Omnifai account when prompted, authorize the connection, and then open a new chat to select the Omnifai connector.'
          ]
        }
      ],
      image: 'assets/mcp-connectors/chatgpt.png',
      imageAlt: '',
      caption: '',
      reverse: false
    },
    {
      stepNumber: 'STEP 4',
      heading: 'Connect Omnifai with Other MCP-Compatible AI Tools',
      paragraphs: [
        'You can also connect Omnifai with tools such as Cursor, VS Code, and Claude Code, as long as they support remote MCP servers.'
      ],
      content: [
        {
          heading: 'Add the remote MCP server',
          bullets: [
            'Open your AI tool’s MCP or Connector settings.',
            'Select the option to add a new remote MCP server.',
            'Choose Streamable HTTP as the transport method.',
            'Paste your copied Omnifai Connector URL into the server URL field.',
            'Save the configuration.',
            'Complete the sign-in flow with your Omnifai account.',
            'Authorize the connection to begin using Omnifai in your AI tool.'
          ],
          paragraphs: [
            'Once authorized, your AI tool can access the workspace data you are allowed to use within your Omnifai organization.'
          ]
        }
      ],
      image: '',
      imageAlt: '',
      caption: '',
      reverse: true
    }
  ],
  tips: [
    'Only signed-in members of your organization can authorize the Omnifai connector.',
    'The connected AI tool can access your organization’s data only.',
    'Always authorize the connection using your Omnifai account.',
    'Review WhatsApp messages before sending to avoid accidental real-message sends.'
  ],
  relatedArticle: {
    slug: 'integrate-ai-into-chatbot',
    linkText: 'Learn how to configure AI mode, response tone, and knowledge sources in Omnifai.'
  },
  conclusionTitle: 'Use Omnifai Through the AI Tools You Already Trust',
  conclusion: [
    'Connecting Omnifai with AI tools via MCP makes it easier to work with your business information through your preferred AI assistant. Whether you use Claude, ChatGPT, or another MCP-compatible tool, you can establish the connection and start working with your Omnifai workspace in minutes.'
  ]
};
