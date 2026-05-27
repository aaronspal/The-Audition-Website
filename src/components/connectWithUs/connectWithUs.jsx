import './connectWithUs.css'
import discordIcon from '../../media/icons/socials/Discord.png'
import instagramIcon from '../../media/icons/socials/Instagram.png'
import tiktokIcon from '../../media/icons/socials/TikTok.png'
import steamIcon from '../../media/icons/socials/Steam.png'

function ConnectWithUs({
    links,
    title = "Connect With Us",
} = {}) {
    const defaultLinks = [
        { name: "Discord",   icon: discordIcon,   href: "#" },
        { name: "Instagram", icon: instagramIcon, href: "#" },
        { name: "TikTok",    icon: tiktokIcon,    href: "#" },
        { name: "Steam",     icon: steamIcon,     href: "#" },
    ];
    const list = links || defaultLinks;

    return (
        <div className="socialMedia">
            <h2 className="titleFont textCenter">{title}</h2>
            <div className="gridContainer4x">
                {list.map((l, i) => (
                    <a key={i} className="flexContainer flexColumn alignCenter socialMediaLink" href={l.href || "#"}>
                        <img src={l.icon} className="socialMediaIcon" alt=""/>
                        <p className="monoText">{l.name}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ConnectWithUs;
