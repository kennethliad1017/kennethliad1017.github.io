import FeaturedProject from "@/components/FeatureProjects";
import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <Socials />
      <HeroSection />
      <AboutMe />
      <FeaturedProject />
      {/* <WorkExperience /> */}
    </main>
  );
}
