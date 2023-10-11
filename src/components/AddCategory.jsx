import { useState } from 'react';
import  PropTypes  from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return;

    setInputValue('');
    onNewCategory(newInputValue);
  };

  return (
    <form onSubmit={onSubmit} className="mb-4 bg-slate-800 rounded-md p-4">
      <input
        type="text"
        placeholder="Buscar Gifs..."
        value={inputValue}
        onChange={onInputChange}
        className="border-2 border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
      />
    </form>
  );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired, // onNewCategory debe ser una función y es requerida
  };
