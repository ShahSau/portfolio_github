/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
// import Menu from '../Components/Menu';
import Button from '../Components/Button';
// import {motion} from "framer-motion";
import Menu2 from '../Components/Menu2';

const allButtons = ['All', ...new Set(portfolios.map((item) => item.category))];

function PortfoliosPage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  // eslint-disable-next-line no-unused-vars
  const [button, setButtons] = useState(allButtons);

  const filter = (button2) => {
    if (button2 === 'All') {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
  //     <motion.div
  //     initial={{opacity: 0,y:250}}
  //     animate={{opacity: 1,y:1}}
  //     exit={{opacity: 1,y:0}}
  //     transition={{ duration: 3}}
  // >
    <MainLayout>
      <Title title="Portfolios" span="portfolios" />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu2 menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
    // </motion.div>
  );
}

export default PortfoliosPage;
