import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import { useNavigate } from "react-router-dom";
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from "./CollectionPreview.styles";


const CollectionPreview = ({ title, items, routeName }) => {
  const navigate = useNavigate();

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => navigate(routeName)}>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
