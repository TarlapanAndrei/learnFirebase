import React from 'react';
import { HeaderContainer, ButtonDiv } from './header.styled';

const Header = () =>(
  <HeaderContainer>
    <ButtonDiv to='/'>
       <p>Home</p>
    </ButtonDiv>
    <ButtonDiv to='/signin'>
      <p>Sign In</p>
      </ButtonDiv>
      <ButtonDiv to='/signup'>
      <p>Sing Up</p>
      </ButtonDiv>
      <ButtonDiv to='/change'>
      <p>Change</p>
      </ButtonDiv>
  </HeaderContainer>
)
export default Header;