import cors from "cors";
import express from "express";
import http from "http";
import { appRouter } from "./routes";

const startServer = async () => {
    const app = express();
    app.use(express.json({ limit: "5mb" }));
    app.use(express.text({ limit: "5mb" }));
    app.use(cors());
    app.use("/api", appRouter);

    const httpServer = new http.Server(app);
    const PORT = +(process.env.PORT || 4000);
    httpServer.listen({ port: PORT }, async () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`);

    });
    return httpServer;
};

startServer();
process.on("warning", (e) => console.warn(e.stack));
