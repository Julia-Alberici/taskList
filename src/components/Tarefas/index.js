import React from 'react';
import './Tarefas.css';
import PropTypes from 'prop-types';
import { FaWindowClose, FaEdit } from 'react-icons/fa';

export default function Tarefas({ tarefas, handlerEdit, handlerDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          { tarefa }
          <div>
            <FaEdit
              className="edit"
              onClick={(e) => handlerEdit(e, index)}
            />
            <FaWindowClose
              className="close"
              onClick={(e) => handlerDelete(e, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handlerEdit: PropTypes.func.isRequired,
  handlerDelete: PropTypes.func.isRequired,
};
