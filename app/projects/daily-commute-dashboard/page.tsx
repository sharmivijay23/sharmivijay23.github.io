import Image from "next/image";
import { Footer } from "flowbite-react";
import { Navbar } from "flowbite-react";
import { NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export default function featureUsageAnalysis() {
  return (
    <div>
      {/* <FeatureNavBar /> */}
      <div className="w-full bg-slate-900 text-white">
        <div className="mx-auto flex w-2/3 flex-col justify-center pb-16">
          <div className="m-16 flex justify-center text-4xl font-semibold">
            Daily Commute Dashboard - 2024
          </div>
          <div className="flex flex-col justify-center">
            I always hear friends complain about traffic, so I thought why not
            turn it into a project? I created a Daily Commute Dashboard in Power
            BI that shows how 100 employees get to work, how long it takes, and
            which areas they are coming from in Chennai.
            <br />
            <div className="flex justify-center p-8">
              <Image
                src="/Sales_comparison.png"
                alt="Feature Usage and Growth Trends"
                width="900"
                height="900"
                className="mb-2 rounded-lg"
              />
            </div>
            Created a dashboard in Power BI to analyze employee commuting
            patterns across key neighborhoods in Chennai. The dataset covers 100
            employees from areas like Anna Nagar, Guindy, Porur, and Velachery,
            capturing details such as mode of transport (Bus, Car, Bike, or
            Walking), commute distance (1 - 20 km), and average time taken per
            trip.
            <br />
            <br />
            Using this data, the dashboard highlights insights such as which
            areas have the longest commutes, how transport modes impact travel
            time (e.g., bikes are fastest for short distances, while buses see
            higher delays), and which neighborhoods contribute the most
            commuters.
            <br />
            <br />
            Visuals include a map for location clusters, a donut chart for
            transport mode share, a scatter plot with a trendline to show how
            distance correlates with time, and KPI cards to summarize key
            metrics like average commute time. A Smart Narrative layer
            automatically generates written insights, and slicers make the
            dashboard fully interactive for HR or management teams who might
            want to explore specific areas or modes.
            <br />
            <br />
            The end result is a clean, business-ready dashboard that turns raw
            commute data into actionable insights for workplace planning or
            policy discussions.
          </div>
        </div>
      </div>
      <Footer className="rounded-none bg-gray-950 p-8 text-white">
        <div className="flex w-full justify-center">
          Built with coffee, curiosity & care by Sharmi ☕❤️
        </div>
      </Footer>
    </div>
  );
}

function FeatureNavBar() {
  return (
    <div className="flex justify-end bg-slate-900 p-8">
      <Navbar fluid rounded className="bg-slate-900 text-4xl text-white">
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink className="text-lg text-white" href="#home" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} className="text-lg text-white" href="#about">
            About
          </NavbarLink>
          <NavbarLink className="text-lg text-white" href="#projects">
            Projects
          </NavbarLink>
          <NavbarLink className="text-lg text-white" href="#contact">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
