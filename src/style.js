'use strict';
(d=>(self.root=d.querySelector('script[src$="src/style.js"]').outerHTML.match(/"(.*)src\/style\.js"/)[1]||'./',(w=>d.readyState=='loading'?addEventListener('DOMContentLoaded',w,{once:true}):w())(w=>(w=d.documentElement).addEventListener('touchstart',_=>_,{passive:true},w.setAttribute('lang',navigator.language.slice(0,2))),[['afterbegin',`<style>
	header{position:-webkit-sticky;position:sticky;top:8px;z-index:10;pointer-events:none;}
	header>.navb{font-size:large;margin:0;pointer-events:auto;}
	header>.navb::before{content:"";display:inline-block;height:4ex;width:4ex;margin-right:var(--bor);border-radius:50%;vertical-align:middle;background:0 0/100% url(${root}img/icon.svg);}
	header>.nav{position:absolute;width:max(32ex,33%);max-height:calc(calc(100vh - 100%) - 16px);overflow:auto;transform:translateX(-5%);transition:.2s;opacity:0;visibility:hidden;pointer-events:none;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(12ex,100%),1fr));gap:var(--bor);}
	header>.nav>*{text-align:center;margin:0;}
	header>.navb:hover+*,header>.navb:focus+*,.nav:hover,.nav:focus-within{transform:none;opacity:1;visibility:visible;pointer-events:auto;}
</style><header><button class="zab bgca navb">McbeEringi</button><nav class="zab nav">`+`
,Top;sky/,Sky Stuff;apps/,Apps;ta/,TA.js;petit/,PetitJS;mc/,Minecraft;
translate.google.com/translate?sl=ja&tl=en&u=${encodeURIComponent(location)},Translate;misskey.io/@mcbeeringi,misskey.io;github.com/mcbeeringi,GitHub;qiita.com/mcbeeringi,Qiita;youtube.com/@mcbeeringi,YouTube;twitter.com/mcbeeringi,Twitter;
</nav></header>`.replace(/(.*?),(.*?);/g,(_,x,y,p)=>`<a class="zab bgca" href="${p<60?root:'https://'}${x}">${y}</a>`)],['beforeend',`<hr><footer>2018~ @McbeEringi.｡:+*<br>MIT License</footer>`]].map(x=>d.body.insertAdjacentHTML(...x)))))(document);