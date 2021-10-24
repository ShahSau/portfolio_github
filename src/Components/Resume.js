import React, { useEffect } from 'react';
import styled from 'styled-components';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import AOS from 'aos';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import SmallTitle from './SmallTitle';
import ResumeItem from './ResumeItem';
import 'aos/dist/aos.css';

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  const certificate = <CardMembershipIcon />;
  useEffect(() => {
    AOS.init({
      offset: 170, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 300, // values from 0 to 3000, with step 50ms
    });
  });
  return (
    <ResumeStyled>
      <Title title="Resume" span="resume" />
      <InnerLayout>
        {/* /* work experience */}
        <div className="small-title">
          <SmallTitle icon={briefcase} title="Working Experience" />
        </div>

        <div className="resume-content">
          <ResumeItem
            year="April 2020 - November 2020"
            title="Data Analyst"
            subTitle="Integrify"
            text="Demonstrated advanced proficiency in programming with Python and Object-Oriented Programming. Performed Data Analysis and Data Visualization on diverse and complex datasets as well as creating datasets from different sources using Web Scraping. Managed databases with SQL and PostgreSQL. Developed Machine Learning applications using supervised  and unsupervised algorithms"
          />
        </div>
        {/* /* education */ }
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title="Educational Qualifications" />
        </div>

        <div className="resume-content ">
          <ResumeItem
            year="March 2021 - on going"
            title="Full Stack open 2021"
            subTitle="University of Helsinki"
            text="Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development.  The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js."
          />

          <div data-aos="fade-left">
            <ResumeItem
              year="August 2014 - July 2018"
              title="Masters in Physics"
              subTitle="University of Helsinki"
              text={'Graduated with M.Sc. in Physics with specializing in materials and nanophysics, have a demonstrated history of independent research work and independent thinking. Wrote my theis on "Study on crystallization tendency of disaccharides by X-ray scattering"'}
            />
          </div>
        </div>
        {/* /* certificate  */}

        <div className="small-title u-small-title-margin">
          <SmallTitle icon={certificate} title="Certificates" />
        </div>
        <div className="resume-content ">
          <div data-aos="fade-right">
            <ResumeItem
              year="February 2021"
              title="Build Python Web Apps with Flask"
              subTitle="Codecademy"
              text="Flask is a Python web framework that makes it easy to create a fully-featured web application. Learn the basics of this popular framework so that you can create your own web application with a Python back-end. Adding databases to your web apps to customize user experiences."
            />
          </div>
          <div data-aos="fade-left">
            <ResumeItem
              year="December 2020"
              title="JavaScript Algorithms and Data Structures"
              subTitle="FreecodeCamp"
              text={'In fundamentals you will be creating algorithms to manipulate strings, factorialize numbers, and even calculate the orbit of the International Space Station. You\'ll also learn two important programing styles or paradigms: Object Oriented Programing (OOP), and Functional Programing (FP).'}
            />
          </div>
          <div data-aos="fade-right">
            <ResumeItem
              year="March 2020"
              title="Become a Django Developer"
              subTitle="Linkedin Learning"
              text="Build dynamic apps that pass data from client to server. Work with data by building and consuming RESTful APIs. Django is a popular Python web framework designed to help developers rapidly build secure, scalable web applications, adding databases to your web apps."
            />
          </div>
          <div data-aos="fade-left">
            <ResumeItem
              year="February 2020"
              title="Data Analysis with Python"
              subTitle="IBM"
              text="Learn how to analyze data using Python. This course will take from the basics of Python to exploring many different types of data. Also learn how to prepare data for analysis, perform simple statistical analysis, create meaningful data visualizations. You will learn to use Pandas, Numpy and Scipy libraries."
            />
          </div>
          <div data-aos="fade-right">
            <ResumeItem
              year="September 2019"
              title="Python Fundamentals Track"
              subTitle="Datacamp"
              text={'In this track, you\'ll learn the Python basics you need to start on your programming journey, including how to clean real-world data ready for analysis, use data visualization libraries, and even how to write your own Python functions. You will learn numpy, Matplotlib, pandas.'}
            />
          </div>

        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
        
    }
    .u-small-title-margin{
        margin-top: 4rem;
        
        
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume;
