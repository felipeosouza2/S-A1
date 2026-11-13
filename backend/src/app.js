import Fastify from "fastify";
import { cadRoutes } from "./routes/cadastros.routes.js";
import cors from '@Fastify/cors'


export function buildApp() {

    const app = Fastify({ Logger: true });

    app.register(cors, {origin: '*'})

    app.register(cadRoutes, { prefix: '/equipamentos' })

    return app
}