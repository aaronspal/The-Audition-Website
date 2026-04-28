import { Link } from 'react-router-dom'
import './newsCard.css'

function NewsCard({ image, alt, title, category, date, description, to }) {
    const inner = (
        <>
            <div className="tornEdge">
                <img src={image} alt={alt} className="newsCardImage"/>
            </div>
            <div className="newsCardMeta monoText">
                <span className="newsCardDate">{date}</span>
            </div>
            <h3 className="newsCardTitle">{title}</h3>
            <p className="newsCardDescription">{description}</p>
        </>
    );

    if (to) {
        return (
            <Link to={to} className="newsCard flex1">
                {inner}
            </Link>
        );
    }

    return <div className="newsCard flex1">{inner}</div>;
}

export default NewsCard;
