const QUARTERS = [
  { quarter: 'Q1', season: 'WINTER' },
  { quarter: 'Q2', season: 'SPRING' },
  { quarter: 'Q3', season: 'SUMMER' },
  { quarter: 'Q4', season: 'AUTUMN' },
]

export default function QuarterlyRefresh() {
  return (
    <section className="py-24 px-12 max-w-[1440px] mx-auto mb-12 shadow-clay-inset rounded-[48px] bg-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      <div className="grid grid-cols-12 gap-gutter relative z-10">
        <div className="col-span-12 md:col-span-4 pr-gutter">
          <p className="font-label-mono text-label-mono uppercase text-primary-container font-bold shadow-clay px-6 py-3 rounded-full inline-block mb-8 bg-surface">
            04 // THE DIFFERENCE
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase leading-none mb-6">
            ONE OFFICE. FOUR EXPERIENCES.
          </h2>
          <p className="font-body-lg text-body-lg max-w-sm font-bold text-primary-container drop-shadow-sm">
            EVERY QUARTER, YOUR WORKSPACE FEELS NEW AGAIN.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {QUARTERS.map(({ quarter, season }) => (
              <div
                key={quarter}
                className="shadow-clay rounded-[32px] p-8 text-center bg-surface flex flex-col items-center justify-center aspect-square"
              >
                <div className="w-20 h-20 shadow-clay-inset rounded-full flex items-center justify-center mb-4">
                  <h3 className="font-display-xl text-[40px] text-primary-container leading-none pt-2">{quarter}</h3>
                </div>
                <p className="font-label-mono">{season}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
