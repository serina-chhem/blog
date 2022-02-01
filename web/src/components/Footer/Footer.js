import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react'

const FooterContainer = styled.div`
  height: auto;
  margin: 0 auto;
`
const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: 0 auto;
`
const WebsiteRights = styled.small`
  color: black;
  font-family: var(--font);
  font-size: 0.8rem;
`
const SocialIcons = styled.div`
  width: auto;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
`
const SocialIconLink = styled.a`
  color: black;
  font-size: 19px;
`
const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaWrap>
        <WebsiteRights>
          © {new Date().getFullYear()}, Design and Built by Sérina CHHEM
        </WebsiteRights>
        <SocialIcons>
          <SocialIconLink
            href="https://github.com/serina-chhem"
            target="_blank"
            arial-label="Github"
          >
            <FaGithub />
          </SocialIconLink>
        </SocialIcons>

        <SocialIcons>
          <SocialIconLink
            href="https://www.linkedin.com/in/serinachhem"
            target="_blank"
            arial-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
    </FooterContainer>
  )
}

export default Footer
