import { useParams } from 'react-router-dom';
import Error from '../Error/error';
import Carousel from '../../components/Carousel/carousel';
import carsData from '../../Data/carsData.json';

import './gallery.css';

const Gallery = () => {

    const { id } = useParams();
    const car = carsData.cars.find((car) => car.id === id);

    if (!car) {
        console.log("La voiture n'a pas été trouvée");
        return <Error />;
    }

    const handleWhatsAppClick = () => {
        const message = `Bonjour, j'aimerais plus de renseignement à propos de l'annonce ${car.reference} pour le véhicule ${car.model} ${car.brand} ${car.year}.`;
        const whatsappUrl = `https://wa.me/33699508160?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleEmailClick = () => {
        const subject = `${car.reference} ${car.model} ${car.brand} ${car.year}`;
        const mailtoUrl = `mailto:contact@upauto-global.com?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <main>
            <article id="car-details">
                <Carousel
                    pictures={car.pictures.map(picture => `${process.env.PUBLIC_URL}/gallery/${picture}`)}
                    alt={car.title}
                />

                <section className="car-info">
                    <p className="car-reference">
                        <span className="fixed-text">Reference :</span> {car.reference}
                    </p>
                    <p className="car-price">Prix : {car.price}</p>
                    <p className="car-brand">
                        <span className="fixed-text">Marque :</span> {car.brand}
                    </p>
                    <p className="car-model">
                        <span className="fixed-text">Modele :</span> {car.model}
                    </p>
                    <p className="car-year">
                        <span className="fixed-text">Année :</span> {car.year}
                    </p>
                    <p className="car-mileage">
                        <span className="fixed-text">Kilométrage :</span> {car.kilometres}
                    </p>
                    <p className="car-contact">
                        <span className="fixed-text">Contact :</span>
                        <span className="contact-icons">
                            <i className="fab fa-whatsapp" onClick={handleWhatsAppClick}></i>
                            <i className="fa fa-envelope" onClick={handleEmailClick}></i>
                        </span>
                    </p>
                    <p className="car-description">
                        <span className="fixed-text">Description :</span> {car.description}
                    </p>
                </section>
            </article>
        </main>
    );
};

export default Gallery;
