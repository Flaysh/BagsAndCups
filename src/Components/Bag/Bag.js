import React from 'react';


const Bag = props => {

    return (
        <div>
            <li className="bag">
                    <div className="bag__image">
                        <img src={props.image} alt={props.name} />
                    </div>
                    <div className="bag__info">
                        <h2>{props.brand}</h2>
                        <p>{props.name}</p>
                        <p>{props.inStock}</p>
                    </div>
                    <div className="bag__actions">
                        <h2>Price: {props.price}$</h2>
                        <button>Buy</button>
                    </div>
            </li>
        </div>
    );
};

export default Bag;
