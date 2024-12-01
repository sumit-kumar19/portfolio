// 'use client'

// import React, { useEffect, useRef, useState } from "react";
// import { useSpring, animated } from '@react-spring/web';

// interface TimelineElementProps {
//   date: string;
//   title: string;
//   location: string;
//   description: string;
//   isLeft: boolean;
// }

// function TimelineElement({ date, title, location, description, isLeft }: TimelineElementProps) {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, []);

//   const props = useSpring({
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
//     config: { mass: 1, tension: 120, friction: 14 },
//   });

//   return (
//     <animated.div ref={elementRef} style={props} className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-8`}>
//       <div className="w-5/12">
//         <div className={`p-4 rounded-lg shadow-md bg-gray-200 ${isLeft ? 'mr-8' : 'ml-8'}`}>
//           <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
//           <h4 className="text-lg text-gray-600">{location}</h4>
//           <p className="text-bac mt-2">{description}</p>
//         </div>
//       </div>
//       <div className="w-2/12 flex justify-center">
//         <div className="relative">
//           <div className="absolute w-0.5 h-full bg-purple-600 left-1/2 transform -translate-x-1/2"></div>
//           <div className="absolute w-4 h-4 bg-purple-600 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//         </div>
//       </div>
//       <div className="w-5/12">
//         <p className={`mt-2 text-gray-400 ${isLeft ? 'text-left' : 'text-right'}`}>{date}</p>
//       </div>
//     </animated.div>
//   );
// }

// function Timeline() {
//   const timelineData = [
//     {
//       date: "2022 - present",
//       title: "Technology Consultant",
//       location: "Dallas, TX",
//       description: "Full-stack Web Development, GenAI/LLM, Project Management, Business Development"
//     },
//     {
//       date: "2020 - 2022",
//       title: "Full Stack Engineer",
//       location: "Laie, HI",
//       description: "Frontend Development, Backend Development, User Experience, Team Leading"
//     },
//     {
//       date: "2021 - 2021",
//       title: "Staff Engineer Intern",
//       location: "Laie, HI",
//       description: "Full-stack Development, API Development, User Experience"
//     },
//     {
//       date: "2020 - 2020",
//       title: "Data Analyst Intern",
//       location: "Tokyo, Japan",
//       description: "Automation, Data Governance, Statistical Analysis"
//     }
//   ];

//   return (
//     <section id="history" className="bg-background py-12">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-foreground mb-8">Career History</h2>
//         <div className="relative">
//           <div className=""></div>
//           {timelineData.map((item, index) => (
//             <TimelineElement
//               key={index}
//               date={item.date}
//               title={item.title}
//               location={item.location}
//               description={item.description}
//               isLeft={index % 2 === 0}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Timeline;


'use client'

import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from '@react-spring/web';

interface Milestone {
  id: number;
  position: number;
  label: string;
}

interface TimelineElementProps {
  date: string;
  title: string;
  location: string;
  description: string;
  isLeft: boolean;
}

function TimelineElement({ date, title, location, description, isLeft }: TimelineElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <animated.div ref={elementRef} style={props} className={`flex mb-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <div className="p-4 rounded-lg shadow-md bg-gray-300">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-black mb-2">{date}</p>
          <p className="text-sm text-gray-700 mb-2">{location}</p>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
      
      <div className="w-5/12"></div>
    </animated.div>
  );
}

function Timeline() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      date: "2022 - 2026",
      title: "Bachelors in Computer Science",
      location: "Uttar pradesh, India",
      description: ""
    },
    {
      date: "2023 - 2024",
      title: "Founded Coding club at my college",
      location: "Uttar pradesh, India",
      description: "Communication , Team Leading"
    },
    {
      date: "2023",
      title: "Learned Web Development",
      location: "",
      description: "Full-stack Development,Tailwind CSS, React, Node.js,Vite,Nest.js"
    },
    {
      date: "2022",
      title: "12th Grade",
      location: "Haryana, India",
      description: "Ashok Memorial Public School"
    }
  ];

  const milestones: Milestone[] = timelineData.map((item, index) => ({
    id: index + 1,
    position: (index / (timelineData.length - 1)) * 100,
    label: item.title,
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = window.scrollY - container.offsetTop;
        const scrollableHeight = container.scrollHeight - window.innerHeight;
        const percentage = (scrollPosition / scrollableHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, percentage)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} id="history" className="relative bg-background py-16 border-2 border-solid rounded border-gray-600 m-6 hidden sm:block">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Career History</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white">
            <div 
              className="w-full bg-purple-400 transition-all duration-250"
              style={{ height: `${scrollPercentage}%` }}
              role="progressbar"
              aria-valuenow={Math.round(scrollPercentage)}
              aria-valuemin={0}
              aria-valuemax={150}
            />
            {milestones.map((milestone) => (
                <div
                  key={milestone.id}
                className="absolute w-4 h-4 bg-purple-500  rounded-full -left-1.5 transition-all duration-200 flex items-center justify-center "
                style={{ top: `${milestone.position}%` }}
                aria-label={milestone.label}
              >
                <div 
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    scrollPercentage >= milestone.position ? 'bg-purple-500' : 'bg-white'
                  }`}
                />
              </div>
            ))}
          </div>
          {timelineData.map((item, index) => (
            <TimelineElement
              key={index}
              date={item.date}
              title={item.title}
              location={item.location}
              description={item.description}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;

