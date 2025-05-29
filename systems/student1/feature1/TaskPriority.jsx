import React from 'react';
import { Button, Card } from '@task-manager/ui-components';
import { truncateString } from '@task-manager/utils';

export const TaskPriority = ({ task }) => (
  <Card>
    <h3>{truncateString(task.title, 15)}</h3>
    <Button style={{ background: '#28a745' }}>
      Mark as {task.priority || 'Normal'}
    </Button>
  </Card>
);