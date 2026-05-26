import './homeGameplay.css'
import gameplay from '../../media/images/gameplay.gif'

function HomeGameplay() {
    return (
        <div className="container textCenter homeGameplay">
            <h1 className="marginBottom">Failure Is an Option</h1>
            <p className="monoText">A battle to the death always includes blood, toil, tears, and sweat</p>
            <div className="tornEdge lowZIndex">
                <img src={gameplay} alt="Gameplay preview" className="image100"/>
            </div>
        </div>
    );
}

export default HomeGameplay;