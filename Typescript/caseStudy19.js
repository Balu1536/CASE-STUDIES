"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTANT: Must be the first import
require("reflect-metadata");
const typedi_1 = require("typedi");
// RSS Feed Source
let RSSFeedSource = class RSSFeedSource {
    fetchArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                "RSS: Breaking News 1",
                "RSS: Breaking News 2"
            ];
        });
    }
};
RSSFeedSource = __decorate([
    (0, typedi_1.Service)()
], RSSFeedSource);
// API Source
let APISource = class APISource {
    fetchArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                "API: World News A",
                "API: World News B"
            ];
        });
    }
};
APISource = __decorate([
    (0, typedi_1.Service)()
], APISource);
// Mock Source (for testing)
class MockSource {
    fetchArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            return ["MOCK: Test Article"];
        });
    }
}
let NewsAggregator = class NewsAggregator {
    constructor(source) {
        this.source = source;
    }
    getLatestArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield this.source.fetchArticles();
            console.log("Latest Articles:");
            articles.forEach(article => console.log(" -", article));
        });
    }
};
NewsAggregator = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)(() => RSSFeedSource)),
    __metadata("design:paramtypes", [Object])
], NewsAggregator);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n--- Using RSSFeedSource (default) ---");
        const aggregator1 = typedi_1.Container.get(NewsAggregator);
        yield aggregator1.getLatestArticles();
        console.log("\n--- Swapping to APISource ---");
        typedi_1.Container.set(RSSFeedSource, new APISource());
        const aggregator2 = typedi_1.Container.get(NewsAggregator);
        yield aggregator2.getLatestArticles();
        console.log("\n--- Testing with MockSource ---");
        typedi_1.Container.set(RSSFeedSource, new MockSource());
        const aggregator3 = typedi_1.Container.get(NewsAggregator);
        yield aggregator3.getLatestArticles();
    });
}
main();
