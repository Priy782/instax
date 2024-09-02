// plugins/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nttlerjuizuypgyiuuhf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dGxlcmp1aXp1eXBneWl1dWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4Nzc4MjksImV4cCI6MjA0MDQ1MzgyOX0.ub40ctgea10BRCH45K16pkzU6thpHYV2kZhUwOvUs2k'

export const supabase = createClient(supabaseUrl, supabaseKey)
