# DishDiscover Web — Next.js Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 3-page static Next.js 14 + TypeScript + Tailwind website for DishDiscover (Home, Privacy Policy, Terms & Conditions).

**Architecture:** App Router with static export (`output: 'export'`). All pages are React Server Components except `Header` and `LegalSidebar` which need `'use client'` for scroll/IntersectionObserver state. Legal content is stored as typed TypeScript data files consumed by shared layout components.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, `next/font/google` (Inter), `next/image` (unoptimized for static export).

---

## Parallelization Guide

```
Task 1 (scaffold) → Task 2 (layout + data)
                         ↓
        ┌────────────────┼────────────────┐
     Task 3           Task 4           Task 5
   Header+Footer   Hero+Links+Stats  Features+App+Legal
        └────────────────┼────────────────┘
                         ↓
                      Task 6 (pages)
                         ↓
                      Task 7 (build)
```

Tasks 3, 4, 5 run in parallel after Task 2 completes. Each writes non-overlapping files.

---

## File Map

| File | Created by | Purpose |
|---|---|---|
| `next.config.ts` | Task 1 | Static export, unoptimized images |
| `tailwind.config.ts` | Task 1 | Brand color tokens |
| `app/globals.css` | Task 1 | Base resets, scroll-behavior |
| `public/assets/*` | Task 1 | Logo SVGs and PNG |
| `types/legal.ts` | Task 2 | Block/Section/LegalDoc types |
| `lib/data/privacy.ts` | Task 2 | All 15 privacy sections as typed data |
| `lib/data/terms.ts` | Task 2 | All 19 terms sections as typed data |
| `app/layout.tsx` | Task 2 | Root layout: Inter font, Header, Footer, metadata |
| `components/Header.tsx` | Task 3 | Sticky header, logo swap on scroll |
| `components/Footer.tsx` | Task 3 | Dark footer, 3-col links |
| `components/Hero.tsx` | Task 4 | Dark solid hero, logo card, CTAs |
| `components/QuickLinks.tsx` | Task 4 | 3 floating white cards |
| `components/StatsBar.tsx` | Task 4 | 4-stat bar |
| `components/FeaturesGrid.tsx` | Task 5 | 6-card feature grid |
| `components/AppSection.tsx` | Task 5 | Download section |
| `components/legal/LegalHero.tsx` | Task 5 | Legal page dark header |
| `components/legal/LegalSidebar.tsx` | Task 5 | Sticky TOC with IntersectionObserver |
| `components/legal/LegalContent.tsx` | Task 5 | Block-based content renderer |
| `app/page.tsx` | Task 6 | Home page |
| `app/privacy/page.tsx` | Task 6 | Privacy Policy page |
| `app/terms/page.tsx` | Task 6 | Terms page |

---

## Task 1: Scaffold & Configure

**Files:**
- Modify: `next.config.ts`
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Create: `public/assets/` (copy logos)

- [ ] **Step 1.1: Scaffold Next.js in the project directory**

```bash
cd "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web"
npx create-next-app@14 . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

Expected: Project files generated. You will see `app/`, `public/`, `package.json`, `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`.

- [ ] **Step 1.2: Copy logo assets**

```bash
cp "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover/assets/app_logo_light.svg" \
   "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web/public/assets/app_logo_light.svg"

cp "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover/assets/app_logo_dark.svg" \
   "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web/public/assets/app_logo_dark.svg"

cp "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover/assets/app_logo.png" \
   "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web/public/assets/app_logo.png"
```

- [ ] **Step 1.3: Replace next.config.ts**

```ts
import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default config
```

- [ ] **Step 1.4: Replace tailwind.config.ts**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#021a0a',
          900: '#052e16',
          800: '#0D6F36',
          700: '#10924A',
          100: '#dcfce7',
          accent: '#4ade80',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 1.5: Replace app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}
```

- [ ] **Step 1.6: Verify TypeScript compiles**

```bash
cd "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web"
npx tsc --noEmit
```

Expected: No errors (ignore any boilerplate in the generated `app/page.tsx` for now).

