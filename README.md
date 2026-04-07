# Vocnjak App

Orchard-first, iPhone-first PWA for managing fruit trees, activities, and seasonal plans.

---

## Overview

Vocnjak App is a simple, local-first application designed for real-world orchard management.

It helps track:
- fruit trees (plants)
- activities (spraying, pruning, etc.)
- seasonal plans

The app is evolving from a personal tool into a structured product.

---

## Tech

- single-file app (index.html)
- vanilla JavaScript
- localStorage persistence
- Progressive Web App (PWA)
- no framework
- no build step

---

## Data Model

Current model (v4):

- plants → object keyed by id
- activities → global array
- plans → global array

Legacy v3 exists only for migration compatibility.

---

## Project Structure

Key documents:

- MIGRATION_PLAN_V1.md → LOCKED (data model rules)
- TARGET_ARCHITECTURE_V1.md → target system design
- CURRENT_STATE.md → what is already implemented
- EXECUTION_ROADMAP_V1.md → development plan
- UX_IMPROVEMENTS.md → UX direction
- DOMAIN_DIRECTION_V2.md → domain logic and rules

---

## Development Principles

- orchard-first (not generic gardening)
- mobile-first (one-handed use)
- smallest working solution
- no over-engineering
- no frameworks

---

## Status

- v4 data model implemented
- core flows working:
  - migration
  - overview
  - plant detail
  - add activity
  - calendar

Next:
→ plan matching and orchard intelligence

---

## Important

- v4 is the active model
- legacy v3 must not be extended
- MIGRATION_PLAN_V1.md is the source of truth for data structure