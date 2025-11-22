import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { careerData } from '../data/careerData';
import styles from './Search.module.css';

const Search = ({ onSelectCareer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Flatten career data for searching
    const getAllCareers = () => {
        const careers = [];
        const traverse = (node) => {
            if (node.options) {
                Object.values(node.options).forEach(option => {
                    if (option.type === 'career') {
                        careers.push(option.data);
                    } else if (option.next && careerData.career_flow[option.next]) {
                        traverse(careerData.career_flow[option.next]);
                    }
                });
            }
        };
        traverse(careerData.career_flow['10th_completed']);
        return careers;
    };

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const allCareers = getAllCareers();
        const filtered = allCareers.filter(career =>
            career.title.toLowerCase().includes(query.toLowerCase()) ||
            career.description.toLowerCase().includes(query.toLowerCase())
        );
        // Remove duplicates based on title
        const uniqueResults = Array.from(new Set(filtered.map(a => a.title)))
            .map(title => filtered.find(a => a.title === title));

        setResults(uniqueResults);
    }, [query]);

    return (
        <>
            <button className={styles.searchTrigger} onClick={() => setIsOpen(true)} title="Search Careers">
                <SearchIcon size={20} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className={styles.searchBox}
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className={styles.inputWrapper}>
                                <SearchIcon size={20} className={styles.icon} />
                                <input
                                    type="text"
                                    placeholder="Search for careers (e.g., Engineer, Doctor)..."
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    autoFocus
                                    className={styles.input}
                                />
                                <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                                    <X size={20} />
                                </button>
                            </div>

                            <div className={styles.results}>
                                {results.map((career, index) => (
                                    <div
                                        key={index}
                                        className={styles.resultItem}
                                        onClick={() => {
                                            onSelectCareer(career);
                                            setIsOpen(false);
                                            setQuery('');
                                        }}
                                    >
                                        <h4>{career.title}</h4>
                                        <p>{career.description}</p>
                                    </div>
                                ))}
                                {query && results.length === 0 && (
                                    <div className={styles.noResults}>No careers found.</div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Search;
