import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"

const Container = tw.div`relative flex flex-col items-center lg:px-2 py-2 lg:py-2`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-2 md:py-2 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-1 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left text-logo-500`;
const Heading = tw(
  SectionHeading
)`mt-2 font-black text-left text-xl sm:text-2xl lg:text-3xl text-center md:text-left leading-tight `;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-site-300`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);


const LinkList = tw.div`mt-4 text-center md:text-left`;
const LinkItem = tw.a`block mt-2 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-site-300 underline`;



export default ({
  subheading = "",
  heading = "",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = null,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
  linkText = "",
  productLinks = "",


}) => {
  // const heading2 = heading?.split(':')[1].trim()
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  return (
    <Container>
      {/* <TwoColumn> */}
      {/* <ImageColumn>
        {imageSrc?
    
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded}/>
          : null
        }
        </ImageColumn> */}
        {/* <ImageColumn>
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded}/>
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn> */}
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{subheading}</Heading>
            <Heading>{heading?.split(':')[1]}</Heading>
            <Description>{description}</Description>
            <br />
            {/* <PrimaryButton buttonRounded={buttonRounded} as="a" href={linkText}>
              {primaryButtonText}
            </PrimaryButton> */}
            <Subheading>{productLinks}</Subheading>
            {linkText.length > 0 && (
              <LinkList>
                {linkText.map((link, index) => (
                  <LinkItem key={index} href={`${link.productUrl}+&tag=cozythrowie-20`} target="_blank" rel="noopener noreferrer">
                    {link.description}
                  </LinkItem>
                ))}
              </LinkList>
            )}
          </TextContent>
        </TextColumn>
        <ImageColumn>
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded}/>
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
      {/* </TwoColumn> */}
    </Container>
  );
};
