import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { company, navItems } from '../data/site'
import { Icon } from './Icons'
export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="topbar"><div className="container topbar-inner"><span>Student-first guidance from Kathmandu</span><a href={company.phoneHref}>{company.phone}</a></div></div><div className="container nav-wrap"><Link className="brand" to="/" onClick={() => setOpen(false)} aria-label={`${company.name} home`}><img src={logo} alt=""/><span><strong>Success Global</strong><small>Eduhouse</small></span></Link><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav" aria-label="Toggle navigation"><Icon name={open ? 'close' : 'menu'} /></button><nav id="site-nav" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">{navItems.map((item) => item.to.includes('#') ? <a key={item.label} onClick={() => setOpen(false)} href={item.to}>{item.label}</a> : <NavLink key={item.label} onClick={() => setOpen(false)} to={item.to}>{item.label}</NavLink>)}<Link className="button button-small" onClick={() => setOpen(false)} to="/contact">Book a consultation</Link></nav></div></header>
}
