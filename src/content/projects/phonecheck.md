---
title: PhoneCheck — automated device diagnostics
summary: Cross-platform Appium suite that verifies 100+ hardware and software checks on real devices before certification.
role: SDET / Automation Engineer
period: 2024 — Present
stack: ['Appium', 'Python', 'Selenium Grid', 'GitLab CI', 'Docker', 'Android', 'iOS']
impact:
  - 'TODO(wahaj): "Replaced a ~2-day manual regression pass with a 30-minute automated run."'
  - 'TODO(wahaj): "Caught N release-blocking regressions per month before they reached customers."'
  - 'TODO(wahaj): "Cut flaky-test rate from X% to Y% with retry + device-health gating."'
cover: ../../assets/projects/PhoneCheck.svg
coverAlt: PhoneCheck logo
coverFit: contain
featured: true
order: 1
links:
  - { label: 'Product site', url: 'https://www.phonecheck.com' }
---

## Context

PhoneCheck certifies the condition of used phones and tablets for resellers and
carriers. A certification run touches dozens of subsystems — battery health,
touch, cameras, sensors, radios, storage, OS integrity — across a long tail of
Android and iOS models. Before automation, each release of the diagnostics app
was validated by hand on a rack of reference devices.

> TODO(wahaj): 1–2 sentences on team size, release cadence, and why manual
> validation had become the bottleneck.

## Problem

- Manual regression took **[TODO: ~2 engineer-days]** per release and still
  missed edge cases on less-common models.
- Device-specific failures were hard to reproduce and often slipped to
  production, where a bad check erodes trust in the certification.
- No fast signal for the app team — feedback arrived days after a change.

## What I built

- A **Page Object–structured Appium framework** in Python that drives the real
  diagnostics app on physical Android and iOS devices, asserting on both the
  UI state and the underlying check results.
- A **device-health pre-flight** that quarantines a handset (low battery, no
  network, stuck sensor) before it can produce a misleading test failure.
- **Parallel execution** across a Selenium/Appium grid, sharded by platform and
  model, wired into **GitLab CI** so every merge request runs the smoke tier and
  nightly runs the full matrix.
- **Actionable reporting** — per-check pass/fail with screenshots and device
  logs attached, published as a CI artifact the app team can open directly.

## Impact

> TODO(wahaj): replace the bullets in the frontmatter above with real numbers,
> then mirror them here with a sentence of context each.

## Stack notes

Python + Appium client, Selenium Grid for device orchestration, Docker for the
runner image, GitLab CI for scheduling and reporting. Android debugging via adb;
iOS via Xcode command-line tools and WebDriverAgent.
