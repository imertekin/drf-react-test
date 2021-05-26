import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import axios from 'axios'

class RoomJoinPage extends Component {
    

    
    handleInputCode=this.handleInputCode.bind(this)
    roomButtonPressed=this.roomButtonPressed.bind(this)
    
    state={
        roomCode:'',
        error:''
        

    }
    handleInputCode(e){
        this.setState({
         roomCode:e.target.value
        });
         }   

    roomButtonPressed(){
    axios.post('join-room/',{code:this.state.roomCode})
    .then((res) =>{
    if (res.statusText==='OK'){
        this.props.history.push('/room/'+this.state.roomCode)
    }
    
    })
    .catch( error => this.setState({error:'Room Not Found.'}))
  }
    
    

    render() {
        return (
            <div>
        <div className='container grid flex-col my-3 justify-items-center'> 
        <span className='text-6xl'> Create A Room</span>
            
        <label className="flex mr-20 text-sm font-bold text-gray-700 mt-14" htmlFor="username">

        <span className='w-3/6 mt-2'> ROOM CODE</span>
        <input className="w-5/6 px-5 py-2 ml-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
        id="username" 
        value={this.state.roomCode}
        onChange={this.handleInputCode}
        type="text" 
        
        placeholder="Room Code" />
        
      </label>
      <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-11 }">
			{this.state.error}
		</span>
      <div className='grid mr-56 '>
      <button className='min-w-full py-3 mt-5 ml-32 text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-blue-500 ' onClick={this.roomButtonPressed}>
           Enter Room</button>
           <Link className='w-1/2 px-20 py-2 mt-3 text-white bg-blue-800 rounded-md ml-52 hover:bg-indigo-900 focus:outline-none focus:ring-1 focus:ring-blue-500' to='/'>
      <button className=''> 
      BACK</button>
      </Link>
      
      </div>
      
            </div>
        </div>

            
        )
    }
}

export default RoomJoinPage

 