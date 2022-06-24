import { Router } from "express";
import data from "../data.json";

export const appRouter: Router = Router();

appRouter.get("/products", (req, res) => {
    return res.json(data.products);
})

appRouter.get<{ id: string }>("/products/:id", (req, res) => {
    return res.json(data.products.find(p => p.id === +req.params.id));
})

appRouter.get("/categories", (req, res) => {
    return res.json(data.categories);
})

appRouter.get<{ id: string }>("/categories/:id", (req, res) => {
    return res.json(data.categories.find(p => p.id === +req.params.id));
})

appRouter.get("/measurement/units", (req, res) => {
    return res.json(data.measurementUnits);
})

appRouter.get<{ id: string }>("/measurement/units/:id", (req, res) => {
    return res.json(data.measurementUnits.find(p => p.id === +req.params.id));
})