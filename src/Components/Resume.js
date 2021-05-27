import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';
import CardMembershipIcon from '@material-ui/icons/CardMembership';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    const certificate = <CardMembershipIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
            {/* /* work experience */}
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                
                <div className="resume-content">
                    <ResumeItem 
                        year={'April 2020 - November 2020'} 
                        title={'Data Analyst'}
                        subTitle={'Integrify'}
                        text={'Demonstrated advanced proficiency in programming with Python and Object-Oriented Programming. Performed Data Analysis and Data Visualization on diverse and complex datasets as well as creating datasets from different sources using Web Scraping. Managed databases with SQL and PostgreSQL. Developed Machine Learning applications using supervised  and unsupervised algorithms'} 
                    />
                </div>
                {/* /* education */ }
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'March 2021 - on going'} 
                        title={'Full Stack open 2021'}
                        subTitle={'University of Helsinki'}
                        text={'Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development.  The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.'} 
                    />
                    <ResumeItem 
                        year={'August 2014 - July 2018'} 
                        title={'Masters in Physics'}
                        subTitle={'University of Helsinki'}
                        text={'Graduated with M.Sc. in Physics with specializing in materials and nanophysics, have a demonstrated history of independent research work. . Wrote my theis on "Study on crystallization tendency of disaccharides by X-ray scattering"'} 
                    />
                </div>
                {/* /* certificate  */}
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={certificate} title={'Certificates'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'March 2021 - on going'} 
                        title={'Full Stack open 2021'}
                        subTitle={'University of Helsinki'}
                        text={'Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development.  The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.'} 
                    />
                    <ResumeItem 
                        year={'August 2014 - July 2018'} 
                        title={'Masters in Physics'}
                        subTitle={'University of Helsinki'}
                        text={'Graduated with M.Sc. in Physics with specializing in materials and nanophysics, have a demonstrated history of independent research work. . Wrote my theis on "Study on crystallization tendency of disaccharides by X-ray scattering"'} 
                    />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
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
export default Resume
