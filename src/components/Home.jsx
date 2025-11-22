import React, { useState } from 'react';
import GraphNode from './FlowGraph/GraphNode';
import CareerDetailModal from './CareerDetailModal';
import { careerData } from '../data/careerData';

function Home({ onSelectCareer, selectedCareer, setSelectedCareer }) {
    const [history, setHistory] = useState([
        { nodeId: '10th_completed', selectedOptionKey: null }
    ]);

    const handleSelect = (index, optionKey, option) => {
        // If it's a career leaf node, open modal
        if (option.type === 'career') {
            setSelectedCareer(option.data);
            return;
        }

        // Create new history up to the current step
        const newHistory = history.slice(0, index + 1);

        // Update the current step's selection
        newHistory[index].selectedOptionKey = optionKey;

        // If there's a next step, add it
        if (option.next) {
            newHistory.push({ nodeId: option.next, selectedOptionKey: null });
        }

        setHistory(newHistory);

        // Scroll to bottom to show new step
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 100);
    };

    // Expose reset functionality if needed via ref or context, 
    // but for now we'll keep it simple. 
    // Actually, the Header was resetting the state in App.jsx.
    // We might need to pass a reset handler down or lift state up.
    // Given the architecture, let's keep the state in Home and maybe expose a reset trigger?
    // Or better, just move the Header INSIDE Home? 
    // No, Header needs to be persistent across routes.

    // Let's look at how Header interacts.
    // Header has onReset.

    // If Header is in App.jsx, it needs to communicate with Home.
    // I can use a context or just pass a key to Home to force re-render/reset.

    return (
        <>
            <main className="main-content">
                {history.map((step, index) => {
                    const node = careerData.career_flow[step.nodeId];
                    return (
                        <GraphNode
                            key={`${step.nodeId}-${index}`}
                            node={node}
                            selectedOption={step.selectedOptionKey}
                            onSelect={(key, option) => handleSelect(index, key, option)}
                        />
                    );
                })}
            </main>

            <CareerDetailModal
                career={selectedCareer}
                onClose={() => setSelectedCareer(null)}
            />
        </>
    );
}

export default Home;
