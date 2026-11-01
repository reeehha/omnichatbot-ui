export const flowBuilderArticle = {
  title: 'How to Create Your Own Chatbot Flow in Omnifai Using Flow Builder',
  slug: 'create-chatbot-flow-with-flow-builder',
  category: 'Step-by-Step Guide',
  readTime: '6 min read',
  excerpt:
    'Build a structured chatbot conversation in Omnifai using messages, buttons, input fields, lists, and connected nodes.',
  introHeading: 'Build a Guided Chatbot Conversation',
  intro: [
    'With Omnifai Flow Builder, you can design a chatbot flow by adding messages, buttons, input fields, and lists, then connecting them to create a structured conversation.',
    'Define what the chatbot says, which options customers can choose, what information they provide, and where each response leads. This guide uses a simple example of helping customers choose between buying a product and booking a service.'
  ],
  sections: [
    {
      stepNumber: 'STEP 1',
      heading: 'Open Flow Builder',
      paragraphs: [
        'Log in to your Omnifai dashboard and navigate to Flow Builder from the sidebar. The workspace uses a visual canvas where you can add node types, configure their content, and connect them to define the conversation.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 2',
      heading: 'Configure Your Flow Settings',
      paragraphs: ['Before adding conversation steps, configure the basic settings in the Flow Settings panel on the left.'],
      content: [
        {
          heading: 'Flow settings',
          bullets: [
            'Chatbot: Enable or disable the chatbot using the toggle.',
            'Name: Enter a meaningful name, such as Customer Support Flow or Product Enquiry Flow.',
            'Category: Select the appropriate category for your flow.',
            'Org ID: Identifies the organization associated with the flow.',
            'Start Node: Select the node where the chatbot conversation should begin.'
          ],
          paragraphs: ['Choose a clear flow name so you can identify it when managing multiple chatbot flows.']
        }
      ], 
      image: 'assets/flowbuilder/flowbuilder.png',
       imageAlt: '',
        caption: '', 
        reverse: false
    },
    {
      stepNumber: 'STEP 3',
      heading: 'Add a Welcome Message',
      paragraphs: [
        'Click + MESSAGE above the canvas to create a message node. Select it, then use the Node Inspector on the right to configure its message text.',
        'For example: “👋 Welcome to Hoopstore Basketball! We’re happy to have you here. How can we help you today?” This introduces your business and invites customers to continue the conversation. You can edit the message whenever you need to update your greeting.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 4',
      heading: 'Add Buttons to Give Customers Options',
      paragraphs: [
        'Click + BUTTONS to create a buttons node. Enter the instructions customers should see and add the required options.'
      ],
      content: [
        {
          heading: 'Example options',
          bullets: ['Buy a product', 'Book a service'],
          paragraphs: ['Direct each choice to its corresponding next step. Buttons make the conversation easier to follow by letting customers choose from predefined options.']
        }
      ], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 5',
      heading: 'Add Input Nodes to Collect Information',
      paragraphs: [
        'When customers need to provide information before the chatbot can continue, click + INPUT to add an input node. Select it and configure the input instructions and other available settings in the Node Inspector.',
        'For example, after a customer selects Buy a product, the chatbot could ask: “Please choose a product category.” Configure input options to suit your use case.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 6',
      heading: 'Add More Messages or Lists as Needed',
      paragraphs: ['Extend the conversation by adding only the nodes needed for your intended customer journey. Flow Builder provides several node types:'],
      content: [
        {
          heading: 'Available node types',
          bullets: [
            'Message: Display a message or information to the customer.',
            'Buttons: Present predefined choices.',
            'Media: Add media content where supported.',
            'Flow: Add or work with another flow where supported.',
            'Input: Collect information from the customer.',
            'List: Present options in a list format.'
          ],
          paragraphs: ['For example, after a customer chooses a product category, you could display a list of products. After the customer selects one, show its details and guide them to the next step.']
        }
      ], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 7',
      heading: 'Connect the Nodes to Create Your Conversation',
      paragraphs: [
        'Adding nodes is only part of creating a chatbot. Connect them so the conversation follows the correct path. Select the relevant nodes and use the connection controls in the toolbar, such as To node and Connect.',
        'A simple structure could be: Welcome Message → Buttons → Selected Option → Next Step. Connect the Buy a product path to product selection or an input node, and the Book a service path to the booking-related steps.',
        'Check that each option leads to the appropriate next node so customers do not reach an incomplete or incorrect path.'
      ],
      content: [], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 8',
      heading: 'Review and Organize Your Flow',
      paragraphs: ['Organize the canvas as your chatbot grows so its nodes and connections remain easy to understand and maintain.'],
      content: [
        {
          heading: 'Canvas controls',
          bullets: [
            'Undo and Redo: Reverse or restore recent changes.',
            'Auto Layout: Arrange nodes into a cleaner layout.',
            'Canvas Zoom: Zoom in or out to view different parts of the flow.',
            'Save Nodes: Save your node changes.',
            'Save Flows: Save your flow configuration.',
            'Reset Node: Reset the selected node; use this option carefully.'
          ],
          paragraphs: ['Review the canvas after connecting nodes to make sure the paths are clear and all required steps are connected.']
        }
      ], image: '', imageAlt: '', caption: '', reverse: false
    },
    {
      stepNumber: 'STEP 9',
      heading: 'Save and Verify Your Chatbot Flow',
      paragraphs: ['Save your changes using the appropriate save controls. Before making the chatbot available to customers, verify that the flow behaves as intended.'],
      content: [
        {
          heading: 'Verification checklist',
          bullets: [
            'The welcome message displays the correct text.',
            'Each button has the intended options.',
            'Input nodes are configured correctly.',
            'Each conversation path leads to the appropriate next node.',
            'The flow has no missing or unintended connections.',
            'Your latest changes have been saved.'
          ],
          paragraphs: ['If your setup provides a separate testing or activation process, complete that process before using the flow with customers.']
        }
      ], image: '', imageAlt: '', caption: '', reverse: false
    }
  ],
  tips: [],
  conclusionTitle: 'Build a Customer Journey That Fits Your Business',
  conclusion: [
    'Omnifai Flow Builder lets you structure chatbot conversations using messages, buttons, media, input fields, lists, and connected nodes. Whether you want to help customers explore products, book services, or find information, you can build a guided flow around your business requirements.'
  ]
};
