import React from 'react';
import { Link } from 'react-router-dom';
import './serviceItem.css';

const ServiceItem = ({ pictures, number, title, description, linkTitle, link }) => {
    return (
        <section className="service-item">
            <div className="service-images-container">
                <header className="service-images">
                    {pictures.map((picture, index) => (
                        <figure key={index}>
                            <img src={picture.src} alt={picture.alt} />
                        </figure>
                    ))}
                </header>
                <article>
                    <b>{number}</b>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link to={link} target="_blank" rel="noopener noreferrer">{linkTitle}</Link>
                </article>
            </div>
        </section>
    );
};

export default ServiceItem;
