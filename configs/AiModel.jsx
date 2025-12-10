// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// configs/AiModel.jsx

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateScript = {
  sendMessage: async (prompt) => {
    const model = "gemini-3-pro-preview";

    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    return response;
  },
};
