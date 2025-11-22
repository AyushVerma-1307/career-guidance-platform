import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, TrendingUp, Award, DollarSign, Map } from 'lucide-react';
import styles from './CareerDetailModal.module.css';

const CareerDetailModal = ({ career, onClose }) => {
    if (!career) return null;

    const { title, description, education_path, required_skills, entrance_exams, salary_range, future_scope, roadmap, top_colleges, pros, cons } = career;

    return (
        <AnimatePresence>
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className={styles.modal}
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={24} />
                    </button>

                    <div className={styles.header}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.section}>
                            <h3><BookOpen size={18} /> Education Path</h3>
                            <div className={styles.tags}>
                                {education_path?.map((step, i) => (
                                    <span key={i} className={styles.tag}>{step}</span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <h3><Award size={18} /> Skills</h3>
                                <ul>
                                    {required_skills?.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.card}>
                                <h3><TrendingUp size={18} /> Scope</h3>
                                <p className={styles.highlight}>{future_scope}</p>
                                <div className={styles.salary}>
                                    <DollarSign size={16} />
                                    <span>{salary_range}</span>
                                </div>
                            </div>
                        </div>

                        {entrance_exams && (
                            <div className={styles.section}>
                                <h3>Entrance Exams</h3>
                                <div className={styles.tags}>
                                    {entrance_exams.map((exam, i) => (
                                        <span key={i} className={`${styles.tag} ${styles.examTag}`}>{exam}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {top_colleges && (
                            <div className={styles.section}>
                                <h3><Award size={18} /> Top Colleges</h3>
                                <ul className={styles.list}>
                                    {top_colleges.map((college, i) => (
                                        <li key={i}>{college}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {(pros || cons) && (
                            <div className={styles.grid}>
                                {pros && (
                                    <div className={`${styles.card} ${styles.prosCard}`}>
                                        <h3 className={styles.prosTitle}>Pros</h3>
                                        <ul>
                                            {pros.map((pro, i) => <li key={i}>{pro}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {cons && (
                                    <div className={`${styles.card} ${styles.consCard}`}>
                                        <h3 className={styles.consTitle}>Cons</h3>
                                        <ul>
                                            {cons.map((con, i) => <li key={i}>{con}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {roadmap && (
                            <div className={styles.section}>
                                <h3><Map size={18} /> Career Roadmap</h3>
                                <div className={styles.roadmap}>
                                    {roadmap.map((step, i) => (
                                        <div key={i} className={styles.step}>
                                            <div className={styles.stepNumber}>{i + 1}</div>
                                            <span>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CareerDetailModal;
