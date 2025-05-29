# Task Filter Feature

## Functionality
Allows filtering tasks by title using an input field and a button. Uses `Input` and `Button` from `@task-manager/ui-components`.

## Architecture
- **Component**: `TaskFilter`
- **Props**: Accepts an `onFilter` callback to pass the filter value.
- **Dependencies**: Integrates `ui-components` (Input, Button).
- **Usage**: Renders an input for filtering tasks and a button to apply the filter.