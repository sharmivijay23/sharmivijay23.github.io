import { Card, TabItem, Tabs } from "flowbite-react";
import Image from "next/image";

const projects = [
  {
    imgSrc: "/Sales_comparison.png",
    imgAlt: "Feature Usage and Growth Trends",
    desc: "Analyzed year-over-year feature usage trends with interactive comparisons across months and metrics. Visualized user behavior shifts and growth insights using dynamic slicers and KPI indicators.",
    skillSet: "Power BI",
    category: "Power BI",
    href: "/projects/feature-usage-analysis/",
    title: "Feature Usage and Growth Trends",
  },
  {
    imgSrc: "/Sales_comparison.png",
    imgAlt: "Daily Commute Dashboard",
    desc: "Analyzed employee commute patterns using transport mode, distance, and time metrics. Visualized trends and delays with interactive maps, scatter plots, and KPI summaries to uncover actionable insights.",
    skillSet: "Power BI",
    category: "Power BI",
    href: "/projects/daily-commute-dashboard/",
    title: "Daily Commute Dashboard - 2024",
  },
  {
    imgSrc: "/Tic_Tac_Toe.png",
    imgAlt: "Tic-Tac-Toe",
    desc: "Play the classic Tic-Tac-Toe game with a clean and interactive design. Simple, fun, and perfect for quick matches between two players.",
    skillSet: "React JS, Flowbite, Tailwind CSS",
    category: "React",
    href: "https://github.com/sharmivijay23/tic-tac-toe",
    title: "Tic Tac Toe",
  },
  {
    imgSrc: "/budget_planner.png",
    imgAlt: "Budget Planner",
    desc: "A simple and organized budget planner to track income, savings, and expenses in one place. Designed to help users plan better and get a clear picture of their monthly finances.",
    skillSet: "React JS, Tailwind CSS",
    category: "React",
    href: "https://github.com/sharmivijay23/budget-planner",
    title: "Budget Planner",
  },
];

export default function Projects() {
  return (
    <div className="mx-auto my-12 w-full px-8 text-white sm:w-5/6 lg:w-2/3 lg:px-2">
      <h2 className="mb-8 text-center text-4xl font-bold">Projects</h2>

      <div className="font-semibold text-white">
        <Tabs className="text-white">
          <TabItem active title="All">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {projects.map((project) => (
                <MyCard key={project.imgSrc} {...project} />
              ))}
            </div>
          </TabItem>
          <TabItem title="React JS"> React JS </TabItem>
          <TabItem title="Power BI"> Power BI </TabItem>
        </Tabs>
      </div>
    </div>
  );
}

function MyCard({ imgSrc, imgAlt, desc, skillSet, href, title }) {
  return (
    <div>
      <Card
        href={href}
        target="_blank"
        className="h-[400px] border-2 border-white bg-gradient-to-l from-emerald-50 to-teal-50 lg:h-[400px]"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[45px] items-center justify-center text-center text-sm font-bold text-black sm:text-base">
            {title}
          </div>

          <div className="relative h-[170px] rounded-md bg-white">
            <Image
              src={imgSrc}
              alt={imgAlt}
              fill
              className="rounded-md object-contain p-1"
            />
          </div>

          {/* Description */}
          <div
            className="mt-2 line-clamp-4 text-justify text-xs font-normal text-black"
            title={desc}
          >
            {desc}
          </div>

          {/* Skills */}
          <div className="mt-1 h-[30px] text-[10px] font-semibold text-black sm:text-xs">
            Skills: {skillSet}
          </div>
        </div>
      </Card>
    </div>
  );
}
