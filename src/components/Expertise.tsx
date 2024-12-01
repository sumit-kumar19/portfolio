// import React from "react";
// import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
// import Chip from '@mui/material/Chip';

// const labelsFirst = [
//     "React",
//     "TypeScript",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "SASS",
//     "Flask",
//     "Python",
//     "SQL",
//     "PostgreSQL",
//     "Postman"
// ];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Docker",
//     "AWS",
//     "Azure",
//     "Linux",
//     "Snowflake",
//     "Pandas",
//     "Selenium",
// ];

// const labelsThird = [
//     "OpenAI",
//     "Groq",
//     "LangChain",
//     "Qdrant",
//     "Hugging Face",
//     "LlamaIndex",
//     "Streamlit",
// ];

// function Expertise() {
//     return (
//     <div className="container mx-auto p-5 md:p-10" id="expertise">
//         <div className="skills-container flex flex-col text-left">
//             <h1 className="text-3xl font-bold mb-5">Expertise</h1>
//             <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-12">
//                 <div className="skill flex flex-col items-center text-left">
//                     <FontAwesomeIcon icon={faReact} size="3x" className="text-white"/>
//                     <h3 className="text-xl font-semibold mt-4">Full Stack Web Development</h3>
//                     <p className="mt-2">I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
//                     <div className="flex-chips flex flex-wrap items-center mt-2">
//                         <span className="chip-title text-white pr-2">Tech stack:</span>
//                         {labelsFirst.map((label, index) => (
//                             <Chip key={index} className='chip text-gray-800 bg-white text-xs h-6' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill flex flex-col items-center text-left">
//                     <FontAwesomeIcon icon={faDocker} size="3x" className="text-white"/>
//                     <h3 className="text-xl font-semibold mt-4">DevOps & Automation</h3>
//                     <p className="mt-2">Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
//                     <div className="flex-chips flex flex-wrap items-center mt-2">
//                         <span className="chip-title text-white pr-2">Tech stack:</span>
//                         {labelsSecond.map((label, index) => (
//                             <Chip key={index} className='chip text-gray-800 bg-white text-xs h-6' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill flex flex-col items-center text-left">
//                     <FontAwesomeIcon icon={faPython} size="3x" className="text-white"/>
//                     <h3 className="text-xl font-semibold mt-4">GenAI & LLM</h3>
//                     <p className="mt-2">Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
//                     <div className="flex-chips flex flex-wrap items-center mt-2">
//                         <span className="chip-title text-white pr-2">Tech stack:</span>
//                         {labelsThird.map((label, index) => (
//                             <Chip key={index} className='chip text-gray-800 bg-white text-xs h-6' label={label} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default Expertise;

// import React from "react";
// import { FaReact, FaDocker, FaPython } from "react-icons/fa";
// import Chip from '@mui/material/Chip';

// const labelsFirst = [
//     "React",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "Git",
    
// ];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Vite",
//     "tailwindcss",
//     "react",
//     "Linux",
// ];

// const labelsThird = [
//     "python",
//     "flask",
//     "react",
//     "tailwindcss",
//     "git",
//     "api",
// ];

// function Expertise() {
//     return (
//     <div className="container mx-auto p-3 md:p-10" id="expertise">
//         <div className="container md:p-10 border-2 border-solid border-gray-600 rounded" id="expertise">
//             <div className="skills-container flex flex-col text-left">
//                 <h1 className="text-3xl font-bold mb-5">Projects</h1>
//                 <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
//                     <div className="skill flex flex-col items-center text-left bg-gray-100 border-1 border- rounded m-2 p-4 dark:bg-gray-900">
//                         <FaReact size="3em" className="text-foreg" />
//                         <h3 className="text-xl font-semibold mt-4">Prakati </h3>
//                         <p className="mt-2">A site to know one body phenotype by answering pre-defined questions</p>
//                         <div className="flex-chips flex flex-wrap items-center mt-2">
//                             <span className="chip-title text-gray-950 dark:text-white pr-2">Tech stack:</span>
//                             <div className="bg-gray-300">
//                             {labelsFirst.map((label, index) => (
//                                 <Chip key={index} className='chip h-6  text-white' label={label} />
//                             ))}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="skill flex flex-col items-center text-left bg-gray-100 border-1 border- rounded m-2 p-4 dark:bg-gray-900">
//                         <FaDocker size="3em" className="text-foreg" />
//                         <h3 className="text-xl font-semibold mt-4">Certificate genrating site with landing page</h3>
//                         <p className="mt-2">A college site to distribute Certificate and announce upcoming events and coding contests</p>
//                         <div className="flex-chips flex flex-wrap items-center mt-2">
//                             <span className="chip-title  text-gray-950 dark:text-white pr-2">Tech stack:</span>
//                             {labelsSecond.map((label, index) => (
//                                 <Chip key={index} className='chip text-gray-800 bg-white text-xs h-6' label={label} />
//                             ))}
//                         </div>
//                     </div>

