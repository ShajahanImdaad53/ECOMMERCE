import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { products } from '../../../data/products';

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// Create a lightweight text representation of the catalog for the AI
const productCatalogText = products.map((p, i) => `ID: fallback-${i} | Name: ${p.name} | Price: $${p.price}`).join('\n');

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
        systemInstruction: `You are Loomy, an AI assistant for LoomPro, a premium handloom e-commerce platform. When a customer says 'hi' or greets you, immediately ask them what type, color, or style of sarong they are looking for. 

Here is our current product catalog:
${productCatalogText}

Instructions for assisting the customer:
1. Product Matching: When a customer mentions a color or style (e.g. 'I want a blue sarong'), analyze the catalog above to find the best matching products. 
2. Sharing Links: You MUST share the direct link to the product using Markdown format. The URL format is /product/{ID}. For example: [Handloom Cotton Sarong - Aqua Blue](/product/fallback-1). Do not provide links to products that are not in the catalog.
3. Purchasing Guide: If the customer asks "how can I purchase", "how to buy", or "how to checkout", guide them step-by-step: Tell them to click the product link you provided, click the "Add to Cart" button on the product page, and then proceed to Checkout from their shopping cart.
4. Tone: Maintain a premium, professional, yet friendly tone. Be proactive and helpful.`
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
