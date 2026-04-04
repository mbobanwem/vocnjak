# VALIDATION CONTEXT

## Purpose
This file provides additional context for migration validation.

A real backup JSON file (e.g. vocnjak-backup-2026-04-01c.json) may be included in the project.

## Rules

- The backup JSON is used ONLY for:
  - understanding real data shape
  - validating migration logic
  - checking edge cases

- The backup JSON is NOT a source of truth for:
  - data model
  - field names
  - structure
  - business logic

## Priority

If any conflict exists:

MIGRATION_PLAN_V1.md ALWAYS wins.

## Important

- Do NOT change migration logic based on backup content
- Do NOT "adapt" schema to match backup
- Do NOT introduce new fields based on backup

## Goal

Use backup ONLY to:
- verify assumptions
- test migration output
- ensure no data loss
