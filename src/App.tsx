import React from 'react';
import './App.css';
import Component from './components/Component';
import ClassComponent from './components/ClassComponent';

const App: React.FC = () => {
  return (
    <>
      <Component/>
      <ClassComponent/>
    </>
  );
}

export default App;
