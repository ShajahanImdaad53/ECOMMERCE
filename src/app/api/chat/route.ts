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
        systemInstruction: "You are Loomy, an AI assistant for LoomPro, a premium handloom e-commerce platform. Your goal is to help customers with their queries about handloom products, traditional craftsmanship, shipping, and returns. Be polite, helpful, and maintain a premium, professional yet friendly tone. If you don't know something about a specific product, suggest they check the product details page or contact support."
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
    
    if (error.status === 429) {
      return NextResponse.json(
        { error: "Quota exceeded. Please wait a moment before trying again or upgrade your Gemini plan." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process chat request", details: error.message },
      { status: 500 }
    );
  }
}
