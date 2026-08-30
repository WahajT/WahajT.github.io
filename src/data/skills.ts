/* =========================================================================
   Skills — grouped, strengths first. No percentage bars (they imply a
   precision that isn't real). `level` is a plain signal:
     'primary' → use daily, would be comfortable in an interview deep-dive
     'working' → productive with it, reach for it when a project needs it
   Sourced from Wahaj's résumé (public/resume.pdf) + role details.
   ========================================================================= */

import type { ImageMetadata } from 'astro';

import appium from '@/assets/tech/appium.svg';
import selenium from '@/assets/tech/selenium.svg';
import cypress from '@/assets/tech/cypress.svg';
import robot from '@/assets/tech/robotframework.svg';
import postman from '@/assets/tech/postman.svg';
import gitlab from '@/assets/tech/gitlab.svg';
import jenkins from '@/assets/tech/jenkins.svg';
import docker from '@/assets/tech/docker.svg';
import kubernetes from '@/assets/tech/kubernets.svg';
import ansible from '@/assets/tech/ansible.svg';
import python from '@/assets/tech/python.svg';
import javascript from '@/assets/tech/javascript.svg';
import bash from '@/assets/tech/bash.svg';
import go from '@/assets/tech/GO.svg';
import jupyter from '@/assets/tech/jupyter.svg';
import pandas from '@/assets/tech/pandas.svg';
import sklearn from '@/assets/tech/scikit-learn.svg';
import latex from '@/assets/tech/latex.svg';

export interface Skill {
  name: string;
  icon?: ImageMetadata;
  level: 'primary' | 'working';
}

export interface SkillGroup {
  title: string;
  blurb: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Test automation',
    blurb: 'Framework design, BDD, flaky-test triage, cross-platform mobile + web coverage.',
    skills: [
      { name: 'Selenium', icon: selenium, level: 'primary' },
      { name: 'Appium', icon: appium, level: 'primary' },
      { name: 'Playwright', level: 'primary' },
      { name: 'Cypress', icon: cypress, level: 'primary' },
      { name: 'Cucumber / Gherkin', level: 'primary' },
      { name: 'Postman / REST', icon: postman, level: 'primary' },
      { name: 'TestNG', level: 'working' },
      { name: 'Pytest', level: 'working' },
      { name: 'Robot Framework', icon: robot, level: 'working' },
    ],
  },
  {
    title: 'CI/CD & DevOps',
    blurb: 'Pipeline design, containerised test environments, agile delivery tooling.',
    skills: [
      { name: 'Git', level: 'primary' },
      { name: 'Jenkins', icon: jenkins, level: 'primary' },
      { name: 'Docker', icon: docker, level: 'primary' },
      { name: 'Azure DevOps', level: 'primary' },
      { name: 'Bitbucket Pipelines', level: 'working' },
      { name: 'GitLab CI', icon: gitlab, level: 'working' },
      { name: 'Kubernetes', icon: kubernetes, level: 'working' },
      { name: 'Ansible', icon: ansible, level: 'working' },
    ],
  },
  {
    title: 'Languages',
    blurb: 'Automation code, tooling, and glue scripts.',
    skills: [
      { name: 'Python', icon: python, level: 'primary' },
      { name: 'JavaScript', icon: javascript, level: 'primary' },
      { name: 'Java', level: 'primary' },
      { name: 'C#', level: 'primary' },
      { name: 'C / C++', level: 'working' },
      { name: 'Go', icon: go, level: 'working' },
      { name: 'Bash', icon: bash, level: 'working' },
    ],
  },
  {
    title: 'Data & ML',
    blurb: 'Exploratory analysis and modelling from academic and internship work.',
    skills: [
      { name: 'pandas', icon: pandas, level: 'working' },
      { name: 'NumPy', level: 'working' },
      { name: 'Matplotlib', level: 'working' },
      { name: 'scikit-learn', icon: sklearn, level: 'working' },
      { name: 'Gradio', level: 'working' },
      { name: 'Jupyter', icon: jupyter, level: 'working' },
    ],
  },
  {
    title: 'Platforms & tooling',
    blurb: 'The rest of the day-to-day toolkit.',
    skills: [
      { name: 'Android / iOS', level: 'primary' },
      { name: 'Jira', level: 'primary' },
      { name: 'MySQL', level: 'working' },
      { name: 'MongoDB', level: 'working' },
      { name: 'LaTeX', icon: latex, level: 'working' },
    ],
  },
];
