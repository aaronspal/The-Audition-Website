import './home.css'
import Hero from '../../components/hero/hero'
import HomeAbout from '../../components/homeAbout/homeAbout'
// import HomeGameplay from '../../components/homeGameplay/homeGameplay'
import NewsCard from '../../components/newsCard/newsCard'
import RecentSuperstars from '../../components/recentSuperstars/recentSuperstars'
import ConnectWithUs from '../../components/connectWithUs/connectWithUs'
import news1 from '../../media/images/news/news1.png'
import news2 from '../../media/images/news/news2.png'
import news3 from '../../media/images/news/news3.png'

export function Component() {
    return (
        <>
            <Hero/>
            <HomeAbout/>
            {/* <HomeGameplay/> */}
            <RecentSuperstars/>
            <div id="news" className="container homeDevDiary">
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
            <div id="community">
                <ConnectWithUs/>
            </div>
        </>
    );
}