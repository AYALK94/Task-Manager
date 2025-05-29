import React, { useState } from 'react';
import { Input, Button } from '@task-manager/ui-components';

export const TaskFilter = ({ onFilter }) => {
  const [filter, setFilter] = useState('');

  const handleFilter = () => {
    onFilter(filter);
  };

  return (
    <div>
      <Input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter tasks by title"
      />
      <Button onClick={handleFilter}>Apply Filter</Button>
    </div>
  );
};