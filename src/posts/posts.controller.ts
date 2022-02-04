// eslint-disable-next-line @typescript-eslint/no-shadow
import { Controller, Get, Post, Body } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { PostsService } from "./posts.service"

@Controller("posts")
export class PostsController {
    private readonly _postsService: PostsService

    public constructor(postsService: PostsService) {
        this._postsService = postsService
    }

    @Get("/")
    public getPosts() {
        return this._postsService.getPosts()
    }

    @Post("/")
    public createPost(@Body() data: Prisma.PostCreateInput) {
        return this._postsService.createPost(data)
    }
}
