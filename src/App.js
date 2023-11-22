import React , {useState} from 'react'
import './App.css';
import Main from './pages/Main/index';
import Documentation from './pages/Documentation/index'
import PlayGround from './pages/Playground';
import Dashboard from './pages/Dashboard';
import "@fontsource/zen-dots";


function App() {

  return (
      <div className=' w-full bg-Dark'  style={{fontFamily: 'Trebuchet MS' }}>
          <Dashboard />
          

      </div>
  );
}


export default App;


// ElasticSearch, Redis, ApolloServer, Nest.js



