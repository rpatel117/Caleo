import React, { useState, useEffect } from 'react';
import { supabase } from "../../api/supabase";
import "./User.css";
import { useUser } from '@supabase/auth-helpers-react'


const User = () => {
    const [email, setEmail] = useState('Guest'); 
    const [accesstoken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const { user } = useUser();


    useEffect(() => {
         // Check if running in an environment where `chrome.storage` is available
    if (typeof chrome !== "undefined" && chrome.storage) {
        chrome.storage.local.get(['authData'], function(items) {
          // The `items` object contains all the key-value pairs stored in chrome.storage.local
          
          setEmail(items.authData.user.email);
        });
  
        // If you're using chrome.storage.sync, replace `chrome.storage.local` with `chrome.storage.sync`
      } else {
        console.log('chrome.storage is not available');
      }
    }, []); 
    

    
   

    return (
        <div className="greeting">
            Hello, {user.email}
        </div>
    );
};

export default User;
