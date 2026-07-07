# Lab Structure Pattern

## Purpose

The Lab structure supports practice, assessment, reinforcement, and applied learning. It is designed for fast interaction while preserving accessibility, clarity, and learner control.

## When to use this pattern

Use this pattern for applications that present questions, scenarios, practice tasks, timed exercises, review modes, or skill checks.

## Core structure

A Lab application may include:

- Mode selection.
- Current question or task.
- Answer choices or task controls.
- Feedback.
- Explanation.
- Progress information.
- Timing controls when appropriate.
- Keyboard shortcuts.
- Results and review.

## Question bank standard

Question bank data should be structured so it can support multiple modes.

Recommended fields include:

- Unique question ID.
- Domain.
- Lesson.
- Learning objective.
- Difficulty.
- Question.
- Four answer choices when using multiple choice.
- Correct answer.
- Explanation.

## Mode behavior

Lab modes should have clear boundaries.

Reinforce mode should use only the current lesson's question pool.

Practice mode may use the current lesson and earlier lessons in the same domain.

Challenge mode may combine the current lesson with earlier domains when appropriate.

Sprint mode may use time-limited practice, but should not announce correctness until the end if doing so would interfere with speed and concentration.

## Answer order

Answer choices should be randomized in a way that preserves the correct answer mapping.

The correct answer must not consistently appear in the same position.

Randomization should be tested with screen readers and keyboard shortcuts.

## Feedback behavior

Feedback should be clear, concise, and tied to the learner's action.

Feedback should include:

- Whether the answer was correct.
- The correct answer when appropriate.
- A plain language explanation.
- The concept being reinforced.

Timed modes may delay correctness feedback until the end to preserve flow.

## Keyboard expectations

Lab applications should support efficient keyboard use.

Shortcuts may be provided for common actions when they do not conflict with browser or assistive technology commands.

When shortcuts are used, they should be documented in the interface and behave consistently across Lab applications.

## Screen reader expectations

The current question should be easy to locate.

Answer choices should have clear labels.

Feedback should be announced after the learner answers.

Status messages should not speak over question content or timed practice audio.

## Mobile and reflow expectations

Questions, answers, controls, feedback, and progress should remain usable in a single-column layout.

Touch targets should be comfortable.

Timed modes should not depend on visual-only cues.

## Preservation note

The Lab structure is an official Open Door Design pattern. Future practice applications should begin from this pattern so learners encounter familiar modes, feedback behavior, keyboard expectations, and screen reader interaction.
