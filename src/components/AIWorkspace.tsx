const AI_IMAGE = '/images/ai-scan-room.jpg'

const ANALYSIS = [
  { label: 'SPACE:', value: 'ANALYZED', highlight: false },
  { label: 'STYLE:', value: 'MINIMALIST BRUTALISM', highlight: false },
  { label: 'COLOUR:', value: 'WARM NEUTRALS', highlight: false },
  { label: 'PLACEMENT:', value: '3 DETECTED', highlight: true },
  { label: 'COLLECTION:', value: 'MATCHING', highlight: false },
  { label: 'REFRESH:', value: 'SCHEDULED', highlight: false },
]

export default function AIWorkspace() {
  return (
    <section className="py-24 max-w-[1440px] mx-auto mb-12 shadow-clay rounded-[48px] bg-surface w-full overflow-hidden">
      <div className="px-12 grid grid-cols-12 gap-12 mb-8 items-center">
        <div className="col-span-12 md:col-span-4">
          <p className="font-label-mono text-label-mono uppercase text-primary-container font-bold shadow-clay-inset px-6 py-3 rounded-full inline-block mb-8">
            07 // COMING SOON
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase leading-none mb-8">
            ARTNCE AI — <br /> COMING SOON
          </h2>
          <p className="font-body-lg text-body-lg mb-10 max-w-sm text-on-surface-variant p-6 shadow-clay-inset rounded-[24px]">
            Upload your floorplan or photos. Our AI analyzes lighting, existing textures, and spatial volume to propose
            curated art rotations that perfectly integrate with your architecture. (Currently in closed beta).
          </p>
          <button className="btn-primary py-4 px-8 font-label-mono text-label-mono uppercase shadow-clay hover:shadow-clay-inset">
            GET EARLY ACCESS →
          </button>
        </div>
        <div className="col-span-12 md:col-span-8 relative shadow-clay-inset rounded-[40px] h-[600px] overflow-hidden p-4 bg-surface">
          <div className="absolute inset-0 grid-bg opacity-50 z-0"></div>
          <img
            alt=""
            className="relative z-10 w-full h-full object-cover mix-blend-multiply opacity-90 rounded-[32px] shadow-clay"
            src={AI_IMAGE}
          />
          <div className="absolute top-10 left-10 shadow-clay bg-surface p-3 px-6 rounded-full text-primary-container font-label-mono text-[10px] uppercase font-bold z-20 flex items-center">
            <span className="w-2 h-2 rounded-full bg-primary-container mr-2 animate-pulse"></span> SCANNING MOOD...
          </div>
          <div className="absolute bottom-10 right-10 shadow-clay bg-surface p-6 rounded-[24px] max-w-xs z-20">
            <h4 className="font-label-mono text-label-mono shadow-clay-inset p-3 rounded-xl mb-4 uppercase text-center font-bold text-primary-container">
              Analysis Results
            </h4>
            <ul className="font-label-mono text-[10px] space-y-3 p-2">
              {ANALYSIS.map(({ label, value, highlight }) => (
                <li
                  key={label}
                  className={`flex justify-between items-center ${
                    highlight ? 'text-primary-container font-bold' : ''
                  }`}
                >
                  <span>{label}</span>{' '}
                  <span
                    className={`px-3 py-1 rounded-full ${
                      highlight ? 'shadow-clay bg-surface' : 'shadow-clay-inset text-secondary'
                    }`}
                  >
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 shadow-clay-inset rounded-full flex items-center justify-center z-20 border border-primary-container/30">
            <div className="w-2 h-2 bg-primary-container rounded-full shadow-clay"></div>
          </div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 shadow-clay-inset rounded-full flex items-center justify-center z-20 border border-primary-container/30">
            <div className="w-2 h-2 bg-primary-container rounded-full shadow-clay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
