
import 'dotenv/config'
import { GoogleGenAI } from '@google/genai';


export const api = async (req, res) => {
    const {prompt} = req.body;

    try {
        const client = new GoogleGenAI({});

        const interaction =  await client.interactions.create({
            model: 'gemini-2.5-flash',
            input: prompt,
        });

        const result = interaction.outputs[interaction.outputs.length - 1].text;

        res.json({success: true, result})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}