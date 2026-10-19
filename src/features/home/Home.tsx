import { Suspense } from 'react';
import Hero from './Hero';
import SkillSection from './SkillSection';
import Stats from './Stats';
import Divider from '../../ui/Divider';
import RecentProjects from './RecentProjects';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-10">
      <Hero />
      <SkillSection />
      <Divider />
      <RecentProjects />
      <Divider />
      <Suspense
        fallback={<div className="h-40 animate-pulse bg-muted/20 rounded-xl" />}
      >
        <Stats />
      </Suspense>
    </div>
  );
};

export default Home;