- [ ] **Step 1.7: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 14 + Tailwind + static export config"
```

---

## Task 2: Root Layout + Types + Legal Data

**Files:**
- Create: `types/legal.ts`
- Create: `lib/data/privacy.ts`
- Create: `lib/data/terms.ts`
- Modify: `app/layout.tsx`

- [ ] **Step 2.1: Create types/legal.ts**

```ts
export interface CalloutBlock {
  type: 'callout'
  variant: 'info' | 'warning' | 'success' | 'security'
  title?: string
  text: string
}

export interface ParagraphBlock {
  type: 'paragraph'
  text: string
}

export interface ListBlock {
  type: 'list'
  items: string[]
}

export interface SubheadingBlock {
  type: 'subheading'
  text: string
}

export type Block = ParagraphBlock | ListBlock | SubheadingBlock | CalloutBlock

export interface Section {
  id: string
  title: string
  blocks: Block[]
}

export interface LegalDoc {
  title: string
  lastUpdated: string
  sections: Section[]
}
```

- [ ] **Step 2.2: Create lib/data/privacy.ts**

```ts
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
```

- [ ] **Step 2.3: Create lib/data/terms.ts**

```ts
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
        { type: 'callout', variant: 'security', title: 'You must NOT engage in any of the following:' , text: '' },
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
```

- [ ] **Step 2.4: Replace app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dishdiscover.app'),
  title: {
    template: '%s — DishDiscover',
    default: 'DishDiscover — Discover & Share Recipes',
  },
  description:
    'DishDiscover helps you explore thousands of recipes, share your own culinary creations, and connect with food lovers worldwide.',
  openGraph: {
    type: 'website',
    siteName: 'DishDiscover',
    images: [{ url: '/assets/app_logo.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 2.5: Verify TypeScript**

```bash
cd "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web"
npx tsc --noEmit
```

Expected: No errors (Header and Footer don't exist yet — ignore those import errors for now).

- [ ] **Step 2.6: Commit**

```bash
git add types/ lib/ app/layout.tsx
git commit -m "feat: add legal types, privacy/terms data, and root layout"
```

---

## Task 3: Header + Footer *(run in parallel with Tasks 4 and 5)*

**Files:**
- Create: `components/Header.tsx`
- Create: `components/Footer.tsx`

- [ ] **Step 3.1: Create components/Header.tsx**

```tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = scrolled
    ? 'text-gray-700 hover:text-brand-800'
    : 'text-white/90 hover:text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="DishDiscover home">
          <Image
            src={scrolled ? '/assets/app_logo_light.svg' : '/assets/app_logo_dark.svg'}
            alt="DishDiscover"
            width={140}
            height={36}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <Link href="/" className={`text-sm font-medium transition-colors ${navLinkClass}`}>
            Home
          </Link>
          <Link href="/privacy" className={`text-sm font-medium transition-colors ${navLinkClass}`}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={`text-sm font-medium transition-colors ${navLinkClass}`}>
            Terms
          </Link>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <PlayIcon />
            Get the App
          </a>
        </nav>
      </div>
    </header>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76a2 2 0 0 0 2.2-.29l13.4-7.74-3.08-3.08-12.52 11.11zm-1.18-22c-.06.2-.1.43-.1.67v19.14c0 .24.04.47.1.67l.08.07 10.72-10.72v-.24L2.08 1.69l-.08.07zm21.27 9.71-3.03-1.75-3.39 3.39 3.39 3.39 3.05-1.76c.87-.5.87-1.77-.02-2.27zM3.18.24l12.41 11.13 3.08-3.08L5.38.53A2 2 0 0 0 3.18.24z" />
    </svg>
  )
}
```

- [ ] **Step 3.2: Create components/Footer.tsx**

```tsx
import Link from 'next/link'
import Image from 'next/image'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <Image
              src="/assets/app_logo_dark.svg"
              alt="DishDiscover"
              width={140}
              height={36}
            />
            <p className="mt-3 text-green-300 text-sm">Cook. Share. Inspire.</p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">App</p>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Google Play
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">Legal</p>
              <Link href="/privacy" className="block text-sm text-white/70 hover:text-white transition-colors mb-2">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-white/70 hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">Support</p>
              <a
                href="mailto:bhattmeet887@gmail.com"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>&copy; 2025 DishDiscover. All rights reserved.</span>
          <span>Last Updated: November 23, 2025</span>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3.3: Verify TypeScript**

```bash
cd "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web"
npx tsc --noEmit
```

