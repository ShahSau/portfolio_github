import React from 'react';
import { MainLayout } from '../styles/Layouts';
import Resume from '../Components/Resume';
// import {motion} from "framer-motion";

function ResumePage() {
  return (
  //     <motion.div
  //     initial={{opacity: 0,y:250}}
  //     animate={{opacity: 1,y:1}}
  //     exit={{opacity: 1,y:0}}
  //     transition={{ duration: 3}}
  // >
    <MainLayout>
      <Resume />
    </MainLayout>
    // </motion.div>
  );
}

export default ResumePage;
