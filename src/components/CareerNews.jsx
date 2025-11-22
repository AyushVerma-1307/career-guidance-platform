import React, { useState, useEffect } from 'react';
import styles from './CareerNews.module.css';

const MOCK_NEWS = [
    {
        id: 1,
        category: "Exam Alert",
        title: "JEE Advanced 2024 Registration Opens",
        date: "2 hours ago",
        content: "The registration portal for JEE Advanced 2024 is now live. Eligible candidates can apply till May 7th.",
        url: "https://jeeadv.ac.in/"
    },
    {
        id: 2,
        category: "Results",
        title: "CBSE Class 12th Results Declared",
        date: "Yesterday",
        content: "Central Board of Secondary Education has announced the class 12th results. Check official website for details.",
        url: "https://cbseresults.nic.in/"
    },
    {
        id: 3,
        category: "College Ranking",
        title: "NIRF Rankings 2024 Released",
        date: "2 days ago",
        content: "IIT Madras retains top spot in Engineering category, while IIM Ahmedabad leads in Management.",
        url: "https://www.nirfindia.org/"
    },
    {
        id: 4,
        category: "Scholarship",
        title: "National Merit Scholarship Deadline Extended",
        date: "3 days ago",
        content: "Students can now apply for the National Merit Scholarship scheme until the end of this month.",
        url: "https://scholarships.gov.in/"
    },
    {
        id: 5,
        category: "Admissions",
        title: "Delhi University UG Admissions Start",
        date: "4 days ago",
        content: "DU has launched its CSAS portal for undergraduate admissions. Students can now register using their CUET scores.",
        url: "https://admission.uod.ac.in/"
    },
    {
        id: 6,
        category: "Career Tip",
        title: "Top 10 Emerging Careers in AI",
        date: "1 week ago",
        content: "A new report highlights the growing demand for AI Ethics Officers and Prompt Engineers in 2024.",
        url: "https://www.nasscom.in/"
    }
];

function CareerNews() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = import.meta.env.VITE_NEWS_API_KEY;

            // If no key or placeholder, use mock data
            if (!apiKey || apiKey === '00000000000000000000000000000000') {
                setNews(MOCK_NEWS);
                setLoading(false);
                return;
            }

            try {
                // Use /everything endpoint to search for education related news
                // This searches all articles for 'education' and sorts by newest
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=education&language=en&sortBy=publishedAt&apiKey=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }

                const data = await response.json();

                if (data.articles.length === 0) {
                    console.warn("No articles found, falling back to mock data");
                    setNews(MOCK_NEWS);
                    setLoading(false);
                    return;
                }

                // Transform API data to match our format
                const formattedNews = data.articles.slice(0, 12).map((article, index) => ({
                    id: index,
                    category: "Education Update",
                    title: article.title,
                    date: new Date(article.publishedAt).toLocaleDateString(),
                    content: article.description || "Click 'Read More' to read the full article.",
                    url: article.url,
                    image: article.urlToImage || "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" // Fallback image
                }));

                setNews(formattedNews);
            } catch (err) {
                console.error("API Error, falling back to mock data:", err);
                setError("Could not fetch live news. Showing archived updates.");
                setNews(MOCK_NEWS);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div className={styles.container}><h2>Loading News...</h2></div>;
    }

    return (
        <div className={styles.container}>
            <h2>Latest Career News & Updates</h2>
            {error && <p className={styles.errorMsg}>{error}</p>}

            <div className={styles.grid}>
                {news.map(item => (
                    <div key={item.id} className={styles.card}>
                        {item.image && <img src={item.image} alt={item.title} className={styles.newsImage} />}
                        <div className={styles.cardHeader}>
                            <span className={`${styles.tag} ${styles.General}`}>
                                {item.category}
                            </span>
                            <span className={styles.date}>{item.date}</span>
                        </div>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.content}>{item.content}</p>
                        <button
                            className={styles.readMore}
                            onClick={() => item.url ? window.open(item.url, '_blank') : null}
                        >
                            Read More →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CareerNews;
