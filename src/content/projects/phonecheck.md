---
title: PhoneCheck — mobile component-authenticity diagnostics
summary: Python + Appium suite that drives real Android and iOS devices to tell genuine components (OEM parts, ESNs, MDM) from counterfeit.
role: SQA Automation Engineer · Upgenics
period: 2024 — 2025
stack: ['Python', 'Appium', 'Selenium', 'Docker', 'Jenkins', 'Postman', 'Android', 'iOS']
impact:
  - 'TODO(wahaj): "Replaced a ~N-hour manual pass with a ~M-minute automated run."'
  - 'TODO(wahaj): "Caught N release-blocking regressions per month before they reached customers."'
  - 'TODO(wahaj): "Cut flaky-test rate from X% to Y% with retry + device-health gating."'
cover: ../../assets/projects/PhoneCheck.svg
coverAlt: PhoneCheck logo
coverFit: contain
featured: true
order: 1
links: []
---

<!-- TODO(wahaj): confirm the PhoneCheck framing — was this the product name, a
     client, or an internal reference? Adjust the title/links accordingly. -->

## Context

At Upgenics I worked on a diagnostic platform that inspects a used phone or
tablet and decides whether its components are genuine — OEM parts, matching
ESNs, a clean MDM state. A full run touches many subsystems across a long tail
of Android and iOS models, and every wrong verdict erodes trust in the report.

> TODO(wahaj): 1–2 sentences on team size, release cadence, and why manual
> validation had become the bottleneck.

## Problem

- Manual verification was slow and still missed edge cases on less-common
  models.
- Device-specific failures were hard to reproduce and sometimes slipped to
  production.
- Package and OS-version drift between machines made "works on my setup"
  failures expensive to untangle.

## What I built

- A **Page Object–structured Appium framework** in Python that drives the real
  diagnostics app on physical Android and iOS devices, asserting on both the
  UI state and the underlying check results, with the source on GitHub.
- **Web-app coverage with Selenium**, plus cross-browser checks for
  compatibility.
- **Containerised test scripts with Docker** (mobile and web) so the suite runs
  the same way regardless of local package versions.
- **Jenkins CI/CD pipelines** for build, test and deployment, and **Postman**
  API tests for the REST services behind the diagnostics.
- Detailed bug reports and managed test cases for traceability.

## Impact

> TODO(wahaj): replace the bullets in the frontmatter above with real numbers,
> then mirror them here with a sentence of context each.

## Stack notes

Python + Appium client for on-device automation, Selenium for the web console,
Docker for a reproducible runner image, Jenkins for scheduling, Postman for the
API tier. Android debugging via adb; iOS via Xcode command-line tools.