Expected: No errors for Header.tsx and Footer.tsx.

- [ ] **Step 3.4: Commit**

```bash
git add components/Header.tsx components/Footer.tsx
git commit -m "feat: add Header and Footer components"
```

---

## Task 4: Hero + QuickLinks + StatsBar *(run in parallel with Tasks 3 and 5)*

**Files:**
- Create: `components/Hero.tsx`
- Create: `components/QuickLinks.tsx`
- Create: `components/StatsBar.tsx`

- [ ] **Step 4.1: Create components/Hero.tsx**

```tsx
import Image from 'next/image'
import Link from 'next/link'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export default function Hero() {
  return (
    <section className="bg-brand-900 pt-32 pb-36 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <div className="bg-white rounded-3xl shadow-xl px-10 py-6">
          <Image
            src="/assets/app_logo_light.svg"
            alt="DishDiscover"
            width={200}
            height={52}
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Your Culinary Journey<br />Starts Here
          </h1>
          <p className="text-lg text-green-100 max-w-xl mx-auto leading-relaxed">
            Explore thousands of recipes from every cuisine, share your own creations,
            and connect with food lovers around the world.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <PlayIcon />
            Download on Google Play
          </a>
          <Link
            href="/privacy"
            className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <ShieldIcon />
            Privacy &amp; Legal
          </Link>
        </div>
      </div>
    </section>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76a2 2 0 0 0 2.2-.29l13.4-7.74-3.08-3.08-12.52 11.11zm-1.18-22c-.06.2-.1.43-.1.67v19.14c0 .24.04.47.1.67l.08.07 10.72-10.72v-.24L2.08 1.69l-.08.07zm21.27 9.71-3.03-1.75-3.39 3.39 3.39 3.39 3.05-1.76c.87-.5.87-1.77-.02-2.27zM3.18.24l12.41 11.13 3.08-3.08L5.38.53A2 2 0 0 0 3.18.24z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
```

- [ ] **Step 4.2: Create components/QuickLinks.tsx**

```tsx
import Link from 'next/link'

interface LinkItem {
  href: string
  isExternal: boolean
  iconBg: string
  iconColor: string
  icon: React.ReactNode
  title: string
  desc: string
  cta: string
  ctaColor: string
}

const links: LinkItem[] = [
  {
    href: '/privacy',
    isExternal: false,
    iconBg: 'bg-brand-100',
    iconColor: 'text-brand-800',
    icon: <ShieldIcon />,
    title: 'Privacy Policy',
    desc: 'Learn how we collect, use, and protect your personal data when you use DishDiscover.',
    cta: 'Read Privacy Policy',
    ctaColor: 'text-brand-800',
  },
  {
    href: '/terms',
    isExternal: false,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: <DocIcon />,
    title: 'Terms & Conditions',
    desc: 'Read our terms of service governing your use of the DishDiscover application.',
    cta: 'Read Terms',
    ctaColor: 'text-blue-600',
  },
  {
    href: 'mailto:bhattmeet887@gmail.com',
    isExternal: true,
    iconBg: 'bg-brand-100',
    iconColor: 'text-brand-800',
    icon: <MailIcon />,
    title: 'Contact Us',
    desc: 'Questions about privacy or our terms? We respond within 30 days.',
    cta: 'bhattmeet887@gmail.com',
    ctaColor: 'text-brand-800',
  },
]

export default function QuickLinks() {
  return (
    <section className="-mt-16 relative z-10 px-6" aria-label="Quick links">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link) => {
          const content = (
            <>
              <div className={`${link.iconBg} ${link.iconColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                {link.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{link.title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{link.desc}</p>
              <div className={`${link.ctaColor} text-sm font-semibold flex items-center gap-1`}>
                {link.cta}
                <ArrowIcon />
              </div>
            </>
          )

          const cardClass = 'bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow block'

          return link.isExternal ? (
            <a key={link.href} href={link.href} className={cardClass}>
              {content}
            </a>
          ) : (
            <Link key={link.href} href={link.href} className={cardClass}>
              {content}
            </Link>
          )
        })}
      </div>
    </section>
  )
}

function ShieldIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
}
function DocIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
}
function MailIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
}
function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
}
```

- [ ] **Step 4.3: Create components/StatsBar.tsx**

```tsx
const stats = [
  { value: '1000+', label: 'Recipes' },
  { value: '30+', label: 'Cuisines' },
  { value: 'Free', label: 'To Download' },
  { value: '4.5★', label: 'Rating' },
]

export default function StatsBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-10 px-6 mt-14">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-2xl md:text-3xl font-bold text-brand-800">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 4.4: Verify TypeScript**

```bash
cd "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web"
npx tsc --noEmit
```

Expected: No errors for these three files.

- [ ] **Step 4.5: Commit**

```bash
git add components/Hero.tsx components/QuickLinks.tsx components/StatsBar.tsx
git commit -m "feat: add Hero, QuickLinks, and StatsBar components"
```

---

## Task 5: FeaturesGrid + AppSection + Legal Components *(run in parallel with Tasks 3 and 4)*

**Files:**
- Create: `components/FeaturesGrid.tsx`
- Create: `components/AppSection.tsx`
- Create: `components/legal/LegalHero.tsx`
- Create: `components/legal/LegalSidebar.tsx`
- Create: `components/legal/LegalContent.tsx`

- [ ] **Step 5.1: Create components/FeaturesGrid.tsx**

```tsx
const features = [
  {
    title: 'Discover Recipes',
    desc: 'Browse thousands of recipes across 30+ cuisines — from quick weeknight meals to festive specials.',
    iconBg: 'bg-brand-100',
    icon: (
      <svg className="text-brand-800" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Share Your Creations',
    desc: 'Upload your own recipes with photos, ingredients, and step-by-step instructions for the community.',
    iconBg: 'bg-blue-50',
    icon: (
      <svg className="text-blue-600" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Follow Food Lovers',
    desc: 'Build your culinary network — follow chefs and home cooks, like their recipes, and get inspired.',
    iconBg: 'bg-purple-50',
    icon: (
      <svg className="text-purple-600" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Meal Planning',
    desc: 'Plan your weekly meals in advance. Auto-generate shopping lists so you never miss an ingredient.',
    iconBg: 'bg-orange-50',
    icon: (
      <svg className="text-orange-600" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Achievements & Badges',
    desc: 'Earn badges as you cook, review, and share. Level up your profile and showcase your culinary progress.',
    iconBg: 'bg-yellow-50',
    icon: (
      <svg className="text-yellow-600" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Smart Notifications',
    desc: 'Get notified about new recipes, likes, and follows. Daily recipe picks sent straight to your phone.',
    iconBg: 'bg-brand-100',
    icon: (
      <svg className="text-brand-800" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-6 bg-gray-50" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-800 bg-brand-100 px-3 py-1 rounded-full">
            Features
          </span>
          <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mt-4 mb-3 tracking-tight">
            Everything a food lover needs
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From discovering new recipes to tracking your cooking journey — DishDiscover has it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`${f.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5.2: Create components/AppSection.tsx**

```tsx
import Image from 'next/image'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export default function AppSection() {
  return (
    <section className="bg-brand-800 py-16 px-6" aria-label="Download DishDiscover">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/assets/app_logo.png"
            alt="DishDiscover app icon"
            width={96}
            height={96}
            className="rounded-2xl"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white mb-3">DishDiscover</h2>
          <p className="text-green-100 text-sm leading-relaxed mb-6 max-w-lg">
            A recipe discovery and sharing platform that connects food enthusiasts worldwide.
            Browse thousands of recipes from diverse cuisines, create your own culinary masterpieces,
            and build a community around your love for food.
          </p>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-800 font-semibold px-5 py-3 rounded-lg hover:bg-green-50 transition-colors"
          >
            <PlayIcon />
            Google Play
          </a>
        </div>
      </div>
    </section>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76a2 2 0 0 0 2.2-.29l13.4-7.74-3.08-3.08-12.52 11.11zm-1.18-22c-.06.2-.1.43-.1.67v19.14c0 .24.04.47.1.67l.08.07 10.72-10.72v-.24L2.08 1.69l-.08.07zm21.27 9.71-3.03-1.75-3.39 3.39 3.39 3.39 3.05-1.76c.87-.5.87-1.77-.02-2.27zM3.18.24l12.41 11.13 3.08-3.08L5.38.53A2 2 0 0 0 3.18.24z" />
    </svg>
  )
}
```

- [ ] **Step 5.3: Create components/legal/LegalHero.tsx**

```tsx
import Link from 'next/link'

interface Props {
  title: string
  lastUpdated: string
  description: string
  sectionCount: number
}

export default function LegalHero({ title, lastUpdated, description, sectionCount }: Props) {
  return (
    <section className="bg-brand-900 pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-green-300 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white">{title}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h1>
        <p className="text-green-100 mb-6 max-w-2xl">{description}</p>

        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 bg-brand-800/60 text-green-200 text-xs font-medium px-3 py-1 rounded-full border border-brand-700">
            Last updated: {lastUpdated}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-brand-800/60 text-green-200 text-xs font-medium px-3 py-1 rounded-full border border-brand-700">
            {sectionCount} sections
          </span>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5.4: Create components/legal/LegalSidebar.tsx**

```tsx
'use client'

import { useState, useEffect } from 'react'

interface SidebarItem {
  id: string
  title: string
}

interface Props {
  sections: SidebarItem[]
}

export default function LegalSidebar({ sections }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <nav
      className="hidden lg:block sticky top-24 w-64 flex-shrink-0 self-start max-h-[calc(100vh-7rem)] overflow-y-auto"
      aria-label="Table of contents"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        On this page
      </p>
      <ol className="space-y-0.5">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`flex items-start gap-2.5 text-sm py-1.5 px-2 rounded-lg transition-colors ${
                activeId === s.id
                  ? 'bg-brand-100 text-brand-800 font-semibold'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span
                className={`mt-0.5 text-xs w-5 text-center flex-shrink-0 tabular-nums ${
                  activeId === s.id ? 'text-brand-800' : 'text-gray-400'
                }`}
              >
                {i + 1}
              </span>
              <span className="leading-snug">{s.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

- [ ] **Step 5.5: Create components/legal/LegalContent.tsx**

```tsx
import type { Section, Block } from '@/types/legal'

const calloutConfig = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-400',
    titleColor: 'text-blue-700',
    textColor: 'text-blue-700',
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-400',
    titleColor: 'text-yellow-800',
    textColor: 'text-yellow-700',
  },
  success: {
    bg: 'bg-brand-100',
    border: 'border-brand-700',
    titleColor: 'text-brand-900',
    textColor: 'text-brand-800',
  },
  security: {
    bg: 'bg-brand-100',
    border: 'border-brand-800',
    titleColor: 'text-brand-900',
    textColor: 'text-brand-800',
  },
}

