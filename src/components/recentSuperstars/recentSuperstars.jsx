import { useState, useEffect, useRef } from 'react'
import './recentSuperstars.css'
import { supabase } from '../../lib/supabase'
// import RecentSuperstarsDebug from './debug/recentSuperstarsDebug'

function formatWinnerDate(isoString) {
    const d = new Date(isoString);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

const DEFAULT_STARS = [
    { name: "Marigold",  serial: "41927", date: "12/03/2026" },
    { name: "Atlas",     serial: "08851", date: "04/04/2026" },
    { name: "Penelope",  serial: "00614", date: "18/04/2026" },
    { name: "Zephyr",    serial: "13302", date: "22/02/2026" },
    { name: "Carmen",    serial: "20188", date: "09/04/2026" },
    { name: "Vega",      serial: "04473", date: "27/01/2026" },
    { name: "Lou",       serial: "35540", date: "15/04/2026" },
    { name: "Orion",     serial: "09926", date: "01/04/2026" },
];

function RecentSuperstars({
    title = "Recent Superstars",
}) {
    const [stars, setStars] = useState(DEFAULT_STARS);
    const [updateKey, setUpdateKey] = useState(0);
    const hasLoaded = useRef(false);

    useEffect(() => {
        const lastSnapshot = { current: '' };

        async function fetchWinners(isLiveUpdate) {
            const { data } = await supabase
                .from('winners')
                .select('id, name, created_at')
                .order('created_at', { ascending: false })
                .limit(8);
            if (!data) return;

            const snapshot = JSON.stringify(data);
            const changed = snapshot !== lastSnapshot.current;
            lastSnapshot.current = snapshot;

            if (data.length > 0) {
                setStars(data.map(w => ({
                    name: w.name,
                    serial: w.id.replace(/-/g, '').slice(-5).toUpperCase(),
                    date: formatWinnerDate(w.created_at),
                })));
            }
            // Flicker only when data actually changed after the first load
            if (isLiveUpdate && changed && hasLoaded.current) {
                setUpdateKey(k => k + 1);
            }
            hasLoaded.current = true;
        }

        fetchWinners(false);

        // Realtime updates (requires Realtime enabled for the table in Supabase)
        const channel = supabase
            .channel('winners-changes')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'winners' },
                () => fetchWinners(true)
            )
            .subscribe((status) => {
                if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
                    console.warn('[RecentSuperstars] realtime unavailable, relying on polling. status:', status);
                }
            });

        // Polling fallback so the table stays fresh even if realtime is off
        const poll = setInterval(() => fetchWinners(true), 20000);

        return () => {
            supabase.removeChannel(channel);
            clearInterval(poll);
        };
    }, []);

    return (
        <section className="recentSuperstars">
            <div className="superStarHeader textCenter">
                <h2 className="superStarLabel labelMaker">{title}</h2>
            </div>

            <table className="superStarTable sevenSegment">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody key={updateKey} className={updateKey > 0 ? 'tableUpdating' : undefined}>
                    {stars.map((s, i) => (
                        <tr key={s.serial + "-" + i}>
                            <td>{s.serial}</td>
                            <td>{s.name}</td>
                            <td>{s.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/*<RecentSuperstarsDebug*/}
            {/*    onSimulate={(newStar) => {*/}
            {/*        setStars(prev => [newStar, ...prev].slice(0, 8));*/}
            {/*        setUpdateKey(k => k + 1);*/}
            {/*    }}*/}
            {/*/>*/}
        </section>
    );
}

export default RecentSuperstars;
