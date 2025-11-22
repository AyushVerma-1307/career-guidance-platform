import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import styles from './OptionCard.module.css';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const OptionCard = ({ optionKey, option, isSelected, onSelect }) => {
    return (
        <motion.div
            className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            onClick={() => onSelect(optionKey)}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
        >
            <div className={styles.content}>
                <h3 className={styles.title}>{option.label}</h3>
                {option.description && <p className={styles.description}>{option.description}</p>}
                {option.training && <p className={styles.meta}>Training: {option.training}</p>}
                {option.salary_range && <p className={styles.meta}>Salary: {option.salary_range}</p>}
            </div>

            <div className={styles.icon}>
                {isSelected ? <CheckCircle size={24} /> : <ArrowRight size={20} />}
            </div>
        </motion.div>
    );
};

export default OptionCard;
