import './newsCard.css'

function NewsCard({ image, alt, title, category, date, description }) {
    return (
        <div className="newsCard flex1">
            <div className="tornEdge">
                <img src={image} alt={alt} className="newsCardImage"/>
            </div>
            <div className="newsCardMeta">
                {/*<span className="newsCardCategory">{category}</span>*/}
                <span className="newsCardDate sans-serif">{date}</span>
            </div>
            <h3 className="newsCardTitle">{title}</h3>
            <p className="newsCardDescription">{description}</p>
        </div>
    );
}

export default NewsCard;
