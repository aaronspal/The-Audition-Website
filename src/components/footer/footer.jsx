import './footer.css'
import { socialLinks } from '../../data/socialLinks'

function Footer() {
    return (
        <footer className="container footer paperBackground">
            <section className="flexContainer">
                <div className="w50">
                    <h2 className="titleFont">The Audition</h2>
                    <div className="flexContainer g10 footerSocials">
                        {socialLinks.map((l, i) => (
                            <a key={i} href={l.href || "#"} aria-label={l.name}>
                                <img src={l.iconBlack} alt={l.name} className="socialIcon"/>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flexContainer flexColumn w50 bold alignEnd textRight">
                    <div>
                        About
                    </div>
                    <div>
                        News
                    </div>
                    <div>
                        Community
                    </div>
                    <div>
                        Download
                    </div>
                </div>
            </section>
            <hr></hr>
            <div className="flexContainer spaceBetween">
                <span>Copyright The Field Studios. All Rights Reserved.</span>
                <span>Designed by Aaron Spalding</span>
            </div>
        </footer>
    );
}

export default Footer;
