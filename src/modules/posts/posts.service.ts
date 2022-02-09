import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { PrismaService } from "$/prisma/prisma.service"

@Injectable()
export class PostsService {
    private readonly _prisma: PrismaService

    public constructor(prisma: PrismaService) {
        this._prisma = prisma
    }

    public async getPosts() {
        const posts = await this._prisma.post.findMany()
        return posts
    }

    public async createPost(data: Prisma.PostCreateInput) {
        await this._prisma.post.create({ data })
    }
}
