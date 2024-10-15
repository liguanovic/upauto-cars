import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/card';
import PaginatedCards from '../../components/Pagination/pagination';
import carsData from '../../Data/carsData.json';
import './home.css';

const getCardsPerPage = () => {
    const width = window.innerWidth;
    if (width < 768) return 6;
    if (width < 1050) return 9;
    return 12;
};

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage, setCarsPerPage] = useState(getCardsPerPage()); // Initialisez avec la valeur par défaut

    const indexOfLastItem = currentPage * carsPerPage;
    const indexOfFirstItem = indexOfLastItem - carsPerPage;
    const currentItems = carsData.cars.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        const handleResize = () => {
            setCarsPerPage(getCardsPerPage());
            setCurrentPage(1); // Réinitialise la page à 1 lors du redimensionnement
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <main id="home">
            <h1>Bienvenue chez UPAUTO</h1>
            <p className="home-description">Trouvez la voiture de vos rêves parmi notre sélection exclusive.</p>

            <ul>
                {currentItems.map((card) => (
                    <li key={card.id}>
                        <Card
                            title={card.title}
                            cover={card.cover}
                            id={card.id}
                            year={card.year}
                            price={card.price}
                            kilometres={card.kilometres}
                            isNew={card.isNew}
                        />
                    </li>
                ))}
            </ul>

            <PaginatedCards
                cardsPerPage={carsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                totalCards={carsData.cars.length}
            />
        </main>
    );
};

export default Home;
