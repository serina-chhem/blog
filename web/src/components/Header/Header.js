import styled from 'styled-components'
import { Link } from '@redwoodjs/router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useState } from 'react'
import resume from 'src/CV.pdf'

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
const navLinks = [
  {
    name: 'À propos',
    url: '/about',
  },
  {
    name: 'Projets',
    url: '/projects',
  },
  {
    name: 'Écrire un article',
    url: '/posts',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
]

const Header = () => {
  const [appearHome] = useState(true)
  return (
    <Nav>
      <HeaderContainer>
        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={2000}
          classNames="fade"
        >
          <NavLogo to="/">
            <div className="name">Sérina </div> Chhem
          </NavLogo>
        </CSSTransition>

        <TransitionGroup component={null}>
          <NavMenu>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <CSSTransition
                  in={appearHome}
                  appear={true}
                  key={i}
                  classNames="fade"
                  timeout={2000}
                >
                  <NavItem key={i} style={{ transitionDelay: `${i + 5}00ms` }}>
                    <NavLink to={url}>{name}</NavLink>
                  </NavItem>
                </CSSTransition>
              ))}
            <CSSTransition
              in={appearHome}
              appear={true}
              classNames="fade"
              timeout={2000}
            >
              <NavItem
                style={{
                  transitionDelay: `${navLinks ? navLinks.length * 300 : 0}ms`,
                }}
              >
                <NavLink
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  to={resume}
                >
                  Curriculum Vitae
                </NavLink>
              </NavItem>
            </CSSTransition>
          </NavMenu>
        </TransitionGroup>
      </HeaderContainer>
    </Nav>
  )
}

export default Header
