import './home.css'
import Hero from '../../components/hero/hero'
import NewsCard from '../../components/newsCard/newsCard'
import veins from '../../media/images/veins1.png'
import poster from '../../media/images/poster.png'
import news1 from '../../media/images/news/news1.png'
import news2 from '../../media/images/news/news2.png'
import news3 from '../../media/images/news/news3.png'
import gameplay from '../../media/images/gameplay.gif'
import discordIcon from "../../media/icons/socials/Discord.png";
import instagramIcon from "../../media/icons/socials/Instagram.png";
import tiktokIcon from "../../media/icons/socials/TikTok.png";
import steamIcon from "../../media/icons/socials/Steam.png";

export function Component() {
    return (
        <>
            <Hero/>
            {/*<div className="container homeAbout" style={{ backgroundImage: `url(${veins})` }}>*/}
            <div className="container homeAbout">
                <div className="flexContainer g50">
                    <div className="w60">
                        <h2 className="titleFont marginBottom">Calling All Superstars</h2>
                        <p>
                            The Audition is a music-based psychological horror game where you participate in a deadly contest to
                            become the world's next SUPERSTAR.
                        </p><br></br>
                        <p>
                            You must navigate through a cruel and unforgiving industrialized dystopian world to survive. You've
                            always dreamed of making it big in the music industry and your passion drives you, but passion alone
                            will not please the investors. As you navigate the world, you will be faced with questions you
                            cannot answer, but diligence is rewarded, and nothing is a coincidence.
                        </p><br></br>
                        <p>
                            Becoming the world's next SUPERSTAR is no easy task. To achieve your dreams, you must prove you are
                            worthy in a 1v1 guitar duel. Use your keyboard's rows as guitar strings, freestyle a performance to
                            show that you are a valuable asset, and endure the investor's mysterious criteria for success.
                        </p>
                        Read more about the game
                    </div>
                    <div className="w40 imageDistorted tornEdge">
                        <img src={poster} alt="The Audition poster" className="image100"/>
                    </div>
                </div>
            </div>
            <div className="container textCenter homeGameplay">
                <h1 className="marginBottom">Failure Is an Option</h1>
                A battle to the death always includes blood, toil, tears, and sweat
                <div className="tornEdge lowZIndex">
                    <img src={gameplay} alt="Gameplay preview" className="image100"/>
                </div>
            </div>
            <div className="container homeDevDiary">
                <h2 className="textCenter titleFont">News</h2>
                <section className="flexContainer flexGrow g20">
                    <NewsCard
                        image={news1}
                        alt="Developer diary 1"
                        title="Developer Diary 1"
                        category="Dev Diary"
                        date="April 14th 2026"
                        description="A behind-the-scenes look at the making of The Audition."
                    />
                    <NewsCard
                        image={news2}
                        alt="Developer diary 2"
                        title="Developer Diary 2"
                        category="Dev Diary"
                        date="April 14th 2026"
                        description="A behind-the-scenes look at the making of The Audition."
                    />
                    <NewsCard
                        image={news3}
                        alt="Developer diary 3"
                        title="Developer Diary 3"
                        category="Dev Diary"
                        date="April 14th 2026"
                        description="A behind-the-scenes look at the making of your mom"
                    />
                </section>

            </div>
            <div className="grayBackground">
                <h2 className="textCenter titleFont">Stay Connected</h2>
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
        </>
    );
}
