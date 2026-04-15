import { useState, useEffect, useCallback } from 'react'
import './hero.css'
import coverPhoto from '../../media/images/coverphoto.png'
import ScratchButton from '../scratchButton/scratchButton'

function Hero() {
    const [deathCount, setDeathCount] = useState(3132849);

    const scheduleNextTick = useCallback(() => {
        const delay = (Math.random() * 9 + 1) * 1000;
        return setTimeout(() => {
            setDeathCount(prev => prev + 1);
            scheduleNextTick();
        }, delay);
    }, []);

    useEffect(() => {
        const timeout = scheduleNextTick();
        return () => clearTimeout(timeout);
    }, [scheduleNextTick]);

    return (
        <section className="hero" style={{ backgroundImage: `url(${coverPhoto})` }}>
        {/*<section className="hero">*/}
            <div className="heroOverlay">
                <div className="container flexColumn textCenter justifyEnd heroContent">
                    Here lies:
                    <div className="deathCount">
                        <h1 className="black">{deathCount.toLocaleString()}</h1>
                        <p><span className="whiteText">executed contestants.</span> Will you be next?</p>
                    </div>
                    <ScratchButton href="/download">Play Itch Preview</ScratchButton>
                </div>
            </div>
        </section>
    );
}

export default Hero;
