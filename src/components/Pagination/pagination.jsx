import React, { useState } from 'react';
import carsData from '../../Data/carsData.json';
import './pagination.css';

const PaginatedCards = ({ cardsPerPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalCards = carsData.cars.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    return (
        <section id="pagination">
            <ul >
                <li>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &laquo;
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button
                            onClick={() => handlePageChange(index + 1)}
                            disabled={currentPage === index + 1}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &raquo;
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default PaginatedCards;
