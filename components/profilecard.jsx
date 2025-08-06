import { Card, Button } from "flowbite-react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex w-full items-center justify-center px-4 lg:px-0">
      <Card className="border-2 bg-gradient-to-l from-emerald-300 to-teal-400 p-4 sm:w-5/6 sm:p-6 lg:w-2/3 lg:px-12 lg:py-24">
        {/* Mobile & Tablet layout */}
        <div className="flex flex-col gap-4 lg:hidden">
          <div className="text-center text-2xl font-bold sm:text-3xl">
            Sharmila Vijayakumar
          </div>

          <div className="flex justify-center">
            <Image
              src="/Sharmila_Vijayakumar.png"
              alt="sharmi_vijay"
              width="180"
              height="180"
              className="rounded-full"
            />
          </div>

          <div className="sm:text-md px-2 text-center text-sm text-gray-700 italic">
            "From business insights to frontend code — constantly learning,
            building, and improving every day."
            <br />
            "Bridging business needs and modern tech with curiosity, clarity,
            and continuous growth."
          </div>

          <div className="flex justify-center">
            <Button className="px-6 py-2 text-sm">About Me</Button>
          </div>
        </div>

        {/* Laptop/Desktop layout */}
        <div className="hidden items-center lg:grid lg:grid-cols-5 lg:gap-8">
          {/* Text Content */}
          <div className="col-span-3">
            <div className="flex flex-col items-center justify-between gap-6">
              <div className="text-5xl font-bold">Sharmila Vijayakumar</div>

              <div className="px-4 text-center text-lg text-gray-700 italic">
                Passionate about turning strategy into impact - driving outcomes
                through OKRs, guiding projects to delivery, and practicing
                frontend development to bring ideas to life - constantly
                learning, building, and improving every day.
              </div>

              <Button className="mt-8 px-6 py-2 text-sm">About Me</Button>
            </div>
          </div>

          {/* Image */}
          <div className="col-span-2 col-start-4 flex justify-center">
            <Image
              src="/Sharmila_Vijayakumar.png"
              alt="sharmi_vijay"
              width="250"
              height="250"
              className="rounded-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
