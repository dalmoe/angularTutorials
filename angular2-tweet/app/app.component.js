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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tweets_service_1 = require("./tweets.service");
var AppComponent = (function () {
    function AppComponent(TweetsService) {
        this.tweets = TweetsService.getTweets();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<tweets\n                    *ngFor=\"let tweet of tweets\"\n                    [name]=\"tweet.name\"\n                    [user]=\"tweet.user\"\n                    [text]=\"tweet.text\"\n                    [likeNum]=\"tweet.likeNum\">\n             </tweets>\n\n            "
    }),
    __metadata("design:paramtypes", [tweets_service_1.TweetsService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map