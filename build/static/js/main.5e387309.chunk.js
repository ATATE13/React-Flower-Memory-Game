(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Forget-me-not",image:"./images/sunflower.jpeg",count:0},{id:2,name:"Daisy",image:"./images/daisy.jpg",count:0},{id:3,name:"Gladiolus",image:"./images/gladiolus.jpeg",count:0},{id:4,name:"Freesia",image:"./images/freesia.jpeg",count:0},{id:5,name:"Lily",image:"./images/lily2.jpg",count:0},{id:6,name:"Tulip",image:"./images/tulip.jpeg",count:0},{id:7,name:"Iris",image:"./images/iris.jpg",count:0},{id:8,name:"Mum",image:"./images/cherrybloosom.jpeg",count:0},{id:9,name:"Violets",image:"./images/forget-me-not2.jpg",count:0},{id:10,name:"Rose",image:"./images/rose.jpeg",count:0},{id:11,name:"Daffodil",image:"./images/daffodil.jpeg",count:0},{id:12,name:"Dahila",image:"./images/dahila.jpeg",count:0}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),o=a.n(c),r=a(4),s=a(5),m=a(7),u=a(6),g=a(8),l=(a(15),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),d=(a(16),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),f=(a(17),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"scores"},"Score: ",e.score," | Highscore: ",e.highscore))}),h=a(1),p=(a(18),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={cards:h,score:0,highscore:0},a.gameOver=function(){return a.state.score>a.state.highscore&&a.setState({highscore:a.state.score},function(){console.log(this.state.highscore)}),a.state.cards.forEach(function(e){e.count=0}),alert("Game Over :( \nscore: ".concat(a.state.score)),a.setState({score:0}),!0},a.clickCount=function(e){a.state.cards.find(function(t,n){if(t.id===e){if(0===h[n].count)return h[n].count=h[n].count+1,a.setState({score:a.state.score+1},function(){console.log(this.state.score)}),a.state.cards.sort(function(){return Math.random()-.5}),!0;a.gameOver()}})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(f,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.cards.map(function(t){return i.a.createElement(l,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})}))}}]),t}(n.Component));a(19);o.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.5e387309.chunk.js.map