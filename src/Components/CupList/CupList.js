import React, { useState } from "react";

// import "./BagList.css";
import axios from "axios";
import Cup from '../Cup/Cup';
import { CardDeck } from "react-bootstrap";
const CupList = props => {
  const [cups, setCups] = useState([]);


  if(cups.length === 0){
    axios
    .get("https://api.myjson.com/bins/qn16s")
    .then(res => {
      const cups = res.data.cups;
      setCups(cups);
      console.log(cups)
    })
    .catch(function(error) {
      // handle error
      console.error(error);
    });
  }
  

  

  if (cups.length === 0) {
    return (
      <div className="catalog center">
          <h2>No Cups found.</h2>
          {/* <Button goto='/'>Add Jewelry</Button> */}
      </div>
    );
  }

  return (
    <CardDeck style={{margin:"1rem"}} className="catalog-list">
      {cups.map(bag => (
        <Cup
          id={bag.id}
          brand={bag.brand}
          name={bag.name}
          image={bag.image}
          price={bag.price}
          inStock={bag.inStock}
        />
      ))}
    </CardDeck>
  );
};

export default CupList;

