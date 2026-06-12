import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UsersService,
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}
  // tweets: { text: string; date: Date; userId: number }[] = [
  //   {
  //     text: 'some text',
  //     date: new Date('2026-11-12'),
  //     userId: 1,
  //   },
  //   {
  //     text: 'some text',
  //     date: new Date('2026-04-12'),
  //     userId: 1,
  //   },
  //   {
  //     text: 'some text',
  //     date: new Date('2024-11-12'),
  //     userId: 2,
  //   },
  // ];

  getTweets(userid: number) {}

  public async createTweet(createTweetDto: CreateTweetDto) {
    //Find User with the given userId from users table
    let user = await this.userService.findUserById(createTweetDto.userId);

    //Create a tweet
    // let tweet = this.tweetRepository.create({ ...createTweetDto, user: user });

    //Save the tweet
    // return await this.tweetRepository.save(tweet);
  }
}
