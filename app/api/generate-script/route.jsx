// api/generate-script/route.jsx

import { generateScript } from "@/configs/AiModel";
import { NextResponse } from "next/server";

const SCRIPT_PROMPT = `
Write two different scripts for a 30-second video on the Topic: {topic}.
Give the response in valid JSON following this schema:

{
  "scripts": [
    {
      "content": ""
    },
    {
      "content": ""
    }
  ]
}
`;

export async function POST(req) {
  try {
    const { topic } = await req.json();

    const PROMPT = SCRIPT_PROMPT.replace("{topic}", topic);

    const result = await generateScript.sendMessage(PROMPT);

    const text = result?.response?.text();

    // Clean JSON (Gemini sometimes adds ```json)
    const cleanText = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    return NextResponse.json(JSON.parse(cleanText));
  } catch (err) {
    return NextResponse.json(
      {
        error: "Failed to generate script",
        details: err.message,
      },
      { status: 500 }
    );
  }
}
