import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About us</FooterLinkTitle>
              <FooterLink to="/signin">A</FooterLink>
              <FooterLink to="/signin">B</FooterLink>
              <FooterLink to="/signin">C</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Another</FooterLinkTitle>
              <FooterLink to="/signin">A</FooterLink>
              <FooterLink to="/signin">B</FooterLink>
              <FooterLink to="/signin">C</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About You</FooterLinkTitle>
              <FooterLink to="/signin">A</FooterLink>
              <FooterLink to="/signin">B</FooterLink>
              <FooterLink to="/signin">C</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Another</FooterLinkTitle>
              <FooterLink to="/signin">A</FooterLink>
              <FooterLink to="/signin">B</FooterLink>
              <FooterLink to="/signin">C</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              More Ventures
            </SocialLogo>
            <WebsiteRights>
              MV ©️ {new Date().getFullYear} All Rights reserved.{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
