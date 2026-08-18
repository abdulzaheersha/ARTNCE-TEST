const NAV_LINKS = [
  { label: 'Explore', active: false },
  { label: 'How It Works', active: true },
  { label: 'AI Workspace', active: false },
  { label: 'For Creators', active: false },
  { label: 'About', active: false },
]

export default function TopNavBar() {
  return (
    <nav className="bg-surface shadow-clay top-4 z-50 sticky max-w-[1400px] mx-auto rounded-full mb-8">
      <div className="flex justify-between items-center gap-6 w-full px-8 h-16 mx-auto">
        <a className="font-headline-lg text-[28px] tracking-tighter uppercase text-on-surface" href="#">
          ARTNCE
        </a>
        <div className="hidden lg:flex space-x-8 items-center h-full">
          {NAV_LINKS.map(({ label, active }) => (
            <a
              key={label}
              href="#"
              className={
                active
                  ? 'text-primary-container font-bold h-full flex items-center nav-link active'
                  : 'text-on-surface font-body-lg hover:text-primary transition-colors h-full flex items-center nav-link'
              }
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4 shrink-0">
          <a className="font-label-mono text-label-mono uppercase hover:underline" href="#">
            Log in
          </a>
          <a className="btn-primary font-label-mono text-label-mono uppercase px-6 py-3 flex items-center" href="#">
            Join as a Vendor
            <span className="material-symbols-outlined ml-2 text-[14px]">grid_view</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
