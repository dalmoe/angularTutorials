"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TweetsService = (function () {
    function TweetsService() {
    }
    TweetsService.prototype.getTweets = function () {
        return [
            { 'name': 'John Doe', 'user': '@johndoe', 'text': 'This is a tweet', 'likeNum': 2 },
            { 'name': 'Jane Doe', 'user': '@janedoe', 'text': 'This is another tweet', 'likeNum': 5 },
            { 'name': 'Kanye West', 'user': '@kanye', 'text': 'Im the glitch!', 'likeNum': 200 },
        ];
    };
    return TweetsService;
}());
TweetsService = __decorate([
    core_1.Injectable()
], TweetsService);
exports.TweetsService = TweetsService;
//# sourceMappingURL=tweets.service.js.map