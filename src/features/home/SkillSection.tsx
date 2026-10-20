import { useState } from 'react';
import SkillRow from '../../ui/helpers/SkillRow';
import TechIcon from '../../ui/helpers/TechIcon';
import { skillRows } from '../../data/tech';
import { LayoutGrid, List } from 'lucide-react';

const SkillSection = () => {
  const [isInline, setIsInline] = useState(false);

  return (
    <section id="skills" className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className="text-2xl font-light tracking-tight sm:text-3xl">
            Technologies
          </p>
        </div>
        <button
          onClick={() => setIsInline(!isInline)}
          className="border-border/70 bg-card text-muted-foreground hover:bg-accent hover:text-foreground flex h-8 w-8 items-center justify-center rounded-md border border-dashed transition-colors"
          title={isInline ? 'Show animated rows' : 'Show inline'}
          aria-label="Toggle inline view"
        >
          {isInline ? <List size={16} /> : <LayoutGrid size={16} />}
        </button>
      </div>

      {isInline ? (
        <div className="flex flex-col gap-4 pt-2">
          {skillRows.map((row, index) => (
            <div key={index} className="flex flex-wrap gap-2 sm:gap-3">
              {row.items.map((skill) => (
                <span
                  key={skill.name}
                  className="bg-card text-foreground hover:bg-accent inline-flex items-center gap-1.5 rounded-md border border-dashed px-2.5 py-1.5 text-sm transition-colors"
                >
                  <TechIcon item={skill} className="h-4 w-4" />
                  {skill.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="relative flex flex-col gap-4">
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r to-transparent" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l to-transparent" />
          {skillRows.map((row) => (
            <SkillRow
              key={`${row.direction}-${row.items[0].name}`}
              skills={row.items}
              direction={row.direction}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default SkillSection;
