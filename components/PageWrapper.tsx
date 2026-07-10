'use client';

import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import type { ProjectData } from './Projects';

export default function PageWrapper({ projects }: { projects: ProjectData[] | null }) {
  return (
    <>
      <Hero />
      <Projects data={projects} />
      <Skills />
      <Footer />
    </>
  );
}
