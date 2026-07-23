import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    console.log("Chat Request:", { message, historyLength: history?.length });

    if (!apiKey || !genAI) {
      console.log("No API Key - Using Mock Mode");
      // Mock response if no API key is provided
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json({ 
        text: "I'm currently in demo mode. To enable my full potential, please add your GEMINI_API_KEY to the .env file. How can I help you with LoomPro today?",
        isMock: true 
      });
    }

    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash",
        systemInstruction: "You are Loomy, an AI assistant for LoomPro, a premium handloom e-commerce platform. When a customer says 'hi' or greets you, immediately ask them what type, color, or style of sarong they are looking for. Once they provide their requirements (e.g. 'I want a red cotton sarong'), enthusiastically suggest matching products from the LoomPro catalog. Maintain a premium, professional, yet friendly tone. Do not just wait for them to ask questions—be proactive in asking for their preferences to suggest the best handloom product."
    });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    console.log("AI Response Success");

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("AI Chat Error:", error);
    
    // Fallback response for all errors (quota exceeded, network issues, invalid keys)
    return NextResponse.json({ 
      text: "Hi there! I am currently experiencing a very high volume of requests. What type, color, or style of sarong are you looking for? Let me know your preferences, and I'll help you find the perfect match!"
    });
  }
}
