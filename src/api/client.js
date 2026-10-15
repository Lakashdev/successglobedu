const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '')
export async function submitConsultation(payload) {
  if (!API_URL) {
    const subject = encodeURIComponent(`Consultation request from ${payload.fullName}`)
    const body = encodeURIComponent(`Name: ${payload.fullName}\nPhone: ${payload.phone}\nEmail: ${payload.email || 'Not provided'}\nPreferred destination: ${payload.destination}\n\nMessage:\n${payload.message}`)
    window.location.href = `mailto:eduhousesuccessglobal@gmail.com?subject=${subject}&body=${body}`
    return { fallback: true }
  }
  const response = await fetch(`${API_URL}/consultations`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) })
  if (!response.ok) throw new Error('We could not send your request. Please try again or contact us directly.')
  return response.json()
}
