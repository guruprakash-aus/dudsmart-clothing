import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { selectCollection } from "../../redux/shop/shopSelector";

import "./Collectionpage.styles.scss";

const Collectionpage = () => {
  const { collectionId } = useParams();
  const { title, items } = useSelector(selectCollection(collectionId));

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collectionpage;
