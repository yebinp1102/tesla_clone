import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  min-height: 60px;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a{
    font-weight: bold;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media ( max-width: 768px){
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: bold;
    flex-wrap: no-wrap;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`