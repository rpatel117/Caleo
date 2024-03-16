import React from 'react';
import { createRoot } from 'react-dom/client'
import Popup from './Popup.jsx';
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from './api/supabase.js';


const root = createRoot(document.getElementById("root"));
root.render(
    <SessionContextProvider supabaseClient={supabase}>
    <Popup />
    </SessionContextProvider>
  
);
