import React, { useState } from "react";
import { supabase } from "../../api/supabase";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Ensure this matches the name of your CSS file

const Home = () => {
  const [isLogin, setIsLogin] = useState(true); // This determines the initial view
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

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
        const jwtToken = result.data.session.access_token;
        localStorage.setItem("jwtToken", jwtToken);
        navigate("/CaleoMain");
      }
    }
  };

  return (
    <div>
  {isLogin ? (
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
  )}
</div>

  );
};

export default Home;
