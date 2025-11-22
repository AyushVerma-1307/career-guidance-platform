import React, { useState, useEffect } from 'react';
import styles from './Forum.module.css';

const MOCK_POSTS = [
    {
        id: 1,
        author: "Student_2024",
        title: "Is JEE Mains enough for NITs?",
        content: "I scored 95 percentile, what are my chances for CS in top NITs?",
        replies: 5,
        time: "2 hours ago"
    },
    {
        id: 2,
        author: "MedAspirant",
        title: "NEET vs AIIMS preparation strategy",
        content: "Should I focus more on NCERT for biology?",
        replies: 12,
        time: "5 hours ago"
    }
];

function Forum() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '' });
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem('forum_posts')) || [];
        setPosts([...MOCK_POSTS, ...savedPosts]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newPost.title || !newPost.content) return;

        const post = {
            id: Date.now(),
            author: "You",
            title: newPost.title,
            content: newPost.content,
            replies: 0,
            time: "Just now"
        };

        const updatedPosts = [post, ...posts];
        setPosts(updatedPosts);

        // Save only user posts to local storage to avoid duplicating mock data
        const userPosts = JSON.parse(localStorage.getItem('forum_posts')) || [];
        localStorage.setItem('forum_posts', JSON.stringify([post, ...userPosts]));

        setNewPost({ title: '', content: '' });
        setShowForm(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Community Forum</h2>
                <button className={styles.createBtn} onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancel' : 'Ask a Question'}
                </button>
            </div>

            {showForm && (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        className={styles.input}
                    />
                    <textarea
                        placeholder="What's on your mind?"
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        className={styles.textarea}
                    />
                    <button type="submit" className={styles.submitBtn}>Post Question</button>
                </form>
            )}

            <div className={styles.postList}>
                {posts.map(post => (
                    <div key={post.id} className={styles.postCard}>
                        <div className={styles.postHeader}>
                            <span className={styles.author}>@{post.author}</span>
                            <span className={styles.time}>{post.time}</span>
                        </div>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postContent}>{post.content}</p>
                        <div className={styles.postFooter}>
                            <span>💬 {post.replies} replies</span>
                            <button className={styles.replyBtn}>Reply</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forum;
