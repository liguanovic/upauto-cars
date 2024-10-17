import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ id, title, price, year, cover, kilometres, isNew }) => {
    return (
        <Link to={`/gallery/${id}`} className="card">
            <header className="card-top">
                <img
                    src={`${process.env.PUBLIC_URL}/${cover}`}
                    alt={title}
                    className="card-img"
                />
                {isNew && <span className="is-new">New</span>}

            </header>

            <section className="card-bottom">
                <h2>{title}</h2>

                <p className="card-year">{year}</p>
                <p className="card-kilometres">
                    <strong>{kilometres}</strong>
                </p>
                <p className="card-price">{price}</p>
            </section>
        </Link>
    )
}

export default Card