import React, { useState } from 'react';
import { Button, Input } from '@task-manager/ui-components';
import { formatDate } from '@task-manager/utils';

export const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && dueDate) {
      onAddTask({ title, dueDate: formatDate(dueDate) });
      setTitle('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};