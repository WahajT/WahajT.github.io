/* =========================================================================
   Work experience — rendered as a timeline.
   Each entry: company, YOUR title, dates, and 2–3 achievement bullets.
   Bullets should lead with impact + a number wherever you can
   ("cut regression run from 40m → 9m", "raised release cadence to weekly").

   TODO(wahaj): every `title`, `start`, `end` and bullet below is a
   placeholder reconstructed from the old site. Replace with real details.
   ========================================================================= */

import Netsol from '@/assets/companies/Netsol.png';
import FiveRiver from '@/assets/companies/FiveRiverTechnologies.png';
import Upgenics from '@/assets/companies/Upgenics.png';
import Rendream from '@/assets/companies/Rendream.jpeg';
import Techandover from '@/assets/companies/Techandover.png';
import Selteq from '@/assets/companies/Selteq.png';

import type { ImageMetadata } from 'astro';

export interface Job {
  company: string;
  title: string;
  /** "MMM YYYY" — free text, shown as-is. */
  start: string;
  /** "MMM YYYY" or "Present". */
  end: string;
  location?: string;
  url?: string;
  logo: ImageMetadata;
  summary: string;
  highlights: string[];
  /** Tech worn day-to-day in this role. */
  stack: string[];
}

export const experience: Job[] = [
  {
    company: 'Techandover Ltd',
    title: 'Software Engineer — SDET / DevOps', // TODO(wahaj)
    start: 'Jan 2024', // TODO(wahaj)
    end: 'Present', // TODO(wahaj)
    location: 'Remote', // TODO(wahaj)
    url: undefined, // TODO(wahaj): company site
    logo: Techandover,
    summary:
      'Own end-to-end quality automation and delivery pipelines for the mobile device-diagnostics product line.',
    highlights: [
      'TODO(wahaj): e.g. "Built a cross-platform Appium framework covering 120+ device checks, cutting a manual regression pass from ~2 days to under 30 minutes."',
      'TODO(wahaj): e.g. "Migrated CI to GitLab pipelines with parallel test shards, taking build+test feedback from 45 min to 12 min."',
      'TODO(wahaj): e.g. "Containerised the test grid with Docker + Kubernetes so QA can spin up an isolated environment per branch."',
    ],
    stack: ['Appium', 'Selenium', 'Python', 'GitLab CI', 'Docker', 'Kubernetes'],
  },
  {
    company: 'Selteq Ltd',
    title: 'SDET / Automation Engineer', // TODO(wahaj)
    start: 'TODO', // TODO(wahaj)
    end: 'TODO', // TODO(wahaj)
    logo: Selteq,
    summary:
      'Designed automated test coverage and release checks for web and mobile clients.',
    highlights: [
      'TODO(wahaj): key achievement with a number.',
      'TODO(wahaj): key achievement with a number.',
    ],
    stack: ['Cypress', 'JavaScript', 'Postman', 'CI/CD'],
  },
  {
    company: 'Rendream',
    title: 'QA Automation Engineer', // TODO(wahaj)
    start: 'TODO', // TODO(wahaj)
    end: 'TODO', // TODO(wahaj)
    logo: Rendream,
    summary: 'Built and maintained regression suites across client projects.',
    highlights: [
      'TODO(wahaj): key achievement with a number.',
      'TODO(wahaj): key achievement with a number.',
    ],
    stack: ['Selenium', 'Robot Framework', 'Python'],
  },
  {
    company: 'Upgenics International',
    title: 'Software QA Engineer', // TODO(wahaj)
    start: 'TODO', // TODO(wahaj)
    end: 'TODO', // TODO(wahaj)
    logo: Upgenics,
    summary: 'Manual + automated testing across the product lifecycle.',
    highlights: [
      'TODO(wahaj): key achievement with a number.',
      'TODO(wahaj): key achievement with a number.',
    ],
    stack: ['Manual QA', 'API testing', 'Postman'],
  },
  {
    company: 'FiveRiver Technologies',
    title: 'QA Engineer', // TODO(wahaj)
    start: 'TODO', // TODO(wahaj)
    end: 'TODO', // TODO(wahaj)
    logo: FiveRiver,
    summary: 'Quality assurance for web and mobile applications.',
    highlights: ['TODO(wahaj): key achievement.', 'TODO(wahaj): key achievement.'],
    stack: ['Manual QA', 'Selenium'],
  },
  {
    company: 'Netsol Technologies',
    title: 'Associate QA Engineer / Intern', // TODO(wahaj)
    start: 'TODO', // TODO(wahaj)
    end: 'TODO', // TODO(wahaj)
    logo: Netsol,
    summary: 'Early-career QA on enterprise finance/leasing software.',
    highlights: ['TODO(wahaj): what you learned / shipped.'],
    stack: ['Manual QA', 'SQL', 'Test case design'],
  },
];
