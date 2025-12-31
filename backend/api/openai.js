import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const client = new GoogleGenAI({});
    const interaction = await client.interactions.create({
      model: 'gemini-3-flash-preview',
      input: prompt,
    });

    const result = interaction.outputs[interaction.outputs.length - 1].text;

    res.status(200).json({ success: true, result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
