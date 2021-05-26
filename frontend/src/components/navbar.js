import React, { Component } from 'react'

export class navbar extends Component {


  logout() {
   localStorage.removeItem('token');
  }


    render() {
        return (
            <div>
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-indigo-500">
  <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
    <div className="relative flex justify-between w-full px-4 lg:w-auto lg:static lg:block lg:justify-start">
      <a className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap" href="/">
            Home Page
      </a>
      <button className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none" type="button">
        <span className="relative block w-6 h-px bg-white rounded-sm"></span>
        <span className="relative block w-6 h-px mt-1 bg-white rounded-sm"></span>
        <span className="relative block w-6 h-px mt-1 bg-white rounded-sm"></span>
      </button>
    </div>
    <div className="items-center flex-grow lg:flex" id="example-navbar-warning">
      <ul className="flex flex-col ml-auto list-none lg:flex-row">
          <li className="nav-item">
            <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75" href="/create">
              Create A Room
            </a>
          </li>
          <li className="nav-item">
            <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75" href="/join">
              Join A Room
            </a>
          </li>
          <li className="nav-item">
            <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75" href="/" onClick={this.logout}>
              Logout
            </a>
          </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default navbar
