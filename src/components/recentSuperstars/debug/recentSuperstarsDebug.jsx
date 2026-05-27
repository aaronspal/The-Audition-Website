import './recentSuperstarsDebug.css'

function formatWinnerDate(isoString) {
    const d = new Date(isoString);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

const SIM_NAMES = ["NOVA", "RAVEN", "ECHO", "JUNO", "CIPHER", "WREN", "ASTRA", "KAI", "ONYX", "LYRA"];

function makeSimStar() {
    return {
        name: SIM_NAMES[Math.floor(Math.random() * SIM_NAMES.length)],
        serial: Math.random().toString(16).slice(2, 7).toUpperCase(),
        date: formatWinnerDate(new Date().toISOString()),
    };
}

// Dev-only tools for previewing the table's update/flicker behavior.
function RecentSuperstarsDebug({ onSimulate }) {
    if (!import.meta.env.DEV) return null;

    return (
        <button
            className="superStarDevSim"
            onClick={() => onSimulate(makeSimStar())}
        >
            Simulate new entry
        </button>
    );
}

export default RecentSuperstarsDebug;
