// export default function Contacts() {
//   return (
//     <div className="mx-auto w-2/3 pt-32 text-white">
//       <div className="flex justify-center p-8 text-4xl"> Contact </div>
//       <div className="flex justify-between p-24 text-white">
//         <div> LinkedIn</div>
//         <div> Email </div>
//         <div> Github </div>
//       </div>
//     </div>
//   );
// }

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contacts = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={28} className="text-white" />,
    href: "https://www.linkedin.com/in/sharmila-vijayakumar-96478497/",
    bg: "#0077B5", // LinkedIn Blue
  },
  {
    name: "Gmail",
    icon: <MdEmail size={28} className="text-white" />,
    href: "mailto:sharmivijay94@gmail.com",
    bg: "#EA4335", // Gmail Red
  },
  {
    name: "GitHub",
    icon: <FaGithub size={28} className="text-white" />,
    href: "https://github.com/sharmivijay23",
    bg: "#181717", // GitHub Black
  },
];

export default function ContactSection() {
  return (
    <section className="mx-auto my-12 w-full px-2 text-white sm:w-5/6 sm:px-4 lg:w-2/3">
      <h2 className="mb-8 text-center text-4xl font-bold">Contact</h2>

      <div className="grid grid-cols-3 gap-3 text-center sm:gap-5 md:gap-6">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 p-2 sm:p-4"
          >
            {/* Icon in square with brand background */}
            <div
              className="flex h-14 w-14 items-center justify-center rounded-md shadow-md"
              style={{ backgroundColor: contact.bg }}
            >
              {contact.icon}
            </div>

            {/* Label below */}
            <span className="text-sm font-medium group-hover:underline">
              {contact.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
