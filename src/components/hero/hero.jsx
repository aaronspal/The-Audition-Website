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
        async function fetchDeathCount() {
            const { data } = await supabase
                .from('deaths')
                .select('count')
                .single();
            if (data) setDeathCount(Number(data.count));
        }

        fetchDeathCount();

        // Realtime updates (requires Realtime enabled for the table in Supabase)
        const channel = supabase
            .channel('deaths-changes')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'deaths' },
                () => fetchDeathCount()
            )
            .subscribe((status) => {
                if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
                    console.warn('[Hero] deaths realtime unavailable, relying on polling. status:', status);
                }
            });

        // Polling fallback so the count stays fresh even if realtime is off
        const poll = setInterval(fetchDeathCount, 20000);

        return () => {
            supabase.removeChannel(channel);
            clearInterval(poll);
        };
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
                                <ScratchButton href="https://bhranthrok.itch.io/the-audition-v0">Play Itch Preview</ScratchButton>
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