function renderBlock(block: Block, idx: number) {
  switch (block.type) {
    case 'paragraph':
      return <p key={idx} className="text-gray-600 text-sm leading-relaxed">{block.text}</p>
    case 'subheading':
      return <h3 key={idx} className="text-sm font-semibold text-gray-800 mt-4 mb-1">{block.text}</h3>
    case 'list':
      return (
        <ul key={idx} className="list-disc list-inside space-y-1 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="text-gray-600 text-sm leading-relaxed">{item}</li>
          ))}
        </ul>
      )
    case 'callout': {
      const cfg = calloutConfig[block.variant]
      return (
        <div key={idx} className={`${cfg.bg} border-l-4 ${cfg.border} rounded-r-lg p-4`}>
          {block.title && (
            <p className={`${cfg.titleColor} font-semibold text-xs uppercase tracking-wide mb-1`}>
              {block.title}
            </p>
          )}
          {block.text && <p className={`${cfg.textColor} text-sm`}>{block.text}</p>}
        </div>
      )
    }
  }
}

interface Props {
  sections: Section[]
}

export default function LegalContent({ sections }: Props) {
  return (
    <div className="flex-1 min-w-0 space-y-6">
      {sections.map((section, i) => (
        <div
          key={section.id}
          id={section.id}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-800 text-white text-sm font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
          </div>
          <div className="space-y-3">
            {section.blocks.map((block, bi) => renderBlock(block, bi))}
          </div>
        </div>
      ))}
    </div>
  )
}
```

- [ ] **Step 5.6: Verify TypeScript**

```bash
cd "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web"
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 5.7: Commit**

```bash
git add components/FeaturesGrid.tsx components/AppSection.tsx components/legal/
git commit -m "feat: add FeaturesGrid, AppSection, and legal components"
```

