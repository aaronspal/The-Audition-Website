import './header.css'
import logo from '../../media/icons/LogoFullTransparent.png'
import lock from '../../media/icons/LockW.png'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import ScratchButton from '../scratchButton/scratchButton'
import { useNewsTerminal } from '../../context/newsTerminalContext'

function Header() {
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

    function scrollToTop() {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    return (
        <header className="flexContainer alignCenter container header g10">
            <Link to="/" className="headerLogo" onClick={scrollToTop}>
                <img src={logo} alt="The Audition" className="logo" />
            </Link>
            <h2 className="titleFont headerTitle" onClick={scrollToTop}>The Audition</h2>
            <nav className="flexContainer g40 headerNav">
                {navItems.map((item) =>
                    item.external ? (
                        <a
                            key={item.name}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navLink"
                        >
                            {item.name}
                        </a>
                    ) : (
                        <button
                            key={item.name}
                            onClick={() => item.onClick ? item.onClick() : scrollToSection(item.hash)}
                            className="navLink navLinkButton"
                        >
                            {item.lock && <img src={lock} alt="" className="navLockIcon"/>}
                            {item.name}
                        </button>
                    )
                )}
            </nav>
            <div className="headerCta headerCtaDesktop">
                <ScratchButton href="https://store.steampowered.com/app/4687550/The_Audition/">Wishlist on Steam</ScratchButton>
            </div>
            <div className="headerCta headerCtaMobile">
                <ScratchButton href="https://bhranthrok.itch.io/the-audition-v0" mobile>Wishlist on Steam</ScratchButton>
            </div>
        </header>
    );
}

export default Header;
