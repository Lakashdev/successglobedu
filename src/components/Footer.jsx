import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { company } from '../data/site'
import { Icon } from './Icons'
export function Footer() { return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><img src={logo} alt=""/><div><h2>{company.name}</h2><p>{company.tagline}</p></div></div><div><h3>Explore</h3><Link to="/about">About us</Link><Link to="/services">Services</Link><Link to="/destinations">Destinations</Link><Link to="/contact">Contact</Link></div><div><h3>Contact</h3><a href={company.phoneHref}><Icon name="phone" size={18}/>{company.phone}</a><a href={`mailto:${company.email}`}><Icon name="mail" size={18}/>{company.email}</a><span><Icon name="pin" size={18}/>{company.address}</span></div></div><div className="container footer-bottom"><span>© 2026 {company.legalName}. All rights reserved.</span><span>Guidance with honesty, clarity and care.</span></div></footer> }
