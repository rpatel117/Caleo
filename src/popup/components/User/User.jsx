import React, { useState, useEffect } from 'react';
import { supabase } from "../../api/supabase";
import "./User.css";

const User = () => {
    const [email, setEmail] = useState('Guest'); 

    const retrieveData = async () => {
        try {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) throw error;
            console.log(user);
            if (user) setEmail(user.email); 
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    
    useEffect(() => {
        retrieveData();
    }, []); 

    return (
        <div className="greeting">
            Hello, {email}
        </div>
    );
};

export default User;
