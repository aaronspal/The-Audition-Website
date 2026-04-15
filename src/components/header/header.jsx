import './header.css'
import logo from '../../media/icons/LogoFullTransparent.png'
import { Link, useLocation } from 'react-router-dom'
import ScratchButton from '../scratchButton/scratchButton'

function Header() {
    const location = useLocation();

    const navItems = [
        { name: 'About', path: '/about' },
        { name: 'News', path: '/news' },
        { name: 'Community', path: '/community' },
        { name: 'Download', path: 'https://bhranthrok.itch.io/the-audition-v0', external: true },
    ];

    return (
        <header className="flexContainer alignCenter container header g10">
            <Link to="/" className="headerLogo">
                <img src={logo} alt="The Audition" className="logo" />
            </Link>
            <h2 className="titleFont">The Audition</h2>
            <nav className="flexContainer g40 headerNav">
                {navItems.map((item) =>
                    item.external ? (
                        <a
                            key={item.path}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navLink"
                        >
                            {item.name}
                        </a>
                    ) : (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`navLink ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            {item.name}
                        </Link>
                    )
                )}
            </nav>
            <div className="headerCta">
                <ScratchButton href="https://bhranthrok.itch.io/the-audition-v0">Wishlist on Steam</ScratchButton>
            </div>
        </header>
    );
}

export default Header;
