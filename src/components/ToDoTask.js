import React from 'react';
import Task from './Task';

export default function ToDoTask({ tasks, toggle, filter }) {
  return (
    <div>
      <div className="list-group">
        {tasks.map((task) => {
          return <Task node={task} toggle={toggle} filter={filter} />;
        })}
      </div>
    </div>
  );
}
