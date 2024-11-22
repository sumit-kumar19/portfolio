// // // src/components/SkillsSection.js
// // import React from "react";

// // const skillsData = {
// //   backend: [
// //     { name: "RubyonRails", description: "Backend Framework", logo: "logo-url" },
// //     { name: "PHP", description: "Backend Language", logo: "logo-url" },
// //     { name: "Java", description: "Object-Oriented Programming Language", logo: "logo-url" },
// //     { name: "SpringBoot", description: "Java Framework", logo: "logo-url" },
// //     { name: "Node.js", description: "Backend Runtime", logo: "logo-url" },
// //   ],
// //   cloudDevOps: [
// //     { name: "CI/CD", description: "Continuous Integration & Delivery", logo: "logo-url" },
// //     { name: "Netlify", description: "Frontend Deployment Platform", logo: "logo-url" },
// //     { name: "Heroku", description: "Cloud Platform for Apps", logo: "logo-url" },
// //     { name: "Kubernetes", description: "Container Orchestration", logo: "logo-url" },
// //     { name: "Docker", description: "Containerization", logo: "logo-url" },
// //     { name: "GCP", description: "Google Cloud Platform", logo: "logo-url" },
// //   ]
// // };

// // const SkillsSection = ({ title, skills }) => {
// //   return (
// //     <div className="my-8">
// //       <h2 className="text-white text-3xl font-semibold mb-6">{title}</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {skills.map((skill, index) => (
// //           <div 
// //             key={index} 
// //             className="bg-gray-900 text-center p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group"
// //           >
// //             <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
// //             <div className="relative z-10">
// //               <img src={skill.logo} alt={skill.name} className="mx-auto mb-4" />
// //               <h3 className="text-xl text-white font-bold">{skill.name}</h3>
// //               <p className="text-gray-400">{skill.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // const SkillsPage = () => {
// //   return (
// //     <div className="min-h-screen bg-black text-white">
// //       <div className="container mx-auto px-4">
// //         <SkillsSection title="Backend" skills={skillsData.backend} />
// //         <SkillsSection title="Cloud & DevOps" skills={skillsData.cloudDevOps} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default SkillsPage;  


// "use client"

// import React from "react"
// import { Card, CardContent } from "@/components/ui/card"

// interface Skill {
//   name: string
//   description: string
//   logo: string
// }

// interface SkillsData {
//   backend: Skill[]
//   cloudDevOps: Skill[]
// }

// const skillsData: SkillsData = {
//   backend: [
//     { name: "RubyonRails", description: "Backend Framework", logo: "/placeholder.svg?height=64&width=64" },
//     { name: "PHP", description: "Backend Language", logo: "/placeholder.svg?height=64&width=64" },
//     { name: "Java", description: "Object-Oriented Programming Language", logo: "/placeholder.svg?height=64&width=64" },
//     { name: "SpringBoot", description: "Java Framework", logo: "/placeholder.svg?height=64&width=64" },
//     { name: "Node.js", description: "Backend Runtime", logo: "/placeholder.svg?height=64&width=64" },
//   ],
//   cloudDevOps: [
//     { name: "CI/CD", description: "Continuous Integration & Delivery", logo: "/placeholder.svg?height=64&width=64" },
//     { name: "Netlify", description: "Frontend Deployment Platform", logo: "/placeholder.svg?height=64&width=64" },
//     { name: "Heroku", description: "Cloud Platform for Apps", logo: "/placeholder.svg?height=64&width=64" },
//     { name: "Kubernetes", description: "Container Orchestration", logo: "/placeholder.svg?height=64&width=64" },
//     { name: "Docker", description: "Containerization", logo: "/placeholder.svg?height=64&width=64" },
//     { name: "GCP", description: "Google Cloud Platform", logo: "/placeholder.svg?height=64&width=64" },
//   ]
// }

// const SkillsSection: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => {
//   return (
//     <div className="my-8">
//       <h2 className="text-3xl font-semibold mb-6 text-primary">{title}</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {skills.map((skill, index) => (
//           <Card key={index} className="bg-black text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-red-500">
//             <CardContent className="p-6">
//               <img src={skill.logo} alt={skill.name} className="mx-auto mb-4 w-16 h-16" />
//               <h3 className="text-xl font-bold">{skill.name}</h3>
//               <p className="text-muted-foreground">{skill.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default function SkillsPage() {
//   return (
//     <div className="min-h-screen bg-black text-foreground">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-8 text-center text-white">My Skills</h1>
//         <SkillsSection title="Backend" skills={skillsData.backend} />
//         <SkillsSection title="Cloud & DevOps" skills={skillsData.cloudDevOps} />
//       </div>
//     </div>
//   )
// }
"use client"

import React from "react"

interface Skill {
  name: string
  description: string
  logo: string
}

interface SkillsData {
  backend: Skill[]
  cloudDevOps: Skill[]
}

const skillsData: SkillsData = {
  backend: [
    { name: "RubyonRails", description: "Backend Framework", logo: "/placeholder.svg?height=64&width=64" },
    { name: "PHP", description: "Backend Language", logo: "/placeholder.svg?height=64&width=64" },
    { name: "Java", description: "Object-Oriented Programming Language", logo: "/placeholder.svg?height=64&width=64" },
    { name: "SpringBoot", description: "Java Framework", logo: "/placeholder.svg?height=64&width=64" },
    { name: "Node.js", description: "Backend Runtime", logo: "/placeholder.svg?height=64&width=64" },
  ],
  cloudDevOps: [
    { name: "CI/CD", description: "Continuous Integration & Delivery", logo: "/placeholder.svg?height=64&width=64" },
    { name: "Netlify", description: "Frontend Deployment Platform", logo: "/placeholder.svg?height=64&width=64" },
    { name: "Heroku", description: "Cloud Platform for Apps", logo: "/placeholder.svg?height=64&width=64" },
    { name: "Kubernetes", description: "Container Orchestration", logo: "/placeholder.svg?height=64&width=64" },
    { name: "Docker", description: "Containerization", logo: "/placeholder.svg?height=64&width=64" },
    { name: "GCP", description: "Google Cloud Platform", logo: "/placeholder.svg?height=64&width=64" },
  ]
}

const SkillsSection: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => {
  return (
    <div className="my-8">
      <h2 className="text-3xl font-semibold mb-6 text-primary">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-black text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-red-500 p-6 rounded-lg">
            <div className="mx-auto mb-4 w-16 h-16">
              <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold">{skill.name}</h3>
            <p className="text-muted-foreground">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">My Skills</h1>
        <SkillsSection title="Backend" skills={skillsData.backend} />
        <SkillsSection title="Cloud & DevOps" skills={skillsData.cloudDevOps} />
      </div>
    </div>
  )
}