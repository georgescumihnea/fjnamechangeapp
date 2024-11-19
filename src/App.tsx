import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ChangeUsernameForm from "./components/ChangeUsernameForm";
import VerifySession from "./components/VerifySession";
import Game from "./components/Game";

const App: React.FC = () => {
  const [initialToken, setInitialToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleLoginSuccess = (token: string, email: string) => {
    setInitialToken(token);
    setEmail(email);
  };

  const handleVerificationSuccess = (sessionToken: string) => {
    setSessionToken(sessionToken);
    setIsVerified(true);
  };

  return (
    <Router>
      <div className="h-screen flex flex-col justify-center items-center">
        <nav className="w-full flex justify-between p-4 bg-gray-800 text-white">
          <div>
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link to="/game">Play Game</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route
            path="/"
            element={
              initialToken && email ? (
                isVerified && sessionToken ? (
                  <ChangeUsernameForm sessionToken={sessionToken} />
                ) : (
                  <VerifySession
                    token={initialToken}
                    email={email}
                    onVerificationSuccess={handleVerificationSuccess}
                  />
                )
              ) : (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
