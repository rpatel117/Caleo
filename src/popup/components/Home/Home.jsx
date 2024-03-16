import React, { useState, useEffect } from "react";
import { supabase } from "../../api/supabase";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Ensure this matches the name of your CSS file



const Home = () => {
  const [isLogin, setIsLogin] = useState(true); // This determines the initial view
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase


  useEffect(() => {
    // Listen for changes in authentication state
    /*const onAuthStateChange = () => {
      chrome.storage.local.get(['authData', 'authError'], function(result) {
        if (result.authData) {
          // Successful authentication, navigate to the target page
          navigate("/Calendar");
          // Optionally, clear the storage
        }
        if (result.authError) {
          // Handle authentication error
          console.error('Authentication error:', result.authError);
        }
      });
    };

    chrome.storage.onChanged.addListener(onAuthStateChange);

    return () => {
      // Cleanup listener when component unmounts
      chrome.storage.onChanged.removeListener(onAuthStateChange);
    }; */
    
  }, []);

  const toggleForm = () => setIsLogin(!isLogin);

  const GoogleLogin = () => {
    // Send a message to the background script to start the OAuth flow
    chrome.runtime.sendMessage({action: "authenticate"}, response => {
      if (response.token) {
        console.log("Authentication successful. Token:", response.token);
        // You can now use the token to make authenticated requests
      } else {
        console.error("Authentication failed:", response.error);
      }
    });
  };



  /*const GoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
    console.log(data);
    console.log(error);

    // Check if the URL is provided and no error, then redirect manually.
    if (data && data.url && !error) {
        window.location.href = data.url;
    } else if (error) {
        // Handle any potential error here.
        console.error('OAuth Login Error:', error);
    }
    // navigate("/CaleoMain"); // This should probably be handled after the user is successfully authenticated, not here.
}
*/
/*
  const handleAuth = async (e) => {
    e.preventDefault();
    let result = null;

    if (isLogin) {
      result = await supabase.auth.signInWithPassword({email, password})
    } else {
      result = await supabase.auth.signUp({ email, password });
    }

    if (result.error) {
      alert(result.error.message);
    } else {
      if (result.data) {
        console.log(
          isLogin
            ? "Login successful!"
            : "Sign up successful! Check your email for the confirmation link."
        );
        const jwtToken = await result.data.session.access_token;
        localStorage.setItem("jwtToken", jwtToken);
        navigate("/CaleoMain");
      }
    }
  };
  */

  return (
   <div>
   {/*{isLogin ? (
    <div>
      <form onSubmit={handleAuth}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={toggleForm}>Need an account? Sign Up</button>
      
    </div>
  ) : (
    <div>
      <form onSubmit={handleAuth}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={toggleForm}>Already have an account? Login</button>
    </div>
  )} */}
  <h1>Caleo</h1>
  <button onClick={GoogleLogin}>Sign in with Google</button>
</div>

  );
};

export default Home;
