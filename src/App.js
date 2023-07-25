import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
