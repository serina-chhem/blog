import styled from 'styled-components'
import { Link } from '@redwoodjs/router'

const Nav = styled.nav`
  justify-content: center;
  align-items: center;
  top: 0;
  font-family: var(--font);
`
const HeaderContainer = styled.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  top: 0px;
  margin: 0 auto;
  padding: 0 auto;
`
const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 0 1.5rem;
  text-decoration: none;
  color: black;
  .name {
    font-weight: 200;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`
const NavItem = styled.li`
  height: 40px;
`
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1.5rem;
  height: 100%;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  position: relative;
  color: black;
  &:after {
    content: '';
    background-color: orange;
    height: 6px;
    width: 0;
    left: 0rem;
    bottom: 0.18rem;
    transition: 0.3s;
    position: absolute;
  }
  &:hover:after {
    width: 100%;
  }
`

const Header = () => {
  return (
    <Nav>
      <HeaderContainer>
        <NavLogo to="/">
          <div className="name">Sérina </div> Chhem
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLink to="/about">À propos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Projets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Curriculum Vitae</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contact</NavLink>
          </NavItem>
        </NavMenu>
      </HeaderContainer>
    </Nav>
  )
}

export default Header
