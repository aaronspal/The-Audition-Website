import './connectWithUs.css'
import { socialLinks } from '../../data/socialLinks'

function ConnectWithUs({
    links = socialLinks,
    title = "Connect With Us",
} = {}) {
    return (
        <div className="socialMedia">
            <h2 className="titleFont textCenter marginBottom">{title}</h2>
            <div className="gridContainer4x">
                {links.map((l, i) => (
                    <a key={i} className="flexContainer flexColumn alignCenter socialMediaLink" href={l.href || "#"} target="_blank" rel="noopener noreferrer">
                        <img src={l.iconWhite} className="socialMediaIcon" alt=""/>
                        {/*<p className="monoText">{l.name}</p>*/}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ConnectWithUs;
