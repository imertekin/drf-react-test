import React, { Component }  from 'react'

import HomePage from './components/HomePage'
import RoomJoinPage from './components/RoomJoinPage'
import CreateRoomPage from './components/CreateRoomPage'
import Room from './components/Room'
import Navbar from './components/navbar'
import login from './components/login'
import store, { Store } from './contexts/store'

import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom'
import token from './contexts/store'


export class App extends Component {

 

  render() {
    return (
      <div className='min-h-screen bg-gradient-to-r from-green-400 to-blue-500'>
        
          
       <Navbar />
       <HomePage />
            
      </div>
    )
  }
}

export default App

  
  
