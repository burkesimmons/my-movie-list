import React from "react";

import logo from ".././logo.png"

const Nav = () =>

<div>
	<nav className="nav-extended indigo darken-1">
    <div className="nav-wrapper indigo darken-1">
      <a href="/movies" className="brand-logo center"><img id="logo" src={logo} alt="logo" /></a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/profile">Profile</a></li>
        <li><a href="/movies">Movies</a></li>
      </ul>
    </div>
    <div className="nav-content indigo">
      <ul className="tabs tabs-transparent">
        
      </ul>
    </div>
  </nav>
</div>
export default Nav;