import React, { Component} from 'react';
import axios from 'axios'

class Login extends Component {

  state = {
    credentials: {username: '', password: ''},
    token:{key:''},
  };


  login = event => {
    delete axios.defaults.headers.common["Authorization"];
    axios.post('rest-auth/login/',this.state.credentials)
    .then(res =>{
      localStorage.setItem('token',res.data.key)
      console.log(localStorage.getItem('token'))
      this.props.history.push('/')
      
    })

        
    .catch( error => console.error(error))
  }

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  render() {
    return (
      <div className='container grid flex-col my-3 justify-items-center'>
        <h1>Login</h1>

        <label className='mt-5 mr-12'>
          Username:
          <input type="text" name="username" className='px-3 pb-1 ml-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
           value={this.state.credentials.username}
           onChange={this.inputChanged}/>
        </label>
        <label className='mt-3 mr-12'>
          Password:
          <input type="password" name="password" className='px-3 pb-1 ml-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
           value={this.state.credentials.password}
           onChange={this.inputChanged} />
        </label>
        <button onClick={this.login} className='py-3 mt-3 ml-10 text-white bg-red-500 rounded-md px-14 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-blue-500 '>
          Login
          </button>
        
      </div>
    );
  }
}

export default Login;