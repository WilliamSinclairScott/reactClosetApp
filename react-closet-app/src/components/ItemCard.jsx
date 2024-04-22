/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Tag from './Tag';

import { getItem } from '../services/api/apiInteract';

const ItemCard = ( { item } ) => {

  const [closetItem, setItems] = useState('')

  useEffect(() => {
    getItem(item)
    .then((response) => {
      console.log("Response:", response)
      response.json()})
    .then((data) => setItems(data))
    .catch((error) => console.error("Fetch error:", error))
  }, [item])
  
  console.log(closetItem)
  return (
    <div className="item-card">
      <div className="item-card__background">
        {/* Content of the item card */}
        this is item card { closetItem }
      </div>
      <div className="item-card__name">
        { item }
      </div>
      <Tag />
    </div>
  );
};

export default ItemCard;