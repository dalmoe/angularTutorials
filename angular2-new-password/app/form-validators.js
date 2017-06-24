"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormValidators = (function () {
    function FormValidators() {
    }
    FormValidators.passwordsMatch = function (group) {
        var newPassword = group.controls['newPassword'].value;
        var confirmPassword = group.controls['confirmPassword'].value;
        //If either of these fields is empty, the validation
        //will be bypassed. We expect the required validator to be
        // applied first.
        if (newPassword == '' || confirmPassword == '')
            return null;
        if (newPassword != confirmPassword) {
            console.log('test');
            return { passwordsMatch: true };
        }
        return null;
    };
    return FormValidators;
}());
exports.FormValidators = FormValidators;
//# sourceMappingURL=form-validators.js.map