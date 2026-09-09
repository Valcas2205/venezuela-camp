import { pgTable, text, timestamp, uuid, date } from 'drizzle-orm/pg-core'

export const campRegistrations = pgTable('camp_registrations', {
  id: uuid('id').defaultRandom().primaryKey(),
  city: text('city').notNull(),
  participantName: text('participant_name').notNull(),
  participantGender: text('participant_gender').notNull(),
  birthDate: date('birth_date').notNull(),
  category: text('category').notNull(),
  positions: text('positions').array().notNull(),
  team: text('team').notNull(),
  jerseySize: text('jersey_size').notNull(),
  shortsSize: text('shorts_size').notNull(),
  representativeName: text('representative_name').notNull(),
  representativePhone: text('representative_phone').notNull(),
  representativeEmail: text('representative_email').notNull(),
  emergencyName: text('emergency_name').notNull(),
  emergencyRelationship: text('emergency_relationship').notNull(),
  emergencyPhone: text('emergency_phone').notNull(),
  medicalNotes: text('medical_notes').notNull().default(''),
  participantIdDocumentPath: text('participant_id_document_path').notNull(),
  representativeIdDocumentPath: text('representative_id_document_path').notNull(),
  emergencyIdDocumentPath: text('emergency_id_document_path').notNull(),
  participantPhotoPath: text('participant_photo_path').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export type CampRegistration = typeof campRegistrations.$inferInsert
