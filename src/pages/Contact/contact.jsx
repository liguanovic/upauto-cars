import ContactBanner from "../../components/ContactBanner/contactBanner";
import ContactInfo from "../../components/ContactInfo/contactInfo";
import ContactForm from "../../components/ContactForm/contactForm";

const Contact = () => {
    return (
        <main id="contact">
            <ContactBanner />
            <ContactInfo />
            <ContactForm />
            <section>
                <iframe
                    src="https://maps.google.com/maps?q=Dubai+Silicon+Oasis&hl=en&t=m&z=11&ie=UTF8&iwloc=B&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    title="Dubai Map"
                ></iframe>
            </section>
        </main>
    );
};

export default Contact;