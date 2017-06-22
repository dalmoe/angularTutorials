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
var VoteComponent = (function () {
    function VoteComponent() {
        this.voteNum = 10;
        this.isUp = false;
        this.isDown = false;
    }
    VoteComponent.prototype.onUpClick = function () {
        if (!this.isUp) {
            this.voteNum++;
            if (!this.isDown) {
                this.isUp = true;
            }
            else {
                this.isDown = false;
            }
        }
    };
    VoteComponent.prototype.onDownClick = function () {
        if (!this.isDown) {
            this.voteNum--;
            if (!this.isUp) {
                this.isDown = true;
            }
            else {
                this.isUp = false;
            }
        }
    };
    return VoteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "isUp", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "isDown", void 0);
VoteComponent = __decorate([
    core_1.Component({
        selector: 'vote',
        template: "\n              <div class=\"voteDiv\">\n                <i\n                  class=\"glyphicon glyphicon-menu-up\"\n                  [style.color]=\"isUp ? 'gold' : '#ccc'\"\n                  (click)=\"onUpClick()\"\n                ></i>\n                <p> {{ voteNum }}</p>\n                <i\n                  class=\"glyphicon glyphicon-menu-down\"\n                  [style.color]=\"isDown ? 'gold' : '#ccc'\"\n                  (click)=\"onDownClick()\"\n                ></i>\n              </div>\n            ",
        styles: ["\n            p{\n              margin-top: 10px;\n            }\n\n            .glyphicon{\n              cursor: pointer;\n            }\n          "]
    })
], VoteComponent);
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map