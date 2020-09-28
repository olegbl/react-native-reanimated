(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{176:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return r?a.a.createElement(m,l(l({ref:t},u),{},{components:r})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(2),a=r(6),o=(r(0),r(176)),i={id:"useDerivedValue",title:"useDerivedValue",sidebar_label:"useDerivedValue"},l={id:"api/useDerivedValue",title:"useDerivedValue",description:"This hook allows for creating shared value reference that can change in response to updating of one or more other shared values.",source:"@site/docs/api/useDerivedValue.md",permalink:"/react-native-reanimated/docs/next/api/useDerivedValue",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/docs/api/useDerivedValue.md",version:"next",sidebar_label:"useDerivedValue",sidebar:"docs",previous:{title:"useAnimatedStyle",permalink:"/react-native-reanimated/docs/next/api/useAnimatedStyle"},next:{title:"useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/next/api/useAnimatedScrollHandler"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:s};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This hook allows for creating shared value reference that can change in response to updating of one or more other shared values."),Object(o.b)("p",null,"The hook returns the same type of a shared value reference instance as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"useSharedValue"}),Object(o.b)("inlineCode",{parentName:"a"},"useSharedValue"))," hook."),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"updaterworklet-worklet"},Object(o.b)("inlineCode",{parentName:"h4"},"updaterWorklet")," ","[worklet]"),Object(o.b)("p",null,"The first and only argument is a worklet that gets triggered whenever at least one of the shared values used in that worklet changes.\nIt is expected that the worklet return a new JS value (number, string, bool, Object, Array) that will be assigned to the shared value reference the hook returns.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"updaterWorklet")," will be triggered immediately upon use of this hook in order to calculate the initial payload for the returned shared value."),Object(o.b)("h3",{id:"returns"},"Returns"),Object(o.b)("p",null,"The hook returns a reference to a shared value initialized with the provided data.\nThe reference is an object with ",Object(o.b)("inlineCode",{parentName:"p"},".value")," property, that can be accessed and modified from worklets, but also updated directly from the main JS thread."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"In the below example we define a shared value named ",Object(o.b)("inlineCode",{parentName:"p"},"progress")," that can go from 0 to 1.\nThen defined a derived shared value ",Object(o.b)("inlineCode",{parentName:"p"},"width")," that will respond to progress changes.\nWe calculate ",Object(o.b)("inlineCode",{parentName:"p"},"width"),"'s value in the ",Object(o.b)("inlineCode",{parentName:"p"},"useDerivedValue")," worklet as a product of ",Object(o.b)("inlineCode",{parentName:"p"},"progress"),"'s value times 250.\nAs a result ",Object(o.b)("inlineCode",{parentName:"p"},"width"),"'s value will always stay in sync with changes made to ",Object(o.b)("inlineCode",{parentName:"p"},"progress")," shared value and will be equal to the ",Object(o.b)("inlineCode",{parentName:"p"},"progress"),"s value times 250."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{6}","{6}":!0}),"import { Button } from 'react-native';\nimport { useSharedValue, useDerivedValue } from 'react-native-reanimated';\n\nfunction App() {\n  const progress = useSharedValue(0);\n  const width = useDerivedValue(() => {\n    return progress.value * 250;\n  });\n\n  return (\n    <View>\n      <SomeComponent width={width} />\n      <Button onPress={() => (progress.value = Math.random())} />\n    </View>\n  );\n}\n")))}c.isMDXComponent=!0}}]);