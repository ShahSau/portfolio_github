import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import Button from "../Components/Button";
import Menu2 from "../Components/Menu2";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

function PortfoliosPage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);
  const [activeFilter, setActiveFilter] = useState('All');
  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }
    // console.log({ button });
    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);

  };
  return (
    <MainLayout>
      <Title title="Portfolios" span="portfolios" />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu2 menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfoliosPage;
