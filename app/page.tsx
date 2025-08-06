import ProfileCard from "../components/profilecard";
import MyNavBar from "../components/navbar";
import MyFooter from "../components/footer";
import About from "../components/about";
import Projects from "../components/projects";
import SkillSection from "../components/skills";
import ContactSection from "../components/contacts";

export default function Home() {
  return (
    <div className="relative">
      <MyNavBar />
      <main className="flex flex-col items-center justify-center bg-gray-950 lg:p-16">
        <section className="flex w-full justify-center pt-16" id="home">
          <ProfileCard />
        </section>
        <section className="flex w-full justify-center pt-16" id="about">
          <About />
        </section>
        <section className="flex w-full justify-center pt-16" id="projects">
          <Projects />
        </section>
        <section className="flex w-full justify-center pt-16" id="skills">
          <SkillSection />
        </section>
        <section className="flex w-full justify-center pt-16" id="contact">
          <ContactSection />
        </section>
      </main>
      <MyFooter />
    </div>
  );
}
