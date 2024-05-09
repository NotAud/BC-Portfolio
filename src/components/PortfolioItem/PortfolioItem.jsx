import "./PortfolioItem.css";

export default function PortfolioItem({ title, image, href }) {
    return (
        <a href={ href } className="portfolio-item">
            <h3>{title}</h3>
            <img src={image} alt={title} />
        </a>
    );
}