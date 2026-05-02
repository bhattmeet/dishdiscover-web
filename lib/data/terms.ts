import type { LegalDoc } from '@/types/legal'

export const termsDoc: LegalDoc = {
  title: 'Terms & Conditions',
  lastUpdated: 'November 23, 2025',
  sections: [
    {
      id: 't1',
      title: 'Acceptance of Terms',
      blocks: [
        { type: 'paragraph', text: 'By downloading, installing, accessing, or using the DishDiscover application, you confirm that:' },
        { type: 'list', items: ['You are at least 13 years of age (or the minimum age required in your jurisdiction)', 'You have the legal capacity to enter into these Terms', 'You will comply with all applicable laws and regulations', 'All information you provide is accurate, current, and complete'] },
      ],
    },
    {
      id: 't2',
      title: 'User Accounts',
      blocks: [
        { type: 'subheading', text: '2.1 Account Creation' },
        { type: 'paragraph', text: 'To access certain features of DishDiscover, you must create an account by providing:' },
        { type: 'list', items: ['Full name', 'Valid email address', 'Secure password', 'Optional profile information (profile picture, bio, cooking skill level)'] },
        { type: 'subheading', text: '2.2 Account Security' },
        { type: 'paragraph', text: 'You are responsible for:' },
        { type: 'list', items: ['Maintaining the confidentiality of your account credentials', 'All activities that occur under your account', 'Notifying us immediately of any unauthorized access or security breach', 'Ensuring your password meets security requirements'] },
        { type: 'subheading', text: '2.3 Account Termination' },
        { type: 'paragraph', text: 'We reserve the right to suspend or terminate your account if you violate these Terms, engage in fraudulent or illegal activities, post inappropriate or harmful content, or your account remains inactive for an extended period.' },
      ],
    },
    {
      id: 't3',
      title: 'Recipe Content & Intellectual Property',
      blocks: [
        { type: 'subheading', text: '3.1 Platform Content' },
        { type: 'paragraph', text: 'All recipes, images, text, graphics, logos, and other content provided by DishDiscover are owned by or licensed to us and are protected by copyright, trademark, and other intellectual property laws. You may:' },
        { type: 'list', items: ['View and save recipes for personal, non-commercial use', 'Share recipes within the App using provided sharing features', 'Bookmark and organize recipes in your personal collections'] },
        { type: 'subheading', text: '3.2 User-Generated Content' },
        { type: 'paragraph', text: 'When you create, upload, or share content (recipes, reviews, comments, photos), you:' },
        { type: 'list', items: ['Retain ownership of your original content', 'Grant DishDiscover a worldwide, non-exclusive, royalty-free license to use, display, reproduce, modify, and distribute your content within the App', 'Represent that you have all necessary rights to share the content', "Agree not to post content that infringes on others' intellectual property rights"] },
        { type: 'subheading', text: '3.3 Recipe Attribution' },
        { type: 'paragraph', text: "Users must give proper credit when sharing recipes from other sources, not claim ownership of recipes created by others, and respect the original creator's rights and attribution requirements." },
      ],
    },
    {
      id: 't4',
      title: 'Community Guidelines & User Conduct',
      blocks: [
        { type: 'subheading', text: '4.1 Acceptable Use' },
        { type: 'paragraph', text: 'You agree to use DishDiscover in a respectful and lawful manner. You may:' },
        { type: 'list', items: ['Discover, save, and share recipes', 'Follow other users and interact with their content', 'Rate and review recipes honestly and constructively', 'Participate in community discussions and activities', 'Create meal plans and shopping lists'] },
        { type: 'subheading', text: '4.2 Prohibited Activities' },
        { type: 'callout', variant: 'security', title: 'You must NOT engage in any of the following:', text: '' },
        { type: 'list', items: ['Post offensive, discriminatory, or harmful content', 'Harass, bully, or threaten other users', 'Share false, misleading, or deceptive information', 'Spam or send unsolicited commercial messages', "Attempt to hack, reverse engineer, or compromise the App's security", 'Use automated tools (bots, scrapers) without permission', 'Impersonate others or create fake accounts', 'Post content that violates any laws or regulations', 'Share recipes containing dangerous or illegal ingredients', 'Manipulate ratings, reviews, or achievements'] },
      ],
    },
    {
      id: 't5',
      title: 'Social Features',
      blocks: [
        { type: 'subheading', text: '5.1 Following and Followers' },
        { type: 'paragraph', text: 'DishDiscover allows users to follow each other and view public content. By using social features, you understand that your public profile, recipes, and activity may be visible to other users, you can control your privacy settings, and we are not responsible for interactions between users.' },
        { type: 'subheading', text: '5.2 Reviews and Ratings' },
        { type: 'paragraph', text: 'When posting reviews or ratings:' },
        { type: 'list', items: ['Be honest and fair in your assessments', 'Base reviews on actual experience with the recipe', 'Avoid conflicts of interest or biased reviews', 'Do not post fake or manipulated reviews'] },
      ],
    },
    {
      id: 't6',
      title: 'Gamification & Achievements',
      blocks: [
        { type: 'paragraph', text: 'DishDiscover includes gamification features such as achievements, badges, and activity tracking. You acknowledge that:' },
        { type: 'list', items: ['Achievements and badges have no monetary value', 'We may modify, add, or remove gamification features at any time', 'Attempting to cheat or manipulate the achievement system may result in account suspension', 'Achievement data may be reset or adjusted for system maintenance'] },
      ],
    },
    {
      id: 't7',
      title: 'Meal Planning & Shopping Lists',
      blocks: [
        { type: 'paragraph', text: 'Our meal planning and shopping list features are provided for convenience. You acknowledge that:' },
        { type: 'list', items: ['Nutritional information is provided for reference only and may not be 100% accurate', 'You are responsible for verifying dietary requirements and allergen information', 'We are not liable for any health issues resulting from following recipes or meal plans', 'You should consult healthcare professionals for specific dietary advice'] },
        { type: 'callout', variant: 'warning', text: 'Always check allergen information independently. DishDiscover is not a substitute for professional dietary or medical advice.' },
      ],
    },
    {
      id: 't8',
      title: 'Third-Party Services',
      blocks: [
        { type: 'paragraph', text: 'DishDiscover integrates with third-party services including:' },
        { type: 'list', items: ['Firebase Cloud Messaging for push notifications', 'Cloud storage services for images and data', 'Analytics services for app improvement'] },
        { type: 'paragraph', text: 'Your use of these third-party services is subject to their respective terms and conditions. We are not responsible for the practices or content of third-party services.' },
      ],
    },
    {
      id: 't9',
      title: 'Push Notifications',
      blocks: [
        { type: 'paragraph', text: 'By enabling push notifications, you consent to receive:' },
        { type: 'list', items: ['Activity notifications (likes, follows, comments)', 'Recipe recommendations and updates', 'Achievement and milestone notifications', 'App updates and announcements'] },
        { type: 'paragraph', text: 'You can disable push notifications at any time through your device settings or app preferences.' },
      ],
    },
    {
      id: 't10',
      title: 'Data & Privacy',
      blocks: [
        { type: 'paragraph', text: 'Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using DishDiscover, you also agree to our Privacy Policy.' },
      ],
    },
    {
      id: 't11',
      title: 'Disclaimer of Warranties',
      blocks: [
        { type: 'paragraph', text: 'DishDiscover is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to:' },
        { type: 'list', items: ['Accuracy, reliability, or completeness of recipe content', 'Uninterrupted or error-free operation of the App', 'Security of data transmission', 'Results from using recipes or meal plans', 'Food safety or allergen information accuracy'] },
      ],
    },
    {
      id: 't12',
      title: 'Limitation of Liability',
      blocks: [
        { type: 'paragraph', text: 'To the maximum extent permitted by law, DishDiscover and its developers shall not be liable for:' },
        { type: 'list', items: ['Any indirect, incidental, special, consequential, or punitive damages', 'Loss of profits, data, or business opportunities', 'Health issues, allergic reactions, or food poisoning resulting from recipes', 'Damages arising from user interactions or content', 'Unauthorized access to your account or data breaches', 'Third-party content or services'] },
      ],
    },
    {
      id: 't13',
      title: 'Indemnification',
      blocks: [
        { type: 'paragraph', text: 'You agree to indemnify, defend, and hold harmless DishDiscover, its developers, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:' },
        { type: 'list', items: ['Your violation of these Terms', 'Your use of the App', 'Your user-generated content', 'Your violation of any rights of another party'] },
      ],
    },
    {
      id: 't14',
      title: 'Changes to the Service',
      blocks: [
        { type: 'paragraph', text: 'We reserve the right to:' },
        { type: 'list', items: ['Modify, suspend, or discontinue any feature of the App', 'Update recipe content and categories', 'Change pricing for premium features (if applicable)', 'Implement new features or remove existing ones'] },
        { type: 'paragraph', text: 'We will make reasonable efforts to notify you of significant changes, but we are not obligated to do so.' },
      ],
    },
    {
      id: 't15',
      title: 'Changes to These Terms',
      blocks: [
        { type: 'paragraph', text: 'We may update these Terms from time to time. When we do:' },
        { type: 'list', items: ['The "Last Updated" date will be revised', 'Significant changes will be notified via the App or email', 'Continued use of the App after changes constitutes acceptance of the new Terms'] },
        { type: 'paragraph', text: 'We encourage you to review these Terms periodically.' },
      ],
    },
    {
      id: 't16',
      title: 'Governing Law & Dispute Resolution',
      blocks: [
        { type: 'paragraph', text: 'These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of DishDiscover shall be resolved through:' },
        { type: 'list', items: ['Good faith negotiations between the parties', 'Mediation, if negotiations fail', 'Binding arbitration or litigation, if mediation fails'] },
      ],
    },
    {
      id: 't17',
      title: 'Severability',
      blocks: [
        { type: 'paragraph', text: 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.' },
      ],
    },
    {
      id: 't18',
      title: 'Entire Agreement',
      blocks: [
        { type: 'paragraph', text: 'These Terms, together with our Privacy Policy, constitute the entire agreement between you and DishDiscover regarding your use of the App and supersede all prior agreements and understandings.' },
      ],
    },
    {
      id: 't19',
      title: 'Contact Information',
      blocks: [
        { type: 'paragraph', text: 'If you have any questions about these Terms and Conditions, please contact us.' },
        { type: 'paragraph', text: 'Email: bhattmeet887@gmail.com' },
        { type: 'paragraph', text: 'In-App: Use the "Help & Support" feature in Settings.' },
        { type: 'paragraph', text: 'We will respond to your inquiries within 48 hours during business days.' },
      ],
    },
  ],
}
