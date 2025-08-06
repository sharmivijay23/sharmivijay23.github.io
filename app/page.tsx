import ProfileCard from "../components/profilecard";
import MyNavBar from "../components/navbar";
import MyFooter from "../components/footer";
import About from "../components/about";
import Projects from "../components/projects";
import SkillSection from "../components/skills";
import ContactSection from "../components/contacts";

export default function Home() {
  return (
    <div>
      <MyNavBar />
      <main className="flex flex-col items-center justify-center bg-gray-950 lg:p-16">
        <section className="flex w-full justify-center" id="home">
          <ProfileCard />
        </section>
        <section className="flex w-full justify-center" id="about">
          <About />
        </section>
        <section className="flex w-full justify-center" id="projects">
          <Projects />
        </section>
        <section className="flex w-full justify-center" id="skills">
          <SkillSection />
        </section>
        <section className="flex w-full justify-center" id="contact">
          <ContactSection />
        </section>
      </main>
      <MyFooter />
    </div>
  );
}
