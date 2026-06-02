import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { PaymentModule } from './payment/payment.module';
import { OrdersModule } from './orders/orders.module';
@Module({
  imports: [UsersModule, TweetModule, PaymentModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
