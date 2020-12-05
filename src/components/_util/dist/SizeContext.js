"use strict";
exports.__esModule = true;
exports.SizeContextProvider = void 0;
// 定义了 size的函数并渲染子元素
var React = require("react");
// React.createContext 的返回值 当前的context值由上层组件中距离最近的 <SizeContext.Provider> 的value prop决定
var SizeContext = React.createContext(undefined);
exports.SizeContextProvider = function (_a) {
    var children = _a.children, size = _a.size;
    return (React.createElement(SizeContext.Consumer, null, function (originSize) { return (React.createElement(SizeContext.Provider, { value: size || originSize }, children)); }));
}; // React.FC 为 typescript使用的泛型, Context.Consumer 基于 context 值进行渲染 ，
// 需要一个函数originSize作为 子元素 ，接收当前context 值，返回一个react 节点
exports["default"] = SizeContext;
