import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from "../features/car/carSlice"
import { useSelector } from "react-redux";

function Header() {
  const [burgerState, setBurgerStatus] = useState(false);
  const cars= useSelector(selectCars);  

  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu>
        { cars && cars.map((car, index)=>
          <a key={index} href='#'>{car}</a>
        )}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index)=>
          <li key={index}><a href='#'>{car}</a></li>
        )}
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
      </BurgerNav>
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
  z-index: 1;
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

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform .2s ease-in;

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2)
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`;