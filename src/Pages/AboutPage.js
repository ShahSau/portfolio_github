import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
import Resume from "../Components/Resume";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title="About Me" span="About Me" />
        <ImageSection />
        <Resume />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section`
  overflow-x: hidden;
`;

export default AboutPage;
