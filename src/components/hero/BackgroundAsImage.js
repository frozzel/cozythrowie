import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Couch from "images/new/Cozy-home-interior-ideas-and-decor.jpg";


import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import { useParams } from "react-router-dom";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

 
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-logo-300 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto justify-center`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex items-center flex-col lg:flex-row justify-center`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center  sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none justify-center  `}
  span {
    ${tw`inline-block mt-2 `}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-logo-300 px-4 -mx-4 py-2 `}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default ({heading, wallpaper}) => {
  const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("${wallpaper? wallpaper : Couch}");
`;
  const navLinks = [
    <NavLinks key={1}>
      {/* <NavLink href="#">
        About
      </NavLink>
      <NavLink href="#">
        Blog
      </NavLink>
      <NavLink href="#">
        Locations
      </NavLink>
      <NavLink href="#">
        Pricing
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink> */}
    </NavLinks>
  ];
  const { _id } = useParams(); // Extract blogId from the URL



  return (<>
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader  />
        <TwoColumn>
  
            {!_id &&(
            <Heading wallpaper={wallpaper}>
              <span>Snuggle Up</span>
              <br />
              <span>In Style</span>
            </Heading>)} : {(
              <Heading wallpaper={wallpaper}>
              <span>{heading?.split(':')[0].trim()}</span>
              <br />
              <span></span>
            </Heading>)};
  
        </TwoColumn>
      </HeroContainer>
    </Container>
    </> );
};
