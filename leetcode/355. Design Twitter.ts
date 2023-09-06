class Twitter {
  private tweets: { userId: number; tweetId: number }[];
  private followers: Map<number, Set<number>>;

  constructor() {
    this.tweets = [];
    this.followers = new Map();
  }

  postTweet(userId: number, tweetId: number): void {
    this.tweets.unshift({ userId, tweetId });
  }

  getNewsFeed(userId: number): number[] {
    const feed: number[] = [];
    const followees = this.followers.get(userId) || new Set();
    const allUsers = followees.add(userId);

    for (const tweet of this.tweets) {
      if (allUsers?.has(tweet.userId)) {
        feed.push(tweet.tweetId);
      }
      if (feed.length === 10) {
        break;
      }
    }

    return feed;
  }

  follow(followerId: number, followeeId: number): void {
    if (!this.followers.has(followerId)) {
      this.followers.set(followerId, new Set());
    }

    this.followers.get(followerId)!.add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    if (this.followers.has(followerId)) {
      this.followers.get(followerId)?.delete(followeeId);
    }
  }
}
