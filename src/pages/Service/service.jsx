import React from "react";
import Data from "../../Data/data.json";
import ServiceItem from "../../components/ServiceItem/serviceITem";

import "./service.css";

const Service = () => {
    return (
        <main id="services-page">
            <header className="services-header">
                <h1>Quels services proposons nous ?</h1>
                <p>Chez Upauto-Global nous proposons une large gamme de choix. De l'import / export de votre véhicules à son homologation, des optiques de phares aux diagnostic de votre véhicules, découvrez notre palette de services afin de pouvoir satisfaire toutes vos demandes.</p>
            </header>
            {Data.ServiceItem.map((serviceItem, index) => (
                <ServiceItem
                    key={index}
                    number={serviceItem.number}
                    title={serviceItem.title}
                    description={serviceItem.description}
                    pictures={serviceItem.pictures}
                    linkTitle={serviceItem.linkTitle}
                    link={serviceItem.link}
                />
            ))}
        </main>
    );
};

export default Service