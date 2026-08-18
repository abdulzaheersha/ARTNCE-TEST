const COLUMNS = [
  { title: 'Platform', links: ['How It Works', 'AI Workspace', 'Pricing'] },
  { title: 'Company', links: ['About', 'For Creators', 'Press Kit'] },
  { title: 'Legal & Contact', links: ['Terms of Service', 'Privacy Policy', 'Contact'] },
]

export default function Footer() {
  return (
    <footer className="bg-surface shadow-clay-inset bottom-0 mt-auto rounded-t-[48px] pt-12 pb-8 px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-[1440px] mx-auto">
        <div className="col-span-1 flex flex-col justify-between h-full">
          <span className="font-headline-lg text-headline-lg text-on-surface drop-shadow-sm">ARTNCE</span>
          <p className="font-body-md text-secondary mt-4 italic shadow-clay-inset p-4 rounded-2xl w-max">
            Ambience Redesigned...
          </p>
          <p className="font-label-mono text-label-mono text-secondary mt-8 uppercase text-xs">
            © 2024 ARTNCE. ALL RIGHTS RESERVED.
          </p>
        </div>
        {COLUMNS.map(({ title, links }) => (
          <div key={title} className="col-span-1 flex flex-col space-y-4 pt-4">
            <p className="font-label-mono text-label-mono text-primary-container font-bold uppercase shadow-clay px-4 py-2 rounded-full inline-block w-max mb-2 bg-surface">
              {title}
            </p>
            <div className="flex flex-col space-y-3 pl-4">
              {links.map((link) => (
                <a
                  key={link}
                  className="text-on-surface font-label-mono hover:text-primary-container transition-colors uppercase"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}
