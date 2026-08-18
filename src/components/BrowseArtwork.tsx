const BROWSE_IMAGE = '/images/artwork-grid.jpg'

const CATEGORIES = ['NATURE', 'OCEAN', 'SKY', 'ANIMALS', 'VILLAGE', 'ABSTRACT']

export default function BrowseArtwork() {
  return (
    <section className="py-24 px-12 max-w-[1440px] mx-auto mb-12 shadow-clay rounded-[48px] bg-surface w-full">
      <div className="grid grid-cols-12 gap-gutter mb-16 items-center">
        <div className="col-span-12 md:col-span-3">
          <p className="font-label-mono text-label-mono uppercase text-primary-container font-bold shadow-clay-inset px-6 py-3 rounded-full inline-block">
            03 // FIND YOUR COLLECTION
          </p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-8">
            FIND ARTWORK FOR YOUR SPACE.
          </h2>
          <div className="relative w-full mb-12 shadow-clay-inset rounded-[48px] p-4 bg-surface">
            <img
              alt=""
              className="w-full h-auto object-cover mix-blend-multiply rounded-[36px] shadow-clay"
              src={BROWSE_IMAGE}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 font-label-mono text-label-mono uppercase text-center mb-12">
            {CATEGORIES.map((category) => (
              <div
                key={category}
                className="shadow-clay rounded-full py-4 text-secondary hover:text-primary-container transition-colors cursor-pointer bg-surface"
              >
                {category}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-6 justify-center shadow-clay-inset rounded-full p-4 w-max mx-auto">
            <button className="btn-primary py-3 px-8 font-label-mono text-label-mono uppercase">SIGN UP</button>
            <span className="font-label-mono text-label-mono uppercase text-secondary">OR</span>
            <a
              className="font-label-mono text-label-mono uppercase hover:underline text-primary-container font-bold px-4"
              href="#"
            >
              LOG IN
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
