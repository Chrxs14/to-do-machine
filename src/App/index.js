import React from 'react';
import './App.css';
import { TodoProvider } from '../TodoContext';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { AppUi } from './AppUi'
import { HomePage } from './hompage';

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path='/to-do-machine' element={<HomePage/>}/>
          <Route path='/to-do-machine/home' element={<AppUi/>}/>
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
