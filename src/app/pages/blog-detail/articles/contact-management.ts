export const contactManagementArticle = {
  slug: 'contact-management-campaign-creation',
  title: 'Contact Management and Campaign Creation in Omnifai',
  category: 'Contact Management Guide',
  readTime: '5 min read',

  introHeading: 'Simplify Your Customer Management',
  intro: [
    'Managing customer contacts and communicating with them effectively is essential for every business.',
    'Omnifai makes it easier to add individual contacts, import contacts in bulk using a CSV file, organize contacts with tags, and create campaigns based on your business requirements.',
    'In this guide, we will walk through how to manage contacts and view campaign details using the Omnifai dashboard.'
  ],

  sections: [
    {
      stepNumber: 'STEP 1',
      heading: 'Add a New Contact ',
      paragraphs: ['Open the contact management section in your Omnifai dashboard'],
      content: [
        {
          heading: 'Choose how to add contacts',
          paragraphs: [
            'New contact: Add one customer at a time.',
            'Import CSV: Upload multiple contacts using a CSV file.'
          ]
        }
      ],
      image: 'assets/contact-management/Addcontact.png',
      imageAlt: 'Contact management options in Omnifai',
      caption: 'select the add icon to add a new contact',
      reverse: false
    },
    {
      stepNumber: 'STEP 2',
      heading: 'Enter the Contact Details to add a New Contact',
      paragraphs: [' If you are adding a single contact, complete the required fields in the form and save the contact:'],
      content: [
        {
          heading: 'Contact details',
          bullets: [
            "Name: Enter the customer's name.",
            'Phone number: Enter the country code and number using digits only.',
            "Email: Enter the customer's email address, if available.",
            'Tag: Select a suitable tag to categorize the contact.'
          ],
          paragraphs: [
            'To create or edit tags, see our guide: How to Manage WhatsApp Contacts and Conversations in Omnifai.'
          ]
        },
        {
          heading: 'Customer consent',
          paragraphs: [
            'The consent checkbox confirms that you have the customer’s permission to message them.',
            'Select Add Contact to save the details.'
          ]
        }
      ],
      image: 'assets/contact-management/addcontactform.png',
      imageAlt: 'Add contact form in Omnifai',
      caption: 'Enter customer details and confirm consent',
      reverse: true
    },
    {
      stepNumber: 'STEP 3',
      heading: 'Import Contacts Using a CSV File',
      paragraphs: [
        'If you are adding multiple contacts using a CSV file, prepare a file with the required columns: name and phoneNumber.',
        'Check that contact names and phone numbers are correctly formatted.',
        'Upload the file and follow the instructions displayed on the dashboard.',
       
      ],
      content: [],
      image: 'assets/contact-management/importcsv.png',
      imageAlt: 'Import contacts using CSV',
      caption: 'Prepare and import your contact list',
      reverse: false
    },
    {
      stepNumber: 'STEP 4',
      heading: 'View Your Contact List',
      paragraphs: [
        'Select Contact List to see the contacts saved in your Omnifai account.',
        'Review existing contact records before adding new contacts or organizing them for campaigns.'
      ],
      content: [],
      image: 'assets/contact-management/contactlist.png',
      imageAlt: 'Contact list in Omnifai',
      caption: 'Review saved customer contacts',
      reverse: true
    },
   {
  stepNumber: 'STEP 5',
  heading: 'Select Contacts and Send a Template Message',
  paragraphs: [
    'Omnifai allows you to send template messages to multiple customers at once. You can select individual contacts, search by name, phone number, email address, or tag, or use the tag filter to find the intended recipients.',
    'Select the required contacts using the checkboxes beside their names, then click Send Template Message. Choose an appropriate approved message template from the available list.',
    'When sending the message, you can choose to send it as a campaign by providing a campaign name. This allows you to track message delivery and read status later from the Campaigns dashboard. You can also send the template message without creating a campaign, but campaign-level tracking will not be available for those messages.',
    'Review your selections and send the template message.'
  ],
  content: [],
  image: 'assets/contact-management/contactlist.png',
  imageAlt: 'Contact list with contact selection and Send Template Message option',
  caption: 'Select recipients and send a template message',
  reverse: false
},
{
  stepNumber: 'STEP 6',
  heading: 'Track and Review Campaigns',
  paragraphs: [
    'If you sent your template message as a campaign, open the Campaigns dashboard to review the campaign and monitor message delivery.',
    'View campaign details, including the campaign name, selected template, creation date, total recipients, and number of messages sent. The dashboard also displays delivered, undelivered, failed, and read message counts.',
    'Click View Data under the relevant status to inspect the associated message records. Messages sent without creating a campaign will not appear in campaign-level tracking.'
  ],
  content: [],
  image: 'assets/contact-management/campaigns.png',
  imageAlt: 'Campaign dashboard showing message delivery statuses',
  caption: 'Monitor campaign delivery and message statuses',
  reverse: true
}
  ],

 tips: [
  'Make sure you have the required consent before proceeding.',
  'After the CSV file import, open Contact List to verify that the contacts have been added.',
  'Use the search field or tag filter to find the right contacts before selecting recipients.',
  'Choose an approved message template that matches your campaign requirements before sending.',
  'After sending a campaign, check the Campaigns dashboard to monitor delivered, undelivered, failed, and read messages.'
],

  conclusionTitle: 'Manage Contacts and Campaigns with Omnifai',
  conclusion: [
    'Managing contacts in Omnifai helps you keep customer information organized and ready for communication.',
    'Follow these steps to add or import contacts, organize them with tags, and create campaigns.'
  ]
};
