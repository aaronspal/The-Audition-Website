import './recentSuperstars.css'

const DEFAULT_STARS = [
    { name: "Marigold V.",       unit: "MR-419", status: "decommissioned" },
    { name: "Atlas Quill",       unit: "AQ-088", status: "renewed" },
    { name: "Saint Penelope",    unit: "SP-006", status: "active" },
    { name: "Beautiful Dimitri", unit: "BD-013", status: "replaced" },
    { name: "Carmen Vassal",     unit: "CV-201", status: "active" },
    { name: "The Heron",         unit: "HR-044", status: "decommissioned" },
    { name: "Lou Sweetbriar",    unit: "LS-355", status: "active" },
    { name: "Felix Mortimer",    unit: "FM-099", status: "renewed" },
];

const STAMP_LABELS = {
    active: "ACTIVE",
    renewed: "RENEWED",
    decommissioned: "DECOMMISSIONED",
    replaced: "REPLACED",
};

function RecentSuperstars({
    stars = DEFAULT_STARS,
    eyebrow = "The Audition · Roll Call",
    title = "Active Roster",
    subtitle = "Bulletin No. 28 · Subject to Decommission",
    footer = "Listings rotate every 14 days · Replacements arrive on Mondays",
    stampLabels = STAMP_LABELS,
}) {
    return (
        <section className="recentSuperstars">
            <div className="ssHeader">
                <div className="ssEyebrow monoText greenInkText">{eyebrow}</div>
                <h2 className="titleFont colorBlack">{title}</h2>
                <div className="ssSub monoText greenInkText">{subtitle}</div>
            </div>

            <div className="ssBoard">
                {stars.map((s, i) => (
                    <div key={s.unit + "-" + i} className="ssCard" data-status={s.status}>
                        <div className="ssName titleFont colorBlack">{s.name}</div>
                        <div className="ssUnit monoText greenInkText">Unit {s.unit}</div>
                        <div className="ssStamp monoText">
                            {stampLabels[s.status] || (s.status || "").toUpperCase()}
                        </div>
                    </div>
                ))}
            </div>

            {footer && <div className="ssFooter monoText">{footer}</div>}
        </section>
    );
}

export default RecentSuperstars;
