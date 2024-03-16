import React, { useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";

const SubmitButton = () => {
  const { inputValue } = useContext(AppContext);
  const [jwtToken, setjwtToken] = useState('');

  useEffect(() => {
    chrome.storage.local.get(['authData'], function(items) {
      setjwtToken(items.authData.session.access_token);
    });
  }, []);

  const postToAPI = async (payload) => {

    
    try {
      const response = await fetch(
        "https://xamwretecomrblvjcdkx.supabase.co/functions/v1/openaicall",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: payload,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClick = () => {
    console.log("Sending text to API:", inputValue);
    postToAPI(inputValue);
  };
  return <button onClick={handleClick}>Submit</button>;
};

export default SubmitButton;
