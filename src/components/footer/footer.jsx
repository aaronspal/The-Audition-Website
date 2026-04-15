import './footer.css'
import discordIcon from '../../media/icons/socials/Discord.png'
import instagramIcon from '../../media/icons/socials/Instagram.png'
import tiktokIcon from '../../media/icons/socials/TikTok.png'
import steamIcon from '../../media/icons/socials/Steam.png'

function Footer() {
    return (
        <footer className="container footer">
            <section className="flexContainer">
                <div className="w30">
                    <h2 className="titleFont">The Audition</h2>
                    <div className="flexContainer g10 footerSocials">
                        <a href="#" aria-label="Discord">
                            <img src={discordIcon} alt="Discord" className="socialIcon"/>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <img src={instagramIcon} alt="Instagram" className="socialIcon"/>
                        </a>
                        <a href="#" aria-label="TikTok">
                            <img src={tiktokIcon} alt="TikTok" className="socialIcon"/>
                        </a>
                        <a href="#" aria-label="Steam">
                            <img src={steamIcon} alt="Steam" className="socialIcon"/>
                        </a>
                    </div>
                </div>
                <div className="flexContainer w70 g20">
                    <div className="w25">
                        About
                    </div>
                    <div className="w25">
                        News
                    </div>
                    <div className="w25">
                        Community
                    </div>
                    <div className="w25">
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
