const HERO_IMAGE = '/images/hero-workspace.jpg'

export default function Hero() {
  return (
    <header className="relative w-full min-h-[calc(100vh-120px)] flex flex-col mb-12 px-6">
      <div className="relative z-10 flex-grow grid grid-cols-12 gap-8 h-full max-w-[1440px] mx-auto w-full">
        <div className="col-span-12 md:col-span-8 relative h-full rounded-[48px] overflow-hidden shadow-clay-inset p-4 bg-surface">
          <img
            alt=""
            className="w-full h-full object-cover rounded-[36px] grayscale opacity-90 mix-blend-multiply shadow-clay"
            src={HERO_IMAGE}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-12 pb-16">
            <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl uppercase max-w-4xl text-on-surface leading-[0.85] drop-shadow-md">
              RENT ART. REFRESH YOUR SPACE. <br /> <span className="text-primary-container">EVERY QUARTER.</span>
            </h1>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-between bg-surface rounded-[48px] shadow-clay p-10">
          <div>
            <span className="font-label-mono text-label-mono rounded-full shadow-clay-inset px-4 py-2 inline-block mb-8 text-primary-container font-bold">
              WORKSPACE EXPERIENCE PLATFORM
            </span>
            <p className="font-body-lg text-body-lg max-w-xs text-on-surface-variant">
              Architectural art curation driven by spatial intelligence. We bridge the gap between stark functionality
              and inspiring environments.
            </p>
          </div>
          <div className="flex flex-col space-y-6 w-full mt-12">
            <button className="btn-primary w-full py-5 font-label-mono text-label-mono uppercase tracking-widest">
              EXPLORE ART BOARDS
            </button>
            <button className="btn-secondary w-full py-5 font-label-mono text-label-mono uppercase tracking-widest">
              JOIN AS A VENDOR
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
