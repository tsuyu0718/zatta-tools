(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{434:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return d}));var n=r(435),l=r(1),o=Object(l.g)("v-card__actions"),c=Object(l.g)("v-card__subtitle"),h=Object(l.g)("v-card__text"),d=Object(l.g)("v-card__title");n.a},435:function(t,e,r){"use strict";r(8),r(6),r(10),r(14),r(9),r(15);var n=r(2),l=(r(23),r(182),r(438),r(184)),o=r(437),c=r(81),h=r(7);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(h.a)(o.a,c.a,l.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},l.a.options.computed.classes.call(this))},styles:function(){var style=v({},l.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},437:function(t,e,r){"use strict";r(23);var n=r(0),l=(r(8),r(6),r(10),r(14),r(9),r(15),r(2)),o=(r(114),r(440),r(183)),c=r(116),h=r(31),d=r(115),v=r(185),f=r(33),m=r(1),_=r(7);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var w=Object(_.a)(h.a,Object(d.b)(["absolute","fixed","top","bottom"]),v.a,f.a).extend({name:"v-progress-linear",directives:{intersect:c.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(l.a)(t,this.isReversed?"right":"left",Object(m.f)(this.normalizedValue,"%")),Object(l.a)(t,"width",Object(m.f)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.c:o.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(m.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(m.n)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(l.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},onObserve:function(t,e,r){this.isVisible=r},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(w,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},438:function(t,e,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("e23b7040",content,!0,{sourceMap:!1})},439:function(t,e,r){var n=r(18)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},440:function(t,e,r){var content=r(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("cf87dc84",content,!0,{sourceMap:!1})},441:function(t,e,r){var n=r(18)(!1);n.push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=n},535:function(t,e,r){"use strict";r.r(e);var n=r(0),l=n.a.extend({components:{},computed:{tea:function(){return'<section><h2>採用攻略法</h2>\n<ul>\n<li>基本ぬけまる氏攻略動画を参考、セパレ/サイコロ1211/時間停止位置固定/断絶ハムカツ</li>\n<li>構成：戦ナ白賢リ竜機黒</li>\n</ul>\n<h2>引用元一覧</h2>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=AMdtMyvbPNs" title="【 FF14 /濃厚解説】絶アレキ討滅戦 リキッドセパレ式 サイコロ44と1211 【ぬけまる】Re">【 FF14 /濃厚解説】絶アレキ討滅戦 リキッドセパレ式 サイコロ44と1211 【ぬけまる】Re</a></li>\n<li><a href="https://www.youtube.com/watch?v=yuLjtpm2ti8" title="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】">【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】</a></li>\n<li><a href="https://risinghisa.com/theepicofalexanderultimate/">絶アレキサンダー討滅戦 固定用攻略記事 | 雷神久ブログ</a></li>\n<li><a href="https://www.youtube.com/watch?v=3wtfeXognIY" title="【 FF14 /濃厚解説】絶アレキ討滅戦 プライムフェーズ ハムカツさん方式 各視点有 【ぬけまる】">【 FF14 /濃厚解説】絶アレキ討滅戦 プライムフェーズ ハムカツさん方式 各視点有 【ぬけまる】</a></li>\n<li><a href="https://www.youtube.com/watch?v=G6SHwCH8XBE" title="FF14 みんとのギミック解説 絶アレキサンダー討滅戦 完結編">FF14 みんとのギミック解説 絶アレキサンダー討滅戦 完結編</a></li>\n</ul>\n<h2>水フェーズ</h2>\n<ul>\n<li>01:44あたり、竜巻3回目<br>\n<a href="/zatta-tools/tea/tea_1.png"><img src="/zatta-tools/tea/tea_1.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 リキッドセパレ式 サイコロ44と1211 【ぬけまる】Re" title="【 FF14 /濃厚解説】絶アレキ討滅戦 リキッドセパレ式 サイコロ44と1211 【ぬけまる】Re"></a>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=AMdtMyvbPNs" title="【 FF14 /濃厚解説】絶アレキ討滅戦 リキッドセパレ式 サイコロ44と1211 【ぬけまる】Re">【 FF14 /濃厚解説】絶アレキ討滅戦 リキッドセパレ式 サイコロ44と1211 【ぬけまる】Re</a></li>\n<li>誘導する足元AoEと予兆可視扇範囲が出るタイミングはズレているが、通常移動であれば足元出現時点で扇位置も確定してるとみなして移動可能</li>\n<li>最後のスプラッシュ前あたり～時間切れカスケードまでMTがAAや強攻撃を受けている。以下のような軽減が入った回では余裕で生存<br>\nスリル、原初の直感、インタベ、レンジ軽減、リプ、アドル</li>\n</ul>\n</li>\n</ul>\n<h2>サイコロ</h2>\n<ul>\n<li><a href="https://risinghisa.com/wp-content/uploads/2019/11/DsCUMtM5o8yBVQ3xHZZO1574779032-1574780672.gif">1211式、いい感じの俯瞰gif画像</a><br>\n<a href="https://risinghisa.com/theepicofalexanderultimate/">絶アレキサンダー討滅戦 固定用攻略記事 | 雷神久ブログ</a>\n<ul>\n<li>サイコロは極ダイヤと同じく、偶数が赤：奇数が青</li>\n<li>感覚的に、人に追いつくというより常に爆発を基準に動く。だいたい床のライトがある辺りを走る</li>\n<li>6は突進待ち中に左手(外周を向いたとき)に爆発が追いついてくるので、右手の爆発が終わったら右手へ避けて待機しておく</li>\n<li>8は走り抜けた他の人を巻き込まないよう、外周を向いたとき大きく左手方向へ避ける</li>\n</ul>\n</li>\n</ul>\n<h2>2体フェーズ</h2>\n<ul>\n<li>参考先動画の軽減メモ<br>\nジャスティスキック：ダークミッショナリー、陣、パッセ、バリア0.5-1割<br>\n竜巻：ダークミッショナリー、陣、リプ、バリア0.5-1割</li>\n<li>水圧縮・雷圧縮付与エフェクトが消えたあたり：チャクラムもやもやを確認後、外周へ回避(8方位どこ出現でも床模様目安可能)</li>\n<li>基本散開中かつチャクラムは8方位(対角出現は確定)ランダムなので、自分の散開方向にチャクラムが出た場合、時計回り方向へ寄る(<strong>参考動画準拠ではない点</strong>)<br>\n<a href="/zatta-tools/tea/tea_2.png"><img src="/zatta-tools/tea/tea_2.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=yuLjtpm2ti8">【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】</a></li>\n</ul>\n</li>\n<li>ナイサイH1視点の行動概要\n<ol>\n<li>チャクラムのポップを確認(雷・水デバフエフェクトが消えたくらいに動く)</li>\n<li>チャクラムを避ける(ギュッと避けてギュッと寄る)</li>\n<li>フォトンの詠唱に合わせてヒールする</li>\n<li>水デバフ対象なら10秒・5～0秒までカウントしながらマーカー上へ移動\n<ul>\n<li>着弾次第定位置へ移動(さっさと移動しないと水竜巻判定でブッ飛ばされる)</li>\n</ul>\n</li>\n<li>水デバフ対象ではないなら、タンクの雷処理に巻き込まれたり近接にぶつからないようにする</li>\n<li>カウント終わりあたり～タンクが痛いのでヒールや軽減を入れ続ける\n<ul>\n<li>円の重なりにいたりしないようカウントはDPSに合わせて位置調整する</li>\n</ul>\n</li>\n<li>MTの雷へ入るのと同時にDPS水頭割りが発生する。ゆっくりヒールしつつデバフ確認しつつヒラ待機場所へ</li>\n<li>シールドが出たら攻撃しつつデバフのペアをコールしつつデバフを交換する</li>\n<li>雷頭割りにヒラ以外を巻き込まないようにしつつ、同時発生する水頭割りをヒールしつつH1の位置へ</li>\n<li>DPSのデバフ対象を見てコールする</li>\n<li>チェイサー→氷→プレイヤーの位置が正しくなるように位置取りしてナイサイ自体は終わり</li>\n<li>外周に寄って竜巻ヒールしながらタンクフォトンをケアする</li>\n<li>スーパージャンプ→アポカリでしばらくジャスティスが離れるので、まずジャスティス優先で削る</li>\n<li>D3のスーパージャンプ誘導→扇範囲が終わったらすぐ竜巻なので、軽減やヒールのために救出してもいいかも</li>\n<li>竜巻のヒールをしつついい感じに削る</li>\n</ol>\n</li>\n<li>MTチーム:ジャス、STチーム:チェイサー、以下各ロール動き</li>\n</ul>\n<p><a href="/zatta-tools/tea/tea_3.png"><img src="/zatta-tools/tea/tea_3.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_4.png"><img src="/zatta-tools/tea/tea_4.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_15.png"><img src="/zatta-tools/tea/tea_15.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_7.png"><img src="/zatta-tools/tea/tea_7.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_8.png"><img src="/zatta-tools/tea/tea_8.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_9.png"><img src="/zatta-tools/tea/tea_9.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_10.png"><img src="/zatta-tools/tea/tea_10.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_11.png"><img src="/zatta-tools/tea/tea_11.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_12.png"><img src="/zatta-tools/tea/tea_12.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_13.png"><img src="/zatta-tools/tea/tea_13.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_14.png"><img src="/zatta-tools/tea/tea_14.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a></p>\n<ul>\n<li>ヒラ視点で言うと「自分の頭上ナイサイとDPSの仮判決!!を合わせる」or「自分の仮判決!!とDPSの頭上ナイサイを合わせる」</li>\n<li>VCありなら「赤のナイサイもらいに行く」とかコールするとよさそう</li>\n<li>シールドに白のミゼリを打ち込むと5-6割を安定して削れる。ミゼリ1+ファイジャ1とかで壊せるかもしれない<br>\n<a href="/zatta-tools/tea/tea_16.png"><img src="/zatta-tools/tea/tea_16.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_17.png"><img src="/zatta-tools/tea/tea_17.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a><br>\n<a href="/zatta-tools/tea/tea_18.png"><img src="/zatta-tools/tea/tea_18.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=yuLjtpm2ti8">【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】</a></li>\n</ul>\n</li>\n<li>水頭割りは着弾時に3人このあたりにいればOK(発動直後なのでエフェクトが広がりかけている)</li>\n<li>着弾後、1、2秒すると水柱(ノックバック+多分即死)が生成されるため、頭割り参加者は全員すぐ移動する<br>\n<a href="/zatta-tools/tea/tea_5.png"><img src="/zatta-tools/tea/tea_5.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=yuLjtpm2ti8">【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】</a></li>\n</ul>\n</li>\n<li>アイスミサイルは発動時この距離感にいればOK<br>\n<a href="/zatta-tools/tea/tea_6.png"><img src="/zatta-tools/tea/tea_6.png" alt="【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】"></a>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=yuLjtpm2ti8">【 FF14 /濃厚解説】絶アレキ討滅戦 2体フェーズ 5ジョブ視点有 【ぬけまる】</a></li>\n</ul>\n</li>\n</ul>\n<h2>プライム</h2>\n<h3>時間停止(加重罰以外位置固定)</h3>\n<ul>\n<li>デバフ付与はセリフウィンドウが消えた瞬間\n<ul>\n<li>無印: Dの北にTH、Dの南にDPS</li>\n<li>接近強制: Bの北にTH、Bの南にDPS</li>\n<li>加重: ジャスティス側(東or西)の外周</li>\n<li>接近禁止: THが西の外周、DPSが東の外周。<strong>チェイサー側は外周ではなく、2・4マーカー上にいる</strong></li>\n</ul>\n</li>\n<li>MT以外北Aへ集合しMTは南へ向けたままヘイトを取る</li>\n<li>MTは3発強攻撃を受けるために無敵タイミングを把握する</li>\n</ul>\n<h3>時空潜航</h3>\n<ul>\n<li>緑玉と結晶が終わったらアレキ前あたりへなんとなく寄ってヒールする</li>\n<li>真心側・アレキ側はしっかり外周へ寄って、中央側はきっちり中央で火炎放射を誘導</li>\n<li>真心(ランダム進行)を12時として、タンク・DPS集団罰は9時側、その他は3時、DPS集団罰にバリア軽減は渡しておく</li>\n<li>中央でチェイサー誘導はしっかりチェイサーに寄る、他は絶対寄らない</li>\n</ul>\n<h3>時空断絶</h3>\n<ul>\n<li>偶数東側、奇数西側</li>\n<li>12: 北側(懺悔3)、アポカリ誘導担当なのでどっちにしても変に動かない、位置についたらすぐアムレン、終わったらアポカリ気を付けつつ東西で待ち、懺悔3回目が発生したら踏む</li>\n<li>34: 南側、ジャンプ誘導担当なので赤丸真ん中ぐらいに立って、ジャンプ確認したらアムレンしながら1歩下がる(アポカリ回避のため)</li>\n<li>56: 東西(懺悔1)、懺悔1回目外周を踏みつつ待って懺悔が終わったらアムレンしながら北側で位置につく</li>\n<li>78: 東西(懺悔2)、懺悔2回目を踏みつつ待って、懺悔が終わったらアムレンしながら南側で位置につく</li>\n<li>チャクラムを変に誘導しすぎないようチャクラム飛び先確定くらいまで待つ</li>\n<li>アポカリの判定はスパジャンくらいで確定しているっぽいので各処理は外周寄りに居続ける</li>\n<li>56・78はチャクラム待ち中に東西端赤丸から床模様小さい丸2つ目くらいで待つと割と安全</li>\n<li>5・7は懺悔の位置とかによってアルファソードが変な方向になるor突進への折り返しで轢かれるので、適当に南北向きにアルファソードを出させてから内側or外側へ大きく逃げてもよい</li>\n</ul>\n<h3>断絶～メガホーリー</h3>\n<ul>\n<li>断絶処理中、適当にできる分は範囲ヒール、後半番号担当へは単体ヒールを飛ばす</li>\n<li>頭割りで中央へ寄る(白: インゲンラプチャー、アサイズ)、カウントは北タンク、南ヒラ、DPSはカウント対象にならなければ入らない</li>\n<li>頭割り着弾と同時にヒールすると集合している+ボスpop前なので効率が良い</li>\n</ul>\n<h3>3体</h3>\n<ul>\n<li>白: 最初の全体と同時でアサイラム設置+メディカラ、ジャスティスのバフ3あたりでテンパランス<br>\nできることが少ないのでヒールは強めで</li>\n<li>審判のカウントダウン1のセリフが消えると同時から、ジャンプ×3-&gt;詠唱範囲ヒールをすると全体攻撃着弾後にカウンターヒール可</li>\n</ul>\n<h3>パレキ</h3>\n<ul>\n<li>全体的にヒール・事前軽減バリアをもらう、配るように意識しておく</li>\n<li>デバフは下矢印が付いているものは子</li>\n</ul>\n<h3>パレキ・α</h3>\n<ul>\n<li>詠唱完了までに適当に散開しておく、全体を適当に眺めて静止/行動を判断</li>\n<li>幻体を追いかけて罰の種類を判断、名誉なら北側・それ以外なら南側で最寄りの安置2択のうち1つで待つ</li>\n<li>自分の居場所がビームで潰れたら反対側の安置で確定判決2種を処理、名誉とその他は対角に居る</li>\n</ul>\n<h3>パレキ・β</h3>\n<ul>\n<li>詠唱完了までに適当に散開しておく、幻体を追いかけて(距離がありすぎると線が見えない)線の種類とデバフを判断</li>\n<li>幻体が線デバフ処理中に外周で歩かないで立っているのが親</li>\n<li>接近強制と接近禁止の判定は緩くはないので、親・子デバフ処理後の猶予を利用して近寄る/離れて線処理する</li>\n<li>スパジャン誘導後、頭割り・散開が発生するまで少し猶予があるのでヒール軽減バリアを配る・貰うよう移動する</li>\n</ul>\n<h3>パレキ・審判</h3>\n<ul>\n<li>パレキの左足元4マスで処理</li>\n<li>1発目着弾を見る。2発目が1発目の十字方向で隣接しているマスは安置にならない</li>\n<li>安置になる方のマスで3発目が着弾したところから1マス目着弾地点へ駆け込む</li>\n<li>キレイに目安になる真心模様が無いので、予兆エフェクトをきちんと見る</li>\n</ul>\n<h3>おわり</h3>\n<ul>\n<li>倒す</li>\n</ul>\n<h2>ほか</h2>\n<ul>\n<li>© SQUARE ENIX CO., LTD. All Rights Reserved.</li>\n</ul>\n</section>\n'}}}),o=r(86),c=r(113),h=r.n(c),d=r(435),v=r(434),f=r(528),m=r(529),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n          絶アレキ固定覚書\n        ")]),t._v(" "),r("v-card-text",{staticClass:"pb-4 tea"},[r("div",{domProps:{innerHTML:t._s(t.tea)}})])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VCol:f.a,VRow:m.a})}}]);