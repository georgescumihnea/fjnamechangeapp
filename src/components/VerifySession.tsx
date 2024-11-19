import React, { useEffect } from "react";

interface VerifySessionProps {
  token: string;
  email: string;
  onVerificationSuccess: (sessionToken: string) => void;
}

const VerifySession: React.FC<VerifySessionProps> = ({
  token,
  email,
  onVerificationSuccess,
}) => {
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(
          "https://h57stgs0.api.lootlocker.io/game/v2/session/white-label",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
              "User-Agent":
                "UnityPlayer/2022.3.12f1 (UnityWebRequest/1.0, libcurl/8.1.1-DEV)",
              Accept: "application/json; charset=UTF-8",
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Headers":
                "Accept, X-Access-Token, X-Application-Name, X-Request-Sent-Time",
              "Access-Control-Allow-Methods":
                "GET, POST, DELETE, PUT, OPTIONS, HEAD",
              "Access-Control-Allow-Origin": "*",
              "User-Instance-Identifier":
                "0b7be850-b8e0-4241-8805-49018b68ff82",
              "SDK-Version": "2.1.3",
              "LL-Version": "2021-03-01",
              "X-Unity-Version": "2022.3.12f1",
            },
            body: JSON.stringify({
              game_key: "prod_fab1acc71a984b32b0204d62718581ed",
              email,
              token,
              game_version: "1.0.0.0",
            }),
          }
        );

        const data = await response.json();
        if (response.ok && data.session_token) {
          onVerificationSuccess(data.session_token);
        } else {
          console.error("Verification failed:", data);
          alert(`Verification failed: ${data.message || "Unknown error"}`);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred while verifying the session.");
      }
    };

    verifyToken();
  }, [token, email, onVerificationSuccess]);

  return <div>Verifying session...</div>;
};

export default VerifySession;
