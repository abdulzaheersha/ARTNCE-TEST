type Plan = {
  name: string
  description: string
  features: string[]
  cta: string
  popular: boolean
}

const PLANS: Plan[] = [
  {
    name: 'ESSENTIAL',
    description: 'For small teams and private offices.',
    features: ['3 Artworks Quarterly', 'Standard Installation', 'Basic Support'],
    cta: 'CHOOSE PLAN',
    popular: false,
  },
  {
    name: 'PROFESSIONAL',
    description: 'For growing businesses and creative hubs.',
    features: ['8 Artworks Quarterly', 'Priority Installation', 'Dedicated Curation Advisor'],
    cta: 'CHOOSE PLAN',
    popular: true,
  },
  {
    name: 'ENTERPRISE',
    description: 'For full floorplates and headquarters.',
    features: ['20+ Artworks Quarterly', 'White-Glove Logistics', 'Custom AI Analysis'],
    cta: 'CONTACT SALES',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="py-24 px-12 max-w-[1440px] mx-auto mb-12 shadow-clay-inset rounded-[48px] bg-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      <div className="mb-16 text-center relative z-10">
        <p className="font-label-mono text-label-mono uppercase text-primary-container font-bold shadow-clay px-6 py-3 rounded-full inline-block mb-6 bg-surface">
          06 // SUBSCRIPTIONS
        </p>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">PLANS FOR EVERY SPACE</h2>
      </div>
      <div className="grid grid-cols-1 gap-10 relative z-10 max-w-4xl mx-auto">
        {PLANS.map(({ name, description, features, cta, popular }) => (
          <div
            key={name}
            className={`bg-surface rounded-[40px] p-10 flex flex-col md:flex-row justify-between items-center relative ${
              popular ? 'shadow-clay-inset border border-primary-container/20' : 'shadow-clay'
            }`}
          >
            {popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 shadow-clay bg-surface text-primary-container px-6 py-2 rounded-full font-label-mono text-xs font-bold border border-primary-container/10">
                MOST POPULAR
              </div>
            )}
            <div>
              <h3
                className={`font-display-xl text-[48px] mb-2 leading-none ${
                  popular ? 'text-primary-container drop-shadow-sm' : ''
                }`}
              >
                {name}
              </h3>
              <p className={`font-body-md mb-6 text-lg ${popular ? 'text-on-surface-variant' : 'text-secondary'}`}>
                {description}
              </p>
              <ul
                className={`font-label-mono space-y-4 p-6 rounded-[24px] ${
                  popular ? 'shadow-clay bg-surface' : 'shadow-clay-inset'
                }`}
              >
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span
                      className={`w-2 h-2 rounded-full bg-primary-container mr-3 ${popular ? '' : 'shadow-clay'}`}
                    ></span>{' '}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`py-4 px-10 font-label-mono mt-8 md:mt-0 text-lg ${
                popular ? 'btn-primary' : 'btn-secondary shadow-clay hover:shadow-clay-inset'
              }`}
            >
              {cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
