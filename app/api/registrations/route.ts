import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { campRegistrations } from '@/lib/db/schema'
import { z } from 'zod'

const schema = z.object({
  city: z.enum(['Caracas', 'Valencia']), participantName: z.string().min(2), participantGender: z.enum(['Masculino', 'Femenino']), birthDate: z.string().min(1), category: z.string().min(1), positions: z.array(z.string()).min(1), team: z.string().min(1), jerseySize: z.string().min(1), shortsSize: z.string().min(1), representativeName: z.string().min(2), representativePhone: z.string().min(7), representativeEmail: z.string().email(), emergencyName: z.string().min(2), emergencyRelationship: z.string().min(2), emergencyPhone: z.string().min(7), medicalNotes: z.string().default(''),
})

const fileFields = ['participantIdDocument', 'representativeIdDocument', 'emergencyIdDocument', 'participantPhoto'] as const
const MAX_FILE_SIZE = 8 * 1024 * 1024

export async function POST(request: Request) {
  try {
    const form = await request.formData()
    const data = schema.parse({ city: form.get('city'), participantName: form.get('participantName'), participantGender: form.get('participantGender'), birthDate: form.get('birthDate'), category: form.get('category'), positions: JSON.parse(String(form.get('positions') ?? '[]')), team: form.get('team'), jerseySize: form.get('jerseySize'), shortsSize: form.get('shortsSize'), representativeName: form.get('representativeName'), representativePhone: form.get('representativePhone'), representativeEmail: form.get('representativeEmail'), emergencyName: form.get('emergencyName'), emergencyRelationship: form.get('emergencyRelationship'), emergencyPhone: form.get('emergencyPhone'), medicalNotes: form.get('medicalNotes') ?? '' })
    const paths: Record<(typeof fileFields)[number], string> = {} as Record<(typeof fileFields)[number], string>
    for (const field of fileFields) {
      const file = form.get(field)
      if (!(file instanceof File) || file.size === 0 || file.size > MAX_FILE_SIZE) return NextResponse.json({ error: `Archivo inválido: ${field}` }, { status: 400 })
      const blob = await put(`registrations/${Date.now()}-${field}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '')}`, file, { access: 'private', addRandomSuffix: true })
      paths[field] = blob.pathname
    }
    await db.insert(campRegistrations).values({ ...data, positions: data.positions, birthDate: data.birthDate, participantIdDocumentPath: paths.participantIdDocument, representativeIdDocumentPath: paths.representativeIdDocument, emergencyIdDocumentPath: paths.emergencyIdDocument, participantPhotoPath: paths.participantPhoto })
    return NextResponse.json({ success: true })
  } catch (error) { console.error('[v0] Registration error', error); return NextResponse.json({ error: 'No pudimos procesar la inscripción. Revisa los datos e inténtalo nuevamente.' }, { status: 400 }) }
}
