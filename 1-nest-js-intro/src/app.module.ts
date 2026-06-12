import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
@Module({
  imports: [
    UsersModule,
    TweetModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        // entities: [User],
        autoLoadEntities: true,
        synchronize: true,
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'nest-js',
      }),
    }),
    AuthModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
