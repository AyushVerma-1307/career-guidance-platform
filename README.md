# Career Guidance Platform

A modern, interactive web application designed to guide students through various career paths after completing their 10th grade education. The platform visualizes career trajectories, provides detailed insights into different professions, and helps users make informed decisions about their future.

## 🚀 Features

- **Interactive Career Flow**: A dynamic, step-by-step decision tree starting from "10th Completed" to various professional outcomes.
- **Detailed Career Insights**: Comprehensive information for each career option, including:
  - Description & Role
  - Average Salary
  - Roadmap (Education & Skills)
  - Pros & Cons
  - Top Colleges/Institutions
- **Smart Search**: Quickly find specific careers by title or description using the integrated search bar.
- **Dark/Light Mode**: Toggle between themes for a comfortable reading experience.
- **Responsive Design**: Optimized for various screen sizes.
- **Smooth Animations**: Powered by Framer Motion for an engaging user experience.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: CSS Modules, Vanilla CSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

## 🏁 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    The application will typically run at `http://localhost:5173` (check the terminal output for the exact URL).

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── FlowGraph/       # Components for the interactive decision tree
│   ├── CareerDetailModal.jsx  # Modal for displaying career details
│   ├── Header.jsx       # App header with search and theme toggle
│   └── Search.jsx       # Search functionality implementation
├── data/
│   └── careerData.js    # JSON-like data structure defining the career graph
├── App.jsx              # Main application component managing state and routing
└── main.jsx             # Entry point
```

## 🔮 Future Scope

- **Mobile Application**: Native iOS and Android apps for on-the-go career exploration.
- **AI-Powered Career Counselor**: Chatbot with natural language processing for personalized guidance.
- **Video Testimonials**: Interview videos from professionals sharing real-world career insights.
- **Personalized Learning Paths**: AI-curated roadmaps based on student's strengths, interests, and assessment scores.
- **College Admission Integration**: Direct links to application portals and admission status tracking.
- **Mentor Connection Platform**: Connect students with industry professionals for Q&A and guidance.
- **Multilingual Support**: Interface in Hindi, Tamil, Telugu, and other regional languages for wider accessibility.
- **Virtual Career Fairs**: Interactive events with companies and educational institutions.
- **Scholarship Finder**: Database of scholarships, grants, and financial aid opportunities.
- **Real-time Analytics Dashboard**: Track popular career trends and student preferences.

## 📄 License

This project is for educational and guidance purposes.
