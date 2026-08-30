/* =========================================================================
   Site-wide content & configuration.
   This is the ONE file to edit for identity, headline, links and SEO
   defaults. Everything marked TODO(wahaj) is a placeholder — replace with
   real values before publishing.
   ========================================================================= */

export const site = {
  /** Canonical origin — must match astro.config.mjs `site`. */
  url: 'https://wahajt.github.io',

  name: 'Wahaj Tahir',
  /** Used in <title> suffix and JSON-LD jobTitle. */
  role: 'SDET & DevOps Engineer',

  /** One line. Shown under the H1. Say what you do + the domain. */
  headline:
    'I build test-automation frameworks and CI/CD pipelines for mobile device-diagnostics platforms.',

  /** 2–3 sentences for <meta name="description"> and social cards. ~150 chars is ideal. */
  description:
    'Wahaj Tahir is an SDET and DevOps engineer specialising in mobile test automation (Appium, Selenium, Cypress) and CI/CD pipelines. See case studies from PhoneCheck and Mobocheck.',

  /** TODO(wahaj): confirm city / country. Used in JSON-LD + hero availability line. */
  location: 'Lahore, Pakistan',
  /** e.g. "Asia/Karachi" — shown near the contact section. */
  timezone: 'PKT (UTC+5)',

  /** Availability banner. Set `open: false` to hide the "open to work" pill. */
  availability: {
    open: true,
    // TODO(wahaj): tune wording to the exact roles you want.
    label: 'Open to SDET / DevOps roles',
    detail:
      'Available for full-time positions and long-term contracts — remote, or on-site in Lahore.',
  },

  /** Company / personal brand shown in the header + footer next to the name. */
  brand: {
    name: 'WT Software Solutions',
    /** Optional external link for the brand mark; '' = links to top of page. */
    url: '',
  },

  /** Optional media panel in the About section (a short intro clip or a photo).
   *  Drop the file in /public and point to it here.
   *    type: 'video' → autoplay, muted, looping <video> (needs `poster`)
   *    type: 'image' → a single <img>
   *    type: 'none'  → a styled "drop your video here" placeholder (default)
   *  Recommended: a 10–20s, <5 MB, 16:9 MP4 (H.264) + a poster frame. */
  aboutMedia: {
    type: 'none' as 'none' | 'video' | 'image',
    src: '', // e.g. '/about.mp4' or '/about.jpg'
    poster: '', // e.g. '/about-poster.jpg'  (video only)
    alt: 'Wahaj Tahir at work',
    caption: '', // optional short caption shown under the panel
  },

  email: 'wahajtahir01@gmail.com',

  /** Shown in the Contact section. Sets expectations, lowers friction to reach out. */
  responseTime: 'I usually reply within 24 hours.',

  /** "What I'm looking for" — pre-qualifies inbound and saves back-and-forth.
   *  TODO(wahaj): make every line accurate to your actual search. */
  lookingFor: [
    { label: 'Roles', value: 'SDET · QA Automation · DevOps Engineer' },
    { label: 'Level', value: 'Mid–Senior' },
    { label: 'Setup', value: 'Remote, or on-site in Lahore' },
    { label: 'Stack', value: 'Appium · Selenium · Python · GitLab CI · Docker / K8s' },
    { label: 'Notice period', value: '1 month' }, // TODO(wahaj)
    { label: 'Work eligibility', value: 'Pakistan-based · open to relocation & sponsorship' }, // TODO(wahaj)
  ],

  /** Reasons shown in the contact-form dropdown (helps you triage inbound). */
  contactReasons: ['Job opportunity', 'Contract / freelance', 'Collaboration', 'Something else'],

  /** Path (in /public) to the résumé PDF. TODO(wahaj): drop the real file at public/resume.pdf */
  resume: '/resume.pdf',

  /** Order here is the order shown in the header / footer. */
  socials: [
    { name: 'GitHub', handle: '@WahajT', url: 'https://github.com/WahajT', icon: 'github' },
    {
      name: 'LinkedIn',
      handle: 'in/wahaj-tahir',
      url: 'https://www.linkedin.com/in/wahaj-tahir',
      icon: 'linkedin',
    },
    { name: 'Email', handle: 'wahajtahir01@gmail.com', url: 'mailto:wahajtahir01@gmail.com', icon: 'mail' },
  ],

  /** GitHub username used by the build-time stats fetch (src/lib/github.ts). */
  githubUser: 'WahajT',

  /** Contact form. Web3Forms is free, static-friendly and needs no backend.
   *  1. Create an access key at https://web3forms.com (takes 30s, no account).
   *  2. Paste it below. Until then the form falls back to a mailto: link. */
  web3formsKey: '', // TODO(wahaj): paste Web3Forms access key

  /** Nav sections — id must match a section id in index.astro */
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export type Site = typeof site;
