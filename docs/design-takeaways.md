# Design takeaways applied from adhd-design-language

Source: the shared ADHD-friendly design language.

This file is an application guide for `life-os`, not a fork of the design language.

## 1. Plain files stay canonical

`life-os` stores intent, decisions, and architecture in Markdown. Apps and agents may read, index, summarize, or render these files, but should not become the only place where the truth exists.

## 2. Capture is zero-decision

Raw thoughts go to `inbox/capture.md` unless a more specific destination is obvious. Capture should not require choosing a domain, project, tag, priority, or due date.

## 3. One next action per surface

Planning outputs should end with one concrete next action, not a wall of tasks. Full decomposition belongs behind the default view.

Action items use:

- `⏱ Size`
- `▶ Next action`
- `✓ Done when`

## 4. Tasks and knowledge decay differently

- Knowledge should remain searchable and can resurface later.
- Tasks should be allowed to become paused, not-now, or iceboxed without guilt.
- Nothing should be visibly destroyed without user control.

## 5. Re-entry beats organization

Every project/domain should leave breadcrumbs: current breakpoint, next action, done-when, and any decision gate. This prevents "coming back cold" after a lapse.

## 6. Dashboards are derived, not moral scoreboards

Any future dashboard should show curated slices and next actions, not raw backlog counts, overdue counters, streaks, or red badges.

## 7. Agents present options, then ask once

Agent interactions should summarize the current state, offer a few options, and ask at most one question. Blank prompts should be avoided when recognition would work better.

## 8. Automation must be bounded and explainable

If automation ranks, archives, decays, or suggests something, it should be able to answer "why this?" in a quiet line. If it produces a pile, caps or limits must be visible.

## 9. Source evidence is part of the product

The zip research sharpened this: every generated task, commitment, reminder, or recommendation needs visible provenance. Email-derived tasks should show the account, thread, and quote. Calendar prep should show the event. Finance cards should show the spreadsheet/source row. If the system cannot explain where something came from, it should not present it as obligation.

## 10. Email is intake, not the task system

Email can contain evidence and commitments, but Life-OS should not make the inbox itself canonical work. Extract proposed commitments, preserve thread provenance, then let the user approve, schedule, split, snooze, or release.

## 11. Calendar is execution-time, not truth for every plan

Calendar is for hard events, time blocks, near-term reminders, travel/event plans, and execution windows. Life-OS may propose calendar blocks, but calendar writes start approval-gated.

## 12. Build small surfaces, not a control center

The research reinforced that dashboards are tempting but dangerous. The first UI should be a reusable action-card pattern and today/re-entry surface: one action, quick capture, source evidence, and a receipt trail.
