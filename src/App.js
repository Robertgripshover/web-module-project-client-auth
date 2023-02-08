import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import AddFriend from './components/AddFriends';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (

  
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className='link' to='/'>Login</Link>
          <Link className='link' to='friends'>Friends List</Link>
          <Link className='link' to='friends/add'>Add Friends</Link>
          <Link className='link' to='/logout'>Log Out</Link>
        </header>
        
        <Route exact path='/'>
          <Login/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

        <PrivateRoute exact path='/friends' component={FriendsList}/>


        <PrivateRoute exact path='/friends/add' component={AddFriend}/>


        <PrivateRoute exact path='/logout' component={Logout}/>

          
      </div>
  
    
  );
}

export default App;
