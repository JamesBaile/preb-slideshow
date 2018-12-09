import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';


class Slideshow extends Component {
    render() {
    
        const slides = [
            'slide1.jpg', 
            'slide2.jpg', 
            'slide3.jpg', 
            'slide4.jpg', 
            'slide5.jpg',
            'slide6.jpg',
            'slide7.jpg',
            'slide8.jpg',
            'slide9.jpg',
            'slide10.jpg',
            'slide11.jpg',
            'slide12.jpg',
            'slide13.jpg',
            'slide14.jpg',
            'slide15.jpg',
            'slide16.jpg',
            'slide17.jpg',
            'slide18.jpg',
            'slide19.jpg',
            'slide20.jpg',
            'slide21.jpg',
            'slide22.jpg',
            'slide23.jpg',
            'slide24.jpg',
            'slide25.jpg',
            'slide26.jpg',
            'slide27.jpg',
            'slide28.jpg',
            'slide29.jpg',
            'slide30.jpg',
            'slide31.jpg',
            'slide32.jpg',
            'slide33.jpg',
            'slide34.jpg',
            'slide35.jpg',
            'slide36.jpg',
            'slide37.jpg',
            'slide38.jpg',
            'slide39.jpg',
            'slide40.jpg',
            'slide41.jpg',
            'slide42.jpg',
            'slide43.jpg',
            'slide44.jpg',
            'slide45.jpg',
            'slide46.jpg',
            'slide47.jpg',
            'slide48.jpg',
            'slide49.jpg',
            'slide50.jpg',
            'slide51.jpg',
            'slide52.jpg',
            'slide53.jpg',
            'slide54.jpg',
            'slide55.jpg',
            'slide56.jpg',
            'slide57.jpg',
            'slide58.jpg',
            'slide59.jpg',
            'slide60.jpg',
            'slide61.jpg',
            'slide62.jpg',
            'slide63.jpg'
        ];

        const renderedSlides = slides.map((slide) => 
            <div key={slide} className="each-fade">
                <img className="image" src={`./images/${slide}`} alt={slide}></img>
            </div>
        );
    
        const properties = {
        duration: 3250,
        transitionDuration: 750,
        infinite: true,
        indicators: false,
        arrows: false
        }



        return (
        <Fade {...properties}>
            {renderedSlides}
        </Fade>
        );
    }
}

export default Slideshow;