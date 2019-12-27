import React, { useState } from "react";

// import "./BagList.css";
import axios from "axios";
import Bag from '../Bag/Bag'
const BagList = props => {
  const [bags, setBags] = useState([]);

  axios
    .get("https://api.myjson.com/bins/qn16")
    .then(res => {
      const bags = res.data.bags;
      setBags(bags);
      console.log(bags)
    })
    .catch(function(error) {
      // handle error
      console.error(error);
    });

  if (bags.length === 0) {
    return (
      <div className="catalog center">
          <h2>No Bags found.</h2>
          {/* <Button goto='/'>Add Jewelry</Button> */}
      </div>
    );
  }

  return (
    <ul className="catalog-list">
      {bags.map(bag => (
        <Bag
          id={bag.id}
          brand={bag.brand}
          name={bag.name}
          image={bag.image}
          price={bag.price}
          inStock={bag.inStock}
        />
      ))}
    </ul>
  );
};

export default BagList;

