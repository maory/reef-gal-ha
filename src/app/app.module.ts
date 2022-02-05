import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ["..\..\resources\schema\schema.graphql"]
    }),
  ],
})
export class AppModule {}