import React from "react";
import styled from "styled-components";

function ContactItem({ title, icon, cont1, cont2 = "" }) {
  return (
    <ContactItemStyled>
      <div className="before">{icon}</div>

      <div className="right-content">
        <h6>{title}</h6>
        <p>{cont1}</p>
        {cont2 !== "" && <p>{cont2}</p>}
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  // background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  &:hover {
    transform: rotate(0deg) scale(1);
    transition: all 0.01s ease-in-out;
    background-color: var(--background-dark-grey);
    .before {
      display: none;
    }

    .right-content h6 {
      display: block;
      color: var(--white-color);
    }
    .right-content p {
      display: block;
      color: var(--white-color);
    }
  }
  .before {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    backdrop-filter: blur(5px);
    position: absolute;
    left: 70%;
    @media screen and (max-width: 1023px) {
      left: 50%;
    }
  }

  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
      display: none;
    }
    p {
      padding: 0.1rem 0;
      display: none;
    }
  }
`;

export default ContactItem;
