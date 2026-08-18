const STEPS = [
  { icon: 'search', title: 'CURATE', copy: 'Discover perfect pieces.', highlight: false },
  { icon: 'check_circle', title: 'CHOOSE', copy: 'Select your collection.', highlight: false },
  { icon: 'build', title: 'INSTALL', copy: 'Professional setup.', highlight: false },
  { icon: 'visibility', title: 'EXPERIENCE', copy: 'Enjoy the transformation.', highlight: false },
  { icon: 'autorenew', title: 'REFRESH', copy: 'New art every quarter.', highlight: true },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-12 max-w-[1440px] mx-auto mb-12 shadow-clay rounded-[48px] bg-surface">
      <div className="grid grid-cols-12 gap-gutter mb-16 items-center">
        <div className="col-span-12 md:col-span-3">
          <p className="font-label-mono text-label-mono uppercase text-primary-container font-bold shadow-clay-inset px-6 py-3 rounded-full inline-block">
            02 // THE ARTNCE MODEL
          </p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">
            ARTWORK AS A SERVICE.
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-6 relative">
        {STEPS.map(({ icon, title, copy, highlight }) => (
          <div
            key={title}
            className={`flex-1 bg-surface rounded-[32px] p-8 relative z-10 text-center flex flex-col items-center justify-center min-h-[200px] ${
              highlight ? 'shadow-clay-inset border border-primary-container/20' : 'shadow-clay'
            }`}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                highlight ? 'bg-surface shadow-clay' : 'shadow-clay-inset'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[28px] ${
                  highlight || icon === 'check_circle' ? 'text-primary-container' : 'text-on-surface'
                }`}
              >
                {icon}
              </span>
            </div>
            <h3
              className={`font-label-mono text-label-mono uppercase mb-2 ${highlight ? 'text-primary-container' : ''}`}
            >
              {title}
            </h3>
            <p
              className={`font-body-md text-body-md text-sm ${highlight ? 'text-on-surface-variant' : 'text-secondary'}`}
            >
              {copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
