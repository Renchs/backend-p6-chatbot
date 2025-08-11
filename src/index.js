import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { chatSendMessage } from "./controllers/userController.js";



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/chat", chatSendMessage);

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});


