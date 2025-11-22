import React, { useState, useRef, useEffect } from 'react';
import { careerData } from '../data/careerData';
import { MessageCircle, Send, X } from 'lucide-react';
import styles from './AptitudeTest.module.css';

const questions = [
    {
        id: 1,
        text: "What subjects do you enjoy the most?",
        options: [
            { text: "Mathematics & Physics", score: { engineering: 2, research: 1 } },
            { text: "Biology & Chemistry", score: { medical: 2, research: 1 } },
            { text: "History & Literature", score: { arts: 2, law: 1 } },
            { text: "Accounts & Economics", score: { commerce: 2, ca: 1 } }
        ]
    },
    {
        id: 2,
        text: "How do you prefer to work?",
        options: [
            { text: "Solving complex problems alone", score: { engineering: 1, research: 2 } },
            { text: "Helping people directly", score: { medical: 2, teaching: 1 } },
            { text: "Leading a team", score: { management: 2, business: 1 } },
            { text: "Creating things (art, writing)", score: { arts: 2, design: 1 } }
        ]
    },
    {
        id: 3,
        text: "What is your ideal work environment?",
        options: [
            { text: "Office / Corporate", score: { commerce: 1, management: 1 } },
            { text: "Laboratory / Hospital", score: { medical: 1, research: 1 } },
            { text: "Outdoors / Field work", score: { engineering: 1, defense: 1 } },
            { text: "Studio / Flexible", score: { arts: 1, design: 1 } }
        ]
    }
];

function AptitudeTest() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({});
    const [result, setResult] = useState(null);

    // Chat state
    const [chatMessages, setChatMessages] = useState([
        { id: 1, text: "Hi! I'm your AI Career Assistant. Ask me anything about careers, colleges, or exams!", sender: 'bot' }
    ]);
    const [chatInput, setChatInput] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages]);

    const handleAnswer = (optionScore) => {
        const newScores = { ...scores };
        for (const [key, value] of Object.entries(optionScore)) {
            newScores[key] = (newScores[key] || 0) + value;
        }
        setScores(newScores);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateResult(newScores);
        }
    };

    const calculateResult = (finalScores) => {
        // Find the category with the highest score
        let maxScore = 0;
        let bestCategory = '';

        for (const [category, score] of Object.entries(finalScores)) {
            if (score > maxScore) {
                maxScore = score;
                bestCategory = category;
            }
        }

        // Map category to a career suggestion (simplified)
        const suggestions = {
            engineering: "Engineering (B.Tech/B.E)",
            medical: "Medical (MBBS/BDS)",
            arts: "Bachelor of Arts (BA)",
            commerce: "Chartered Accountancy (CA) or B.Com",
            research: "Pure Sciences (B.Sc)",
            law: "Law (LLB)",
            management: "Management (BBA)",
            design: "Design (B.Des)",
            defense: "National Defense Academy (NDA)"
        };

        setResult(suggestions[bestCategory] || "General Stream (Explore more options)");
    };

    const resetTest = () => {
        setCurrentQuestion(0);
        setScores({});
        setResult(null);
    };

    const handleChatSubmit = (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        // Add user message
        const userMessage = { id: Date.now(), text: chatInput, sender: 'user' };
        setChatMessages(prev => [...prev, userMessage]);
        setChatInput('');

        // Generate bot response (simple keyword matching)
        setTimeout(() => {
            const botResponse = generateBotResponse(chatInput.toLowerCase());
            setChatMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
        }, 500);
    };

    const generateBotResponse = (input) => {
        if (input.includes('engineer')) {
            return "Engineering is great! You can pursue B.Tech in Computer Science, Mechanical, Civil, or Electrical Engineering. Top colleges include IITs, NITs, and BITS Pilani. Entrance: JEE Main/Advanced.";
        } else if (input.includes('doctor') || input.includes('medical') || input.includes('mbbs')) {
            return "To become a doctor, you need to clear NEET and pursue MBBS (5.5 years). Top colleges: AIIMS, CMC Vellore, JIPMER. After MBBS, you can specialize with MD/MS.";
        } else if (input.includes('law')) {
            return "For a career in Law, take CLAT or AILET entrance exams. Pursue BA LLB (5 years) or LLB (3 years). Top colleges: NLSIU Bangalore, NALSAR Hyderabad, NLU Delhi.";
        } else if (input.includes('ca') || input.includes('chartered accountant')) {
            return "CA is a prestigious commerce career! Register for CA Foundation after 12th, then Intermediate, and finally CA Final. It takes 4-5 years. High earning potential!";
        } else if (input.includes('design') || input.includes('nift')) {
            return "Design fields include Fashion, Interior, Product Design. Take NIFT/NID entrance exams. Top institutes: NIFT Delhi, NID Ahmedabad, Pearl Academy.";
        } else if (input.includes('college') || input.includes('university')) {
            return "Top colleges in India include IITs (Engineering), AIIMS (Medical), DU/JNU (Arts), IIMs (Management), NLSIU (Law). Which field are you interested in?";
        } else if (input.includes('salary') || input.includes('package')) {
            return "Starting salaries vary: Engineering (4-25L), Medical (3-10L), CA (6-15L), Law (3-12L), Management (5-20L). It depends on college, skills, and company.";
        } else if (input.includes('exam') || input.includes('entrance')) {
            return "Major entrance exams: JEE (Engineering), NEET (Medical), CLAT (Law), CAT (MBA), NIFT (Design), CUET (Central Universities). Which field interests you?";
        } else {
            return "I can help you with careers in Engineering, Medical, Law, Commerce, Arts, Design, and more. You can also ask about colleges, entrance exams, or salaries. What would you like to know?";
        }
    };

    return (
        <div className={styles.container}>
            <h2>AI Career Recommender</h2>

            {!result ? (
                <div className={styles.quizBox}>
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>

                    <h3>Question {currentQuestion + 1} of {questions.length}</h3>
                    <p className={styles.question}>{questions[currentQuestion].text}</p>

                    <div className={styles.options}>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                className={styles.optionBtn}
                                onClick={() => handleAnswer(option.score)}
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.resultBox}>
                    <h3>Recommended Path For You</h3>
                    <div className={styles.resultCard}>
                        <h4>{result}</h4>
                        <p>Based on your answers, this field aligns well with your interests and work style.</p>
                    </div>
                    <button className={styles.retryBtn} onClick={resetTest}>Take Test Again</button>
                </div>
            )}

            {/* Floating Chat Button */}
            {!isChatOpen && (
                <button className={styles.chatToggle} onClick={() => setIsChatOpen(true)}>
                    <MessageCircle size={24} />
                </button>
            )}

            {/* Chat Window */}
            {isChatOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <h4>AI Career Assistant</h4>
                        <button className={styles.closeChat} onClick={() => setIsChatOpen(false)}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className={styles.chatMessages}>
                        {chatMessages.map(msg => (
                            <div key={msg.id} className={`${styles.message} ${msg.sender === 'bot' ? styles.botMessage : styles.userMessage}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    <form className={styles.chatInput} onSubmit={handleChatSubmit}>
                        <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Ask about careers, colleges, exams..."
                        />
                        <button type="submit">
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AptitudeTest;
