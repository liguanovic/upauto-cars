import { useState } from 'react';

import './carousel.css';

const Carousel = ({ pictures, alt }) => {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((index + 1) % pictures.length);
    };

    const prev = () => {
        setIndex((index - 1 + pictures.length) % pictures.length);
    };

    return (
        <figure className='carousel'>
            <img src={pictures[index].replace(/^\/+/, '')} alt={`${alt} ${index + 1}/${pictures.length}`} />
            {pictures.length > 1 && (
                <nav className='carousel-navigation'>
                    <i className='fas fa-chevron-left' alt='Arrow left' onClick={prev} />
                    <i className='fas fa-chevron-right' alt='Arrow right' onClick={next} />
                    <p>
                        {index + 1}/{pictures.length}
                    </p>
                </nav>
            )}
        </figure>
    );
};

export default Carousel;
