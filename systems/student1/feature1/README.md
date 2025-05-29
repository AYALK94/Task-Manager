# Task Priority Feature

## Functionality
Displays a task with a button to mark its priority (e.g., Normal). Uses `truncateString` from `@task-manager/utils` to shorten the task title and `Button` and `Card` from `@task-manager/ui-components`.

## Architecture
- **Component**: `TaskPriority`
- **Props**: Accepts a `task` object with `title` and optional `priority`.
- **Dependencies**: Integrates `ui-components` (Button, Card) and `utils` (truncateString).
- **Usage**: Renders a card with a truncated task title and a styled button.