import './scratchButton.css'
import brushstroke from '../../media/images/brushstroke.png'

function ScratchButton({ children, onClick, href }) {
    const content = (
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
