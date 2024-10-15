import './contactInfo.css';

const ContactInfo = () => (
    <header id="contactInfo">
        <section className='info'>
            <article>
                <span><i className="fas fa-mobile-alt"></i></span>
                <span>Telephone</span>
                <span className="text">+33 6 99 50 81 60</span>
            </article>
            <article>
                <span><i className="fas fa-envelope-open"></i></span>
                <span>E-mail</span>
                <span className="text">contact@upauto-global.com</span>
            </article>
        </section>
        <section className='info'>
            <article>
                <span><i className="fas fa-map-marker-alt"></i></span>
                <span>Addresse</span>
                <span className="text">Dubai Silicon Oasis, Dubai, UAE</span>
            </article>
            <article>
                <span><i className="fas fa-clock"></i></span>
                <span>Heure d'ouverture</span>
                <span className="text">Lundi - Samedi (9:00 à 20:00)</span>
            </article>
        </section>
    </header>
);

export default ContactInfo;
