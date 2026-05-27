import './footer.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { socialLinks } from '../../data/socialLinks'
import lock from '../../media/icons/Lock.png'
import { useNewsTerminal } from '../../context/newsTerminalContext'

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
    const { openTerminal } = useNewsTerminal();

    const navItems = [
        { name: 'About',     hash: 'about' },
        { name: 'News',      lock: true, onClick: openTerminal },
        { name: 'Community', hash: 'community' },
        { name: 'Preview',   path: 'https://bhranthrok.itch.io/the-audition-v0', external: true },
    ];

    function scrollToSection(hash) {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <footer className="container footer paperBackground">
            <section className="flexContainer">
                <div className="w50">
                    <h2 className="titleFont">The Audition</h2>
                    <div className="flexContainer g10 footerSocials">
                        {socialLinks.map((l, i) => (
                            <a key={i} href={l.href || "#"} aria-label={l.name} target="_blank" rel="noopener noreferrer">
                                <img src={l.iconBlack} alt={l.name} className="socialIcon"/>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flexContainer flexColumn w50 bold alignEnd textRight">
                    {navItems.map((item) =>
                        item.external ? (
                            <a
                                key={item.name}
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footerNavLink"
                            >
                                {item.name}
                            </a>
                        ) : (
                            <button
                                key={item.name}
                                onClick={() => item.onClick ? item.onClick() : scrollToSection(item.hash)}
                                className="footerNavLink"
                            >
                                {item.lock && <img src={lock} alt="" className="navLockIcon"/>}
                                {item.name}
                            </button>
                        )
                    )}
                </div>
            </section>
            <hr></hr>
            <div className="flexContainer spaceBetween">
                <span>Copyright The Field Studios. All Rights Reserved.</span>
                <span>Designed by <a href="https://aarondoesdesign.com" target="_blank" rel="noopener noreferrer" className="footerCreditLink">Aaron Spalding</a></span>
            </div>
        </footer>
    );
}

export default Footer;
