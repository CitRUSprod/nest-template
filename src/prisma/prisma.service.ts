import { Injectable, OnModuleInit } from "@nestjs/common"
import { NestFastifyApplication } from "@nestjs/platform-fastify"
import { PrismaClient } from "@prisma/client"

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    public async onModuleInit() {
        await this.$connect()
    }

    public async enableShutdownHooks(app: NestFastifyApplication) {
        this.$on("beforeExit", () => {
            app.close()
        })
    }
}
