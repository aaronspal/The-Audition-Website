import { useState, useEffect } from 'react'
import './hero.css'
import './glitchEffect.css'
import coverPhoto from '../../media/images/coverphoto.png'
import ScratchButton from '../scratchButton/scratchButton'
import CrtOverlay from '../crtOverlay/crtOverlay'
import { supabase } from '../../lib/supabase'

function Hero() {
    const [deathCount, setDeathCount] = useState(null);

    useEffect(() => {
        supabase
            .from('deaths')
            .select('count')
            .single()
            .then(({ data }) => {
                if (data) setDeathCount(Number(data.count));
            });
    }, []);

    return (
        <section className="hero" style={{ backgroundImage: `url(${coverPhoto})` }}>
        {/*<section className="hero">*/}
            <div className="heroOverlay">
                <div className="container flexColumn textCenter heroContent">
                    <div className="heroCenter">
                        <div className="heroAbove">Here lies:</div>
                        <div className="glitchEffect heroH1">
                            <h1 className="black">{deathCount !== null ? deathCount.toLocaleString() : ''}</h1>
                        </div>
                        <div className="heroBelow">
                            <p><span className="whiteText">executed contestants.</span> Will you be next?</p>
                            <div className="zIndex10 heroCTA">
                                <ScratchButton href="/download">Play Itch Preview</ScratchButton>
                            </div>
                        </div>
                    </div>
                    <p className="heroDisclaimer monoText">
                        By clicking "Play" the Contestant consents to their own execution as determined by the Investors.
                    </p>
                </div>
            </div>
            <CrtOverlay />
        </section>
    );
}

export default Hero;
