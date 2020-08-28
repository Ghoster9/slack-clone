import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>HELLO jack programer</h1>
      <Header />
      <div className="app__body">
        <Sidebar/>
        {/* sidebar */}
        {/* react-router chatscren */}
      </div>
    </div>
  );
}

export default App;
