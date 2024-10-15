import Data from '../../Data/data.json';
import bannerImg from '../../assets/pictures/banner.jpg';

import './contactBanner.css';

const ContactBanner = () => (
    <header id="contactBanner">
        <figure>
            <img src={bannerImg} alt="Background" />
        </figure>
        <h1>Contactez-nous !</h1>
        <section className="line">
            <span></span>
            <span></span>
            <span></span>
        </section>
        <p className="text">
            {Data.Contact[0].Contact[0].text}
        </p>
    </header>
);

export default ContactBanner;
