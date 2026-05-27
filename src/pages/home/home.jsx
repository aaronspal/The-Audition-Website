import './home.css'
import Hero from '../../components/hero/hero'
import HomeAbout from '../../components/homeAbout/homeAbout'
// import HomeGameplay from '../../components/homeGameplay/homeGameplay'
// import News from '../../components/news/news'
import RecentSuperstars from '../../components/recentSuperstars/recentSuperstars'
import ConnectWithUs from '../../components/connectWithUs/connectWithUs'

export function Component() {
    return (
        <div className="homePage">
            <Hero/>
            <HomeAbout/>
            {/* <HomeGameplay/> */}
            <RecentSuperstars/>
            {/* <News/> */}
            <div id="community">
                <ConnectWithUs/>
            </div>
        </div>
    );
}