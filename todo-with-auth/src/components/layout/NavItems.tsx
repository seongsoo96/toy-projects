import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItems() {
  return (
    <>
      <Link to="/signin">Logout</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/signin">SignIn</Link>
    </>
  );
}
