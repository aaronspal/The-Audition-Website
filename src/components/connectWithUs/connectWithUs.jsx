import './connectWithUs.css'
import discordIcon from '../../media/icons/socials/Discord.png'
import instagramIcon from '../../media/icons/socials/Instagram.png'
import tiktokIcon from '../../media/icons/socials/TikTok.png'
import steamIcon from '../../media/icons/socials/Steam.png'

function ConnectWithUs({
    doors,
    title = "Connect With Us",
    signoffLeft = "Filed · The Field Studios",
    signoffRight,
} = {}) {
    const stamp = signoffRight || ("Stamped · " + new Date().toLocaleDateString("en-GB").replace(/\//g, "-"));

    const defaultDoors = [
        { num: "No. 01", name: "Discord",   label: "The Pit",     icon: discordIcon,   href: "#" },
        { num: "No. 02", name: "Instagram", label: "Stage Doors", icon: instagramIcon, href: "#" },
        { num: "No. 03", name: "TikTok",    label: "Dispatches",  icon: tiktokIcon,    href: "#" },
        { num: "No. 04", name: "Steam",     label: "Wishlist",    icon: steamIcon,     href: "#" },
    ];
    const list = doors || defaultDoors;

    return (
        // <section className="stageDoors">
            <div className="playbill paperBackground">
                <div className="bloodTl"></div>
                <h1 className="textCenter colorBlack">{title}</h1>
                <div className="flexContainer flex1 playbillDoors">
                    {list.map((d, i) => (
                        <a key={i} className="playbillDoor" href={d.href || "#"}>
                            <div className="playbillDoorNum">{d.num || ("No. " + String(i + 1).padStart(2, "0"))}</div>
                            <img src={d.icon} className="playbillDoorIcon" alt=""/>
                            <div className="playbillDoorName">{d.name}</div>
                            <div className="playbillDoorLabel">{d.label}</div>
                        </a>
                    ))}
                </div>
            </div>
        // </section>
    );
}

export default ConnectWithUs;
