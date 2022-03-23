import React from 'react';
import './App.css';
import { TodoProvider } from '../TodoContext';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { AppUi } from './AppUi'
import { HomePage } from './hompage';

function App() {
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;
