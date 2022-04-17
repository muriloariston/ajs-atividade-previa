import React from 'react';

export default function Task({ node, toggle }) {
  const handleClick = (e) => {
    e.preventDefault();
    toggle(e.currentTarget.id);
  };

  return (
    <button
      className={`list-group-item list-group-item-action ${
        node.situacao ? 'list-group-item-dark realizada' : ''
      }`}
      type="button"
      id={node.id}
      key={node.id + node.descricao}
      value={node.id}
      name="task"
      onClick={handleClick}
    >
      {node.descricao}
    </button>
  );
}
