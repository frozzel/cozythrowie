import React, { useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Hero from "components/hero/BackgroundAsImage";
import SpringPic from "images/new/SpringPic.webp";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

import { testApi } from "api/test";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {

  // testApi();
  const fetchData = async () => {
    try {
      const response = await testApi();
      console.log("In Page", response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <AnimationRevealPage>
      <Hero heading="10 Spring Home Decor Ideas You Must Try" wallpaper={SpringPic}/>
      <MainFeature1
        subheading={<Subheading>About Treact</Subheading>}
        heading="10 Spring Home Decor Ideas You Must Try"
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc={SpringPic}
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the design space."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      {/* <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
        ]}
        linkText=""
      /> */}
      {/* <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
