"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
require("reflect-metadata");
const typedi_1 = require("typedi");
const NewsAggregator_1 = require("./NewsAggregator");
const APISource_1 = require("./APISource");
const RSSFeedSource_1 = require("./RSSFeedSource");
typedi_1.Container.set(RSSFeedSource_1.RSSFeedSource, new RSSFeedSource_1.RSSFeedSource());
typedi_1.Container.get(NewsAggregator_1.NewsAggregator).getLatestArticles();
typedi_1.Container.set(RSSFeedSource_1.RSSFeedSource, new APISource_1.APISource());
typedi_1.Container.get(NewsAggregator_1.NewsAggregator).getLatestArticles();
