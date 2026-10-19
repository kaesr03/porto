import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Mail, Download } from 'lucide-react';
import { siGithub } from 'simple-icons';
import Button from '../../ui/Button';
import { cn } from '../../lib/utils';
// import StatusDot from '../ui/StatusDot';
import { profile } from '../../data/profile';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="border-border bg-surface border p-6 md:p-8">
      <div className="flex flex-col items-start gap-6 md:flex-row">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-light tracking-tight sm:text-3xl">
            {profile.name}
          </h1>
          <p className="text-accent mb-3 font-mono text-sm tracking-wider uppercase">
            {profile.role}
          </p>
          <p className="text-text-secondary mb-4 text-sm leading-relaxed">
            {profile.shortBio}
          </p>
          <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            <Button
              variant="primary"
              className="justify-center px-2 py-2 text-xs sm:px-4 sm:text-sm"
              onClick={() => navigate('/projects')}
            >
              <span>View Projects</span>
              <ArrowUpRight size={14} />
            </Button>

            <Button
              variant="outline"
              className="justify-center px-2 py-2 text-xs sm:px-4 sm:text-sm"
              onClick={() => (window.location.href = `mailto:${profile.email}`)}
            >
              <Mail size={14} />
              <span>Contact</span>
            </Button>

            <Button
              variant="outline"
              className="justify-center px-2 py-2 text-xs sm:px-4 sm:text-sm"
              href={profile.github}
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4 shrink-0 fill-current text-black sm:size-5 dark:text-white"
              >
                <path d={siGithub.path} />
              </svg>
              <span>Github</span>
            </Button>

            <Button
              variant="outline"
              className="justify-center px-2 py-2 text-xs sm:px-4 sm:text-sm"
              href={profile.linkedin}
            >
              <img
                src="/images/linkedin.png"
                alt="linkedin logo"
                className={cn('block', 'h-4 w-4')}
              />
              <span>Linkedin</span>
            </Button>

            <Button
              variant="outline"
              className="col-span-2 justify-center px-2 py-2 text-xs sm:col-span-1 sm:px-4 sm:text-sm"
              href="https://drive.google.com/uc?export=download&id=1bJO-TQLSn_Xqd4QXoKypk6BbHsntOHGh"
            >
              <Download size={14} />
              <span>Download CV</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
