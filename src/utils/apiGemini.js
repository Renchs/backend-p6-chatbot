import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export async function chat(msgUser) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const promptGemini = await model.generateContent(
      `Responda a pergunta do usuário de forma simples e direta: ${msgUser}`
    );
    return promptGemini.response.text();
  } catch (error) {
    console.error("Erro ao se comunicar com a API do Gemini:", error);
    throw new Error(
      "Não foi possível gerar a resposta. Tente novamente mais tarde."
    );
  }
}
