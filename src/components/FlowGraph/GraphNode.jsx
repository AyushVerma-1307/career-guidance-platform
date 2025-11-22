import React from 'react';
import { motion } from 'framer-motion';
import OptionCard from './OptionCard';
import styles from './GraphNode.module.css';

const GraphNode = ({ node, selectedOption, onSelect }) => {
    if (!node) return null;

    return (
        <motion.div
            className={styles.nodeContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.questionBox}>
                <h2 className={styles.question}>{node.question}</h2>
            </div>

            <div className={styles.optionsGrid}>
                {Object.entries(node.options).map(([key, option]) => (
                    <OptionCard
                        key={key}
                        optionKey={key}
                        option={{
                            label: option.label || key, // Fallback for yes/no if label missing in some structure
                            ...option
                        }}
                        isSelected={selectedOption === key}
                        onSelect={() => onSelect(key, option)}
                    />
                ))}
            </div>

            {/* Show message if the selected option is a terminal message node */}
            {selectedOption && node.options[selectedOption]?.message && (
                <motion.div
                    className={styles.messageBox}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <p>{node.options[selectedOption].message}</p>
                </motion.div>
            )}
        </motion.div>
    );
};

export default GraphNode;
