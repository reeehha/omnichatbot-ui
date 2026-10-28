export const teamManagementArticle = {
  title: 'How to Add a Team Member in Omnifai',
  slug: 'add-team-member',
  category: 'Team Management Guide',
  readTime: '4 min read',
  excerpt:
    'Add team members to your Omnifai organization so they can help manage customer conversations and support daily operations.',
  introHeading: 'Add Team Members to Your Organization',
  intro: [
    'Omnifai allows you to add team members to your organization so they can help manage customer conversations and support daily operations.'
  ],
  sections: [
    {
      stepNumber: 'STEP 1',
      heading: 'Open Team Management',
      paragraphs: [
        'Navigate to Team Management in your Omnifai dashboard. Select Teams from the configuration menu to view your current team members and manage invitations.'
      ],
      content: [],
      image: 'assets/team-management/teamdashboard.png',
      imageAlt: 'Team Management section in the Omnifai dashboard',
      caption: 'Open Teams from the Team Management configuration menu',
      reverse: false
    },
    {
      stepNumber: 'STEP 2',
      heading: 'Add a Team Member',
      paragraphs: [
        'Click the + button in the top-right corner of the Teams page to open the Add Team Member form. Complete the form with the following information:'
      ],
      content: [
        {
          heading: 'Team member information',
          bullets: [
            'Name: Enter the team member’s name.',
            'Email: Enter their email address.',
            'Username: Enter a username for the team member.',
            'Admin: Select Set as Admin if the team member requires administrator access.'
          ]
        },
        {
          heading: 'Review and add',
          paragraphs: [
            'Check that the details are correct, then click Add Member to add the team member to your organization.'
          ]
        }
      ],
      image: 'assets/team-management/addteammember.png',
      imageAlt: 'Add Team Member form with member details and Add Member action',
      caption: 'Enter the team member details and add them to your organization',
      reverse: true
    },
    {
      stepNumber: 'STEP 3',
      heading: 'Manage Your Team Members',
      paragraphs: [
        'Once added, team members appear in the list on the Teams page. You can review their usernames, roles, and statuses. Depending on the available options, you can also edit their roles or remove members when necessary.',
        'For human-enabled chats, you can assign or reassign a conversation to the team member responsible for handling it. See the related guide below to learn more.'
      ],
      content: [],
      image: '',
      imageAlt: '',
      caption: '',
      reverse: false
    }
  ],
  tips: [],
  relatedArticle: {
    slug: 'switch-to-human-enabled-mode',
    linkText: 'Learn how to switch to human-enabled mode and assign or reassign conversations.'
  },
  conclusionTitle: 'Keep Your Team Ready to Help',
  conclusion: [
    'Keeping your team member list up to date helps your team collaborate effectively and manage customer conversations efficiently.'
  ]
};
