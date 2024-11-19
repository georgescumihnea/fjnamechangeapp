import React, { useState, useEffect } from "react";
import keys from "../utils/keysParser";

const getRandomKey = () => {
  const chance = Math.random();
  if (chance <= 0.15) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  }
  return null;
};

const Game: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [nextPlayTime, setNextPlayTime] = useState<Date | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isAdmin, setIsAdmin] = useState<boolean>(false); // Admin mode flag

  // Initialize nextPlayTime from localStorage on component mount
  useEffect(() => {
    const savedNextPlayTime = localStorage.getItem("nextPlayTime");
    if (savedNextPlayTime) {
      const nextPlay = new Date(savedNextPlayTime);
      setNextPlayTime(nextPlay);
      setTimeRemaining(
        Math.max(0, (nextPlay.getTime() - new Date().getTime()) / 1000)
      );
    }
  }, []);

  // Update the countdown timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (nextPlayTime) {
        const remainingTime = Math.max(
          0,
          (nextPlayTime.getTime() - new Date().getTime()) / 1000
        );
        setTimeRemaining(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextPlayTime]);

  const handlePlay = () => {
    if (!isAdmin && timeRemaining > 0) {
      alert(
        `You can play again in ${Math.floor(
          timeRemaining / 60
        )} minutes and ${Math.floor(timeRemaining % 60)} seconds`
      );
      return;
    }

    const key = getRandomKey();
    setResult(key);

    if (!isAdmin) {
      const newNextPlayTime = new Date();
      newNextPlayTime.setMinutes(newNextPlayTime.getMinutes() + 30);
      setNextPlayTime(newNextPlayTime);
      localStorage.setItem("nextPlayTime", newNextPlayTime.toISOString());
    }
  };

  const toggleAdminMode = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-4">Win a Key Game</h1>
      {result ? (
        <div className="text-center text-lg text-green-600">
          <p>{`Congratulations! You won the key: ${result}`}</p>
          <p>
            Go redeem it on a new account or use it on your current account if
            you still have the game in your Steam library from the playtest.
          </p>
        </div>
      ) : (
        <button
          onClick={handlePlay}
          className="bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-indigo-700"
        >
          Play Game
        </button>
      )}
      {timeRemaining > 0 && !isAdmin && (
        <p className="text-red-500 mt-4">
          {`Next play available in: ${Math.floor(
            timeRemaining / 60
          )}:${Math.floor(timeRemaining % 60)
            .toString()
            .padStart(2, "0")}`}
        </p>
      )}
      <button
        onClick={toggleAdminMode}
        className="bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-gray-700"
      >
        {isAdmin ? "Disable Admin Mode" : "Enable Admin Mode"}
      </button>
    </div>
  );
};

export default Game;
