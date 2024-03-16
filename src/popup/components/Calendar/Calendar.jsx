import React from "react"
import { useEffect } from 'react'; 
import { supabase } from "../../api/supabase";

const Calendar = () => {

    useEffect(() => {
        chrome.storage.local.get(['authData'], async function(items) {



            const fetchCalendarEvents = async (accessToken) => {
                const calendarId = 'primary'; // 'primary' or the specific ID of the calendar you want to access
                const timeMin = new Date().toISOString(); // Fetch events starting from now
                const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?timeMin=${timeMin}&singleEvents=true&orderBy=startTime`;
              
                try {
                  const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                      'Authorization': `Bearer ${accessToken}`,
                      'Accept': 'application/json',
                    },
                  });
              
                  if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                  }
              
                  const data = await response.json();
                  console.log(data); // You'll see the calendar events here
                  // Process the calendar events as needed
                } catch (error) {
                  console.error('Failed to fetch calendar events:', error);
                }
              };
              
              // Call this function with the actual access token
              // console.log(access);
              //fetchCalendarEvents(access);
        })

    });

    return (
        <div>
            Caleo
        </div>
    )
};

export default Calendar;

