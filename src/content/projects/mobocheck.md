---
title: Mobocheck — diagnostics test pipeline
summary: End-to-end automation and delivery pipeline for a mobile device-grading app, from unit checks to on-device acceptance.
role: SDET / DevOps Engineer
period: 2023 — 2024
stack: ['Appium', 'JavaScript', 'Cypress', 'Docker', 'Kubernetes', 'GitLab CI', 'Ansible']
impact:
  - 'TODO(wahaj): "Took build + test feedback from ~45 min to ~12 min with parallel shards."'
  - 'TODO(wahaj): "Gave QA one-command, per-branch test environments via Kubernetes."'
  - 'TODO(wahaj): "Raised release cadence from monthly to [weekly / on-demand]."'
cover: ../../assets/projects/mobocheck.png
coverAlt: Mobocheck logo
coverFit: contain
featured: true
order: 2
links: []
---

## Context

Mobocheck grades the physical and functional condition of mobile devices at
intake. The app has to behave identically across a wide device matrix, and the
grading logic changes often as new models and defect types are added.

> TODO(wahaj): 1–2 sentences on where this sat relative to PhoneCheck (same
> company? earlier product?), team, and your remit.

## Problem

- Test and deploy steps were **manual and serial** — roughly 45 minutes of
  babysitting per release candidate.
- Environments drifted: "works on my machine" failures cost hours to untangle.
- Adding a device or defect type meant editing brittle, copy-pasted test code.

## What I built

- A **layered automation suite** — fast Cypress/JavaScript checks for the web
  console, Appium checks for the on-device grading flow — with shared fixtures
  so a new device is a config entry, not new code.
- **Containerised runners** (Docker) provisioned with **Ansible**, and
  **per-branch ephemeral environments** on **Kubernetes** so QA can validate a
  change in isolation with a single command.
- A **GitLab CI pipeline** with parallel test shards, artifact-published reports,
  and a gated deploy stage.

## Impact

> TODO(wahaj): replace with real figures and add one sentence of context each.

## Stack notes

JavaScript/Cypress + Appium, Docker + Ansible for the runner image, Kubernetes
for ephemeral environments, GitLab CI for orchestration.
