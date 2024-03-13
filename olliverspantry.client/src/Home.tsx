import React from 'react';
import './Home.css'; // Make sure to import your CSS file
import CTAButton from './CTAButton';

function Home() {

    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setTimeout(() => { setIsClicked(false); }, 1000);
    };



    return (
        <div className="container">
            <h2 className="header-title">Olly's Stuff</h2>
            <img
                src="src/assets/CatImg.png" // Replace with your image path
                alt="Olly's Pantry"
                className={`cat-image responsive-image ${isClicked ? 'clicked' : ''}`}
                onClick={handleClick}
            />
            <CTAButton></CTAButton>
        </div>







    );
}

export default Home;
