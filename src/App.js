import React from 'react';
import './App.css';
import Chat from './Component/Chat';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <div className="app">
          {/* Let's Start */}
                  
          {/* Wrap the Component */}
          <div className="app__body">
            <Sidebar/>
            <Chat/>
          </div>

    </div>
  );
}

export default App;