---

## Task 6: Assemble Pages *(after Tasks 3, 4, 5 all complete)*

**Files:**
- Modify: `app/page.tsx`
- Create: `app/privacy/page.tsx`
- Create: `app/terms/page.tsx`

- [ ] **Step 6.1: Replace app/page.tsx**

```tsx
import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import QuickLinks from '@/components/QuickLinks'
import StatsBar from '@/components/StatsBar'
import FeaturesGrid from '@/components/FeaturesGrid'
import AppSection from '@/components/AppSection'

export const metadata: Metadata = {
  title: 'DishDiscover — Discover & Share Recipes',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <StatsBar />
      <FeaturesGrid />
      <AppSection />
    </>
  )
}
```

- [ ] **Step 6.2: Create app/privacy/page.tsx**

```tsx
import type { Metadata } from 'next'
import LegalHero from '@/components/legal/LegalHero'
import LegalSidebar from '@/components/legal/LegalSidebar'
import LegalContent from '@/components/legal/LegalContent'
import { privacyDoc } from '@/lib/data/privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how DishDiscover collects, uses, and protects your personal data.',
}

export default function PrivacyPage() {
  const tocItems = privacyDoc.sections.map((s) => ({ id: s.id, title: s.title }))

  return (
    <>
      <LegalHero
        title={privacyDoc.title}
        lastUpdated={privacyDoc.lastUpdated}
        description="We are committed to protecting your privacy. This policy explains exactly how your data is collected, used, and safeguarded."
        sectionCount={privacyDoc.sections.length}
      />
      <div className="bg-gray-50 min-h-screen py-10 px-6">
        <div className="max-w-6xl mx-auto flex gap-10 items-start">
          <LegalSidebar sections={tocItems} />
          <LegalContent sections={privacyDoc.sections} />
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 6.3: Create app/terms/page.tsx**

```tsx
import type { Metadata } from 'next'
import LegalHero from '@/components/legal/LegalHero'
import LegalSidebar from '@/components/legal/LegalSidebar'
import LegalContent from '@/components/legal/LegalContent'
import { termsDoc } from '@/lib/data/terms'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms of service governing your use of the DishDiscover application.',
}

export default function TermsPage() {
  const tocItems = termsDoc.sections.map((s) => ({ id: s.id, title: s.title }))

  return (
    <>
      <LegalHero
        title={termsDoc.title}
        lastUpdated={termsDoc.lastUpdated}
        description="By using DishDiscover, you agree to these terms. Please read carefully before creating an account or using our services."
        sectionCount={termsDoc.sections.length}
      />
      <div className="bg-gray-50 min-h-screen py-10 px-6">
        <div className="max-w-6xl mx-auto flex gap-10 items-start">
          <LegalSidebar sections={tocItems} />
          <LegalContent sections={termsDoc.sections} />
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 6.4: Verify TypeScript**

```bash
cd "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web"
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 6.5: Commit**

```bash
git add app/page.tsx app/privacy/ app/terms/
git commit -m "feat: assemble home, privacy, and terms pages"
```

---

## Task 7: Build & Verify *(after Task 6)*

**Files:** None — verification only.

- [ ] **Step 7.1: Install dependencies**

```bash
cd "/Users/meetbhatt/Documents/GitHub/My Projects/dishdiscover-web"
npm install
```

Expected: Dependencies installed with no errors.

- [ ] **Step 7.2: Run production build**

```bash
npm run build
```

Expected: Build succeeds. Output: `out/` directory containing `index.html`, `privacy/index.html`, `terms/index.html`.

- [ ] **Step 7.3: Verify the output directory**

```bash
ls out/
ls out/privacy/
ls out/terms/
ls out/assets/
```

Expected: All four paths exist and contain HTML files and assets.

- [ ] **Step 7.4: Start dev server and check pages**

```bash
npm run dev
```

Open in browser:
- `http://localhost:3000` — Home: dark hero, logo card, floating cards, stats, features, app section
- `http://localhost:3000/privacy` — Privacy: dark header, sticky TOC sidebar, 15 section cards
- `http://localhost:3000/terms` — Terms: same layout, 19 sections

- [ ] **Step 7.5: Final commit**

```bash
git add -A
git commit -m "feat: complete DishDiscover Next.js static website"
```
