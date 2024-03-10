import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xamwretecomrblvjcdkx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhbXdyZXRlY29tcmJsdmpjZGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2OTEwMDgsImV4cCI6MjAyMzI2NzAwOH0.Aa00lKRPHkbLir23IhUdxGkB-6gMyOMAFwnO2mQHwjQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
