import React, { useState } from "react";
import UsernameCustomizer from "../UsernameCustomizer";

interface ChangeUsernameFormProps {
  sessionToken: string;
}

const ChangeUsernameForm: React.FC<ChangeUsernameFormProps> = ({
  sessionToken,
}) => {
  const [formattedUsername, setFormattedUsername] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      "https://h57stgs0.api.lootlocker.io/game/player/name",
      {
        method: "PATCH",
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
          "User-Instance-Identifier": "0b7be850-b8e0-4241-8805-49018b68ff82",
          "SDK-Version": "2.1.3",
          "domain-key": "h57stgs0",
          "X-Unity-Version": "2022.3.12f1",
          "x-session-token": sessionToken,
          "LL-Version": "2021-03-01",
        },
        body: JSON.stringify({ name: formattedUsername }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      alert(`Username changed to ${data.name}`);
    } else {
      const errorData = await response.json();
      alert(
        `Failed to change username: ${errorData.message || response.statusText}`
      );
    }
  };

  return (
    <div className="h-screen flex">
      <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center">
        <div className="bg-black opacity-20 inset-0 z-0"></div>
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-4xl font-sans">
            Simple App
          </h1>
          <p className="text-white mt-1">The simplest app to use</p>
          <div className="flex justify-center lg:justify-start mt-6">
            <a
              href="#"
              className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form
            className="bg-white rounded-md shadow-2xl p-5"
            onSubmit={handleSubmit}
          >
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
            <p className="text-sm font-normal text-gray-600 mb-8">
              Customize your username
            </p>
            <UsernameCustomizer onChange={setFormattedUsername} />
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Change Username
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeUsernameForm;
