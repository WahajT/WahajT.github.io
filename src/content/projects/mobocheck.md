---
title: Kazzah / Mobocheck — mobile QA & release flow
summary: Manual + script-assisted QA for consumer mobile apps, with Appium scripts for repeat checks and a clean Git-to-production release flow.
role: Software QA · Scrum Master · Techandover
period: 2023 — 2024
stack: ['Appium', 'Manual QA', 'Jira', 'Git', 'GitLab']
impact:
  - 'TODO(wahaj): "Cut repeat regression time by ~X% with Appium scripts for the highest-churn flows."'
  - 'TODO(wahaj): "Ran N sprints as Scrum Master with zero release-blocking defects escaping to production."'
cover: ../../assets/projects/mobocheck.png
coverAlt: Mobocheck logo
coverFit: contain
featured: true
order: 2
links: []
---

<!-- TODO(wahaj): confirm how Mobocheck relates to this work (the Techandover
     Kazzah / Kazzah Pro apps). If Mobocheck is a separate product, split this
     into its own case study; otherwise adjust the title. -->

## Context

At Techandover I owned QA for consumer mobile apps (Kazzah and Kazzah Pro) and
also ran the process side as Scrum Master. The apps shipped often, so the goal
was reliable coverage without letting a slow manual pass gate every release.

> TODO(wahaj): 1–2 sentences on team size, release cadence and your remit.

## Problem

- Full manual regression on every build was slow and repetitive.
- Source moved through development → staging → production by hand, which left
  room for merge conflicts and "which build is live?" confusion.
- The team needed tighter sprint planning and a clearer backlog.

## What I did

- Wrote **Appium scripts** (source on GitHub) for the highest-churn flows so
  repeat checks stopped eating manual time.
- Kept a disciplined **Git promotion flow** in GitLab from development to
  staging to production, with no lingering conflicts.
- Served as **Scrum Master** — built the backlog, ran stand-ups and shaped
  sprints in Jira.

## Impact

> TODO(wahaj): replace the frontmatter bullets with real figures and mirror
> them here with a sentence of context each.

## Stack notes

Appium for the automated checks, manual testing for exploratory and release
sign-off, Jira for planning, Git + GitLab for source control and promotion.
