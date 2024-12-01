import { SiCplusplus, SiC, SiPython, SiJavascript, SiReact, SiHtml5, SiCss3, SiNextdotjs, SiFlask, SiVite, SiPostman } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons";

interface Skill {
  name: string
  description: string
  icon: IconType
}

interface SkillsData {
  Language: Skill[]
  WebDevlopment: Skill[]
}
const skillsData: SkillsData = {
  Language: [
    { name: "C", description: "Procedural language.", icon: SiC },
    { name: "C++", description: "Extension of C.", icon: SiCplusplus },
    { name: "Java", description: "Object-oriented language.", icon: FaJava },
    { name: "Python", description: "High-level language.", icon: SiPython },
    { name: "JavaScript", description: "ECMAScript language.", icon: SiJavascript },
  ],
  WebDevlopment: [
    { name: "React", description: "UI library.", icon: SiReact },
    { name: "HTML", description: "Markup language.", icon: SiHtml5 },
    { name: "CSS", description: "Style sheet language.", icon: SiCss3 },
    { name: "Next.js", description: "React framework.", icon: SiNextdotjs },
    { name: "Flask", description: "Python framework.", icon: SiFlask },
    { name: "Vite", description: "Build tool.", icon: SiVite },
    { name: "Postman", description: "API platform.", icon: SiPostman },
  ]
}

const SkillsSection: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => {
  return (
    <div className="my-8 border-2 border-solid border-gray-600 rounded p-6 bg-gray-200 dark:bg-stone-900 " id="skills">
      <h2 className="text-3xl font-semibold mb-6 text-primary ">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white text-foreground border-2 border-solid border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl dark:hover:shadow-purple-500 hover:shadow-black/80 p-6 rounded-lg dark:bg-gray-900 ">
            <div className="mx-auto mb-4 w-16 h-16">
              <skill.icon className="w-full h-full object-contain text-blue-300" aria-label={skill.name} />
            </div>
            <h3 className="text-xl font-bold justify-items-center ">{skill.name}</h3>
            <p className="text-muted-foreground hidden sm:block">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground  ">
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold mb-8 text-center text-foreground ">My Skills</h1>
        <SkillsSection title="Backend" skills={skillsData.Language} />
        <SkillsSection title="Cloud & DevOps" skills={skillsData.WebDevlopment} />
      </div>
    </div>
  )
}
