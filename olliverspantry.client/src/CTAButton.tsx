import React from 'react';
import './Home.css'; // Make sure to import your CSS file'
const CTAButton: React.FC = () => {

    const handleClick = () => {
        console.log('Button clicked!');

    };

    return (
        <button className="cta-button" onClick={handleClick}>
            Join Olly's Club!
        </button>
    );
}

export default CTAButton;