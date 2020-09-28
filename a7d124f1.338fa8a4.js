(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(176)),i={id:"event",title:"Event handling with reanimated nodes",sidebar_label:"Event handling"},s={id:"version-1.x.x/event",title:"Event handling with reanimated nodes",description:"react-native-reanimated's new syntax is possible to be used with Animated.event. Instead of providing only a mapping from event fields to animated nodes, it is allowed to write a function that takes reanimated values map as an input and return a block (or any other reanimated function) that will be then used to handle the event.",source:"@site/versioned_docs/version-1.x.x/event.md",permalink:"/react-native-reanimated/docs/event",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/event.md",version:"1.x.x",sidebar_label:"Event handling",sidebar:"version-1.x.x/docs",previous:{title:"set",permalink:"/react-native-reanimated/docs/nodes/set"},next:{title:"View, Props, etc",permalink:"/react-native-reanimated/docs/view"}},c=[],d={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"react-native-reanimated"),"'s new syntax is possible to be used with ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.event"),". Instead of providing only a mapping from event fields to animated nodes, it is allowed to write a function that takes reanimated values map as an input and return a block (or any other reanimated function) that will be then used to handle the event."),Object(o.b)("p",null,"This syntax allows for providing some post-processing for the event data that does not fit well as a dependency of other nodes we connect to ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.View")," component props. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-reanimated/blob/master/Example/reanimated1/PanRotateAndZoom/index.js#L25"}),"See example")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { event, set } from 'react-native-reanimated'\n\nthis.onGestureEvent = event([\n  {\n    nativeEvent: {\n      translationX: x => set(this._x, x),\n    },\n  },\n]);\n")),Object(o.b)("p",null,"If you'd like to use more than one event attribute in your reanimated code, this is also supported. Instead of defining event handler methods for a single attribute you can define at the level of ",Object(o.b)("inlineCode",{parentName:"p"},"nativeEvent"),". Here is an example that takes both translation attributes and state attribute from ",Object(o.b)("inlineCode",{parentName:"p"},"PanGestureHandler")," event:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<PanGestureHandler\n  onGestureEvent={event([\n    {\n      nativeEvent: ({ translationX: x, translationY: y, state }) =>\n        block([\n          set(this._transX, add(x, offsetX)),\n          set(this._transY, add(y, offsetY)),\n          cond(eq(state, State.END), [\n            set(this.offsetX, add(this.offsetX, x)),\n            set(this.offsetY, add(this.offsetY, y)),\n          ]),\n        ]),\n    },\n  ])}>\n  <Animated.View\n    style={{\n      transform: [{ translateX: this._transX, translateY: this._transY }],\n    }}\n  />\n</PanGestureHandler>\n")))}l.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(f,s(s({ref:t},d),{},{components:n})):r.a.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);