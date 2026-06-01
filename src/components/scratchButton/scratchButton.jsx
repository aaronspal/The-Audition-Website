import './scratchButton.css'
import brushstroke from '../../media/images/brushstroke.png'
import brushstrokeCircle from '../../media/images/brushstrokeCircle.png'
import steamIcon from '../../media/icons/SteamW.png'

function ScratchButton({ children, onClick, href, mobile = false }) {
    const content = mobile ? (
        <span className="scratchButton scratchButtonMobile">
            <span
                className="scratchBg scratchBgMobile"
                style={{ maskImage: `url(${brushstrokeCircle})`, WebkitMaskImage: `url(${brushstrokeCircle})` }}
            ></span>
            <img src={steamIcon} alt="" className="scratchSteamIcon" />
        </span>
    ) : (
        <span className="scratchButton">
            <span className="scratchBg" style={{ maskImage: `url(${brushstroke})`, WebkitMaskImage: `url(${brushstroke})` }}></span>
            <span className="scratchLabel">{children}</span>
        </span>
    );

    if (href) {
        return <a href={href} className="scratchLink">{content}</a>;
    }

    return <button onClick={onClick} className="scratchLink">{content}</button>;
}

export default ScratchButton;
