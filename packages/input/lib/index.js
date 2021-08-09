"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledContainer = _styledComponents["default"].div.withConfig({
  displayName: "src__StyledContainer",
  componentId: "sc-1h9q7y1-0"
})(["width:100%;"]);

var StyledLabel = _styledComponents["default"].label.withConfig({
  displayName: "src__StyledLabel",
  componentId: "sc-1h9q7y1-1"
})(["color:#868686;font-family:\"Fira Sans\";font-size:0.8rem;text-transform:uppercase;"]);

var StyledInput = _styledComponents["default"].input.withConfig({
  displayName: "src__StyledInput",
  componentId: "sc-1h9q7y1-2"
})(["background-color:transparent;border-radius:4px;border:1px solid #ccc;box-shadow:none;box-sizing:border-box;caret-color:#000;color:#000;display:block;font-size:14px;height:40px;line-height:26px;padding:10px;width:100%;::placeholder{color:#999;}", ""], function (props) {
  return props.disabled && (0, _styledComponents.css)(["color:#999999;background-color:#fafafa;cursor:not-allowed;"]);
});

var Input = function Input(_ref) {
  var disabled = _ref.disabled,
      id = _ref.id,
      label = _ref.label,
      placeholder = _ref.placeholder;
  return /*#__PURE__*/_react["default"].createElement(StyledContainer, null, /*#__PURE__*/_react["default"].createElement(StyledLabel, {
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement(StyledInput, {
    disabled: disabled,
    id: id,
    placeholder: placeholder,
    type: "text"
  }));
};

Input.propTypes = {
  disabled: _propTypes["default"].bool,
  id: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string
};
Input.defaultProps = {
  disabled: false
};
var _default = Input;
exports["default"] = _default;