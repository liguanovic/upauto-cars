import logoMini from '../../assets/pictures/logo_mini.png';

import './footer.css';

const Footer = () => {

    return (
        <footer id="footer">
            <header>
                <section className="logo">
                    <a href="/" rel="home">
                        <img src={logoMini} alt="UPauto-global" />
                    </a>
                    <p>Expert leader dans l'import/export de véhicules, de pièces détachées, de conseils pour particuliers ou professionnels</p>
                </section>

                <section className="informations">
                    <h2>Informations</h2>
                    <ul>
                        <li><a href="/#">Termes & Conditions</a></li>
                        <li><a href="/#">Contact</a></li>

                    </ul>
                    <ul className="footer-social">
                        <li><a href="https://www.instagram.com/upautoglobal" rel="noopener noreferrer" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.tiktok.com/@upautoglobal" rel="noopener noreferrer" target="_blank" aria-label="TikTok"><i className="fab fa-tiktok"></i></a></li>
                        <li><a href="mailto:contact@upauto-global.com" rel="noopener noreferrer" target="_blank" aria-label="Email"><i className="fa fa-envelope"></i></a></li>
                    </ul>


                </section>

                <section className="footer-wtsp">
                    <h2>Contactez nous sur Whatsapp :</h2>
                    <ul>
                        <li>
                            <i className="fab fa-whatsapp" />
                            <p>Conseil techniques :
                                <a href="https://wa.me/33699508160?text=Bonjour,%20je%20voudrais%20plus%20d'informations%20à%20propos" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                                    +33 6 99 50 81 60
                                </a>
                            </p>
                        </li>
                        <li>
                            <i className="fab fa-whatsapp" />
                            <p>Autres demandes :
                                <a href="https://wa.me/971585765698?text=Bonjour,%20je%20voudrais%20plus%20d'informations%20à%20propos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp-link">
                                    +971 58 576 5698
                                </a>
                            </p>

                        </li>
                    </ul>
                </section>

            </header>

            <b>Copyright © 2024 Up-Auto Global Rights Reserved.</b>
        </footer>
    )
}


export default Footer