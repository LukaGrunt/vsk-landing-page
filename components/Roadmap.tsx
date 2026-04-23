'use client'

import { motion } from 'framer-motion'

const roadmapPhases = [
  {
    id: 'beta',
    version: 'β',
    status: 'Current',
    statusColor: 'brand-orange',
    title: 'Beta',
    description: 'A prototype/MVP dApp (mobile friendly) with basic intent parsing, knowledge base driven and validation on a single protocol.',
    gradient: 'from-brand-orange to-orange-600',
    borderColor: 'border-brand-orange/50',
    shadowColor: 'shadow-brand-orange/30',
    textColor: 'text-brand-orange',
    bgColor: 'bg-brand-orange/20',
    borderStatusColor: 'border-brand-orange/30',
    opacity: 'opacity-100',
    active: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'foundation',
    version: 'V1',
    status: 'Next',
    statusColor: 'purple-500',
    title: 'Foundation',
    description: 'Incorporation of major DeFi protocols, setup of paid services/revenue flow',
    gradient: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-500/40',
    shadowColor: 'shadow-purple-500/20',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    borderStatusColor: 'border-purple-500/30',
    opacity: 'opacity-90',
    active: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 'expansion',
    version: 'V2',
    status: 'Planned',
    statusColor: 'blue-500',
    title: 'Expansion',
    description: 'Core Integrator Release: Umbrellish SDK with intent parsing, knowledge base, and validation for major DeFi protocols; extend to multi-client UIs (Telegram, Discord etc.)',
    gradient: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/30',
    shadowColor: 'shadow-blue-500/15',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    borderStatusColor: 'border-blue-500/30',
    opacity: 'opacity-75',
    active: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 'ecosystem',
    version: 'V3',
    status: 'Vision',
    statusColor: 'slate-500',
    title: 'Ecosystem',
    description: 'Extended Developer tools for protocol integration, expansion beyond DeFi.',
    gradient: 'from-slate-500 to-slate-600',
    borderColor: 'border-slate-500/30',
    shadowColor: 'shadow-slate-500/10',
    textColor: 'text-slate-400',
    bgColor: 'bg-slate-500/20',
    borderStatusColor: 'border-slate-500/30',
    opacity: 'opacity-60',
    active: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

export default function Roadmap() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Roadmap</h2>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          Building the future of blockchain interaction
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Desktop: Connecting line */}
        <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" style={{ zIndex: 0 }} />

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative" style={{ zIndex: 1 }}>
          {roadmapPhases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className={`group relative ${phase.opacity} h-full`}
            >
              <div className={`relative bg-zinc-900/50 border ${phase.borderColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl h-full flex flex-col`}>
                {/* Glow effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${phase.gradient} opacity-0 group-hover:opacity-10 transition-all duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Badge with version */}
                  <motion.div
                    animate={phase.active ? {
                      scale: [1, 1.05, 1],
                    } : {}}
                    transition={phase.active ? {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {}}
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.gradient} flex flex-col items-center justify-center mb-4 shadow-xl ${phase.shadowColor}`}
                  >
                    <span className="text-2xl font-bold text-black">{phase.version}</span>
                  </motion.div>

                  {/* Icon below badge */}
                  <div className={`${phase.textColor} mb-3 transition-transform duration-300 group-hover:scale-110`}>
                    {phase.icon}
                  </div>

                  {/* Status Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${phase.bgColor} border ${phase.borderStatusColor} mb-3`}>
                    {phase.active && (
                      <motion.div
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`w-2 h-2 rounded-full ${phase.textColor.replace('text-', 'bg-')}`}
                      />
                    )}
                    <span className={`text-xs font-bold ${phase.textColor} uppercase`}>{phase.status}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {phase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
