import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { AnimatedGridPattern } from "./gridpattern";
import { Typewriter } from "react-simple-typewriter";





export default function Hero() {
  const titles = [
    "Software Engineer",
    "Full Stack Developer",
    "Competitive Programmer",
    "Tech Enthusiast",
  ];
  return (
    <>
    <section className="relative bg-gray-800 m-6 border border-spacing-1 rounded">
      <AnimatedGridPattern
        width={40} // Optional: Height of the grid squares
        numSquares={100} // Optional: Number of squares to animate
        maxOpacity={0.3} // Optional: Max opacity for the animated squares
        duration={3} // Optional: Animation duration
        repeatDelay={1} // Optional: Delay before repeating the animation
        className="text-white" // Optional: Add your custom class names
      />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-16 md:py-24 bg-foreg text-white min-h-screen">
          <div className="z-10">
            <img
              src=""
              alt="Yuji Sato"
              className="w-36 md:w-48 rounded-full border-4 border-foreg"
            />
          </div>
          <div className="text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              Sumit kumar
            </h1>
            <div className="text-gray-200 dark:text-gray-200 text-lg font-mono">
              I'm a{" "}
              <span className="text-2xl font-bold text-violet-500">
                <Typewriter
                  words={titles}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>

            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://github.com/sumit-kumar19"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-white hover:text-teal-500 transition-colors"
              >
                <SiGithub className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-teal-500 transition-colors"
              >
                <SiLinkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    </>
  );
}
