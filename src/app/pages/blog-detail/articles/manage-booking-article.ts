
export const manageBookingArticle = {
  slug: 'manage-customer-bookings',
  title: 'A Step-by-Step Guide to Managing Customer Bookings in Omnifai',
  category: 'Step-by-Step Guide',
  readTime: '6 min read',

  introHeading: 'Manage Your Bookings in One Place ',
  intro: [
    'Managing customer appointments is easier when all booking details are organized in one place. Omnifai helps businesses create bookings, select services, manage appointment time slots, record customer information, and connect Google Calendar.',
    'Follow these steps to learn how to manage customer bookings using Omnifai.'
  ],

  sections: [
    {
      stepNumber: 'STEP 1',
      heading: 'Open the Orders / Booking Page',
      paragraphs: [
        'Log in to your Omnifai dashboard and click Orders / Booking in the left sidebar.',
        'This page allows you to view and manage customer bookings in one place.',
        'You can view the total number of bookings, active services, online bookings, and offline bookings. The booking table displays the booking date, time, service, customer name, phone number, booking mode, and status.',
        'To create a new booking, click the Add Booking button.'
      ],
      image: 'assets/manage-booking/dashboard.png',
      imageAlt: 'Orders and Booking page in Omnifai',
      caption: 'View booking summaries and create new bookings',
      reverse: false
    },
    {
      stepNumber: 'STEP 2',
      heading: 'Open the Add Booking Form',
      paragraphs: [
        'After clicking Add Booking, the booking form opens.',
        'Use this form to enter the service, appointment date, available time slot, customer details, and other booking information.'
      ],
      image: 'assets/manage-booking/Addbooking.png',
      imageAlt: 'Add Booking form in Omnifai',
      caption: 'Open the form to enter booking details',
      reverse: true
    },
   {
  stepNumber: 'STEP 03',
  layout: 'image',
  heading: 'Complete and Save the Booking',
  paragraphs: [],
  content: [
    {
      heading: '1. Select a Service',
      paragraphs: [
        'Choose the required service from the Service dropdown. Select the service that matches the customer’s requirements.'
      ]
    },
    {
      heading: '2. Choose the Booking Date and Time',
      paragraphs: [
        'Select the appointment date in the Booking Date field, then choose an available time slot. Make sure the selected date and time are correct.'
      ]
    },
    {
      heading: '3. Enter Customer Details',
      bullets: [
        'Customer Name: Enter the customer’s name.',
        'Customer Phone: Enter the customer’s phone number.',
        'Email: Enter the customer’s email address, if available.'
      ]
    },
    {
      heading: '4. Set the Duration and Price',
      paragraphs: [
        'Enter the appointment duration in minutes. The form displays 30 minutes by default, but you can adjust it as required.',
        'Enter the appointment price in the Price field, if applicable.'
      ]
    },
    {
      heading: '5. Choose the Booking Mode',
      paragraphs: [
        'Select the appropriate option from the Mode dropdown, such as Online.',
        'For an online appointment, enter a valid meeting URL in the optional Meeting Link field.'
      ]
    },
    {
      heading: '6. Connect Google Calendar',
      paragraphs: [
        'Click Connect Google Calendar at the top-right corner of the page.',
        'Follow the on-screen instructions to authorize the connection. After connecting, verify that bookings appear correctly in your calendar.'
      ]
    },
    {
      heading: '7. Review and Save the Booking',
      paragraphs: [
        'Review the service, date, time, customer information, duration, price, and meeting link before saving.',
        'Click Save Booking to submit the appointment. If you do not want to continue, click Cancel.'
      ]
    }
  ],
  image: 'assets/manage-booking/BookingForm.png',
  imageAlt: 'Booking form showing service, date, time, and customer details',
  caption: 'Complete the booking form with accurate information',
  reverse: false
}
  ],

  tips: [
    'Verify the booking date and time before saving.',
    'Keep customer contact details accurate.',
    'Use a valid meeting link for online appointments.',
    'Review booking statuses regularly.',
    'Check that Google Calendar is connected and working as expected.'
  ],

 conclusionTitle: 'Booking Management Easier with Omnifai',
conclusion: [
  
'Omnifai makes it easier to organize customer appointments from one dashboard. You can review existing bookings, create new appointments, enter customer details, and connect Google Calendar.',
'By following these steps, businesses can keep booking information organized and manage appointments more efficiently.'


]
  
};
