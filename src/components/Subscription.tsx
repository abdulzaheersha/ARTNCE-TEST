const PROCESS = [
  { step: '1', title: 'SELECT', copy: 'Choose your subscription tier.', highlight: false },
  { step: '2', title: 'INSTALL', copy: 'Professional white-glove setup.', highlight: false },
  { step: '3', title: 'LIVE', copy: 'Experience transformed space.', highlight: false },
  { step: '4', title: 'REFRESH', copy: 'New collection every 90 days.', highlight: true },
]

export default function Subscription() {
  return (
    <section className="py-24 px-12 max-w-[1440px] mx-auto mb-12 shadow-clay rounded-[48px] bg-surface">
      <div className="mb-16 flex flex-col items-center text-center">
        <p className="font-label-mono text-label-mono uppercase text-primary-container font-bold shadow-clay-inset px-6 py-3 rounded-full inline-block mb-6">
          05 // SIMPLE BY DESIGN
        </p>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">THE PROCESS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {PROCESS.map(({ step, title, copy, highlight }) => (
          <div
            key={step}
            className={`rounded-[32px] p-10 bg-surface ${
              highlight ? 'shadow-clay-inset border border-primary-container/10' : 'shadow-clay'
            }`}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                highlight ? 'shadow-clay bg-surface' : 'shadow-clay-inset'
              }`}
            >
              <span className="font-display-xl text-3xl text-primary-container pt-1">{step}</span>
            </div>
            <h3
              className={`font-label-mono text-label-mono uppercase mb-4 text-lg ${
                highlight ? 'text-primary-container' : ''
              }`}
            >
              {title}
            </h3>
            <p className={`font-body-md text-body-md ${highlight ? 'text-on-surface-variant' : 'text-secondary'}`}>
              {copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
