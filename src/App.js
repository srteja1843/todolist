import React, { useState } from 'react';

const App = () => {
  const [getValue, setInputList] = useState('');
  const [items, setItems] = useState([]);
  const handleChange = (event) => {
    setInputList(event.target.value);
  };
  const addItems = () => {
    if (getValue.trim()) {
      setItems((prevState) => {
        return [...prevState, getValue];
      });
      setInputList('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        placeholder='add items'
        onChange={handleChange}
        value={getValue}
      />
      <button onClick={addItems}>Add Item</button>

      <ul>
        {items.map((items) => {
          return <li>{items}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
