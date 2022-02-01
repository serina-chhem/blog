import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import React, { useState } from 'react'

const HomepageContainer = styled.section`
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-gap: 30px;
`
const StyledText = styled.div`
  ul {
    padding: 0;
    list-style: none;
    color: black;
    li {
      font-family: var(--font);
      font-size: 3.3rem;
      padding: 1rem 0;
      font-weight: 300;
      color: black;
      &:hover {
        transition: 500ms ease 10ms;
        font-size: 3.5rem;
        color: orange;
      }
    }
  }
  .bienvenue {
    position: relative;
  }
  .line {
    position: absolute;
    top: 90%;
    height: 6px;
    width: 9.6rem;
    background: orange;
    animation: 1s load;

    @keyframes load {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }
  }
`

const adjectives = [
  {
    adj: 'Fraichement diplômée',
  },
  {
    adj: 'Ingénieure',
  },
  {
    adj: 'Déterminée',
  },
  {
    adj: 'Adaptable',
  },
  {
    adj: 'Persévérante',
  },
]

const HomepageComponent = () => {
  const [appearHome] = useState(true)
  return (
    <HomepageContainer>
      <StyledText>
        <div className="bienvenue">
          <h3>Bienvenue, je suis</h3>

          <div className="line"></div>
        </div>
        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={2000}
          classNames="fade"
        >
          <h1>Sérina</h1>
        </CSSTransition>
        <TransitionGroup>
          <ul>
            {adjectives &&
              adjectives.map(({ adj }, i) => (
                <CSSTransition
                  in={appearHome}
                  appear={true}
                  key={i}
                  classNames="fade"
                  timeout={2000}
                >
                  <li key={i} style={{ transitionDelay: `${i + 5}00ms` }}>
                    {adj}
                  </li>
                </CSSTransition>
              ))}
          </ul>
        </TransitionGroup>
      </StyledText>
    </HomepageContainer>
  )
}

export default HomepageComponent
