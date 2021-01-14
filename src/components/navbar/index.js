import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav as NavBt,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import colors from 'src/vars/colors';
import { Link } from 'react-router-dom';
import { menuIcon } from 'src/assets/images';
const bgColor = colors.primary;
const Wrapper = styled.div``;

const NavbarExp = styled(Navbar)`
  background-color: ${bgColor};
`;
const Nav = styled(NavBt)`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    margin-left: -10px;
  }
  @media (max-width: 576px) {
    margin-left: -5px;
  }
`;
const NavbarTogglers = styled(NavbarToggler)`
  border: none;
  outline: none !important;
  z-index: 1;
  color: #fff;
  span.navbar-toggler-icon {
    outline: none;
    background-image: url(${menuIcon});
  }

  @media (max-width: 768px) {
    padding: 0 12px;
  }
  @media (max-width: 576px) {
    padding: 0;
  }
`;
const NavText = styled(NavLink)`
  font-family: PoppinsRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.42px;
  text-align: left;
  color: ${colors.white};
  &:hover {
    color: ${colors.white};
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 6px;
}
  }
  // padding: 0.5rem 1rem;

  // @media (max-width: 768px) {
  //   padding: 0.5rem 1rem;
  //   :first-child {
  //     padding-left: 1.3rem;
  // }
  // @media (max-width: 576px) {
  //   padding: 0.5rem 1rem;
  //   :first-child {
  //     padding-left: 0.3rem;
  // }
`;

const NavContainer = styled(Container)`
  padding: 0rem;
`;
const LinkExp = styled(Link)`
  padding: 0;
  color: ${colors.white};
  &:hover {
    color: ${colors.white};
    text-decoration: none;
  }
`;
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Wrapper>
      <NavbarExp light expand="md" id="navbar">
        <Container>
          <NavbarTogglers onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <NavContainer>
              <Nav>
                <NavItem>
                  <NavText>
                    <LinkExp to="/blocks">Blocks</LinkExp>
                  </NavText>
                </NavItem>
                <NavItem>
                  <NavText>
                    <LinkExp to="/txs">Transactions</LinkExp>
                  </NavText>
                </NavItem>
              </Nav>
            </NavContainer>
          </Collapse>
        </Container>
      </NavbarExp>
    </Wrapper>
  );
};

export default NavBar;
