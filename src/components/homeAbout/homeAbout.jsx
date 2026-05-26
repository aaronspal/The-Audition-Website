import './homeAbout.css'

function RainbowWord() {
    return <span className="rainbowWord">SUPERSTAR</span>;
}

function HomeAbout() {
    return (
        <div id="about" className="container homeAbout textCenter">
            <div className="w60 homeAboutContent">
                <h2 className="titleFont marginBottom">Calling All Superstars</h2>
                <p>
                    The Audition is a music-based psychological horror game where you participate in a deadly contest to
                    become the world's next <RainbowWord/>.
                </p><br></br>
                <p>
                    You must navigate through a cruel and unforgiving industrialized dystopian world to survive. You've
                    always dreamed of making it big in the music industry and your passion drives you, but passion alone
                    will not please the investors. As you navigate the world, you will be faced with questions you
                    cannot answer, but diligence is rewarded, and nothing is a coincidence.
                </p><br></br>
                <p>
                    Becoming the world's next <RainbowWord/> is no easy task. To achieve your dreams, you must prove you are
                    worthy in a 1v1 guitar duel. Use your keyboard's rows as guitar strings, freestyle a performance to
                    show that you are a valuable asset, and endure the investor's mysterious criteria for success.
                </p>
            </div>
        </div>
    );
}

export default HomeAbout;