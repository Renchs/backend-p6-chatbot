import { chat } from "../utils/apiGemini.js";

export const chatSendMessage = async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const geminiResponse = await chat(userMessage);
    return res.status(200).json({ message: geminiResponse });
  } catch (error) {
    console.error("Erro na API do Gemini:", error);
    return res.status(500).json({ 
      error: "Could not get a response from the AI. Please try again later." 
    });
  }
};
