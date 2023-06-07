import express from "express";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
dotenv.config();

const app = express();
// CORS middleware
app.use(cors());
const httpServer = createServer(app);

const PORT = process.env.PORT || 5000;

const io = new Server(httpServer, {
	cors: {
		origin: true,
	},
});

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);
	socket.on("send_message", (data) => {
		console.log("sendMessage", data);
	});
});

httpServer.listen(5000, () => {
	console.log(`Server is running on port: ${PORT}`);
});
