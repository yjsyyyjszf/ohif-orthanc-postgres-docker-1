(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1095:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1054),a=n.n(i),s=n(16),c=n(58),u=n(195),p=n.n(u),f=n(57);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=s.a.redux.actions,y=v.setViewportActive,I=v.setViewportSpecificData,w=s.a.measurements.MeasurementHandlers,m=w.onAdded,b=w.onRemoved,h=w.onModified,S={added:m,removed:b,modified:p()((function(e){return h(e)}),300)},g=Object(c.b)((function(e,t){var n;e.extensions&&e.extensions.cornerstone&&(n=e.extensions.cornerstone);var r=t.viewportIndex,o=r===e.viewports.activeViewportIndex,i=e.viewports.viewportSpecificData[r]||{},a=!1,s=24;if(i&&i.cine){var c=i.cine;a=!0===c.isPlaying,s=c.cineFrameRate||s}return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isActive:o},n,{isStackPrefetchEnabled:o,isPlaying:a,frameRate:s})}),(function(e,t){var n=t.viewportIndex;return{setViewportActive:function(){e(y(n))},setViewportSpecificData:function(t){e(I(n,t))},onElementEnabled:function(t){var r=t.detail.element;Object(f.b)(n,r),e(I(n,{plugin:"cornerstone"}))},onMeasurementsChanged:function(e,t){return S[t](e)}}}))(a.a),O=n(1),D=n.n(O),P=n(9),j=n.n(P);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=s.a.utils.StackManager,R=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=this,n=!(o=(e=C(t)).call.apply(e,[this].concat(a)))||"object"!==x(o)&&"function"!=typeof o?V(r):o,_(V(n),"state",{viewportData:null}),_(V(n),"getViewportData",function(){var e,n=(e=regeneratorRuntime.mark((function e(n,r,o,i,a){var s,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.getCornerstoneStack(n,r,o,i,a),s={StudyInstanceUID:r,displaySetInstanceUID:o,stack:c},e.abrupt("return",s);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){k(i,r,o,a,s,"next",e)}function s(e){k(i,r,o,a,s,"throw",e)}a(void 0)}))});return function(e,t,r,o,i){return n.apply(this,arguments)}}()),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),n=t,i=[{key:"init",value:function(){console.log("OHIFCornerstoneViewport init()")}},{key:"destroy",value:function(){console.log("OHIFCornerstoneViewport destroy()"),M.clearStacks()}},{key:"getCornerstoneStack",value:function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(!e||!e.length)throw new Error("Studies not provided.");if(!t)throw new Error("StudyInstanceUID not provided.");if(!n)throw new Error("StudyInstanceUID not provided.");var i=e.find((function(e){return e.StudyInstanceUID===t}));if(!i)throw new Error("Study not found.");var a=i.displaySets.find((function(e){return e.displaySetInstanceUID===n}));if(!a)throw new Error("Display Set not found.");var s=M.findOrCreateStack(i,a),c=Object.assign({},s);if(c.currentImageIdIndex=o,r){var u=c.imageIds.findIndex((function(e){return j.a.metaData.get("SOPInstanceUID",e)===r}));u>-1?c.currentImageIdIndex=u:console.warn("SOPInstanceUID provided was not found in specified DisplaySet")}return c}}],(r=[{key:"setStateFromProps",value:function(){var e=this,t=this.props.viewportData,n=t.studies,r=t.displaySet,o=r.StudyInstanceUID,i=r.displaySetInstanceUID,a=r.sopClassUIDs,s=r.SOPInstanceUID,c=r.frameIndex;o&&i&&(a&&a.length>1&&console.warn("More than one SOPClassUID in the same series is not yet supported."),this.getViewportData(n,o,i,s,c).then((function(t){e.setState({viewportData:t})})))}},{key:"componentDidMount",value:function(){this.setStateFromProps()}},{key:"componentDidUpdate",value:function(e){var t=this.props.viewportData.displaySet,n=e.viewportData.displaySet;t.displaySetInstanceUID===n.displaySetInstanceUID&&t.SOPInstanceUID===n.SOPInstanceUID&&t.frameIndex===n.frameIndex||this.setStateFromProps()}},{key:"render",value:function(){var e=this,t=null;if(!this.state.viewportData)return null;var n=this.props.viewportIndex,r=this.state.viewportData.stack,i=r.imageIds,a=r.currentImageIdIndex;return this.props.children&&this.props.children.length&&(t=this.props.children.map((function(t,n){return t&&o.a.cloneElement(t,{viewportIndex:e.props.viewportIndex,key:n})}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(g,U({viewportIndex:n,imageIds:i,imageIdIndex:a,onNewImage:function(t){var r=t.currentImageIdIndex,o=t.sopInstanceUid,i=e.props.viewportData.displaySet.StudyInstanceUID;r>0&&e.props.onNewImage({StudyInstanceUID:i,SOPInstanceUID:o,frameIndex:r,activeViewportIndex:n})},onNewImageDebounceTime:700},this.props.customProps)),t)}}])&&E(n.prototype,r),i&&E(n,i),t}(r.Component);_(R,"defaultProps",{customProps:{}}),_(R,"propTypes",{studies:D.a.object,displaySet:D.a.object,viewportIndex:D.a.number,children:D.a.node,customProps:D.a.object}),_(R,"id","OHIFCornerstoneViewport");t.default=R}}]);
//# sourceMappingURL=17.bundle.f1a0986c5b29d0a8dcd0.js.map