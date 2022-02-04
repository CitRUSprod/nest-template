import { NestFactory } from "@nestjs/core"
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify"
import { AppModule } from "./app.module"

const port = 3000

async function start() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
    await app.listen(port)
    console.log(`http://localhost:${port}`)
}

start()
