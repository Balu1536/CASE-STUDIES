import { Service, Inject } from "typedi";
import { NewsSource } from "./NewsSource";
import { RSSFeedSource } from "./RSSFeedSource";

@Service()
export class NewsAggregator {
  constructor(
    @Inject(() => RSSFeedSource)
    private source: NewsSource
  ) {}

  async getAllLatestArticles(): Promise<void> {
    const articles = await this.source.fetchArticles();
    articles.forEach(a => console.log(a));
  }
}
