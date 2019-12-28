import React from 'react';
import { Card, Button } from 'react-bootstrap';



const Cup = props => {

    return (
        <div>
            <Card style={{ margin: "1rem" , width: '18rem' , border:'none' }} bg="secondary" text="white">
                <Card.Img variant="top" src={props.image} alt={props.name} height='300rem' />
                <Card.Body>
                    <Card.Title>{props.brand}
                        <br />
                        {props.name}
                    </Card.Title>
                    <Card.Text>
                        {props.price}$
                        <br />
                        In Stock: {props.inStock ? 'Yes' : 'No'}
                    </Card.Text>
                    <Button variant="light">Buy</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cup;
