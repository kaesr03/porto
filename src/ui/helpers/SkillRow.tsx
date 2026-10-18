import { memo } from 'react';
import TechIcon from './TechIcon';
import type { TechItem } from '../../data/tech';

const SkillRow = memo(
  ({
    skills,
    direction,
  }: {
    skills: TechItem[];
    direction: 'left' | 'right';
  }) => (
    <div className="w-full overflow-hidden">
      <div
        className={`flex w-max gap-4 will-change-transform ${
          direction === 'left'
            ? 'animate-marquee-left'
            : 'animate-marquee-right'
        }`}
      >
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 px-2 py-1 bg-card rounded-lg border border-dashed whitespace-nowrap"
          >
            <TechIcon item={skill} className="w-4 h-4" />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
);

SkillRow.displayName = 'SkillRow';

export default SkillRow;
