import './news.css'
import NewsCard from '../newsCard/newsCard'
import news1 from '../../media/images/news/news1.png'
import news2 from '../../media/images/news/news2.png'
import news3 from '../../media/images/news/news3.png'

function News() {
    return (
        <div id="news" className="container homeDevDiary">
            <h2 className="textCenter titleFont">News</h2>
            <section className="flexContainer flexGrow g20">
                <NewsCard
                    image={news1}
                    alt="Developer diary 1"
                    title="Developer Diary 1"
                    category="Dev Diary"
                    date="April 14th 2026"
                    description="A behind-the-scenes look at the making of The Audition."
                    to="/dev-diary-1"
                />
                <NewsCard
                    image={news2}
                    alt="Developer diary 2"
                    title="Developer Diary 2"
                    category="Dev Diary"
                    date="April 14th 2026"
                    description="A behind-the-scenes look at the making of The Audition."
                />
                <NewsCard
                    image={news3}
                    alt="Developer diary 3"
                    title="Developer Diary 3"
                    category="Dev Diary"
                    date="April 14th 2026"
                    description="A behind-the-scenes look at the making of your mom"
                />
            </section>
        </div>
    );
}

export default News;
