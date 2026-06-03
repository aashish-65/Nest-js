import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { PaymentModule } from './payment/payment.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    UsersModule,
    TweetModule,
    PaymentModule,
    OrdersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      entities: [],
      synchronize: true,
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nestjs',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
