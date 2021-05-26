import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CreateRoomPage extends Component {

    constructor(props) {
        super(props);
        this.handleGuestCanPause = this.handleGuestCanPause.bind(this)
        this.handleRoomButtonPressed=this.handleRoomButtonPressed.bind(this)
        this.handleVotesChange=this.handleVotesChange.bind(this)
        this.state={
            guestCanPause:true,
            votesToSkip :this.defaultVotes,
            
            
        };
    }

    handleVotesChange(e){
        this.setState({
            votesToSkip: e.target.value,

        });
    }
    handleGuestCanPause(e){
        this.setState({
            guestCanPause: e.target.value === 'true' ? true:false,
            
            
        });
       
        
        
    }

    handleRoomButtonPressed(){
        const requestOptions={
                votes_to_skip:this.state.votesToSkip,
                guest_can_pause:this.state.guestCanPause,
            };
        axios.post('http://127.0.0.1:8000/api/create',requestOptions)
        .then(res=> {
            console.log(res);
            
        }
                )
        .catch( error => console.error(error))


    }

    render() {
        return (
            <div>
                <div className='container grid flex-col my-3 justify-items-center'>
                    <span className='text-6xl'> Create A Room</span>
                    <span className='my-3 text-gray-600 text-opacity-50'> Guest Control of Playback State</span>
                    <div className='flex justify-between row' defaultValue='true' onChange={this.handleGuestCanPause} >

                        <label className='grid '>
                            <input type="radio" className="w-4 h-4 mt-2 form-radio ml-7 " name="radio-sizes" value='true'  />
                            <span className="mr-7">Play / Pause</span>
                        </label>


                        <label className='grid '>
                            <input type="radio" className="w-4 h-4 mt-2 form-radio ml-7 " name="radio-sizes" value='false'   />
                            <span className="">No Control</span>
                        </label>
                    </div>

                    <div className='w-2/12 mt-8' defaultValue={this.defaultVotes} onChange={this.handleVotesChange}>
                        <label className='grid '>
                            <input type="number" className='min-w-full text-center border-b-4' />
                            <span className='mt-3 text-center text-gray-500 text-opacity-50'>Votes Required To Skip Song</span>
                        </label>
                    </div>
                    <div className='grid-cols-2 mt-5'>
                        <div>
                        
                            <button className='py-3 text-white bg-red-500 rounded-md px-14 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-blue-500 ' 
                            onClick={this.handleRoomButtonPressed} >
                                
                                <span className=''> Create A ROOM</span>
                            </button>
                            
                        </div>
                        <div className='py-3 ml-16'>
                            <Link className='px-6 py-2 text-white bg-blue-800 rounded-md hover:bg-indigo-900 focus:outline-none focus:ring-1 focus:ring-blue-500'  to='/'>
                            <button className=''>
                                <span className=''> BACK</span>
                            </button>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default CreateRoomPage
