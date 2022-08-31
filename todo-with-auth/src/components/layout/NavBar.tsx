import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from './NavItems';

export default function NavBar() {
  return (
    <nav>
      <nav>
        <Link to="/">
          <h3>TodoApp</h3>
        </Link>
        <NavItems />
      </nav>
    </nav>
  );
}
