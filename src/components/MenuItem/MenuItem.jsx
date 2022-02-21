import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./MenuItem.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  console.log(linkUrl);
  function handleClick() {
    navigate(`${linkUrl}`);
  }

  return (
    <MenuItemContainer size={size} onClick={handleClick}>
      <BackgroundImageContainer imageUrl={imageUrl} />

      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
