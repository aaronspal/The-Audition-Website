import './recentSuperstars.css'

const DEFAULT_STARS = [
    { name: "Marigold",  serial: "41927", date: "12-MAR-2026", status: "decommissioned" },
    { name: "Atlas",     serial: "08851", date: "04-APR-2026", status: "renewed" },
    { name: "Penelope",  serial: "00614", date: "18-APR-2026", status: "active" },
    { name: "Zephyr",    serial: "13302", date: "22-FEB-2026", status: "replaced" },
    { name: "Carmen",    serial: "20188", date: "09-APR-2026", status: "active" },
    { name: "Vega",      serial: "04473", date: "27-JAN-2026", status: "decommissioned" },
    { name: "Lou",       serial: "35540", date: "15-APR-2026", status: "active" },
    { name: "Orion",     serial: "09926", date: "01-APR-2026", status: "renewed" },
];

function RecentSuperstars({
    stars = DEFAULT_STARS,
    eyebrow = "The Audition · Roll Call",
    title = "Recent Superstars",
    subtitle = "Honoring those who the investors most adored",
}) {
    return (
        <section className="recentSuperstars">
            <div className="superStarHeader paperBackground textCenter">
                <div className="superStarEyebrow monoText greenInkText">{eyebrow}</div>
                <h2 className="titleFont colorBlack">{title}</h2>
                <div className="superStarSub monoText greenInkText">{subtitle}</div>
            </div>

            <div className="superStarBoard">
                {stars.map((s, i) => (
                    <div key={s.serial + "-" + i} className="superStarCard paperBackground textCenter" data-status={s.status}>
                        <div className="superStarName colorBlack">{s.name}</div>
                        <div className="superStarDate monoText greenInkText">{s.date}</div>
                        <div className="superStarStamp monoText">{s.serial}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RecentSuperstars;
