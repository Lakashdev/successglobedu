import { Link } from 'react-router-dom'
export function NotFound() { return <section className="not-found"><div><span>404</span><h1>This page has taken a different path.</h1><p>The page you are looking for may have moved or no longer exists.</p><Link className="button" to="/">Return home</Link></div></section> }
