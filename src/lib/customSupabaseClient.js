import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djtzvfeyedhwcnwjbwxp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdHp2ZmV5ZWRod2Nud2pid3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3Mjc1NTUsImV4cCI6MjA4NTMwMzU1NX0.akM02RV8HgpE4SrglzBm5NN-SZYdvHi8m-HFY6hLPW8';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
