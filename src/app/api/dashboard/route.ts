// pages/api/chatgpt.ts
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const query = req.query.prompt; // Extract the prompt from query parameters

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Invalid or missing prompt" });
    }

    const response = await openai.completions();

    const completion = response.data.choices[0].message?.content;
    return res.status(200).json({ completion });
  } catch (error: any) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to fetch completions from OpenAI API" });
  }
}
