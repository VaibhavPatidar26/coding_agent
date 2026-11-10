import "dotenv/config";
import dns from "node:dns";
import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";

dns.setDefaultResultOrder("ipv4first");

let aiClient: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in .env");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const handleChatPrompt = async (req: Request, res: Response): Promise<void> => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      res.status(400).json({ error: "A valid prompt string is required" });
      return;
    }

    const ai = getAIClient();

    // Use fast and responsive flash-lite model, with fallback if needed
    const candidateModels = ["gemini-3.5-flash-lite", "gemini-3.5-flash", "gemini-3.8-flash"];
    let replyText = "";
    let lastError: unknown = null;

    for (const model of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: prompt,
        });
        if (response.text) {
          replyText = response.text;
          break;
        }
      } catch (err: any) {
        lastError = err;
        // If 503 high demand, try next model in candidate list
        if (err?.status === 503) {
          continue;
        }
        throw err;
      }
    }

    if (!replyText && lastError) {
      throw lastError;
    }

    res.status(200).json({
      success: true,
      reply: replyText || "No response generated",
    });
  } catch (error: any) {
    console.error("Chat controller error:", error);
    res.status(500).json({
      error: error?.message || "Internal Server Error",
    });
  }
};
