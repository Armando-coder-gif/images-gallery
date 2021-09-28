import React from 'react';
import {  Button } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div className="jumbotron">
            <h1>Images Gallery</h1>
            <p>
                This is a simple application that retrieves photos
                using Unplash API. In other to start enter any search
                term in the input field.
            </p>
            
            <p>
                <Button variant="primary" href="https://unplash.com"
                target="_blanck">
                    Learn more
                </Button>
            </p>
        </div>
    );
};

export default Welcome;
