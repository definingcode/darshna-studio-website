import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import ServiceIndex from './ServiceIndex'
import ServiceBlock from './ServiceBlock'
import { services } from '../../data/services'

function useScrollSpy() {
  const [activeId, setActiveId] = useState(`service-${services[0].id}`)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )

    services.forEach((s) => {
      const el = document.getElementById(`service-${s.id}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeId
}

export default function ServicesIndexLayout() {
  const activeId = useScrollSpy()

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          <ServiceIndex activeId={activeId} />
          <div>
            {services.map((service, i) => (
              <ServiceBlock key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
