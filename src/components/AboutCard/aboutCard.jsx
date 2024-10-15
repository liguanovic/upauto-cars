import Data from '../../Data/data.json';
import './aboutCard.css';

const AboutCard = () => {
    return (
        <section id="about" >
            <header >
                <h1>A propos d'Upauto-Global</h1>
                <p>{Data.About[0].text}</p>
            </header>

            <section>
                <article >
                    <i className="fa-solid fa-car icon"></i>
                    <section className="feature-content">
                        <h2>Expertise</h2>
                        <p>{Data.About[0].Expertise}</p>
                    </section>
                </article>

                <article >
                    <i className="fa fa-user icon"></i>
                    <section className="feature-content">
                        <h2>Solutions</h2>
                        <p>{Data.About[0].Solutions}</p>
                    </section>
                </article>

                <article >
                    <i className="fa fa-comment icon"></i>
                    <section className="feature-content">
                        <h2>Communication</h2>
                        <p>{Data.About[0].Communication}</p>
                    </section>
                </article>

                <article >
                    <i className="fa fa-desktop icon"></i>
                    <section className="feature-content">
                        <h2>Réactivité</h2>
                        <p>{Data.About[0].Reactivite}</p>
                    </section>
                </article>

                <article >
                    <i className="fa fa-globe icon"></i>
                    <section className="feature-content">
                        <h2>Présence International</h2>
                        <p>{Data.About[0].International}</p>
                    </section>
                </article>

                <article >
                    <i className="fa fa-cog icon"></i>
                    <section className="feature-content">
                        <h2>Qualité</h2>
                        <p>{Data.About[0].Qualite}</p>
                    </section>
                </article>
            </section>
        </section>
    );
}

export default AboutCard