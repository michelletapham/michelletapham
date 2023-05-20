import React from "react";
import Card from 'react-bootstrap/Card';

const Quote = ({ quote, author}) => {
    return (
        <Card className="quote">
            <Card.Body>
                <q>{quote}</q>
                <br/>
                <br/>
                <p>- {author}</p>
            </Card.Body>
        </Card>
    );
};

export default Quote;