//                     <div className="skill flex flex-col items-center text-left bg-gray-100 border-1 border- rounded m-2 p-4 dark:bg-gray-900">
//                         <FaPython size="3em" className="text-foreg" />
//                         <h3 className="text-xl font-semibold mt-4">Readlogger</h3>
//                         <p className="mt-2">A web library to store there paast and current reading book</p>
//                         <div className="flex-chips flex flex-wrap items-center mt-2">
//                             <span className="chip-title  text-gray-950 dark:text-white pr-2">Tech stack:</span>
//                             {labelsThird.map((label, index) => (
//                                 <Chip key={index} className='chip text-gray-800 bg-white text-xs h-6' label={label} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default Expertise;

import React from "react";
import { FaReact,  FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoLibrary } from "react-icons/io5"
import { TbCertificate } from "react-icons/tb"

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Vite",
    "tailwindcss",
    "react",
    "Linux",
];

const labelsThird = [
    "python",
    "flask",
    "react",
    "tailwindcss",
    "git",
    "api",
];

function Expertise() {
    return (
        <div className="container mx-auto p-3 md:p-10" id="expertise">
            <div className="container md:p-10 border-2 border-solid border-gray-600 rounded">
                <div className="skills-container flex flex-col text-left">
                    <h1 className="text-3xl font-bold mb-5">Projects</h1>
                    <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <ProjectCard 
                            icon={<FaReact size="3em" className="text-blue-500" />}
                            title="Prakati"
                            description="A site to know one body phenotype by answering pre-defined questions"
                            labels={labelsFirst}
                            githubLink="https://github.com/yourusername/prakati"
                            siteLink="https://prakati.example.com"
                        />
                        <ProjectCard 
                            icon={<TbCertificate size="3em" className="text-blue-600" />}
                            title="Certificate generating site with landing page"
                            description="A college site to distribute Certificate and announce upcoming events and coding contests"
                            labels={labelsSecond}
                            githubLink="https://github.com/yourusername/certificate-generator"
                            siteLink="https://certificate-generator.example.com"
                        />
                        <ProjectCard 
                            icon={<IoLibrary size="3em" className="text-yellow-500" />}
                            title="Readlogger"
                            description="A web library to store their past and current reading books keep track of chapters"
                            labels={labelsThird}
                            githubLink="https://github.com/yourusername/readlogger"
                            siteLink="https://readlogger.example.com"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ProjectCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    labels: string[];
    githubLink: string;
    siteLink: string;
}

function ProjectCard({ icon, title, description, labels, githubLink, siteLink }: ProjectCardProps) {
    return (
        <div className="skill flex flex-col items-center text-left bg-gray-100 border border-gray-300 rounded-lg m-2 p-6 dark:bg-gray-800 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between w-full mb-4">
                {icon}
                <div className="flex gap-2">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                        <FaGithub size="1.5em" />
                    </a>
                    <a href={siteLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                        <FiExternalLink size="1.5em" />
                    </a>
                </div>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">{title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
            <div className="flex-chips flex flex-wrap items-center mt-4">
                <span className="chip-title text-gray-700 dark:text-gray-300 pr-2 font-medium">Tech stack:</span>
                <div className="flex flex-wrap gap-2">
                    {labels.map((label, index) => (
                        <span 
                            key={index} 
                            className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;

