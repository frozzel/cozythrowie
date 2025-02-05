import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/new/cozy-throwie-high-resolution-logo-transparent (1).png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/X2-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as Pinterest } from "../../images/pinterest2-icon.svg";


const Container = tw(ContainerBase)`bg-site-600 text-gray-100 -mx-8 -mb-8 mt-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-56`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-site-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-logo-100`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            {/* <LogoText>Treact</LogoText> */}
          </LogoContainer>
          {/* <LinksContainer>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Reviews</Link>
          </LinksContainer> */}
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/profile.php?id=61572666159797">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://x.com/CozyThrowie">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/cozythrowie/">
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href="https://pinterest.com">
              <Pinterest />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2025, Cozy Throwie Inc. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
