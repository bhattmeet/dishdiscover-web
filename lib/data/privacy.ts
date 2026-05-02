import type { LegalDoc } from '@/types/legal'

export const privacyDoc: LegalDoc = {
  title: 'Privacy Policy',
  lastUpdated: 'November 23, 2025',
  sections: [
    {
      id: 's1',
      title: 'Information We Collect',
      blocks: [
        { type: 'subheading', text: '1.1 Information You Provide Directly' },
        { type: 'paragraph', text: 'Account Registration Information:' },
        { type: 'list', items: ['Full name', 'Email address', 'Password (encrypted)', 'Profile picture (optional)', 'Bio / description (optional)', 'Cooking skill level (optional)'] },
        { type: 'paragraph', text: 'User-Generated Content:' },
        { type: 'list', items: ['Recipes you create or upload', 'Recipe images and photos', 'Comments, reviews, and ratings', 'Meal plans and shopping lists', 'Recipe bookmarks and favorites'] },
        { type: 'paragraph', text: 'Social Interactions:' },
        { type: 'list', items: ['Users you follow and followers', 'Likes and interactions with content', 'Activity feed information'] },
        { type: 'subheading', text: '1.2 Information Collected Automatically' },
        { type: 'paragraph', text: 'Device Information:' },
        { type: 'list', items: ['Device type and model', 'Operating system and version', 'Unique device identifiers', 'Mobile network information'] },
        { type: 'paragraph', text: 'Usage Data:' },
        { type: 'list', items: ['App features accessed and used', 'Recipes viewed, saved, and cooked', 'Search queries and filters applied', 'Time spent in the App', 'Categories and content preferences', 'Achievement and gamification progress'] },
        { type: 'paragraph', text: 'Technical Data:' },
        { type: 'list', items: ['IP address', 'Browser type and version (if applicable)', 'Time zone and locale settings', 'App crashes and error logs', 'Performance metrics'] },
        { type: 'subheading', text: '1.3 Third-Party Data' },
        { type: 'paragraph', text: 'Firebase Cloud Messaging (FCM):' },
        { type: 'list', items: ['FCM tokens for push notifications', 'Notification delivery status', 'Device registration information'] },
      ],
    },
    {
      id: 's2',
      title: 'How We Use Your Information',
      blocks: [
        { type: 'subheading', text: '2.1 Service Provision and Improvement' },
        { type: 'list', items: ['Create and manage your user account', 'Authenticate and verify your identity', 'Provide personalized recipe recommendations', 'Display content relevant to your preferences', 'Enable social features (following, activity feed)', 'Process and display your content (recipes, reviews)', 'Track achievements and gamification progress', 'Improve app functionality and user experience'] },
        { type: 'subheading', text: '2.2 Communication' },
        { type: 'list', items: ['Send push notifications about app activity', 'Notify you of likes, follows, and comments', 'Provide achievement and milestone notifications', 'Send important service updates and announcements', 'Respond to your inquiries and support requests'] },
        { type: 'subheading', text: '2.3 Analytics and Research' },
        { type: 'list', items: ['Analyze app usage patterns and trends', 'Understand user preferences and behavior', 'Identify and fix bugs and technical issues', 'Conduct research to improve our services', 'Generate aggregate, anonymized statistics'] },
        { type: 'subheading', text: '2.4 Security and Legal Compliance' },
        { type: 'list', items: ['Detect and prevent fraud and abuse', 'Enforce our Terms and Conditions', 'Comply with legal obligations', 'Protect the rights and safety of users', 'Respond to law enforcement requests'] },
      ],
    },
    {
      id: 's3',
      title: 'Data Storage & Security',
      blocks: [
        { type: 'subheading', text: '3.1 Where We Store Your Data' },
        { type: 'paragraph', text: 'Local Storage (On Your Device):' },
        { type: 'list', items: ['SharedPreferences: User preferences, authentication tokens, theme settings, language preferences', 'Hive (Local Database): Cached recipe categories, offline content, temporary data'] },
        { type: 'paragraph', text: 'Remote Storage (Cloud Servers):' },
        { type: 'list', items: ['MongoDB Database: User accounts, recipes, social interactions, activity data, achievements', 'Cloud Storage: Recipe images, profile pictures, user-uploaded media'] },
        { type: 'callout', variant: 'info', title: 'Data Retention', text: 'We retain your personal data only as long as necessary to provide our services and fulfill the purposes described in this Privacy Policy. You can request deletion of your account and data at any time.' },
        { type: 'subheading', text: '3.2 Security Measures' },
        { type: 'paragraph', text: 'We implement appropriate technical and organizational measures to protect your data:' },
        { type: 'list', items: ['Encryption: Passwords are encrypted using industry-standard algorithms', 'Authentication: JWT-based authentication with automatic token refresh', 'Secure Communication: HTTPS / SSL encryption for all data transmission', 'Access Controls: Limited access to personal data by authorized personnel only', 'Regular Monitoring: Continuous monitoring for security vulnerabilities and threats'] },
        { type: 'callout', variant: 'security', title: 'Security Notice', text: 'While we strive to protect your personal data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but continuously work to improve our security practices.' },
      ],
    },
    {
      id: 's4',
      title: 'How We Share Your Information',
      blocks: [
        { type: 'subheading', text: '4.1 Public Information' },
        { type: 'paragraph', text: 'The following information may be visible to other DishDiscover users:' },
        { type: 'list', items: ['Your profile name and picture', 'Your bio and cooking skill level', 'Recipes you create and share', 'Your reviews, ratings, and comments', 'Your followers and following list', 'Your activity feed (likes, bookmarks)', 'Your achievements and badges'] },
        { type: 'subheading', text: '4.2 Third-Party Service Providers' },
        { type: 'paragraph', text: 'We may share your information with trusted third-party service providers: Firebase Cloud Messaging (push notifications, FCM tokens), Cloud Storage Services (image hosting, uploaded media), Backend API Server (data storage and processing), and Analytics Services (usage data, crash reports — anonymized).' },
        { type: 'subheading', text: '4.3 Legal Requirements' },
        { type: 'paragraph', text: 'We may disclose your information if required by law or in response to legal processes, government or law enforcement requests, protection of our rights and property, investigation of fraud, or emergency situations involving safety threats.' },
        { type: 'subheading', text: '4.4 Business Transfers' },
        { type: 'paragraph', text: 'In the event of a merger, acquisition, or sale of assets, your personal data may be transferred to the acquiring entity. We will notify you of any such change and the choices you may have regarding your data.' },
      ],
    },
    {
      id: 's5',
      title: 'Your Rights & Choices',
      blocks: [
        { type: 'paragraph', text: 'You have the following rights over your personal data: Access (request a copy of your data), Correction (update or correct inaccurate information), Deletion (request deletion of your account and all data), Export (receive your data in a portable format), Restriction (limit how we process your data), and Objection (object to certain data processing activities).' },
        { type: 'subheading', text: '5.2 Privacy Controls' },
        { type: 'paragraph', text: 'Within the app, you can control your profile visibility, manage your follower/following lists, enable or disable push notifications, update your profile information, change your password, and delete your account permanently.' },
        { type: 'subheading', text: '5.3 Exercising Your Rights' },
        { type: 'paragraph', text: 'To exercise any of your privacy rights, contact us at bhattmeet887@gmail.com or use the "Help & Support" feature in the App. We will respond to your request within 30 days.' },
      ],
    },
    {
      id: 's6',
      title: "Children's Privacy",
      blocks: [
        { type: 'paragraph', text: 'DishDiscover is not intended for children under 13 years of age (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children under 13.' },
        { type: 'paragraph', text: 'If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at bhattmeet887@gmail.com. We will take steps to delete such information from our systems.' },
      ],
    },
    {
      id: 's7',
      title: 'International Data Transfers',
      blocks: [
        { type: 'paragraph', text: 'Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your jurisdiction.' },
        { type: 'paragraph', text: 'By using DishDiscover, you consent to the transfer of your information to our servers and third-party service providers, wherever they may be located. We will take appropriate safeguards to ensure your data receives adequate protection.' },
      ],
    },
    {
      id: 's8',
      title: 'Cookies & Tracking Technologies',
      blocks: [
        { type: 'paragraph', text: 'DishDiscover may use cookies and similar tracking technologies to enhance your experience:' },
        { type: 'list', items: ['Authentication Cookies: Keep you logged in between sessions', 'Preference Cookies: Remember your settings and preferences', 'Analytics Cookies: Understand how you use the App (anonymized)', 'Security Cookies: Detect and prevent security threats'] },
        { type: 'paragraph', text: 'You can manage cookie preferences through your device settings, though disabling certain cookies may affect app functionality.' },
      ],
    },
    {
      id: 's9',
      title: 'Third-Party Links',
      blocks: [
        { type: 'paragraph', text: 'DishDiscover may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.' },
      ],
    },
    {
      id: 's10',
      title: 'Data Breach Notification',
      blocks: [
        { type: 'paragraph', text: 'In the event of a data breach that may affect your personal information, we will:' },
        { type: 'list', items: ['Notify you within 72 hours of discovering the breach', 'Describe the nature and scope of the breach', 'Explain what data was affected', 'Outline steps we are taking to address the breach', 'Provide recommendations to protect your information', 'Notify relevant authorities as required by law'] },
      ],
    },
    {
      id: 's11',
      title: 'California Privacy Rights (CCPA)',
      blocks: [
        { type: 'paragraph', text: 'If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):' },
        { type: 'list', items: ['Right to Know: Request details about the personal information we collect, use, and share', 'Right to Delete: Request deletion of your personal information', 'Right to Opt-Out: Opt out of the sale of your personal information (Note: we do not sell personal information)', 'Right to Non-Discrimination: We will not discriminate against you for exercising your CCPA rights'] },
        { type: 'paragraph', text: 'To exercise these rights, contact us at bhattmeet887@gmail.com with "CCPA Request" in the subject line.' },
      ],
    },
    {
      id: 's12',
      title: 'European Privacy Rights (GDPR)',
      blocks: [
        { type: 'paragraph', text: 'If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):' },
        { type: 'list', items: ['Legal Basis for Processing: We process your data based on consent, contract performance, legal obligations, and legitimate interests', 'Right to Withdraw Consent: You can withdraw consent at any time', 'Right to Lodge a Complaint: You can file a complaint with your local data protection authority', 'Data Protection Officer: Contact our DPO at bhattmeet887@gmail.com'] },
      ],
    },
    {
      id: 's13',
      title: 'Changes to This Privacy Policy',
      blocks: [
        { type: 'paragraph', text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make changes:' },
        { type: 'list', items: ['The "Last Updated" date at the top will be revised', 'We will notify you of significant changes via push notification or email', 'Continued use of DishDiscover after changes constitutes acceptance'] },
        { type: 'paragraph', text: 'We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.' },
      ],
    },
    {
      id: 's14',
      title: 'Contact Us',
      blocks: [
        { type: 'paragraph', text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us.' },
        { type: 'paragraph', text: 'General Inquiries & Data Protection Officer: bhattmeet887@gmail.com' },
        { type: 'paragraph', text: 'In-App: Use the "Help & Support" feature in Settings.' },
        { type: 'paragraph', text: 'We will respond to all inquiries within 30 days.' },
      ],
    },
    {
      id: 's15',
      title: 'Consent',
      blocks: [
        { type: 'callout', variant: 'warning', text: 'By using DishDiscover, you consent to the collection, use, storage, and sharing of your information as described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the App.' },
      ],
    },
  ],
}
