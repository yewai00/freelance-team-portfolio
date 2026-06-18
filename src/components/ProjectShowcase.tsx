import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '@/src/data/portfolioData';
import { Project } from '@/src/types';
import { Card, CardContent } from '@/src/components/ui/Card';
import { Check, Code2, Plus, Sparkles, ChevronDown, ChevronUp, BarChart3 } from 'lucide-react';
import Button from '@/src/components/ui/Button';

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech Systems' },
    { id: 'web', label: 'E-Commerce' },
    { id: 'enterprise', label: 'Enterprise Systems' },
    { id: 'cloud', label: 'Zero-Trust Cloud' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  const toggleExpand = (id: string) => {
    if (expandedProjectId === id) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
    }
  };

  return (
    <section id="showcase" className="relative py-20 bg-slate-50/50 dark:bg-transparent border-y border-slate-200/50 dark:border-white/5">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#6366f1] dark:text-indigo-400">
            Case Studies
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            High-Impact Project Showcase
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-600 dark:bg-indigo-500" />
          <p className="mt-5 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            A review of real system challenges we resolved. We design components that endure actual server stresses, not just beautiful prototypes.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2" id="portfolio-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              id={`cat-btn-${cat.id}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedProjectId(null); // Reset expanded states on category switch
              }}
              className={`
                px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer border
                ${activeCategory === cat.id
                  ? 'bg-indigo-600 border-indigo-600 text-white dark:bg-indigo-600 dark:border-indigo-600 dark:text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 dark:bg-[#0a0a0b] dark:border-white/10 dark:text-slate-300'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid Display */}
        <div className={`mt-14 grid gap-8 ${filteredProjects.length === 1 ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}`} id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => {
              const isExpanded = expandedProjectId === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  layout="position"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card 
                    id={`project-card-${project.id}`}
                    hoverActive={!isExpanded}
                    className={`
                      h-full flex flex-col justify-between p-6 transition-all duration-300
                      ${isExpanded ? 'ring-2 ring-indigo-600 dark:ring-indigo-500' : ''}
                    `}
                  >
                    <div>
                      {/* Top bar with tag */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-400">
                          {project.client}
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/5 border dark:border-white/5 dark:text-indigo-400">
                          {project.category.toUpperCase()}
                        </span>
                      </div>

                      {/* Title & Summary */}
                      <h3 className="mt-4 font-sans text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Tech Pills */}
                      <div className="mt-5 flex flex-wrap gap-1.5" id={`project-stack-${project.id}`}>
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 rounded bg-slate-50/80 border border-slate-200/70 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-white/5 dark:border-white/5 dark:text-slate-300"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Measurable Success Metric Callout Banner */}
                      <div className="mt-6 flex items-center gap-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 p-4 dark:bg-white/5 dark:border-white/5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                          <BarChart3 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                            Measurable Outcome
                          </p>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">
                            {project.successMetric}
                          </p>
                        </div>
                      </div>

                      {/* Dynamically Expanded Case Study Sections */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 border-t border-slate-150 dark:border-white/5 pt-6 space-y-4">
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                                  Structural Problem
                                </h4>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                  {project.problem}
                                </p>
                              </div>

                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                                  Our Engineered Solution
                                </h4>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                  {project.solution}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Expand Case Study Trigger Toggle */}
                    <div className="mt-6 border-t border-slate-100 dark:border-white/5 pt-4 flex justify-end">
                      <Button
                        id={`expand-btn-${project.id}`}
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(project.id)}
                        className="text-indigo-600 dark:text-indigo-400 font-bold hover:bg-slate-50 dark:hover:bg-white/5"
                      >
                        {isExpanded ? (
                          <>
                            Collapse View
                            <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Expand Case Study
                            <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
