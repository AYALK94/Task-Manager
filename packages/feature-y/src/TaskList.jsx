import React from 'react';
import { Card } from '@task-manager/ui-components';
import { truncateString } from '@task-manager/utils';

export const TaskList = ({ tasks }) => (
  <div>
    <h2>Tasks</h2>
    {tasks.length === 0 ? (
      <p>No tasks available.</p>
    ) : (
      tasks.map((task) => (
        <Card key={task.id}>
          <h3>{truncateString(task.title, 20)}</h3>
          <p>Due: {task.dueDate}</p>
        </Card>
      ))
    )}
  </div>
);