'use client';

import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Hero() {
  const { language } = useLanguage();
  const text = content[language].home;

  return (
    <section id="sobre" className="pt-16 mb-16 sm:mb-24 lg:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-400 bg-card border border-line rounded-full px-3.5 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              {text.badgeAvailable}
            </span>
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 border border-line rounded-full px-3.5 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.18)]" />
              {text.badgeRole}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">
            Jeferson Ferreira
          </h1>

          <p className="text-2xl sm:text-3xl font-bold tracking-tight mb-5 bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
            {text.role}
          </p>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-8">{text.hero}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-emerald-600 text-white hover:opacity-90 transition-opacity"
            >
              {text.talk} →
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold border border-line text-gray-100 hover:border-teal-500/50 transition-colors"
            >
              {text.viewProjects}
            </a>
          </div>
        </div>

        <div className="bg-card border border-line rounded-2xl p-6">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-5">
            {text.stackFlowTitle}
          </h2>

          <div className="flex flex-col">
            {text.stackFlowSteps.map((step, index) => (
              <div key={step.label}>
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-line bg-ink-soft">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      index === 0
                        ? 'bg-teal-400/15 text-teal-400'
                        : index === 1
                        ? 'bg-indigo-400/15 text-indigo-400'
                        : 'bg-amber-400/15 text-amber-400'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <b className="block text-sm">{step.label}</b>
                    <span className="text-xs text-gray-400">{step.description}</span>
                  </div>
                </div>
                {index < text.stackFlowSteps.length - 1 && (
                  <div className="flex justify-center py-1.5 text-gray-500 text-sm" aria-hidden="true">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
