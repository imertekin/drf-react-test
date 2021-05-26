import React, { Component } from 'react'

import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom'



import RoomJoinPage from './RoomJoinPage'
import CreateRoomPage from './CreateRoomPage'
import Room from './Room'
import login from './login'
import Navbar from './navbar'
import axios from 'axios'



export class HomePage extends Component {

    constructor(props) {
        super(props);       
}
    state={
        roomCode:null,
    }

    async componentDidMount(){
        axios.get('user-in-room/')
        .then((res)=> res.data)
        .then((data)=> 
        this.setState({
            roomCode:data.code
        })

        )
        console.log(this.state.roomCode)
        
        
    }

    renderHomePage(){
        return(
            <div>
                <div className='grid flex-wrap content-center justify-center h-96'>

                <span className='text-6xl text-yellow-400 font-body'>HOUSE PARTY</span>
                <div className='flex mt-4 ml-16 '>
                <Link to='/join'>
                <button className='px-5 py-3 text-white bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'>
           Join A Room</button>
           </Link>
           <Link to='/create'>
           <button className='px-5 py-3 text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-blue-500' to='/create'> 
               Create A Room
               </button>
               </Link>
                

           </div>
                </div>
            </div>

        );
    }




    render() {
        return (
            <div className=''>
            
            <Router>
                <Switch>
                    <Route exact path='/' render={()=>{
                        
                        return this.state.roomCode ? (
                        <Redirect to ={'/room/${this.state.roomCode}'}/>) 
                        : ( 
                            this.renderHomePage()
                        );
                    }}               
                                              
                    / >
                      
                        
                    <Route path='/join' component={RoomJoinPage}></Route>
                    <Route path='/create' component={CreateRoomPage}></Route>
                    <Route path='/room/:roomCode' component={Room}></Route>
                    <Route path='/login' component={login}></Route>
                    

                </Switch>

            </Router>

            </div>
 
        )
}
}
export default HomePage
