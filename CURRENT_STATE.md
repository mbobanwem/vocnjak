# CURRENT STATE

## Tech
- single-file index.html (~1300+ lines)
- vanilla JS
- localStorage
- PWA (manifest + service worker)

## Data model (old)
- data[plantId].entries[]
- data[plantId].todos[]
- per-plant structure

## Problems
- duplicated entries for multi-plant actions
- hard to query globally
- growing complexity in render functions
- duplicated helper logic

## UX issues (to be improved)
- dashboard clarity
- add activity flow
- plant detail usability
- calendar usefulness

## Goal now
Migrate to new data model safely without breaking app.
