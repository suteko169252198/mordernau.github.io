import{r as S,W as h,C as u,T as w,S as C}from"./index.3f493100.js";const k=g=>{const y=h.gameplay.pixiStage.effectsContainer,l=h.gameplay.pixiStage.currentApp,e=new u;y.addChild(e);const n=w.from("./game/tex/cherryBlossoms.png");e.x=l.screen.width/2,e.y=l.screen.height/2,e.pivot.x=e.width/2,e.pivot.y=e.height/2,e.scale.x=1,e.scale.y=1;const i=[];function p(c){const o=new C(n);let r=.25;o.scale.x=.15*r,o.scale.y=.15*r,o.anchor.set(.5),o.x=Math.random()*2560-.5*2560,o.y=0-.5*1440,o.dropSpeed=Math.random()*5,o.acc=Math.random(),e.addChild(o),i.push(o);let s=0;for(const t of i){s++;const a=Math.random();t.dropSpeed=t.acc*.01+t.dropSpeed,t.y+=c*g*t.dropSpeed*.3+.7,s%2===0?(t.x+=c*a*.5,t.rotation+=c*a*.03):(t.x-=c*a*.5,t.rotation-=c*a*.03)}i.length>=200&&(i.unshift(),e.removeChild(e.children[0]))}return h.gameplay.pixiStage.registerAnimation({setStartState:()=>{},setEndState:()=>{},tickerFunc:p},"cherryBlossoms-Ticker"),{container:e,tickerKey:"cherryBlossoms-Ticker"}};S("cherryBlossoms",()=>k(3));const M=(g,f)=>{var d;const l=h.gameplay.pixiStage.effectsContainer,e=h.gameplay.pixiStage.currentApp,n=new u;l.addChild(n);const i=w.from("./game/tex/raindrop.png");n.x=e.screen.width/2,n.y=e.screen.height/2,n.pivot.x=n.width/2,n.pivot.y=n.height/2,n.scale.x=1,n.scale.y=1;const p=[];function c(x){for(let s=0;s<f;s++){const t=new C(i);let a=Math.random();a<=.5&&(a=.5),t.scale.x=.48*a,t.scale.y=.48*a,t.anchor.set(.5),t.x=Math.random()*2560-.5*2560,t.y=0-.5*1440,t.dropSpeed=Math.random()*2,t.acc=Math.random(),t.alpha=Math.random(),t.alpha>=.5&&(t.alpha=.5),t.alpha<=.2&&(t.alpha=.2),n.addChild(t),p.push(t)}for(const s of p)s.dropSpeed=s.acc*.01+s.dropSpeed,s.y+=x*g*s.dropSpeed*1.1+3;p.length>=2500&&(p.unshift(),n.removeChild(n.children[0]))}return(d=h.gameplay.pixiStage)==null||d.registerAnimation({setStartState:()=>{},setEndState:()=>{},tickerFunc:c},"rain-Ticker"),{container:n,tickerKey:"rain-Ticker"}};S("rain",()=>M(6,10));const W=g=>{var c;const y=h.gameplay.pixiStage.effectsContainer,l=h.gameplay.pixiStage.currentApp,e=new u;y.addChild(e);const n=w.from("./game/tex/snowFlake_min.png");e.x=l.screen.width/2,e.y=l.screen.height/2,e.pivot.x=e.width/2,e.pivot.y=e.height/2,e.scale.x=1,e.scale.y=1;const i=[];function p(d){const r=new C(n);let s=Math.random();s<=.5&&(s=.5),r.scale.x=.144*s,r.scale.y=.144*s,r.anchor.set(.5),r.x=Math.random()*2560-.5*2560,r.y=0-.5*1440,r.dropSpeed=Math.random()*2,r.acc=Math.random(),e.addChild(r),i.push(r);let t=0;for(const a of i){t++;const m=Math.random();a.dropSpeed=a.acc*.01+a.dropSpeed,a.y+=d*g*a.dropSpeed*.3+.7,t%2===0?(a.x+=d*m*.5,a.rotation+=d*m*.03):(a.x-=d*m*.5,a.rotation-=d*m*.03)}i.length>=500&&(i.unshift(),e.removeChild(e.children[0]))}return(c=h.gameplay.pixiStage)==null||c.registerAnimation({setStartState:()=>{},setEndState:()=>{},tickerFunc:p},"snow-Ticker"),{container:e,tickerKey:"snow-Ticker"}};S("snow",()=>W(3));
