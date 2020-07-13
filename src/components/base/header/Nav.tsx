import * as React from 'react';

import { NavWrapper, NavBtn } from './Header.styles';

function Nav() {
  return (
    <NavWrapper>
      <NavBtn exact to="/" activeClassName="current">
        Home
      </NavBtn>
      <NavBtn to="/about" activeClassName="current">
        About
      </NavBtn>
      <NavBtn to="/develop" activeClassName="current">
        Develop
      </NavBtn>
      <NavBtn to="/log" activeClassName="current">
        Log
      </NavBtn>
    </NavWrapper>
  );
}

export default Nav;
