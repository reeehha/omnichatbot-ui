export const serviceManagementArticle = {
  title: 'Manage Business Services and Appointments in One Place at a Time',
  slug: 'manage-business-services-and-appointments',
  category: 'Step-by-Step Guide',
  readTime: '6 min read',
  excerpt:
    'Learn how to configure business hours, create services, set breaks, and manage appointment availability using the Omnifai Services Dashboard.',
  introHeading: 'Manage Business Services and Appointments in One Place',
  intro: [
    'Managing business hours, services, and appointments does not have to be complicated. With the Omnifai Services Dashboard, you can configure your organization’s working hours, create services, set availability, and manage appointment slots from one convenient place.',
    'Follow these simple steps to get started.'
  ],
  sections: [
    {
      stepNumber: 'STEP 1',
      heading: 'Set Your Organization’s Working Hours',
      paragraphs: [
        'Start by configuring the days and times your business is available.',
        'Open the Services Dashboard and review your organization information under Organization Details.',
        'Select each working day, such as Monday through Saturday, and enter the appropriate start and end times. Leave days unchecked when your business is closed.'
      ],
      content: [],
      image: 'assets/manage-services/businesshours.png',
      imageAlt: 'Organization working hours settings',
      caption: 'Set the days and hours your business is available',
      reverse: false
    },
    {
      stepNumber: 'STEP 2',
      heading: 'Add a New Service',
      paragraphs: [
        'In the Services Dashboard, select the plus button to add a service. Each service can have its own duration, price, and availability settings.'
      ],
      content: [
        {
          heading: 'Service details',
          bullets: [
            'Name: Enter a clear service name customers can understand.',
            'Duration: Specify how long the service takes, such as 30 or 60 minutes.',
            'Currency: Choose the currency used for the service.',
            'Price (optional): Enter the service price if applicable.',
            'Mode: Select the service mode, such as Online.',
            'Active: Enable this option when the service is available for booking.',
            'Description: Explain the service and what customers can expect.',
            'Meeting Link (optional): Add the online meeting URL when needed.',
            'Maximum Slots: Specify how many appointments can be accommodated in a time slot.'
          ]
        }
      ],
      image: 'assets/manage-services/addservice.png',
      imageAlt: 'Add service form',
      caption: 'Enter the details and availability for a service',
      reverse: true
    },
    {
      stepNumber: 'STEP 3',
      heading: 'Configure Service Breaks',
      paragraphs: [
        'Use breaks to block time for lunch, personal breaks, or other commitments.',
        'Find the Breaks section in the service configuration, select the plus button, and enter the break details. Review the configured times before saving.',
        'This helps prevent appointments from being scheduled during designated break periods, according to your system’s availability rules.'
      ],
      content: [],
      image: 'assets/manage-services/addbreaktime.png',
      imageAlt: 'Service breaks configuration',
      caption: 'Add break times to the service configuration',
      reverse: false
    },
    {
      stepNumber: 'STEP 4',
      heading: 'Save Your Service',
      paragraphs: [
        'Before saving, review the service name, duration, price, mode, active status, maximum slots, and any configured breaks.'
      ],
      content: [
        {
          heading: 'Available actions',
          bullets: [
            'Save: Save your changes.',
            'Cancel: Discard the current unsaved edits.',
            'Delete: Remove a service only when you intend to delete it.'
          ],
          paragraphs: [
            'Repeat these steps whenever you need to create additional services or update existing ones.'
          ]
        }
      ],
      image: '',
      imageAlt: 'Service form with save and cancel actions',
      caption: 'Review the service details before saving',
      reverse: true
    },
    {
      stepNumber: 'STEP 5',
      heading: 'Manage Appointments',
      paragraphs: [
        'Once your working hours and services are configured, use the appointment management features in your application to handle bookings.',
        'Open the appointments or bookings section, review scheduled appointments and their service and customer details, then use the available actions to manage them.',
        'Check that each booking falls within the applicable working hours and service availability. The exact appointment actions depend on the features enabled in your Omnifai application.'
      ],
      content: [],
      image: '',
      imageAlt: 'Appointment management view',
      caption: 'Review and manage scheduled appointments',
      reverse: false
    },
    {
      stepNumber: 'STEP 6',
      heading: 'Review Your Settings Regularly',
      paragraphs: [
        'Keep your dashboard up to date whenever your business hours, service offerings, pricing, or availability change.',
        'Regular reviews help keep service information accurate and let customers schedule appointments according to your business requirements.'
      ],
      content: [],
      image: '',
      imageAlt: '',
      caption: '',
      reverse: false
    }
  ],
  tips: [
    'Set your working hours carefully because they help define when services can be scheduled.'
  ],
  conclusionTitle: 'Simplify Your Daily Operations with Omnifai',
  conclusion: [
    'By managing working hours, services, breaks, and appointment availability in one place, you can reduce manual effort and keep your business organized.',
    'Configure your services once, keep your availability updated, and make appointment management easier with Omnifai.'
  ]
};
