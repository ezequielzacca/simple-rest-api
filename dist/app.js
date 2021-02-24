"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const routes_1 = require("./routes");
const startServer = async () => {
    const app = express_1.default();
    app.use(express_1.default.json({ limit: "5mb" }));
    app.use(express_1.default.text({ limit: "5mb" }));
    app.use(cors_1.default());
    app.use("/api", routes_1.appRouter);
    const httpServer = new http_1.default.Server(app);
    const PORT = +(process.env.PORT || 4000);
    httpServer.listen({ port: PORT }, async () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`);
    });
    return httpServer;
};
startServer();
process.on("warning", (e) => console.warn(e.stack));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsc0RBQThCO0FBQzlCLGdEQUF3QjtBQUN4QixxQ0FBcUM7QUFFckMsTUFBTSxXQUFXLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDM0IsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0lBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxFQUFFLENBQUMsQ0FBQztJQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxrQkFBUyxDQUFDLENBQUM7SUFFM0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztJQUN6QyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLElBQUksRUFBRSxDQUFDLENBQUM7SUFFL0QsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixXQUFXLEVBQUUsQ0FBQztBQUNkLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCJodHRwXCI7XHJcbmltcG9ydCB7IGFwcFJvdXRlciB9IGZyb20gXCIuL3JvdXRlc1wiO1xyXG5cclxuY29uc3Qgc3RhcnRTZXJ2ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbiAgICBhcHAudXNlKGV4cHJlc3MuanNvbih7IGxpbWl0OiBcIjVtYlwiIH0pKTtcclxuICAgIGFwcC51c2UoZXhwcmVzcy50ZXh0KHsgbGltaXQ6IFwiNW1iXCIgfSkpO1xyXG4gICAgYXBwLnVzZShjb3JzKCkpO1xyXG4gICAgYXBwLnVzZShcIi9hcGlcIiwgYXBwUm91dGVyKTtcclxuXHJcbiAgICBjb25zdCBodHRwU2VydmVyID0gbmV3IGh0dHAuU2VydmVyKGFwcCk7XHJcbiAgICBjb25zdCBQT1JUID0gKyhwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDApO1xyXG4gICAgaHR0cFNlcnZlci5saXN0ZW4oeyBwb3J0OiBQT1JUIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhg8J+agCBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCk7XHJcblxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaHR0cFNlcnZlcjtcclxufTtcclxuXHJcbnN0YXJ0U2VydmVyKCk7XHJcbnByb2Nlc3Mub24oXCJ3YXJuaW5nXCIsIChlKSA9PiBjb25zb2xlLndhcm4oZS5zdGFjaykpO1xyXG4iXX0=
