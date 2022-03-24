import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">

      <NavLink exact to ='/'>
        <h1>Home</h1>
      </NavLink>

      <NavLink exact to ='/teams'>
        <h1>Teams</h1>
      </NavLink>

      <NavLink exact to ='/players'>
        <h1>Players</h1>
      </NavLink>

    </div>
  );
}