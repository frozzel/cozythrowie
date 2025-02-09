import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
import { css } from "styled-components/macro"; 
import Hero from "components/hero/BackgroundAsImage";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import Footer from "components/footers/MiniCenteredFooter";

import SpringPic from "images/new/SpringPic.webp";

const Row = tw.div`flex`;
const HeroRow = tw(Row)`max-w-xl flex-col justify-between items-center py-20 lg:py-24 mx-auto`;
const Heading = tw(HeadingBase)`text-center text-primary-900 leading-snug`;
const Description = tw(DescriptionBase)`mt-4 text-center lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const PolicyText = tw.div`text-left max-w-3xl mx-auto mt-8 text-gray-700`;

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Hero wallpaper={SpringPic} />
      <Container tw="-mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <HeroRow>
            <Heading>Privacy Policy</Heading>
            <PolicyText>
              <p><strong>Effective Date:</strong> 02-01-2025</p>
              <p><strong>1. Introduction</strong></p>
              <p>Welcome to Cozy Throwie. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.</p>
              <p><strong>2. Information We Collect</strong></p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address, and payment details when you make a purchase.</li>
                <li><strong>Non-Personal Information:</strong> IP address, browser type, device information, and browsing activity on our website.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance user experience and analyze website traffic.</li>
              </ul>
              <p><strong>3. How We Use Your Information</strong></p>
              <ul>
                <li>To process transactions and fulfill orders.</li>
                <li>To improve our website and customer experience.</li>
                <li>To send promotional emails and updates (if you opt-in).</li>
                <li>To comply with legal requirements and prevent fraud.</li>
              </ul>
              <p><strong>4. How We Protect Your Information</strong></p>
              <p>We implement security measures to safeguard your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
              <p><strong>5. Third-Party Sharing</strong></p>
              <p>We do not sell or rent your personal information. However, we may share it with trusted third parties, including:</p>
              <ul>
                <li>Payment processors to complete transactions.</li>
                <li>Shipping providers to deliver orders.</li>
                <li>Analytics services to understand website traffic and user behavior.</li>
                <li>Legal authorities if required by law.</li>
              </ul>
              <p><strong>6. Your Rights and Choices</strong></p>
              <ul>
                <li>Access, update, or delete your personal information.</li>
                <li>Opt-out of promotional communications.</li>
                <li>Disable cookies through your browser settings.</li>
              </ul>
              <p><strong>7. Third-Party Links</strong></p>
              <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies.</p>
              <p><strong>8. Changes to This Policy</strong></p>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
              <p><strong>9. Contact Us</strong></p>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>By using our website, you consent to this Privacy Policy.</p>
            </PolicyText>
          </HeroRow>
        
        </Content2Xl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
