// api/ask/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: question }],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get response" },
      { status: 500 }
    );
  }
}
