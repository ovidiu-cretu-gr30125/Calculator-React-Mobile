(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var E_WebStorm_2020_2_calculator_mobile_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),E_WebStorm_2020_2_calculator_mobile_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),E_WebStorm_2020_2_calculator_mobile_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),E_WebStorm_2020_2_calculator_mobile_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_KeyPad__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_Result__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),App=function(_Component){Object(E_WebStorm_2020_2_calculator_mobile_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_Component);var _super=Object(E_WebStorm_2020_2_calculator_mobile_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.a)(App);function App(){var _this;return Object(E_WebStorm_2020_2_calculator_mobile_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this),_this.onClick=function(e){"="===e?1===_this.state.result.length?_this.setState({result:"0"}):_this.calculate():"CE"===e?_this.reset():"C"===e?_this.backspace():"0"!==e&&"+"!==e&&"-"!==e&&"/"!==e&&"*"!==e||!_this.state.result.includes("0")||1!==_this.state.result.length?_this.state.result.match("0")&&1===_this.state.result.length?_this.setState({result:e}):(_this.state.result.match("0")&&_this.state.result.length,_this.setState({result:_this.state.result+e})):_this.setState({result:"0"})},_this.calculate=function(){var checkResult;checkResult=_this.state.result.includes("--")?_this.state.result.replace("--","+"):_this.state.result;try{_this.setState({result:(eval(checkResult)||"")+""})}catch(e){_this.setState({result:"Hatz ai gresit!"})}},_this.reset=function(){_this.setState({result:"0"})},_this.backspace=function(){1===_this.state.result.length?_this.setState({result:"0"}):_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:"0"},_this}return Object(E_WebStorm_2020_2_calculator_mobile_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",{id:"h1"},"Ovidiu's Calculator"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_KeyPad__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("footer",null," ",react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small",null,"\xa9 Copyright 2020, Cretu Ovidiu-Daniel")," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"img2"})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(3),l=_(4),c=_(0),o=_.n(c),s=function(e){Object(l.a)(_,e);var t=Object(r.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(a.a)(_,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"button"},o.a.createElement("button",{name:"(",onClick:function(t){return e.props.onClick(t.target.name)}},"("),o.a.createElement("button",{name:"CE",onClick:function(t){return e.props.onClick(t.target.name)}},"CE"),o.a.createElement("button",{name:")",onClick:function(t){return e.props.onClick(t.target.name)}},")"),o.a.createElement("button",{name:"C",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),o.a.createElement("br",null),o.a.createElement("button",{name:"1",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),o.a.createElement("button",{name:"2",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),o.a.createElement("button",{name:"3",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),o.a.createElement("button",{name:"+",onClick:function(t){return e.props.onClick(t.target.name)}},"+"),o.a.createElement("br",null),o.a.createElement("button",{name:"4",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),o.a.createElement("button",{name:"5",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),o.a.createElement("button",{name:"6",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),o.a.createElement("button",{name:"-",onClick:function(t){return e.props.onClick(t.target.name)}},"-"),o.a.createElement("br",null),o.a.createElement("button",{name:"7",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),o.a.createElement("button",{name:"8",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),o.a.createElement("button",{name:"9",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),o.a.createElement("button",{name:"*",onClick:function(t){return e.props.onClick(t.target.name)}},"*"),o.a.createElement("br",null),o.a.createElement("button",{name:".",onClick:function(t){return e.props.onClick(t.target.name)}},"."),o.a.createElement("button",{name:"0",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),o.a.createElement("button",{name:"=",onClick:function(t){return e.props.onClick(t.target.name)}},"="),o.a.createElement("button",{name:"/",onClick:function(t){return e.props.onClick(t.target.name)}},"/"),o.a.createElement("br",null))}}]),_}(c.Component);t.a=s},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(3),l=_(4),c=_(0),o=_.n(c),s=function(e){Object(l.a)(_,e);var t=Object(r.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(a.a)(_,[{key:"render",value:function(){var e=this.props.result;return o.a.createElement("div",{className:"result"},o.a.createElement("p",null,e))}}]),_}(c.Component);t.a=s},function(e,t,_){e.exports=_(17)},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),r=_(6),l=_.n(r),c=(_(15),_(7));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.e354a8ea.chunk.js.map