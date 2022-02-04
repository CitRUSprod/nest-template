import { Module } from "@nestjs/common"
import { PrismaService } from "$/prisma.service"
import { PostsController } from "./posts.controller"
import { PostsService } from "./posts.service"

@Module({
    controllers: [PostsController],
    providers: [PrismaService, PostsService]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PostsModule {}
