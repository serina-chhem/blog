import styled from 'styled-components'

const HomepageContainer = styled.section`
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-gap: 30px;
  font-family: var(--font);
`
const StyledText = styled.div`
  ul {
    padding: 0;
    list-style: none;
    color: black;
    li {
      font-family: var(--font);
      font-size: 3.5rem;
      padding: 1rem 0;
      font-weight: 300;
      animation: showup 7s infinite;
      color: grey;
    }
  }
`

const HomepageComponent = () => {
  return (
    <HomepageContainer>
      <StyledText>
        <h3>Bienvenue, je suis</h3>
        <h1>Sérina</h1>
        <ul>
          <li>Fraichement diplômée</li>
          <li>Ingénieure</li>
          <li>Déterminée</li>
          <li>Dynamique</li>
          <li>Adaptable</li>
          <li>Persévérante</li>
        </ul>
      </StyledText>
    </HomepageContainer>
  )
}

export default HomepageComponent
