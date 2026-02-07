const SUPABASE_URL = 'https://cxzktxjvjinobzumapse.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4emt0eGp2amlub2J6dW1hcHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0ODQ5NDEsImV4cCI6MjA4NjA2MDk0MX0.0p9cAVscdHq7VnE6G0cmB9MSGYhzzmAtVl3Xo6r4tDI';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ==================== MASKS ====================
async function fetchMasks() {
    const { data, error } = await supabaseClient
        .from('masks')
        .select('*')
        .order('created_at', { ascending: true });
    if (error) { console.error('fetchMasks error:', error); return []; }
    return data;
}

async function addMask(mask) {
    const { data, error } = await supabaseClient
        .from('masks')
        .insert([mask])
        .select();
    if (error) { console.error('addMask error:', error); return null; }
    return data[0];
}

async function updateMask(id, updates) {
    const { data, error } = await supabaseClient
        .from('masks')
        .update(updates)
        .eq('id', id)
        .select();
    if (error) { console.error('updateMask error:', error); return null; }
    return data[0];
}

async function deleteMaskById(id) {
    const { error } = await supabaseClient
        .from('masks')
        .delete()
        .eq('id', id);
    if (error) { console.error('deleteMask error:', error); return false; }
    return true;
}

// ==================== NUMBERS ====================
async function fetchNumbers() {
    const { data, error } = await supabaseClient
        .from('numbers')
        .select('*')
        .order('id', { ascending: true });
    if (error) { console.error('fetchNumbers error:', error); return []; }
    return data;
}

async function addNumber(number) {
    const { data, error } = await supabaseClient
        .from('numbers')
        .insert([number])
        .select();
    if (error) { console.error('addNumber error:', error); return null; }
    return data[0];
}

async function updateNumber(id, updates) {
    const { data, error } = await supabaseClient
        .from('numbers')
        .update(updates)
        .eq('id', id)
        .select();
    if (error) { console.error('updateNumber error:', error); return null; }
    return data[0];
}

async function deleteNumberById(id) {
    const { error } = await supabaseClient
        .from('numbers')
        .delete()
        .eq('id', id);
    if (error) { console.error('deleteNumber error:', error); return false; }
    return true;
}

// ==================== TARIFFS ====================
async function fetchTariffs() {
    const { data, error } = await supabaseClient
        .from('tariffs')
        .select('*')
        .order('id', { ascending: true });
    if (error) { console.error('fetchTariffs error:', error); return []; }
    return data;
}

async function addTariff(tariff) {
    const { data, error } = await supabaseClient
        .from('tariffs')
        .insert([tariff])
        .select();
    if (error) { console.error('addTariff error:', error); return null; }
    return data[0];
}

async function updateTariff(id, updates) {
    const { data, error } = await supabaseClient
        .from('tariffs')
        .update(updates)
        .eq('id', id)
        .select();
    if (error) { console.error('updateTariff error:', error); return null; }
    return data[0];
}

async function deleteTariffById(id) {
    const { error } = await supabaseClient
        .from('tariffs')
        .delete()
        .eq('id', id);
    if (error) { console.error('deleteTariff error:', error); return false; }
    return true;
}

// ==================== LOAD ALL DATA ====================
async function loadAllDataFromSupabase() {
    const [masks, numbers, tariffs] = await Promise.all([
        fetchMasks(),
        fetchNumbers(),
        fetchTariffs()
    ]);
    return { masks, numbers, tariffs };
}
