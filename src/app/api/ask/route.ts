import { NextResponse } from "next/server";

// Define types for the OpenAI API response
interface OpenAIResponse {
  choices: { text: string }[];
}

// Your OpenAI API key
const API_KEY = process.env.OPENAI_API_KEY; // Store in .env.local

// Define the POST handler
export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const { message } = await req.json();

    // If no message is provided
    if (!message) {
      return new NextResponse(
        JSON.stringify({ error: "Message is required" }),
        { status: 400 }
      );
    }

    // OpenAI API URL and configuration
    const endpoint = "https://api.openai.com/v1/completions";
    const model = "gpt-3.5-turbo"; // Use the model that fits your needs

    // Make the request to the OpenAI API
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        prompt: message,
        max_tokens: 150, // Adjust as needed
      }),
    });

    // If the response is unsuccessful, throw an error
    if (!response.ok) {
      throw new Error("Failed to fetch data from OpenAI API");
    }

    // Parse the OpenAI API response
    const data: OpenAIResponse = await response.json();

    // Return the ChatGPT response text
    return new NextResponse(
      JSON.stringify({ response: data.choices[0].text.trim() }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
