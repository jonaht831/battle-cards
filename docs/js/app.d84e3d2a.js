(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)o=i[p],r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/battle-cards/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("27fb"),r=a.n(n);r.a},"228d":function(e,t,a){},"27fb":function(e,t,a){},"568f":function(e,t,a){"use strict";var n=a("9634"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o=(a("034f"),a("2877")),i={},c=Object(o["a"])(i,r,s,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=a("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Battle")]),n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("h1",[e._v("Cards")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.startGame(t)}}},[n("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Start Game")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newGame.gameConfig.playerName,expression:"newGame.gameConfig.playerName"}],attrs:{type:"text",placeholder:"Enter Player Name"},domProps:{value:e.newGame.gameConfig.playerName},on:{input:function(t){t.target.composing||e.$set(e.newGame.gameConfig,"playerName",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newGame.gameConfig.set,expression:"newGame.gameConfig.set"}],attrs:{type:"number",placeholder:"Select Deck 1-4",max:"4",min:"1"},domProps:{value:e.newGame.gameConfig.set},on:{input:function(t){t.target.composing||e.$set(e.newGame.gameConfig,"set",t.target.value)}}})])])},d=[],m={name:"home",data(){return{newGame:{gameConfig:{playerName:"",set:""}}}},methods:{startGame(){this.$store.dispatch("startGame",this.newGame)}}},f=m,v=Object(o["a"])(f,p,d,!1,null,null,null);v.options.__file="Home.vue";var g=v.exports;a("7d36");n["a"].use(u["a"]);var h=new u["a"]({routes:[{path:"/",name:"home",component:g},{path:"/game/:gameId",name:"game",component:function(){return Promise.resolve().then(a.bind(null,"7d36"))}}]}),_=a("2f62"),C=a("bc3a"),y=a.n(C);let b=y.a.create({baseURL:"//battlecardz.herokuapp.com/api"});n["a"].use(_["a"]);var w=new _["a"].Store({state:{game:{},activeCards:{playerCardId:"",opponentCardId:""}},mutations:{setGame(e,t){e.game=t},setPlayerCard(e,t){e.activeCards.playerCardId=t},setOpponentCard(e,t){e.activeCards.opponentCardId=t}},actions:{startGame({commit:e},t){b.post("/games",t).then(t=>{console.log(t),e("setGame",t.data.game),h.push({name:"game",params:{gameId:t.data.game.id}})})},getGame({commit:e},t){b.get("/games/"+t).then(t=>e("setGame",t.data.data))},playGame({commit:e},t){b.get("/games/"+t).then(t=>e("setGame",t.data.game))},setPlayerCard({commit:e},t){console.log(t),e("setPlayerCard",t)},setOpponentCard({commit:e},t){console.log(t),e("setOpponentCard",t)},attack({commit:e,dispatch:t},a){b.put("games/"+a.gameId,a.data).then(e=>{t("getGame",a.gameId)})}}});n["a"].config.productionTip=!1,new n["a"]({router:h,store:w,render:function(e){return e(l)}}).$mount("#app")},"57f8":function(e,t,a){},"7d36":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.game.over?a("div",[e._v("\n  "+e._s(e.game.winner)+"\n")]):a("div",{staticClass:"game"},[a("div",{staticClass:"row"},[a("opponent",{staticClass:"col-12"})],1),a("div",{staticClass:"row justify-content-center d-flex flex-column"},[a("h4",[e._v("Select two cards to battle")]),e.activeCards.playerCardId&&e.activeCards.opponentCardId?a("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:e.attack}},[e._v("Attack")]):e._e(),a("player",{staticClass:"col-12"})],1)])},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"player container-fluid"},[a("div",{staticClass:"row justify-content-center"},[a("h2",[e._v(e._s(e.player.name))])]),a("div",{staticClass:"row justify-content-center"},e._l(e.player.hand,function(t){return a("div",{staticClass:"col-2"},[a("div",{staticClass:"card",on:{click:function(a){e.setPlayerCard(t.id)}}},[a("img",{attrs:{src:t.img,height:"100px"}}),a("p",[e._v(e._s(t.name))]),a("p",[e._v("Attack: "+e._s(t.attack))]),a("p",[e._v("Defense: "+e._s(t.defense))]),a("p",[e._v("Health: "+e._s(t.health))])])])}))])},o=[],i={name:"player",data(){return{}},computed:{player(){return this.$store.state.game.player||[]}},methods:{setPlayerCard(e){return this.$store.dispatch("setPlayerCard",e)}}},c=i,l=(a("dddc"),a("2877")),u=Object(l["a"])(c,s,o,!1,null,"4010b863",null);u.options.__file="player.vue";var p=u.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"opponent container-fluid"},[a("div",{staticClass:"row justify-content-center"},e._l(e.opponent.hand,function(t){return a("div",{staticClass:"col-2"},[a("div",{staticClass:"card",on:{click:function(a){e.setOpponentCard(t.id)}}},[a("img",{attrs:{src:t.img,height:"100px"}}),a("p",[e._v(e._s(t.name))]),a("p",[e._v("Attack: "+e._s(t.attack))]),a("p",[e._v("Defense: "+e._s(t.defense))]),a("p",[e._v("Health: "+e._s(t.health))])])])})),a("div",{staticClass:"row justify-content-center"},[a("h2",[e._v(e._s(e.opponent.name))])])])},m=[],f={name:"opponent",data(){return{}},computed:{opponent(){return this.$store.state.game.opponent||[]}},methods:{setOpponentCard(e){return this.$store.dispatch("setOpponentCard",e)}}},v=f,g=(a("d35b"),Object(l["a"])(v,d,m,!1,null,"1e97d425",null));g.options.__file="opponent.vue";var h=g.exports,_={name:"game",mounted(){this.$store.dispatch("getGame",this.$route.params.gameId)},data(){return{cardId:""}},computed:{activeCards(){return this.$store.state.activeCards},game(){return this.$store.state.game}},components:{player:p,opponent:h},methods:{attack(){this.$store.dispatch("attack",{gameId:this.$route.params.gameId,data:this.activeCards})}}},C=_,y=(a("568f"),Object(l["a"])(C,n,r,!1,null,null,null));y.options.__file="Game.vue";t["default"]=y.exports},9634:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d35b:function(e,t,a){"use strict";var n=a("228d"),r=a.n(n);r.a},dddc:function(e,t,a){"use strict";var n=a("57f8"),r=a.n(n);r.a}});
//# sourceMappingURL=app.d84e3d2a.js.map