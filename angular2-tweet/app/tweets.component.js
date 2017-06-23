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
var TweetsComponent = (function () {
    function TweetsComponent() {
        this.name = "Test";
        this.user = "@test";
        this.text = "Test Test Test";
        this.likeNum = "0";
    }
    return TweetsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TweetsComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TweetsComponent.prototype, "user", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TweetsComponent.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TweetsComponent.prototype, "likeNum", void 0);
TweetsComponent = __decorate([
    core_1.Component({
        selector: 'tweets',
        template: "\n              <div class=\"media\">\n                <div class = \"media-left\">\n                  <a href=\"http://lorempixel.com/100/100/people?{{likeNum}}\">\n                    <img class =\"media-object\" src=\"http://lorempixel.com/100/100/people?{{likeNum}}\" alt=\"Photo\">\n                  </a>\n                </div>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading\">{{ name }} <span id=\"user\" style=\"color: #ccc\">{{ user }}</span></h4>\n                  <p>{{ text }}</p>\n                  <like [likeNum]=\"this.likeNum\"></like>\n                </div>\n              </div>\n            ",
    })
], TweetsComponent);
exports.TweetsComponent = TweetsComponent;
//# sourceMappingURL=tweets.component.js.map