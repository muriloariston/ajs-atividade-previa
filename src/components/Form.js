import React, { useState } from 'react';

export default function Form({ newTaskNode, filter }) {
  const [inputTask, setInputTask] = useState('');

  const handleChange = (e) => {
    setInputTask(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTask !== '') newTaskNode(inputTask);
    setInputTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label forName="inputDescricao">Descrição</label>
          <input
            type="text"
            name="inputDescricao"
            className="form-control"
            value={inputTask}
            onChange={handleChange}
            placeholder="Nova tarefa"
          />
        </div>
      </div>
      <button className="btn btn-primary">Adicionar</button>
      <button onClick={filter} className="btn btn-danger">
        Remover finalizadas
      </button>
    </form>
  );
}
