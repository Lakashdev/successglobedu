import { useState } from 'react'
import { submitConsultation } from '../api/client'
import { destinations } from '../data/site'

const initial = { fullName: '', phone: '', email: '', destination: 'Not sure yet', message: '' }
function validate(values) { const errors = {}; if (values.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.'; if (!/^[+\d][\d\s-]{7,}$/.test(values.phone.trim())) errors.phone = 'Please enter a valid phone number.'; if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email address.'; if (values.message.trim().length < 10) errors.message = 'Please share a little more so we can help.'; return errors }

export function ContactForm() {
  const [values, setValues] = useState(initial); const [errors, setErrors] = useState({}); const [status, setStatus] = useState('idle')
  const update = (event) => setValues({ ...values, [event.target.name]: event.target.value })
  const submit = async (event) => { event.preventDefault(); const nextErrors = validate(values); setErrors(nextErrors); if (Object.keys(nextErrors).length) return; setStatus('submitting'); try { await submitConsultation(values); setStatus('sent'); setValues(initial) } catch (error) { setStatus('error'); setErrors({ form: error.message }) } }
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="field"><label htmlFor="fullName">Full name</label><input id="fullName" name="fullName" value={values.fullName} onChange={update} aria-invalid={!!errors.fullName} aria-describedby="fullName-error"/><span className="error" id="fullName-error">{errors.fullName}</span></div>
    <div className="form-row"><div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" value={values.phone} onChange={update} aria-invalid={!!errors.phone} aria-describedby="phone-error"/><span className="error" id="phone-error">{errors.phone}</span></div><div className="field"><label htmlFor="email">Email <small>(optional)</small></label><input id="email" name="email" type="email" value={values.email} onChange={update} aria-invalid={!!errors.email} aria-describedby="email-error"/><span className="error" id="email-error">{errors.email}</span></div></div>
    <div className="field"><label htmlFor="destination">Preferred destination</label><select id="destination" name="destination" value={values.destination} onChange={update}><option>Not sure yet</option>{destinations.map((item) => <option key={item.country}>{item.country}</option>)}</select></div>
    <div className="field"><label htmlFor="message">How can we help?</label><textarea id="message" name="message" rows="5" value={values.message} onChange={update} aria-invalid={!!errors.message} aria-describedby="message-error"/><span className="error" id="message-error">{errors.message}</span></div>
    {status === 'sent' && <p className="form-success" role="status">Thank you. Your message is ready to send, and we look forward to speaking with you.</p>}{errors.form && <p className="error form-error" role="alert">{errors.form}</p>}
    <button className="button" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Request a consultation'}</button><p className="form-note">No backend connected yet? Your email app will open with your message prepared.</p>
  </form>
}
