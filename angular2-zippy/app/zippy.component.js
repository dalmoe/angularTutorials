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
var ZippyComponent = (function () {
    function ZippyComponent() {
        this.isActive = false;
    }
    ZippyComponent.prototype.toggleActive = function () {
        this.isActive = !this.isActive;
    };
    return ZippyComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ZippyComponent.prototype, "title", void 0);
ZippyComponent = __decorate([
    core_1.Component({
        selector: 'zippy',
        template: "\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" (click)=\"toggleActive()\">\n                  <h3 class=\"panel-title\">{{ title }}\n                    <span [class]=\"isActive ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down'\"></span>\n                  </h3>\n                </div>\n                <div class=\"panel-body\" *ngIf=\"isActive\">\n                  <ng-content></ng-content>\n                </div>\n              </div>\n            ",
        styles: ["\n            .panel{\n              width: 500px;\n              margin-bottom: 0px;\n            }\n\n            .glyphicon{\n              float: right;\n            }\n          "]
    })
], ZippyComponent);
exports.ZippyComponent = ZippyComponent;
//# sourceMappingURL=zippy.component.js.map