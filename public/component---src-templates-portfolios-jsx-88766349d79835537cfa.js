(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{171:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(198),r=(n(27),n(26),n(46),n(94),n(95),n(5)),p=n.n(r),l=n(179),c=n.n(l),s=n(177),d=n(233),f=n(176),u=n(175),g=n(200),m=Object(u.c)(g.a).withConfig({displayName:"styled__Wrapper",componentId:"sc-1bvde4l-0"})(["padding:100px 0 0;@media (max-width:414px){padding:70px 0 0;}"]);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,o=!1,i=void 0;try{for(var r,p=e[Symbol.iterator]();!(a=(r=p.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(l){o=!0,i=l}finally{try{a||null==p.return||p.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e){var t=e.data.portfolios.edges;return o.a.createElement(m,null,o.a.createElement(c.a,null,o.a.createElement("title",null,"".concat(f.PREFIX,"PORTFOLIOS")),o.a.createElement("meta",{name:"og:title",content:"".concat(f.PREFIX,"PORTFOLIOS")})),t.map(function(e){var t=e.node.frontmatter,a=t.path,i=t.title,r=t.images,p=h(void 0===r?[]:r,1)[0],l=void 0===p?null:p;return null!==l?o.a.createElement(d.a,{key:a},o.a.createElement(s.a,{to:a},l.includes("//")?o.a.createElement("img",{src:l,alt:"portfolio"}):o.a.createElement("img",{src:n(180)("./".concat(l)),alt:"portfolio"}),o.a.createElement("h6",null,i))):o.a.createElement(d.a,{key:a},o.a.createElement(s.a,{to:a},o.a.createElement("h4",null,i)))}))};b.propTypes={data:p.a.shape({}).isRequired};var v=b;n.d(t,"pageQuery",function(){return y});t.default=function(e){return o.a.createElement(i.a,e,o.a.createElement(v,e))};var y="4078445193"},180:function(e,t,n){var a={"./images/1.jpg":181,"./images/2.jpg":182,"./images/3.jpeg":183,"./me.png":205,"./resume/index.md":184,"./test-1/1.png":185,"./test-1/2.png":186,"./test-1/index.md":187,"./test-2/3.png":188,"./test-2/4.png":189,"./test-2/index.md":190,"./test-3/5.png":191,"./test-3/6.png":192,"./test-3/index.md":193,"./test-4/7.png":194,"./test-4/8.png":195,"./test-4/9.png":196,"./test-4/index.md":197};function o(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=180},181:function(e,t,n){e.exports=n.p+"static/1-583e15000fd7d0be2cfb825e8f50cc4b.jpg"},182:function(e,t,n){e.exports=n.p+"static/2-2a7e015bedc8f30d7b558bcb7b76cfee.jpg"},183:function(e,t,n){e.exports=n.p+"static/3-a47b04bb1da1f30737fb234240dc33d0.jpeg"},184:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "resume"\n| title: "Resume"')},185:function(e,t,n){e.exports=n.p+"static/1-f93e323ea105ecf6f8a88aa508673701.png"},186:function(e,t,n){e.exports=n.p+"static/2-34077c2ae4a023e25230a44ae5ecaa03.png"},187:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},188:function(e,t,n){e.exports=n.p+"static/3-58f617929f2cc2492b5df81349aaeece.png"},189:function(e,t,n){e.exports=n.p+"static/4-c39321e0dbc27a0dac4d3f078e664366.png"},190:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},191:function(e,t,n){e.exports=n.p+"static/5-e4dd0ca2ab98e87eacad87e391414b51.png"},192:function(e,t,n){e.exports=n.p+"static/6-c5df77eb6272acd552decfe348295a47.png"},193:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},194:function(e,t,n){e.exports=n.p+"static/7-1398f7ad17588bd657ad459ee5f370a1.png"},195:function(e,t,n){e.exports=n.p+"static/8-6fe54be1b5f54eea5f440ea0eb766f31.png"},196:function(e,t,n){e.exports=n.p+"static/9-5a1d19df0ab27dc072518b6065c1088f.png"},197:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},200:function(e,t,n){"use strict";var a=n(175).c.div.withConfig({displayName:"SimpleWrapper",componentId:"sc-1ui6x1z-0"})(["position:relative;&:before,&:after{display:block;content:'';clear:both;}"]);t.a=a},233:function(e,t,n){"use strict";var a=n(175).c.section.withConfig({displayName:"PortfolioCard",componentId:"sc-1r9m3vj-0"})(["display:inline-block;position:relative;float:left;padding:28.125% 0 0;width:50%;height:0;background-color:#eee;overflow:hidden;@media (max-width:414px){padding:56.25% 0 0;width:100%;}&:nth-child(4n + 2),&:nth-child(4n + 3){background-color:#fff;}&:hover{img{width:110%;}h4{font-size:2.2vw;}}a{display:block;position:absolute;top:0;left:0;width:100%;height:100%;color:#000;}img{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:100%;height:auto;transition:all .4s ease 0s;}h6{position:absolute;bottom:16px;left:16px;font-size:14px;text-decoration:underline;}h4{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:80%;height:2em;line-height:2em;font-size:2vw;text-align:center;transition:all .4s ease 0s;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"]);t.a=a}}]);
//# sourceMappingURL=component---src-templates-portfolios-jsx-88766349d79835537cfa.js.map