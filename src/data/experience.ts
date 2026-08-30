/* =========================================================================
   Work experience — rendered as a timeline. Reverse-chronological.
   Content sourced from Wahaj's résumé (public/resume.pdf).
   Bullets lead with what was built / owned; add hard numbers where you have
   measured them (only Selteq currently has one).
   ========================================================================= */

import Netsol from '@/assets/companies/Netsol.png';
import FiveRiver from '@/assets/companies/FiveRiverTechnologies.png';
import Upgenics from '@/assets/companies/Upgenics.png';
import Techandover from '@/assets/companies/Techandover.png';

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
  /** Optional — falls back to the company's initials if absent. */
  logo?: ImageMetadata;
  summary: string;
  highlights: string[];
  /** Tech worn day-to-day in this role. */
  stack: string[];
}

export const experience: Job[] = [
  {
    company: 'Netsol Technologies',
    title: 'Software Engineer in Test',
    start: 'Oct 2025',
    end: 'Present',
    location: 'Lahore, Pakistan',
    logo: Netsol,
    summary:
      'Own automated functional, regression and end-to-end coverage for enterprise web products, wired into Azure DevOps delivery.',
    highlights: [
      'Built a C#/Playwright automation framework for functional, regression and end-to-end suites — using Claude to speed up test-case generation and widen coverage.',
      'Wrote BDD scenarios in Gherkin so business and technical stakeholders review the same specifications.',
      'Integrated the automated suites into CI/CD pipelines for continuous testing and faster, more reliable deployments.',
      'Managed test cases, defects and sprint tasks in Azure DevOps for traceable agile delivery.',
    ],
    stack: ['C#', 'Playwright', 'Gherkin / BDD', 'Azure DevOps', 'CI/CD'],
  },
  {
    company: 'FiveRivers Technologies',
    title: 'SQA Automation Engineer',
    start: 'Mar 2025',
    end: 'Oct 2025',
    location: 'Lahore, Pakistan',
    logo: FiveRiver,
    summary:
      'Built a scalable mobile automation framework and folded it into the build pipeline, cutting manual regression effort.',
    highlights: [
      'Designed a test-automation framework with Java, TestNG, Appium and Cucumber for a scalable BDD approach.',
      'Created and maintained Android and iOS automation scripts, keeping them stable across releases.',
      'Wired automation into CI/CD with Bitbucket self-hosted runners so tests run on every build.',
      'Automated critical workflows to reduce manual testing effort and improve release speed and quality.',
    ],
    stack: ['Java', 'TestNG', 'Appium', 'Cucumber', 'Bitbucket Pipelines', 'Android', 'iOS'],
  },
  {
    company: 'Upgenics',
    title: 'SQA Engineer (Executive)',
    start: 'Mar 2024',
    end: 'Mar 2025',
    location: 'Lahore, Pakistan',
    logo: Upgenics,
    summary:
      'Automation for a diagnostic platform that distinguishes genuine from non-genuine mobile device components (OEM parts, ESNs, MDM).',
    highlights: [
      'Wrote Python + Appium test scripts running on real Android and iOS devices, versioned on GitHub.',
      'Automated web-app testing with Selenium and ran cross-browser checks for compatibility.',
      'Containerised the mobile and web test scripts with Docker to remove version drift across environments.',
      'Built Jenkins CI/CD pipelines for build, test and deployment, and API tests with Postman for REST services.',
    ],
    stack: ['Python', 'Appium', 'Selenium', 'Docker', 'Jenkins', 'Postman', 'Android', 'iOS'],
  },
  {
    company: 'Techandover',
    title: 'Software Quality Assurance',
    start: 'Nov 2023',
    end: 'Mar 2024',
    location: 'Lahore, Pakistan',
    logo: Techandover,
    summary:
      'Manual and script-assisted QA for the Kazzah and Kazzah Pro mobile apps, doubling as Scrum Master.',
    highlights: [
      'Ran manual testing for Kazzah / Kazzah Pro and wrote Appium scripts (GitHub) to speed up repeat checks.',
      'Served as Scrum Master — built the backlog and led stand-ups in Jira.',
      'Managed source promotion from development to staging to production in GitLab with no lingering conflicts.',
    ],
    stack: ['Appium', 'Manual QA', 'Jira', 'Git', 'GitLab'],
  },
];
