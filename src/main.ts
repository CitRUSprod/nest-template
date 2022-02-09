import { NestFactory } from "@nestjs/core"
import { Logger } from "@nestjs/common"
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify"
import { AppModule } from "$/modules/app.module"

const port = 3000
const logger = new Logger("Main")

async function start() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
    await app.listen(port)
    logger.log(`Running on http://localhost:${port}`)
}

start()
