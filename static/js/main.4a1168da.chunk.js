(this["webpackJsonponr-tech-test"]=this["webpackJsonponr-tech-test"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"gaugeData":[{"name":"Quality Score","score":72,"vsly":null,"sample":133},{"name":"Basics","score":71,"vsly":null,"sample":133},{"name":"Interaction","score":68,"vsly":null,"sample":133},{"name":"Expertise","score":70,"vsly":null,"sample":133},{"name":"Process","score":75,"vsly":null,"sample":133},{"name":"Knowledge","score":76,"vsly":null,"sample":133}],"areaData":{"Quality Score":[{"date":"Apr","sample":21,"score":75,"vsly":0},{"date":"May","sample":110,"score":71,"vsly":0},{"date":"Jun","sample":2,"score":62,"vsly":0},{"date":"Jul","sample":0,"score":0,"vsly":0}],"Basics":[{"date":"Apr","sample":29,"score":78,"vsly":0},{"date":"May","sample":66,"score":62,"vsly":0},{"date":"Jun","sample":2,"score":42,"vsly":0},{"date":"Jul","sample":51,"score":63,"vsly":0}],"Interaction":[{"date":"Apr","sample":54,"score":92,"vsly":0},{"date":"May","sample":110,"score":43,"vsly":0},{"date":"Jun","sample":2,"score":34,"vsly":0},{"date":"Jul","sample":0,"score":0,"vsly":0}],"Expertise":[{"date":"Apr","sample":29,"score":88,"vsly":0},{"date":"May","sample":55,"score":61,"vsly":0},{"date":"Jun","sample":26,"score":35,"vsly":0},{"date":"Jul","sample":121,"score":46,"vsly":0}],"Process":[{"date":"Apr","sample":31,"score":85,"vsly":0},{"date":"May","sample":66,"score":77,"vsly":0},{"date":"Jun","sample":23,"score":57,"vsly":0},{"date":"Jul","sample":0,"score":0,"vsly":0}],"Knowledge":[{"date":"Apr","sample":31,"score":74,"vsly":0},{"date":"May","sample":100,"score":76,"vsly":0},{"date":"Jun","sample":45,"score":33,"vsly":0},{"date":"Jul","sample":110,"score":89,"vsly":0}]}}')},,,,function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),s=t.n(r),c=(t(14),t(1)),o=t(2),u=t(4),i=t(3),m=t(5),p=(t(15),t(6)),d=t.n(p),f=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).charts=function(){return l.setState(),console.log(l.props),{}},l.state={labels:[m.gaugeData.vsly],currentChart:"",options:{chart:{type:"radialBar",height:350}}},l}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("ul",{className:"cardsSection"},n.a.createElement("div",{class:"card"},m.gaugeData.map((function(a){return n.a.createElement("li",{onClick:e.charts},n.a.createElement("div",{id:"chart"},n.a.createElement(d.a,{options:e.state.options,series:[a.score],type:"radialBar"})))})))))}}]),t}(l.Component),v=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("nav",null,n.a.createElement("ul",{className:"navFlexContainer"},n.a.createElement("li",null,"Diagnostic Tool"),n.a.createElement("li",null,"Logged in as General user"),n.a.createElement("li",null,n.a.createElement("button",null,n.a.createElement("i",{class:"fas fa-sliders-h"}))),n.a.createElement("li",null,n.a.createElement("button",null,n.a.createElement("i",{class:"fas fa-download"}))),n.a.createElement("li",null,n.a.createElement("button",null,n.a.createElement("i",{class:"fas fa-print"}))),n.a.createElement("li",null,n.a.createElement("button",null,n.a.createElement("i",{class:"far fa-question-circle"}))),n.a.createElement("li",null,n.a.createElement("button",null,n.a.createElement("i",{class:"fas fa-sign-out-alt"}))))))}}]),t}(l.Component),E=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("aside",{className:"asideFlexContainer"},n.a.createElement("button",null,n.a.createElement("i",{class:"fas fa-thumbtack"})),n.a.createElement("button",null,n.a.createElement("i",{class:"fas fa-thumbtack"})),n.a.createElement("button",null,n.a.createElement("i",{class:"fas fa-chart-bar"})),n.a.createElement("button",null,n.a.createElement("i",{class:"fas fa-mail-bulk"})),n.a.createElement("button",null,n.a.createElement("i",{class:"fas fa-shapes"})),n.a.createElement("button",null,n.a.createElement("i",{class:"fas fa-mail-bulk"}))))}}]),t}(l.Component),h=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement("h3",null,"Filters"),n.a.createElement("div",{className:"box"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"square"}),"All CQA Results ",n.a.createElement("i",{class:"fas fa-info-circle"})),n.a.createElement("li",null,n.a.createElement("div",{className:"square"}),"CQAs with Closed Loop ",n.a.createElement("i",{class:"fas fa-info-circle"})))))}}]),t}(l.Component),y=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).state={series:[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}],options:{chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Product Trends by Month",align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}},l}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"chart"},n.a.createElement(d.a,{options:this.state.options,series:this.state.series,type:"line",height:350}))}}]),t}(l.Component),b=(t(20),t(21),t(22),t(23),t(24),t(25),t(26),t(27),function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).Cards=function(e){return n.a.createElement(f,{onChange:function(a){return e.handleInputValue(a.target.value)}})},e.Charts=function(e){return n.a.createElement("div",null,n.a.createElement("div",null,e.inputValue))},e.handleInputValue=function(a){return e.setState({inputValue:a})},e.state={inputValue:"Initial Value",gaugeData:[],areaData:{},name:"",score:72,vsly:null,sample:133},e}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement(E,null),n.a.createElement("div",null,n.a.createElement("h1",{className:"wrapper"},"Performance Management"),n.a.createElement("div",{className:"greySquare"},n.a.createElement("h2",{className:"wrapper"},n.a.createElement("i",{className:"fas fa-globe"})," Diagnostic Tool ",n.a.createElement("i",{className:"fas fa-thumbtack"}))),n.a.createElement("div",{className:"leftSection"},n.a.createElement(h,null),console.log(m),n.a.createElement(f,{handleInputValue:this.handleInputValue})),n.a.createElement("div",{className:"rightSection"},n.a.createElement(y,{inputValue:this.state.inputValue}))))}}]),t}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4a1168da.chunk.js.map