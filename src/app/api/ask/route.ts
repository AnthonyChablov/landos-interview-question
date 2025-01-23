// api/ask/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { wineQuestionSchema } from "@/schemas/wineQuestionSchema";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Predefined system prompt to contextualize wine-related queries
const WINE_SYSTEM_PROMPT = `
You are an expert sommelier and wine educator. 
Provide detailed, accurate, and engaging responses about wine.
Focus on:
- Wine varieties and characteristics
- Wine regions and terroir
- Tasting notes and flavor profiles
- Wine pairing recommendations
- Wine history and production techniques

Respond in a conversational, informative manner that helps users understand and appreciate wine.
`;

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const requestBody = await request.json();

    // Validate input using Zod
    const validation = wineQuestionSchema.safeParse(requestBody);

    // Check if validation fails
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Invalid input",
          details: validation.error.errors,
        },
        { status: 400 }
      );
    }

    // Destructure validated question
    const { question } = validation.data;

    // Call OpenAI API with structured prompt
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: WINE_SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: question,
        },
      ],
      store: true,
      max_tokens: 300,
      temperature: 0.7,
      stream: false,
    });

    // Extract the response
    const responseText =
      chatCompletion.choices[0]?.message?.content ||
      "I couldn't generate a response about wine.";

    console.log(responseText);

    // Return the response
    return NextResponse.json({
      response: responseText,
    });
  } catch (error) {
    // Improved error logging and handling
    console.error("OpenAI API Error:", error);

    // Check for specific OpenAI API errors
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        {
          error: "OpenAI API Error",
          details: error.message,
        },
        { status: 500 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: "Failed to get response from OpenAI" },
      { status: 500 }
    );
  }
}
