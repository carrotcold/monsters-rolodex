(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),s=n.n(o),c=(n(12),n(3)),l=n(4),i=n(5),u=n(6),m=(n(13),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set1&size=200x200")}),a.a.createElement("h3",null,e.monster.name),a.a.createElement("p",null,e.monster.email))}),h=(n(14),function(e){return a.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return a.a.createElement(m,{key:e.id,monster:e})})))}),d=(n(15),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(16),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monset Rolodex"),a.a.createElement(d,{placeholder:"Search Monster !",handleChange:function(t){return e.setState({searchField:t.target.value})}}),a.a.createElement(h,{monsters:o}))}}]),n}(r.Component));s.a.render(a.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.5f20d9ea.chunk.js.map