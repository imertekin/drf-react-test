import axios from 'axios';
import React, { Component } from 'react'

export class Room extends Component {
    constructor(props) {
        super(props);
       
        this.roomCode=this.props.match.params.roomCode;
        this.getRoomDetails();
        
    }
    state={
        guestCanPause:false+'',
        votesToSkip :2,
        isHost:false+''
            
    };

    getRoomDetails(){
        axios.get('get-room'+'?code='+this.roomCode)
        .then((data)=>{
            this.setState({
                votesToSkip:data.votes_to_skip,
                guestCanPause:data.data.guest_can_pause,
                isHost:data.data.is_host,
            })
        })
        .catch( error => console.error(error))
        

    }




    render() {
        return (
            <div className='container grid flex-col my-3 justify-items-center'>
                <h3>{this.roomCode} </h3>
                <p>Votes :{this.state.votesToSkip} </p>
                <p>Guest Can Pause: {this.state.guestCanPause.toString()} </p>
                <p>Host : {this.state.isHost.toString()} </p>
                
            </div>
        )
    }
}

export default Room
