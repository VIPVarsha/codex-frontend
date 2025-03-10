import React, { useState, useCallback, useEffect } from "react";

const RandomStringGenerator = () => {
  const [randomString, setRandomString] = useState("");

  // Function to generate a random string
  const generateString = useCallback(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRandomString(result);
  }, []);

  // Generate a random string when the component mounts
  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Random String Generator</h1>
        <p className="text-lg bg-gray-200 p-2 rounded">{randomString}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={generateString}
        >
          Generate New String
        </button>
      </div>
    </div>
  );
};

export default RandomStringGenerator;
