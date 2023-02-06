import React from 'react';
import './App.css';
import FreindList from './components/FreindsList'; //<< the FreindList component I am making from scratch
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <FreindList />
    </div>
  );
}

export default App;
