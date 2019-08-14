import React from 'react';
import Todo from '../assets/Todo.png'

function Header() {
 return(
    <nav class="navbar navbar-light bg-light">
      <img src= {Todo} width="30" height="30" class="d-inline-block align-top" alt="" />
      Todo 
  
  </nav>
 )
}

export default Header;