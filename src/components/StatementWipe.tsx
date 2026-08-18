import { useEffect, useRef, useState } from 'react'

export default function StatementWipe() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.2 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-surface shadow-clay-inset py-48 px-margin-desktop relative overflow-hidden mb-12 rounded-[48px] max-w-[1440px] mx-auto"
      style={{
        clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
        transition: 'clip-path 1.2s cubic-bezier(0.77, 0, 0.175, 1)',
      }}
    >
      <div className="max-w-[1440px] mx-auto text-center relative z-10">
        <h2 className="font-display-xl text-headline-lg-mobile md:text-display-xl uppercase tracking-tighter text-primary-container drop-shadow-sm">
          NOTHING INSPIRING SHOULD BECOME ORDINARY.
        </h2>
      </div>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>
    </section>
  )
}
