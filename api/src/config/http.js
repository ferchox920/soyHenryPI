import server from "./app.js";
import { createServer } from "http";

const httpServer = createServer(server);

export default httpServer;
