import { Link } from 'react-router-dom'
import './devDiary.css'
import news1 from '../../media/images/news/news1.png'

const DEFAULT_ARTICLE = {
    kicker: "Developer Diary — Entry 01",
    title: "Developer Diary 1",
    deck: "A behind-the-scenes look at the making of The Audition — and the rules we wrote before the rules wrote us.",
    author: "Aaron Spalding",
    date: "April 14th 2026",
    readTime: "5 min read",
    filedUnder: "Developer Diary",
    image: news1,
    caption: "First playable build, lit by the rehearsal lights.",
    body: [
        { type: "p", dropcap: true, text: "A duel in The Audition lasts exactly as long as the song. Not one measure more, not one less. The song ends when one contestant can no longer play. This was the first rule, and every other rule in the duel system bends to accommodate it." },
        { type: "p", text: "We arrived at four strings after a long fight. Six was too forgiving — the player could always find a note to land on. Three was too clinical. Four gives the duel a shape: a thumb for the pulse, three fingers for the melody, and a permanent sense that one string is missing." },
        { type: "h2", text: "The silence" },
        { type: "p", text: "When a contestant loses, they do not scream. They fall silent mid-measure. The orchestra keeps going. The investors keep talking. The stage lights keep turning. The only thing that changes is that one of the two guitars is no longer contributing to the song." },
        { type: "quote", text: "The duel is the only honest thing left on the stage.", cite: "Field notes, rehearsal 212" },
        { type: "p", text: "The last measure, if you are paying attention, always tells you who is about to lose. The losing contestant's guitar gets quieter not because of any mix decision but because they are playing more carefully, more sparsely, more politely. Politeness is the sound of a contestant who knows." },
        { type: "p", text: "Next diary: the dressing room." },
    ],
};

function renderBlock(block, i) {
    if (block.type === "p") {
        return (
            <p key={i} className={block.dropcap ? "devDiaryDropcap" : ""}>
                {block.text}
            </p>
        );
    }
    if (block.type === "h2") {
        return <h2 key={i} className="titleFont whiteText">{block.text}</h2>;
    }
    if (block.type === "quote") {
        return (
            <blockquote key={i} className="devDiaryQuote titleFont">
                {"“"}{block.text}{"”"}
                <cite className="devDiaryCite monoText">— {block.cite}</cite>
            </blockquote>
        );
    }
    if (block.type === "figure") {
        return (
            <figure key={i} className="devDiaryFigure">
                <div className="tornEdge">
                    <img src={block.image} alt={block.caption} className="image100"/>
                </div>
                <figcaption className="devDiaryCaption monoText">{block.caption}</figcaption>
            </figure>
        );
    }
    return null;
}

export function Component({ article = DEFAULT_ARTICLE }) {
    return (
        <article className="container devDiary">
            <Link to="/" className="devDiaryBack monoText redText">Back to News</Link>

            {article.kicker && <div className="devDiaryKicker monoText">{article.kicker}</div>}
            <h1 className="titleFont devDiaryTitle">{article.title}</h1>
            {article.deck && <div className="devDiaryDeck">{article.deck}</div>}

            <div className="devDiaryMeta monoText">
                {article.author && <span><b className="whiteText">By</b> {article.author}</span>}
                {article.date && <span><b className="whiteText">Published</b> {article.date}</span>}
                {article.readTime && <span><b className="whiteText">Runtime</b> {article.readTime}</span>}
                {article.filedUnder && <span><b className="whiteText">Filed under</b> {article.filedUnder}</span>}
            </div>

            {article.image && (
                <div className="devDiaryHero">
                    <div className="tornEdge">
                        <img src={article.image} alt={article.title} className="image100"/>
                    </div>
                    {article.caption && <div className="devDiaryCaption monoText">{article.caption}</div>}
                </div>
            )}

            <div className="devDiaryProse">
                {(article.body || []).map(renderBlock)}
            </div>
        </article>
    );
}
