import { useState, useEffect } from "react";

const Translator = () => {
  const [text, setText] = useState(""); // Input text
  const [translatedText, setTranslatedText] = useState(""); // Translated text
  const [targetLanguage, setTargetLanguage] = useState("es"); // Default: Spanish

  const translateText = async () => {
    const apiUrl = "https://deep-translate1.p.rapidapi.com/language/translate/v2";
    const apiKey = "dd754701a5mshb5c5f788f456535p1698dbjsne0554f686813"; // Replace with your actual API key

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
        },
        body: JSON.stringify({
          q: text,       // Input text
          source: "en",  // English as the source language
          target: targetLanguage, // Selected target language
        }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debugging

      if (data && data.data && data.data.translations) {
        setTranslatedText(data.data.translations.translatedText);
      } else {
        console.error("Unexpected API response structure:", data);
      }
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  // Debugging: Log translatedText updates
  useEffect(() => {
    console.log("Translated Text Updated:", translatedText);
  }, [translatedText]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Text Translator</h2>

      {/* Input Text */}
      <textarea
        className="w-full p-2 border rounded-lg mb-4"
        rows="4"
        placeholder="Enter text in English..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Language Selection */}
      <select
        className="w-full p-2 border rounded-lg mb-4"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="zh-CN">Chinese</option>
      </select>

      {/* Translate Button */}
      <button
        className="w-full bg-blue-500 text-white p-2 rounded-lg"
        onClick={translateText}
      >
        Translate
      </button>

      {/* Translated Output */}
      {translatedText && (
        <div className="mt-4 p-3 border rounded-lg bg-gray-100">
          <h3 className="font-semibold">Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;



//dd754701a5mshb5c5f788f456535p1698dbjsne0554f686813