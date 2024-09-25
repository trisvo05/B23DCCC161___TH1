import React from 'react';
import './App.css'; // Import CSS file
import TodoList from './TodoList';
import ImageSearch from './ImageSearch';
import ColorRandomizer from './ColorRandomizer';

const App = () => {
  return (
    <div className="container">
      <h1>My React App</h1>
      <TodoList />
      <ImageSearch />
      <ColorRandomizer />
    </div>
  );
};

export default App;
