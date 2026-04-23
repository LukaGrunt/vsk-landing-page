import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Weapon = {
  vrsta_orozja: string
  model_orozja: string
  kaliber: string
  serijska_stevilka: string
}

export type MembershipApplication = {
  id?: string
  created_at?: string
  full_name: string
  date_of_birth: string
  email: string
  phone_number: string
  address: string
  city_of_birth: string
  membership_type: string
  mors_number: string
  license_type: string
  license_number: string
  license_issue_date: string | null
  license_issuing_unit: string
  disciplines: string[]
  agreed_to_statut: boolean
  agreed_to_gdpr: boolean
  konfekcijska_stevilka?: string
  weapons?: Weapon[]
  status?: string
}
