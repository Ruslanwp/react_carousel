(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(6),c=n.n(r),o=n(1),s=n(2),l=n(4),p=n(3),m=(n(12),n(13),function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={position:0},t.nextClickHandler=function(){var e=t.props,n=e.itemWidth,a=e.images,i=e.step,r=n*a.length,c=i*n;t.setState((function(t){return!(r-c<t.position)&&{position:t.position+i*n}}))},t.prevClickHandler=function(){t.setState((function(e){var n=t.props,a=n.step,i=n.itemWidth;return!(e.position<=0)&&{position:e.position-a*i}}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.itemWidth,a=t.frameSize,r=this.state.position;return i.a.createElement("div",{className:"carousel",style:{maxWidth:"".concat(n*a,"px")}},i.a.createElement("ul",{className:"carousel__list",style:{width:"".concat(n*e.length,"px"),marginLeft:"".concat(-r,"px")}},e.map((function(t,e){return i.a.createElement("li",{key:t,className:"carousel__item"},i.a.createElement("img",{src:t,width:"".concat(n,"px"),alt:e+1}))}))),i.a.createElement("button",{type:"button",onClick:this.prevClickHandler},"Prev"),i.a.createElement("button",{type:"button",onClick:this.nextClickHandler},"Next"))}}]),n}(i.a.Component)),u=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.images;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Carousel with ",t.length," images"),i.a.createElement(m,{images:t,step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1}))}}]),n}(i.a.Component);c.a.render(i.a.createElement(u,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.93af2b0d.chunk.js.map