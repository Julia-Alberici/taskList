import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

export default function Form({ handlerSubmit, handlerChange, novaTarefa }) {
  return (
    <form onSubmit={handlerSubmit} action="#" className="form">
      <input onChange={handlerChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handlerSubmit: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
