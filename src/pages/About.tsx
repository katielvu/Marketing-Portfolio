import { 
  Monitor, 
  Film, 
  TrendingUp, 
  Layers, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  GraduationCap,
  Award,
  Mail,
  MapPin,
  Briefcase,
  Wrench,
  CheckCircle2
} from "lucide-react";
import { motion } from "motion/react";
import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const competencies = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Demand & Pipeline Generation",
      description: "Proven track record driving qualified inbound lead growth (14% YoY) and influencing over $1.2M+ in pipeline across multi-channel campaigns including email, webinars, and landing pages."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "End-to-End Lifecycle & Automation",
      description: "Architecting and orchestrating automated customer journeys (acquisition → nurture → conversion) through behavioral segmentation, lead scoring, and 20+ growth experiments in HubSpot."
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Campaign Operations & Execution",
      description: "Scaled operational delivery across 200+ email deployments and 20+ automated funnels, upholding rigorous QA, A/B testing, HTML/CSS troubleshooting, and CAN-SPAM/GDPR compliance."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Cross-Functional GTM Alignment",
      description: "Partnering closely with Sales, Customer Success, and Professional Services to synchronize targeted campaigns with service rollouts, regional priorities, and revenue goals."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Events & Program Operations",
      description: "Directing event logistics, webinars, and cross-functional marketing programs to drive audience engagement, brand presence, and pipeline velocity."
    }
  ];

  const resumeSkills = [
    "Demand Generation",
    "Campaign Operations",
    "Lifecycle Marketing",
    "Email Marketing",
    "Lead Nurturing",
    "B2B Marketing",
    "Pipeline Generation",
    "Funnel Optimization",
    "A/B Testing",
    "Marketing Automation"
  ];

  const resumeTools = [
    "HubSpot",
    "Google Analytics",
    "SEMrush",
    "Trello",
    "Jira",
    "Asana",
    "Canva",
    "GitHub",
    "HTML/CSS (Email & Landing Pages)"
  ];

  return (
    <main className="pt-24 md:pt-32 pb-20 max-w-5xl mx-auto px-6 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-headline text-on-surface font-bold text-lg md:text-2xl">Katie Vu</p>
              <p className="text-xs md:text-sm text-on-surface-variant uppercase tracking-widest font-bold">Marketing Program Manager</p>
            </div>
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-white shadow-md shrink-0 lg:hidden">
              <img 
                alt="Katie Vu" 
                className="w-full h-full object-cover object-center" 
                src="./headshot.jpg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Quick contact chips */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 text-xs md:text-sm text-on-surface-variant">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              San Jose, CA
            </span>
            <span className="text-outline-variant/40">•</span>
            <a href="mailto:katielvu@gmail.com" className="flex items-center gap-1.5 font-medium hover:text-on-surface transition-colors">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              katielvu@gmail.com
            </a>
          </div>

          <h1 className="font-headline text-2xl sm:text-4xl md:text-5xl font-extrabold text-on-surface leading-[1.15] tracking-tighter mb-8">
            Bridging the gap between <span className="text-primary italic">Market Strategy</span> and <span className="text-primary italic">Operational Rigor</span>.
          </h1>
          <p className="font-body text-lg md:text-xl leading-relaxed text-on-surface-variant">
            I am Katie Vu, a Marketing Program Manager with 5+ years of experience driving demand generation, lifecycle marketing, and marketing operations. I architect automated nurture programs, launch high-impact growth experiments, and turn complex data into measurable pipeline growth.
          </p>
        </motion.div>
      </section>

      {/* Bio & Image Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32 md:mb-40">
        <div className="lg:col-span-5 relative group hidden lg:block">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-2xl shadow-lg">
            <img 
              alt="Katie Vu professional portrait" 
              className="w-full h-full object-cover opacity-95 transition-all duration-500 group-hover:scale-[1.02] object-center" 
              src="./headshot.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-6 rounded-xl shadow-md border border-outline-variant/10 max-w-[240px]">
            <span className="font-headline text-primary text-4xl font-extrabold block mb-1">5+</span>
            <span className="font-label text-xs uppercase tracking-[0.18em] text-on-surface-variant font-bold">Years of Marketing & Operations</span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full font-label text-xs md:text-sm font-bold uppercase tracking-widest">
              The Approach
            </div>
            <h2 className="font-headline text-xl md:text-3xl font-bold text-on-surface tracking-tight">
              Lifecycle Precision, Repeatable Growth, and Data Integrity
            </h2>
            <div className="font-body text-base md:text-lg leading-relaxed text-on-surface-variant space-y-5">
              <p>
                Throughout my career at <span className="text-on-surface font-semibold">Truvantis</span>, I spearheaded multi-channel demand generation campaigns and built 20+ automated funnels that increased qualified inbound leads by 14% YoY and influenced over $1.2M+ in pipeline.
              </p>
              <p>
                My approach anchors on full-funnel lifecycle marketing—guiding enterprise buyer personas from first touch through nurture and conversion with targeted messaging, behavioral scoring, and continuous A/B experimentation.
              </p>
              <p>
                Whether partnering cross-functionally with Sales and Customer Success, troubleshooting email templates in HTML/CSS, or building KPI dashboards in HubSpot and Google Analytics, I focus on building sustainable operational systems that deliver clear business outcomes.
              </p>
            </div>
          </div>
          
          {/* Mobile Experience Card */}
          <div className="mt-8 lg:hidden bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
            <span className="font-headline text-primary text-4xl font-bold block mb-1">5+</span>
            <span className="font-label text-xs uppercase tracking-[0.18em] text-on-surface-variant font-bold">Years of Strategic Execution</span>
          </div>
        </div>
      </section>

      {/* Core Competencies Carousel */}
      <section className="mb-32 md:mb-40">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-primary mb-3">Core Competencies</h3>
            <div className="h-0.5 w-12 bg-primary/20"></div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {competencies.map((comp, idx) => (
              <div key={idx} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                <CompetencyCard 
                  icon={comp.icon}
                  title={comp.title}
                  description={comp.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-primary w-6' : 'bg-outline-variant/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-32">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-primary">Professional Experience</h3>
          </div>
          <div className="h-0.5 w-12 bg-primary/20 mb-4"></div>
          <p className="text-on-surface-variant text-base">
            Proven track record driving multi-channel demand generation, lifecycle programs, and marketing operations.
          </p>
        </div>

        <div className="space-y-16">
          {/* Truvantis Inc Container */}
          <div className="bg-surface-container-lowest p-6 md:p-10 rounded-2xl border border-outline-variant/10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-outline-variant/10 pb-6 mb-8">
              <div>
                <h4 className="font-headline text-xl md:text-2xl font-bold text-on-surface">Truvantis, Inc</h4>
                <div className="font-body text-sm text-primary font-medium flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  San Jose, CA
                </div>
              </div>
              <span className="font-label text-xs uppercase tracking-widest px-3 py-1 bg-primary-container text-on-primary-container rounded-full font-semibold w-fit">
                Mar 2020 – Jul 2025
              </span>
            </div>

            <div className="space-y-12">
              {/* Role 1: Marketing Program Manager */}
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-surface-container-lowest" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h5 className="font-headline text-lg md:text-xl font-bold text-on-surface">
                    Marketing Program Manager
                  </h5>
                  <span className="font-label text-xs font-semibold text-outline uppercase tracking-wider">
                    Feb 2021 – Jul 2025
                  </span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Developed personalized nurture programs and dynamic content tailored to enterprise buyer personas, improving relevance and conversion across lifecycle stages",
                    "Drove 14% YoY growth in qualified inbound leads and influenced $1.2M+ in pipeline through multi-channel campaigns (email, webinars, landing pages)",
                    "Owned end-to-end lifecycle marketing (acquisition → nurture → conversion), improving lead-to-opportunity conversion through behavioral segmentation and lead scoring",
                    "Launched 20+ growth experiments using HubSpot automation and AI tools (messaging, timing, audience), increasing engagement and conversion rates across Enterprise segments",
                    "Partnered with Sales, ProServ, and Customer Success to align GTM campaigns with service launches, regional priorities, and revenue targets",
                    "Built and maintained lifecycle KPI dashboards (HubSpot + Google Analytics), partnering with cross-functional teams to surface actionable insights, reduce funnel drop-offs, and improve pipeline velocity"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-on-surface-variant leading-relaxed text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Demand Generation", "HubSpot Automation", "Lifecycle KPI Dashboards", "$1.2M+ Influenced Pipeline", "Cross-Functional GTM"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant rounded-md font-label text-[11px] font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role 2: Marketing Specialist */}
              <div className="relative pl-6 border-l-2 border-outline-variant/30">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-outline-variant border-4 border-surface-container-lowest" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h5 className="font-headline text-lg md:text-xl font-bold text-on-surface">
                    Marketing Specialist
                  </h5>
                  <span className="font-label text-xs font-semibold text-outline uppercase tracking-wider">
                    Mar 2020 – Feb 2021
                  </span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Scaled operational execution to support 200+ email deployments and 20+ automated funnels, maintaining data accuracy, QA standards, and CAN-SPAM and GDPR compliance across all campaigns",
                    "Applied working knowledge of HTML/CSS to customize, test, and troubleshoot email templates and landing pages directly in HubSpot",
                    "Supported the end-to-end execution of multi-channel demand generation campaigns, managing list segmentation, A/B testing, and campaign scheduling",
                    "Collaborated with marketing leadership to monitor campaign performance metrics, providing foundational reporting and insights to optimize weekly email and nurture workflows"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-on-surface-variant leading-relaxed text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["200+ Email Deployments", "HTML/CSS Troubleshooting", "CAN-SPAM & GDPR QA", "A/B Testing"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant rounded-md font-label text-[11px] font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="mb-32 pt-16 border-t border-outline-variant/10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Wrench className="w-5 h-5 text-primary" />
            <h3 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-primary">Skills & Tools Stack</h3>
          </div>
          <div className="h-0.5 w-12 bg-primary/20 mb-4"></div>
          <p className="text-on-surface-variant text-base">
            Comprehensive skill set and platform expertise matching my resume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Skills */}
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h4 className="font-headline text-lg font-bold text-on-surface">Core Marketing Skills</h4>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">
                Strategic and execution competencies honed over 5+ years of B2B and demand generation leadership.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {resumeSkills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3.5 py-2 bg-primary-container text-on-primary-container rounded-lg font-label text-xs md:text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5 text-primary" />
                <h4 className="font-headline text-lg font-bold text-on-surface">Tools & Technologies</h4>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">
                Platforms and technologies leveraged daily for automation, data analytics, QA, and project management.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {resumeTools.map((tool) => (
                  <span 
                    key={tool} 
                    className="px-3.5 py-2 bg-surface-container-high text-on-surface rounded-lg font-label text-xs md:text-sm font-semibold border border-outline-variant/15"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="mb-20 pt-16 border-t border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface">Education</h3>
            </div>
            <div className="border-l-2 border-primary/30 pl-4 py-1 mt-4">
              <h4 className="font-headline text-base md:text-lg font-bold text-on-surface">
                San José State University
              </h4>
              <p className="text-sm text-primary font-medium mt-1">
                B.S. Business Administration, In Progress
              </p>
              <p className="text-xs text-outline mt-2 font-medium uppercase tracking-wider">
                Expected Dec 2026
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface">Certifications</h3>
            </div>
            <p className="text-sm text-on-surface-variant mb-4">
              Industry credentials validating inbound and sales enablement proficiency.
            </p>
            <div className="space-y-3">
              {[
                { name: "HubSpot Inbound Marketing", issuer: "HubSpot Academy" },
                { name: "HubSpot Sales Enablement", issuer: "HubSpot Academy" }
              ].map((cert) => (
                <div key={cert.name} className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <span className="font-headline text-sm font-bold text-on-surface block">
                        {cert.name}
                      </span>
                      <span className="text-xs text-on-surface-variant font-medium">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-primary px-2.5 py-1 bg-primary-container rounded-md">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch CTA */}
      <section className="mt-12 bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/10 text-center">
        <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface mb-3">
          Let&apos;s Connect
        </h3>
        <p className="text-on-surface-variant max-w-lg mx-auto mb-8 text-sm md:text-base">
          Open to senior marketing program management opportunities, lifecycle growth initiatives, and consulting engagements.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="mailto:katielvu@gmail.com" 
            className="px-6 py-3 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-dim transition-colors text-sm flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            katielvu@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/katie-vu-b25477133/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-surface-container-lowest text-on-surface border border-outline-variant/20 rounded-xl font-bold hover:bg-surface-container-high transition-colors text-sm flex items-center gap-2"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    </main>
  );
}

function CompetencyCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl transition-all duration-300 hover:bg-surface-dim/20 h-full flex flex-col border border-outline-variant/10 shadow-sm">
      <div className="text-primary mb-5">{icon}</div>
      <h4 className="font-headline text-lg font-bold text-on-surface mb-3">{title}</h4>
      <p className="font-body text-sm leading-relaxed text-on-surface-variant flex-grow">
        {description}
      </p>
    </div>
  );
}

