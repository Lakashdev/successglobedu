import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'; import { Header } from './Header'; import { company } from '../data/site'
const metadata = {
  '/': ['Success Global Eduhouse | Study Abroad Guidance in Nepal', 'Personalised study abroad guidance for Nepalese students.'],
  '/about': ['About | Success Global Eduhouse', 'Learn about our mission, values and student-first approach.'],
  '/services': ['Services | Success Global Eduhouse', 'Explore education counselling, applications, test preparation and pre-departure support.'],
  '/destinations': ['Study Destinations | Success Global Eduhouse', 'Explore study opportunities in South Korea, the USA, Australia, Canada and the UK.'],
  '/contact': ['Contact | Success Global Eduhouse', 'Book a consultation with our team in Bagbazar, Kathmandu.'],
}
export function Layout() { const { pathname, hash } = useLocation(); useEffect(() => { if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 0); else window.scrollTo(0, 0); const [title, description] = metadata[pathname] || ['Page not found | Success Global Eduhouse', 'Return to Success Global Eduhouse.']; document.title = title; document.querySelector('meta[name="description"]')?.setAttribute('content', description) }, [pathname, hash]); return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><Outlet/></main><a className="whatsapp" href={company.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">WA</a><Footer/></> }
