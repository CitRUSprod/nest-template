import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { PostsModule } from "$/modules/posts/posts.module"

@Module({
    imports: [
        ConfigModule.forRoot({
            expandVariables: true
        }),
        PostsModule
    ]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
