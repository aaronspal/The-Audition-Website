import './home.css'
import Hero from '../../components/hero/hero'
import NewsCard from '../../components/newsCard/newsCard'
import RecentSuperstars from '../../components/recentSuperstars/recentSuperstars'
import ConnectWithUs from '../../components/connectWithUs/connectWithUs'
import veins from '../../media/images/veins1.png'
import poster from '../../media/images/poster.png'
import news1 from '../../media/images/news/news1.png'
import news2 from '../../media/images/news/news2.png'
import news3 from '../../media/images/news/news3.png'
import gameplay from '../../media/images/gameplay.gif'

export function Component() {
    return (
        <>
            <Hero/>
            {/*<div className="container homeAbout" style={{ backgroundImage: `url(${veins})` }}>*/}
            <div className="container homeAbout">
                <div className="flexContainer g50 alignCenter">
                    <div className="w60">
                        <div className="w90">
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
                    </div>
                    <div className="w40 imageDistorted tornEdge">
                        <img src={poster} alt="The Audition poster" className="image100"/>
                    </div>
                </div>
            </div>
            <div className="container textCenter homeGameplay">
                <h1 className="marginBottom">Failure Is an Option</h1>
                <p className="monoText">A battle to the death always includes blood, toil, tears, and sweat</p>
                <div className="tornEdge lowZIndex">
                    <img src={gameplay} alt="Gameplay preview" className="image100"/>
                </div>
            </div>
            <RecentSuperstars/>
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
                        to="/dev-diary-1"
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
            <ConnectWithUs/>

        </>
    );
}
