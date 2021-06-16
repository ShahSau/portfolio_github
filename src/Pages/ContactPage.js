import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import emailjs from 'emailjs-com';
import Dialogs from '../Components/Dialogs'
import {motion} from "framer-motion";

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
    const handleClose = () => {
      setOpen(false);
    };
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_dxkidye', 'template_sndsd7q', e.target, 'user_mWLTYsv6XyFsKZpPyXJBc')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setOpen(true);
      }
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
            <motion.div
                initial={{opacity: 0,y:250}}
                animate={{opacity: 1,y:1}}
                exit={{opacity: 1,y:0}}
                transition={{ duration: 2}}
            >
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    <form className='form' onSubmit={sendEmail}>
                        <div className="form-field">
                            <label htmlFor="name"  >Enter your name*</label>
                            <input type="text" id="name" name="name"/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Enter your email*</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Enter your subject</label>
                            <input type="text" id="subject" name="subject"/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea id="textarea" cols="30" rows="10" name="message"></textarea>
                        </div>
                        <div className="form-field f-button">
                           
                            <input type="submit" className="button" value="Send Email"></input>
                           
                        </div>
                    </form>
                    

                </div>
                </motion.div>
                <motion.div
                initial={{opacity: 0,y:250}}
                animate={{opacity: 1,y:1}}
                exit={{opacity: 1,y:0}}
                transition={{ duration: 2}}
            >
                
                <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'+358452249949'}  />
                    <ContactItem title={'Email'} icon={email} cont1={'shahriarksaurov@gmail.com'}/>
                    <ContactItem title={'Address'} icon={location} cont1={'Pihlajamäki Helsinki, 00710'} cont2={'Finland'} />
                    
                </div>
                </motion.div>
                <Dialogs handleClickOpen={sendEmail} handleClose={handleClose} open={open}/>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }
            .button {
                position: relative;
                display: block;
                width: 200px;
                height: 36px;
                border-radius: 18px;
                background-color: #1c89ff;
                border: solid 1px transparent;
                color: #fff;
                font-size: 18px;
                font-weight: 300;
                cursor: pointer;
                transition: all .1s ease-in-out;
                &:hover {
                  background-color: #27408B;
                  border-color: #fff;
                  color:#fff;
                  transition: all .5s ease-in-out;
                }
                
              }
            
        }
    }
`;

export default ContactPage