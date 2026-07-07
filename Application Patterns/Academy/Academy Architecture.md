# Academy Architecture

## Purpose

The Academy pattern defines how Open Door Design builds structured learning applications, including certification preparation courses, professional training, and guided educational experiences.

The pattern is designed for learners who may use a keyboard, screen reader, magnification, speech recognition, touch, or a combination of tools.

## Core principle

The learner should focus on learning, not on figuring out the course interface.

The Academy interface must remain predictable across domains, lessons, review pages, practice activities, and future courses.

## Required application areas

An Academy application should include these major areas when relevant:

- Home page
- Domain overview pages
- Lesson pages
- Review lesson pages
- Library or reference section
- Progress reporting
- Practice or lab entry points
- Accessibility and help information

## Home page requirements

The home page should provide a clear course title, a short course purpose statement, and direct access to domains or major course sections.

The home page is the only page where the H1 may use the full course title as the primary page heading.

## Domain page requirements

A domain page introduces one major content area and provides access to its lessons.

A domain page should include:

- Domain title
- Domain overview
- Lesson list
- Progress or completion state when available
- Navigation back to the course home

## Lesson page requirements

A lesson page is the primary instructional unit.

A lesson page should include:

- Page title matching the lesson
- One H1 identifying the domain and lesson
- Lesson overview
- Related Library Topics when relevant
- Part controls
- Lesson content
- Progress reporting
- Previous, related, next, and home navigation when applicable

## Review lesson requirements

A review lesson synthesizes a domain. It should not simply repeat lesson content.

A review lesson should help learners connect concepts, recognize scenario patterns, prepare for assessment, and summarize the domain in plain language.

## Library requirements

The library provides optional reference support. It must not interrupt the main lesson flow.

Library topics should be relevant, clearly named, and easy to skip when the learner wants to continue the lesson.

## Progress requirements

Progress reporting should help the learner understand position and completion without creating noise.

Progress may include:

- Course progress
- Domain progress
- Lesson progress
- Position within the current lesson
- Lesson completion state

## Screen reader requirements

The Academy must be efficient with a screen reader, not merely compatible.

Screen reader users should be able to:

- Identify the current page from the title and H1.
- Move through lesson parts with headings.
- Find controls with button navigation.
- Understand progress without hearing repetitive announcements.
- Return to the main content quickly.

## Keyboard requirements

All Academy workflows must be operable by keyboard.

Keyboard users should never need to tab through excessive repeated content to reach the lesson task.

## Mobile and reflow requirements

Academy pages must reflow without horizontal scrolling at 320 CSS pixels and should remain usable at 280 CSS pixels where practical.

Controls should remain large enough for touch and easy to reach with mobile screen reader navigation.

## Why this pattern exists

The Academy pattern preserves the structure developed for the CPACC Accessibility Academy so future courses can reuse a proven learning architecture instead of rebuilding the course interface from scratch.
