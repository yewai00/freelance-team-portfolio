import { Layout, Cpu, Cloud, Check } from 'lucide-react';
import { SERVICES } from '@/src/data/portfolioData';
import { Card, CardHeader, CardContent } from '@/src/components/ui/Card';

const iconMap: { [key: string]: any } = {
  Layout: Layout,
  Cpu: Cpu,
  Cloud: Cloud,
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-50/50 dark:bg-transparent">
      {/* Visual background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-[5%] h-[350px] w-[350px] rounded-full bg-indigo-50 dark:bg-indigo-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#6366f1] dark:text-indigo-400">
            Our Specialties
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Custom Software & Long-Term Partnerships
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-600 dark:bg-indigo-500" />
          <p className="mt-5 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            We operate at the intersection of high-converting visual craftsmanship and secure cloud infrastructure. We build specialized solutions tailored for long-term business growth.
          </p>
        </div>

        {/* Grid Showcase */}
        <div className="mt-16 grid gap-8 md:grid-cols-3" id="services-grid">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Cpu;
            return (
              <Card id={`service-card-${service.id}`} key={service.id} className="group flex flex-col justify-between">
                <div>
                  <CardHeader className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-950/40 dark:text-indigo-400 dark:group-hover:bg-indigo-600 dark:group-hover:text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {service.title}
                      </h3>
                      <span className="mt-1 inline-block rounded-full bg-slate-100/85 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/5 dark:text-slate-400">
                        {service.category}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="mt-4">
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 dark:border-white/5 pt-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-4">
                        Core Capabilities
                      </h4>
                      <ul className="space-y-3" id={`service-features-${service.id}`}>
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 mt-0.5">
                              <Check className="h-3 w-3" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
