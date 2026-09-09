'use client'

import { useState } from 'react'
import { X, Upload, Check } from 'lucide-react'

const positions = ['Defensa', 'Mediocampo', 'Delantero', 'Portero']
const inputClass = 'registration-input'

export function RegistrationForm({ city, onClose }: { city: 'Caracas' | 'Valencia'; onClose: () => void }) {
  const [selectedPositions, setSelectedPositions] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const togglePosition = (position: string) => setSelectedPositions((current) => current.includes(position) ? current.filter((item) => item !== position) : [...current, position])

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setError('')
    const form = new FormData(event.currentTarget)
    form.set('city', city)
    form.set('positions', JSON.stringify(selectedPositions))
    try {
      const response = await fetch('/api/registrations', { method: 'POST', body: form })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error)
      setStatus('success')
    } catch (submissionError) { setError(submissionError instanceof Error ? submissionError.message : 'Ocurrió un error.'); setStatus('error') }
  }

  if (status === 'success') return <div className="registration-overlay"><div className="registration-success"><button className="registration-close" onClick={onClose} aria-label="Cerrar"><X /></button><div className="success-icon"><Check /></div><span className="section-label blue">Inscripción recibida</span><h2>Nos vemos en<br /><i>{city}.</i></h2><p>Recibimos los datos y documentos del participante. Nuestro equipo se pondrá en contacto contigo para confirmar los siguientes pasos.</p><button className="button orange" onClick={onClose}>Cerrar</button></div></div>

  return <div className="registration-overlay"><div className="registration-modal"><button className="registration-close" onClick={onClose} aria-label="Cerrar"><X /></button><div className="registration-header"><span className="section-label blue">Camp Experience · {city}</span><h2>Reserva tu<br /><i>experiencia.</i></h2><p>Completa los datos del participante y su representante.</p></div><form onSubmit={submit} className="registration-form"><input type="hidden" name="city" value={city} /><fieldset><legend>Datos del participante</legend><div className="form-grid"><label>Nombre completo<input className={inputClass} name="participantName" required /></label><label>Género<select className={inputClass} name="participantGender" required><option value="">Selecciona</option><option>Masculino</option><option>Femenino</option></select></label><label>Fecha de nacimiento<input className={inputClass} type="date" name="birthDate" required /></label><label>Categoría<select className={inputClass} name="category" required><option value="">Selecciona</option><option>Sub-8</option><option>Sub-10</option><option>Sub-12</option><option>Sub-14</option><option>Sub-16</option><option>Sub-18</option></select></label><label>Equipo donde juega<input className={inputClass} name="team" placeholder="Ninguno" required /></label><label>Talla de franela<select className={inputClass} name="jerseySize" required><option value="">Selecciona</option>{['XS','S','M','L','XL'].map((size) => <option key={size}>{size}</option>)}</select></label><label>Talla de short<select className={inputClass} name="shortsSize" required><option value="">Selecciona</option>{['XS','S','M','L','XL'].map((size) => <option key={size}>{size}</option>)}</select></label></div><div className="position-field"><span>Posición de juego <small>(puedes elegir varias)</small></span><div className="position-options">{positions.map((position) => <button type="button" className={selectedPositions.includes(position) ? 'position-option selected' : 'position-option'} onClick={() => togglePosition(position)} key={position}>{selectedPositions.includes(position) && <Check />} {position}</button>)}</div></div></fieldset><fieldset><legend>Datos del representante</legend><div className="form-grid"><label>Nombre del representante<input className={inputClass} name="representativeName" required /></label><label>Teléfono de contacto<input className={inputClass} name="representativePhone" type="tel" required /></label><label className="wide">Correo electrónico<input className={inputClass} name="representativeEmail" type="email" required /></label></div></fieldset><fieldset><legend>Contacto de emergencia</legend><div className="form-grid"><label>Nombre<input className={inputClass} name="emergencyName" required /></label><label>Parentesco<input className={inputClass} name="emergencyRelationship" required /></label><label>Teléfono<input className={inputClass} name="emergencyPhone" type="tel" required /></label><label className="wide">Alergias, medicación, condiciones médicas o lesiones<textarea className={inputClass} name="medicalNotes" rows={3} placeholder="Si no aplica, escribe Ninguna" /></label></div></fieldset><fieldset><legend>Documentos</legend><p className="upload-help">Formatos permitidos: PDF, JPG o PNG · Máximo 8 MB por archivo.</p><div className="upload-grid"><label className="upload-field"><Upload />Documento del participante<input type="file" name="participantIdDocument" accept=".pdf,.jpg,.jpeg,.png" required /></label><label className="upload-field"><Upload />Cédula del representante<input type="file" name="representativeIdDocument" accept=".pdf,.jpg,.jpeg,.png" required /></label><label className="upload-field"><Upload />Cédula del contacto de emergencia<input type="file" name="emergencyIdDocument" accept=".pdf,.jpg,.jpeg,.png" required /></label><label className="upload-field"><Upload />Foto del participante<input type="file" name="participantPhoto" accept=".jpg,.jpeg,.png" required /></label></div></fieldset>{error && <p className="form-error" role="alert">{error}</p>}<button className="button orange submit-registration" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Enviando…' : `Enviar inscripción · ${city}`}</button></form></div></div>
}
