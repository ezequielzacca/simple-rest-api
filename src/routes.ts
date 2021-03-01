import { Router } from "express";
import data from "../data.json";
let counter: number = 0;
export const appRouter: Router = Router();

appRouter.get("/counter", (req, res) => {
    return res.json({
        counter
    });
})

appRouter.post<{ ammount: number }>("/counter/increment", (req, res) => {
    counter++;
    return res.json({
        counter
    });
})

