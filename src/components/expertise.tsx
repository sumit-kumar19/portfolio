import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
        <div className="container mx-auto py-12" id="expertise">
            <div className="skills-container text-left px-8 md:px-24">
                <h1 className="text-3xl font-bold mb-8 text-white">Expertise</h1>
                <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Full Stack Web Development */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" className="text-white mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Full Stack Web Development</h3>
                        <p className="text-white mb-4">
                            I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.
                        </p>
                        <div className="flex-chips flex flex-wrap gap-2">
                            <span className="chip-title font-semibold text-white">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    {/* DevOps & Automation */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" className="text-white mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">DevOps & Automation</h3>
                        <p className="text-white mb-4">
                            Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.
                        </p>
                        <div className="flex-chips flex flex-wrap gap-2">
                            <span className="chip-title font-semibold text-white">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    {/* GenAI & LLM */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" className="text-white mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">GenAI & LLM</h3>
                        <p className="text-white mb-4">
                            Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise-grade GenAI-enabled solutions to empower intelligent decision making.
                        </p>
                        <div className="flex-chips flex flex-wrap gap-2">
                            <span className="chip-title font-semibold text-white">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
