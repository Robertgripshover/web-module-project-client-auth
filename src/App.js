import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import AddFriend from './components/AddFriends';
import FriendsList from './components/FriendsList';
import Login from './components/Login';


function App() {
  return (

  
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className='link' to='login'>Login</Link>
          <Link className='link' to='friends'>Friends List</Link>
          <Link className='link' to='friends/add'>Add Friends</Link>
          <Link className='link' to='/'>Log Out</Link>
        </header>
        
        <Route exact path='/'>
          <Login/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

        <Route exact path='/friends'>
          <FriendsList/>
        </Route>

        <Route exact path='/friends/add'>
          <AddFriend/>
        </Route>
          
      </div>
  
    
  );
}

export default App;
