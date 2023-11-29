import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTask from './AddTask';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AddTask />} />
          <Route path="/list" element={<TaskList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
