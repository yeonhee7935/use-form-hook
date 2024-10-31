"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useForm = function (defaultValue) {
    var _a = (0, react_1.useState)(defaultValue), input = _a[0], setInput = _a[1];
    var handleInputChange = function (e) {
        var key = e.target.name;
        var value = e.target.value;
        setInput(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[key] = value, _a)));
        });
    };
    return { input: input, handleInputChange: handleInputChange };
};
exports.default = useForm;
