import React, { useEffect, useState } from "react";
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


import { getSingleBlog } from "api/blog";
import { useParams } from "react-router-dom";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {

  const {_id} = useParams();
  const [blog, setBlog] = useState();

  const fetchData = async () => {
    try {
      const response = await getSingleBlog(_id);
      setBlog(response.message);
     
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [_id]);

  const {titleMain, featuredPhotoUrl, } = blog || {};
  
  return (
    <AnimationRevealPage>
      <Hero heading={titleMain} wallpaper={featuredPhotoUrl}/>
      <MainFeature1
        subheading={<Subheading></Subheading>}
        heading={titleMain}
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc={featuredPhotoUrl}
        description={blog?.descriptionSummary}
      />
      {blog?.sections?.map((section, index) => {
        return (
          <MainFeature1
            key={index}
            subheading={section.title}
            heading={''}
            buttonRounded={false}
            primaryButtonText="See Portfolio"
            productLinks="Product Links"
            imageSrc={section.photoUrl}
            description={section.description}
            linkText={section.productDescription.map((product) => {
              return product;
            },
            
            )}
          />
        );
      })
    } 


      <Footer />
    </AnimationRevealPage>
  );
};
