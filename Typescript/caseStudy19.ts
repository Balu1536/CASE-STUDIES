// IMPORTANT: Must be the first import
import "reflect-metadata";

import { Service, Inject, Container } from "typedi";

interface NewsSource {
  fetchArticles(): Promise<string[]>;
}


// RSS Feed Source
@Service()
class RSSFeedSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return [
      "RSS: Breaking News 1",
      "RSS: Breaking News 2"
    ];
  }
}

// API Source
@Service()
class APISource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return [
      "API: World News A",
      "API: World News B"
    ];
  }
}

// Mock Source (for testing)
class MockSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["MOCK: Test Article"];
  }
}


@Service()
class NewsAggregator {
  constructor(
    @Inject(() => RSSFeedSource)
    private source: NewsSource
  ) {}

  async getLatestArticles(): Promise<void> {
    const articles = await this.source.fetchArticles();
    console.log("Latest Articles:");
    articles.forEach(article => console.log(" -", article));
  }
}


async function main() {
  console.log("\n--- Using RSSFeedSource (default) ---");
  const aggregator1 = Container.get(NewsAggregator);
  await aggregator1.getLatestArticles();

  console.log("\n--- Swapping to APISource ---");
  Container.set(RSSFeedSource, new APISource());
  const aggregator2 = Container.get(NewsAggregator);
  await aggregator2.getLatestArticles();

  console.log("\n--- Testing with MockSource ---");
  Container.set(RSSFeedSource, new MockSource());
  const aggregator3 = Container.get(NewsAggregator);
  await aggregator3.getLatestArticles();
}

main();
