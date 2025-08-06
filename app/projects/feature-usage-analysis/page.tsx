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
            Feature Usage and Growth Trends(2019-2024)
          </div>
          <div className="flex flex-col justify-center">
            Designed and developed an interactive Power BI dashboard to analyze
            feature usage trends across a product over six years (2019 - 2024).
            The dataset simulated real-world customer usage of 12 product
            features, tracked monthly, and included year over year comparisons.
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
            <br />
            The dashboard enables stakeholders to quickly view current vs
            previous year performance, track feature growth or decline, and gain
            insights into which features drive the most engagement. Key visuals
            include:
            <br />
            <br />
            <ul className="list-inside list-disc pl-6">
              <li>
                Matrix view with dynamic data bars for current and previous year
                usage
              </li>
              <li>
                % Change column with conditional formatting (green/red arrows)
                to highlight growth or drop offs
              </li>
              <li>Slicers for Year & Feature for easy</li>
              <li>
                filtering KPIs and cards for total usage, YoY growth, and top
                performing features
              </li>
            </ul>
            <br />
            Designed using a professional theme with dark backgrounds and
            vibrant accents for readability. The dashboard highlights key
            business insights at a glance and demonstrates strong skills in
            dashboard design best practices.
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
