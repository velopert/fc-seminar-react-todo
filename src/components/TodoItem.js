import React from 'react';
import './TodoItem.css';

const TodoItem = ({ checked, text, id, onCheck, onRemove }) => {
  return (
    <div
      className={`TodoItem ${checked && 'active'}`}
      onClick={() => onCheck(id)}
    >
      <div className="check">&#10004;</div>
      <div className="text">{text}</div>
      <div
        className="remove"
        onClick={e => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        [지우기]
      </div>
    </div>
  );
};

export default TodoItem;
