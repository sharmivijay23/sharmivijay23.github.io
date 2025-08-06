import {
  SiSap,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiJirasoftware,
  SiMural,
} from "react-icons/si";
import { FaConfluence } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";

const skills = [
  {
    category: "Development & Platform Tools",
    items: [
      { name: "React", icon: <SiReact size={28} className="text-black" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={28} className="text-black" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={28} className="text-black" />,
      },
      { name: "SAP", icon: <SiSap size={28} className="text-black" /> },
      { name: "Power BI", logo: "/logos/powerbi.png" },
      { name: "SQL", icon: <BsFiletypeSql size={28} className="text-black" /> },
    ],
  },
  {
    category: "Project Management Skills",
    items: [
      { name: "Product Backlog", logo: "/logos/product-backlog.png" },
      { name: "User Stories", logo: "/logos/user-story.png" },
      { name: "Roadmap Planning", logo: "/logos/roadmap.png" },
      { name: "BRD / FRD", logo: "/logos/requirement-document.svg" },
      { name: "Agile", logo: "/logos/agile.png" },
      { name: "Waterfall", logo: "/logos/waterfall.png" },
    ],
  },
  {
    category: "Collaboration Tools",
    items: [
      {
        name: "JIRA",
        icon: <SiJirasoftware size={28} className="text-black" />,
      },
      {
        name: "Confluence",
        icon: <FaConfluence size={28} className="text-black" />,
      },
      { name: "MURAL", icon: <SiMural size={28} className="text-black" /> },
    ],
  },
];

export default function SkillSection() {
  return (
    <section className="mx-auto my-12 w-full px-2 text-white sm:w-5/6 sm:px-4 lg:w-2/3">
      <h2 className="mb-8 text-center text-4xl font-bold">Skills</h2>

      <div className="space-y-6 sm:space-y-8">
        {skills.map((group) => (
          <div key={group.category}>
            <div className="mx-auto mb-3 flex justify-center rounded-xl bg-gray-900 p-4 text-left text-base font-bold text-neutral-100">
              {group.category}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-1 rounded-md bg-transparent p-2 text-center sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-3 sm:text-left"
                >
                  {/* Icon wrapper */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-emerald-500 shadow-md">
                    {skill.icon && skill.icon}
                    {skill.logo && (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="h-6 w-6 object-contain"
                      />
                    )}
                  </div>

                  {/* Skill Name */}
                  <span className="mt-1 text-sm font-medium sm:mt-0">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// export default function SkillSection() {
//   return (
//     <section className="mx-auto my-16 w-full px-2 text-white sm:w-5/6 sm:px-4 lg:w-2/3">
//       <h2 className="mb-10 text-center text-4xl font-bold">Skills</h2>

//       <div className="space-y-8 sm:space-y-10">
//         {skills.map((group) => (
//           <div key={group.category}>
//             <div className="mb-3 text-left text-lg font-bold">
//               {group.category}
//             </div>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
//               {group.items.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex items-center gap-3 rounded-md bg-transparent px-2 py-2 sm:px-4 sm:py-3"
//                 >
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-emerald-500 shadow-md">
//                     {skill.icon && skill.icon}
//                     {skill.logo && (
//                       <img
//                         src={skill.logo}
//                         alt={skill.name}
//                         className="h-6 w-6 object-contain"
//                       />
//                     )}
//                   </div>

//                   <span className="text-sm font-medium">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
