
import 'dotenv/config'
import { GoogleGenAI } from '@google/genai';


export const api = async (req, res) => {
    const {prompt} = req.body;

    const client = new GoogleGenAI({});

    const interaction =  await client.interactions.create({
        model: 'gemini-3-flash-preview',
        input: prompt,
    });

    const result = interaction.outputs[interaction.outputs.length - 1].text;

    res.json({success: true, result})
}