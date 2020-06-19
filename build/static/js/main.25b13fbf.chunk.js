(this["webpackJsonpclone-discord"]=this["webpackJsonpclone-discord"]||[]).push([[0],{14:function(n,e,t){n.exports=t.p+"static/media/Logo.207ba277.svg"},16:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(10),i=t.n(o),c=t(1),l=t(2);function u(){var n=Object(c.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    *, button, input {\n        border: 0;\n        outline: 0;\n\n        font-family: 'Roboto', sans-serif;\n    }\n\n    :root {\n        --primary: #36393f;\n        --secondary: #2f3136;\n        --tertiary: rgb(32,34,37);\n        --quaternary: #292b2f;\n        --quinary: #393d42;\n        --senary: #828386;\n       \n        --white: #fff;\n        --gray: #8a8c90;\n        --chat-input: rgb(64,68,75);\n        --symbol: #74777a;\n     \n        --notification: #f84a4b;\n        --discord: #6e86d6;\n        --mention-detail: #f9a839;\n        --mention-message: #413f3f;\n     \n        --link: #5d80d6;\n     \n        --rocketseat: #6633cc;\n      }\n\n"]);return u=function(){return n},n}var s=Object(l.a)(u());function p(){var n=Object(c.a)(["\n    display: grid;\n\n    grid-template-columns: 71px 240px auto 240px;\n    grid-template-rows: 46px auto 52px;\n    \n    grid-template-areas: \n        'SL SN CI CI'\n        'SL CL CD UL'\n        'SL UI CD UL';\n\n    height: 100vh;\n  \n"]);return p=function(){return n},n}var d=l.b.div(p()),m=t(14),f=t.n(m);function b(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n\n    margin-bottom: 8px;\n\n    background-color: ",";\n\n    position: relative;\n    cursor: pointer;\n\n    > img {\n        width: 24px;\n        height: 24px;\n    }\n\n    &::before {\n        width: 9px;\n        height: 9px;\n\n        position: absolute;\n        left: -17px;\n        top: calc(50% - 4.5px);\n\n        background-color: var(--white);\n        border-radius: 50%;\n\n        content: '';\n        display: ",";\n    }\n\n    &::after {\n        background-color: var(--notification);\n        width: auto;\n        height: 16px;\n\n        padding: 0 4px;\n\n        position: absolute;\n        bottom: -4px;\n        right: -4px;\n\n        border-radius: 12px;\n        border: 4px solid var(--quaternary);\n\n        text-align: right;\n        font-size: 13px;\n        font-weight: bold;\n        color: var(--white);\n\n        content: '","';\n        display: ",";\n    }\n\n    transition: border-radius .2s, background-color .2s;\n\n    &.active, \n    &:hover {\n        border-radius: 16px;\n        background-color: ",";\n    }\n"]);return b=function(){return n},n}var v=l.b.button(b(),(function(n){return n.isHome?"var(--rocketseat)":"var(--primary)"}),(function(n){return n.hasNotifications?"inline":"none"}),(function(n){return n.mentions&&n.mentions}),(function(n){return n.mentions&&n.mentions>0?"inline":"none"}),(function(n){return n.isHome?"var(--rocketseat)":"var(--discord)"})),h=function(n){var e=n.selected,t=n.isHome,r=n.hasNotifications,o=n.mentions;return a.a.createElement(v,{isHome:t,hasNotifications:r,mentions:o,className:e?"active":""},t&&a.a.createElement("img",{src:f.a,alt:"Rocketseat"}))};function x(){var n=Object(c.a)(["\n    width: 32px;\n    border-bottom: 2px solid var(--quaternary);\n\n    margin-bottom: 8px;\n\n"]);return x=function(){return n},n}function g(){var n=Object(c.a)(["\n    grid-area: SL;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    background-color: var(--tertiary);\n    padding: 11px 0;\n\n    max-height: 100vh;\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar {\n        display: none;\n    }\n"]);return g=function(){return n},n}var E=l.b.div(g()),y=l.b.div(x()),w=function(){return a.a.createElement(E,null,a.a.createElement(h,{isHome:!0}),a.a.createElement(y,null),a.a.createElement(h,null),a.a.createElement(h,{hasNotifications:!0}),a.a.createElement(h,{mentions:3}),a.a.createElement(h,null),a.a.createElement(h,null),a.a.createElement(h,{mentions:20}),a.a.createElement(h,{hasNotifications:!0}),a.a.createElement(h,null),a.a.createElement(h,null),a.a.createElement(h,{hasNotifications:!0}),a.a.createElement(h,null))},k=t(24);function j(){var n=Object(c.a)(["\n    width: 28px;\n    height: 28px;\n\n    color: var(--white);\n    cursor: pointer;\n"]);return j=function(){return n},n}function O(){var n=Object(c.a)(["\n    font-size: 16px;\n    font-weight: bold;\n\n    color: var(--white);\n"]);return O=function(){return n},n}function F(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    padding: 0 11px 0 16px;\n    background-color: var(--secondary);\n\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;\n    z-index: 2;\n"]);return F=function(){return n},n}var N=l.b.div(F()),z=l.b.h1(O()),S=Object(l.b)(k.a)(j()),C=function(){return a.a.createElement(N,null,a.a.createElement(z,null,"Servidor do Vinicius"),a.a.createElement(S,null))},L=t(25);function q(){var n=Object(c.a)(["\n    font-size: 15px;\n    color: var(--gray);\n"]);return q=function(){return n},n}function B(){var n=Object(c.a)(["\n    height: 24px;\n    width: 1px;\n\n    background-color: var(--white);\n    opacity: 0.2;\n\n    margin: 0 13px;\n"]);return B=function(){return n},n}function I(){var n=Object(c.a)(["\n    margin-left: 9px;\n\n    font-size: 16px;\n    font-weight: bold;\n\n    color: var(--white);\n"]);return I=function(){return n},n}function H(){var n=Object(c.a)(["\n    width: 24px;\n    height: 24px;\n\n    color: var(--symbol);\n"]);return H=function(){return n},n}function D(){var n=Object(c.a)(["\n    grid-area: CI;\n\n    display: flex;\n    align-items: center;\n\n    padding: 0 17px;\n    background-color: var(--primary);\n\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;\n    z-index: 2;\n"]);return D=function(){return n},n}var U=l.b.div(D()),V=Object(l.b)(L.a)(H()),J=l.b.h1(I()),R=l.b.div(B()),A=l.b.span(q()),M=function(){return a.a.createElement(U,null,a.a.createElement(V,null),a.a.createElement(J,null,"chat-livre"),a.a.createElement(R,null),a.a.createElement(A,null,"Canal aberto para conversas"))},T=t(26),P=t(27);function G(){var n=Object(c.a)(["\n    width: 16px;\n    height: 16px;\n\n    margin-left: 4px;\n\n    color: var(--symbol);\n    cursor: pointer;\n\n    transition: color 0.2s;\n\n    &:hover {\n        color: var(--white);\n    }\n"]);return G=function(){return n},n}function K(){var n=Object(c.a)(["\n    width: 16px;\n    height: 16px;\n\n    color: var(--symbol);\n    cursor: pointer;\n\n    transition: color 0.2s;\n\n    &:hover {\n        color: var(--white);\n    }\n"]);return K=function(){return n},n}function Q(){var n=Object(c.a)(["\n    width: 20px;\n    height: 20px;\n\n    color: var(--symbol);\n"]);return Q=function(){return n},n}function W(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    cursor: pointer;\n\n    padding: 5px 3px;\n    barder-radius: 5px;\n\n    background-color: transparent;\n\n    transition: background-color 0.2s;\n\n    > div {\n        display: flex;\n        align-items: center;\n    }\n\n    > div span {\n        margin-left: 5px;\n        color: var(--senary);\n    }\n\n    &:hover, \n    &.active {\n        background-color: var(--quinary);\n\n        > div span {\n            color: var(--white);\n        }\n    }\n\n    // Desafio: fazer os icones PersonAdd e Settings aparecer somente quando o usu\xe1rio passar o mouse por cima, caso contr\xe1rio esconder.\n"]);return W=function(){return n},n}var X=l.b.div(W()),Y=Object(l.b)(L.a)(Q()),Z=Object(l.b)(T.a)(K()),$=Object(l.b)(P.a)(G()),_=function(n){var e=n.channelName,t=n.selected;return a.a.createElement(X,{className:t?"active":""},a.a.createElement("div",null,a.a.createElement(Y,null),a.a.createElement("span",null,e)),a.a.createElement("div",null,a.a.createElement(Z,null),a.a.createElement($,null)))},nn=t(28);function en(){var n=Object(c.a)(["\n    width: 21px;\n    height: 21px;\n\n    color: var(--symbol);\n    \n    cursor: pointer;\n"]);return en=function(){return n},n}function tn(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    margin-bottom: 6px;\n\n    > span {\n        text-transform: uppercase;\n        font-size: 12px;\n        font-weight: 500;\n        color: var(--gray);\n    }\n"]);return tn=function(){return n},n}function rn(){var n=Object(c.a)(["\n    grid-area: CL;\n\n    display: flex;\n    flex-direction: column;\n\n    padding: 24px 9.5px 0 16px;\n    background-color: var(--secondary);\n"]);return rn=function(){return n},n}var an=l.b.div(rn()),on=l.b.div(tn()),cn=Object(l.b)(nn.a)(en()),ln=function(){return a.a.createElement(an,null,a.a.createElement(on,null,a.a.createElement("span",null,"Canais de Texto"),a.a.createElement(cn,null)),a.a.createElement(_,{channelName:"chat-livre"}),a.a.createElement(_,{channelName:"trabalho"}),a.a.createElement(_,{channelName:"lolzinho"}),a.a.createElement(_,{channelName:"csgo"}),a.a.createElement(_,{channelName:"valorant"}))};function un(){var n=Object(c.a)(["\n    flex-shrink: 0;\n\n    width: 32px;\n    height: 32px;\n\n    border-radius: 50%;\n    background-color: var(--primary);\n\n    &.bot {\n        background-color: var(--mention-detail);\n    }\n"]);return un=function(){return n},n}function sn(){var n=Object(c.a)(["\n    margin-top: 5px;\n    padding: 5px;\n\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n\n    border-radius: 4px;\n    background: transparent:\n\n    transition: background 0.2s;\n\n    &:hover {\n        background-color: rgba(255, 255, 255, 0.1);\n    }\n\n    > strong {\n        margin-left: 13px;\n        font-weight: 500;\n        color: var(--white);\n        opacity: 0.7;\n\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n    }\n\n    > span {\n        margin-left: 9px;\n\n        background-color: var(--discord);\n        color: var(--white);\n        border-radius: 4px;\n        padding: 4px 5px;\n\n        text-transform: uppercase;\n        font-weight: bold;\n        font-size: 11px;\n    }\n\n"]);return sn=function(){return n},n}function pn(){var n=Object(c.a)(["\n    margin-top: 20px;\n\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 500;\n    color: var(--gray);\n"]);return pn=function(){return n},n}function dn(){var n=Object(c.a)(["\n    grid-area: UL;\n\n    display: flex;\n    flex-direction: column;\n\n    padding: 3px 6px 0 16px;\n    background-color: var(--secondary);\n\n    max-height: calc(100vh - 46px);\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar {\n        width: 4px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background-color: var(--tertiary);\n        border-radius: 4px;\n    }\n\n    ::-webkit-scrollbar-track {\n        background-color: var(--secondary);\n    }\n"]);return dn=function(){return n},n}var mn=l.b.div(dn()),fn=l.b.span(pn()),bn=l.b.div(sn()),vn=l.b.div(un()),hn=function(n){var e=n.nickname,t=n.isBot;return a.a.createElement(bn,null,a.a.createElement(vn,{className:t?"bot":""}),a.a.createElement("strong",null,e),t&&a.a.createElement("span",null,"Bot"))},xn=function(){return a.a.createElement(mn,null,a.a.createElement(fn,null,"Dispon\xedvel - 1"),a.a.createElement(hn,{nickname:"Vinicius Samuel"}),a.a.createElement(fn,null,"Offline - 1"),a.a.createElement(hn,{nickname:"Jo\xe3o Fernandes da Silva",isBot:!0}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}),a.a.createElement(hn,{nickname:"Fulano"}))},gn=t(29),En=t(30);function yn(){var n=Object(c.a)(["\n    width: 20px;\n    height: 20px;\n\n    color: var(--white);\n    opacity: 0.7;\n    cursor: pointer;\n\n    transition: opacity 0.2s;\n\n    &:hover {\n        opacity: 1;\n    }\n"]);return yn=function(){return n},n}function wn(){var n=Object(c.a)(["\n    width: 20px;\n    height: 20px;\n\n    color: var(--white);\n    opacity: 0.7;\n    cursor: pointer;\n\n    transition: opacity 0.2s;\n\n    &:hover {\n        opacity: 1;\n    }\n"]);return wn=function(){return n},n}function kn(){var n=Object(c.a)(["\n    width: 20px;\n    height: 20px;\n\n    color: var(--white);\n    opacity: 0.7;\n    cursor: pointer;\n\n    transition: opacity 0.2s;\n\n    &:hover {\n        opacity: 1;\n    }\n"]);return kn=function(){return n},n}function jn(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n\n    > svg:not(:first-child) {\n        margin-left: 7px;\n    }\n"]);return jn=function(){return n},n}function On(){var n=Object(c.a)(["\n    margin-left: 8px;\n\n    display: flex;\n    flex-direction: column;\n\n    > strong {\n        color: var(--white);\n        font-size: 13px;\n        display: block;\n    }\n\n    > span {\n        color: var(--gray);\n        font-size: 13px;\n    }\n"]);return On=function(){return n},n}function Fn(){var n=Object(c.a)(["\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n\n    background-color: var(--gray);\n"]);return Fn=function(){return n},n}function Nn(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return Nn=function(){return n},n}function zn(){var n=Object(c.a)(["\n    grid-area: UI;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    padding: 10px;\n    background-color: var(--quaternary);\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;\n"]);return zn=function(){return n},n}var Sn=l.b.div(zn()),Cn=l.b.div(Nn()),Ln=l.b.div(Fn()),qn=l.b.div(On()),Bn=l.b.div(jn()),In=Object(l.b)(gn.a)(kn()),Hn=Object(l.b)(En.a)(wn()),Dn=Object(l.b)(P.a)(yn()),Un=function(){return a.a.createElement(Sn,null,a.a.createElement(Cn,null,a.a.createElement(Ln,null),a.a.createElement(qn,null,a.a.createElement("strong",null,"Vinicius Samuel"),a.a.createElement("span",null,"#3687"))),a.a.createElement(Bn,null,a.a.createElement(In,null),a.a.createElement(Hn,null),a.a.createElement(Dn,null)))},Vn=t(31);function Jn(){var n=Object(c.a)(["\n    width: 24px;\n    height: 24px;\n\n    color: var(--gray);\n\n"]);return Jn=function(){return n},n}function Rn(){var n=Object(c.a)(["\n    width: 100%;\n    height: 44px;\n\n    padding: 0 10px 0 57px;\n    border-radius: 7px;\n\n    color: var(--white);\n    background-color: var(--chat-input);\n\n    position: relative;\n\n    &::placeholder {\n        color: var(--gray);\n    }\n\n    ~ svg {\n        position: relative;\n        top: -50%;\n        left: 14px;\n        transition: 180ms ease-in-out;\n    }\n"]);return Rn=function(){return n},n}function An(){var n=Object(c.a)(["\n    width: 100%;\n\n    padding: 0 16px;\n"]);return An=function(){return n},n}function Mn(){var n=Object(c.a)(["\n    padding: 20px 0;\n\n    display: flex;\n    flex-direction: column;\n\n    max-height: calc(100vh - 46px - 68px);\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar {\n        width: 8px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background-color: var(--tertiary);\n        border-radius: 4px;\n    }\n\n    ::-webkit-scrollbar-track {\n        background-color: var(--secondary);\n    }\n"]);return Mn=function(){return n},n}function Tn(){var n=Object(c.a)(["\n    grid-area: CD;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    background-color: var(--primary);\n"]);return Tn=function(){return n},n}var Pn=l.b.div(Tn()),Gn=l.b.div(Mn()),Kn=l.b.div(An()),Qn=l.b.input(Rn()),Wn=Object(l.b)(Vn.a)(Jn());function Xn(){var n=Object(c.a)(["\n    color: var(--link);\n    cursor: pointer;\n    \n    &:hover {\n        text-decoration: underline;\n    }\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(c.a)(["\n    text-align: left;\n    font-size: 16px;\n    color: var(--white);\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n\n    > strong {\n        color: var(--white);\n        font-size: 16px;\n    }\n\n    > span {\n        margin-left: 6px;\n\n        background-color: var(--discord);\n        color: var(--white);\n        border-radius: 4px;\n        padding: 4px 5px;\n\n        text-transform: uppercase;\n        font-weight: bold;\n        font-size: 11px;\n    }\n\n    > time {\n        margin-left: 6px;\n        color: var(--gray);\n        font-size: 13px;\n    }\n"]);return Zn=function(){return n},n}function $n(){var n=Object(c.a)(["\n    min-height: 40px;\n    max-width: calc(100% - 16px - 40px - 17px);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    margin-left: 17px;\n"]);return $n=function(){return n},n}function _n(){var n=Object(c.a)(["\n    width: 40px;\n    height: 40px;\n\n    background-color: var(--secondary);\n    border-radius: 50%;\n\n    position:relative;\n    top: 0;\n\n    &.bot {\n        background-color: var(--mention-detail);\n    }\n"]);return _n=function(){return n},n}function ne(){var n=Object(c.a)(["\n    display: flex;\n\n    padding: 4px 16px;\n    margin-right: 4px;\n\n    background-color: transparent;\n\n    &.mention {\n        background-color: var(--mention-message);\n\n        border-left: 2px solid var(--mention-detail);\n        padding-left: 14px;\n    }\n\n    & + div {\n        margin-top: 13px;\n    }    \n"]);return ne=function(){return n},n}var ee=l.b.div(ne()),te=l.b.div(_n()),re=l.b.div($n()),ae=l.b.div(Zn()),oe=l.b.div(Yn()),ie=l.b.span(Xn()),ce=function(n){var e=n.author,t=n.date,r=n.content,o=n.hasMention,i=n.isBot;return a.a.createElement(ee,{className:o?"mention":""},a.a.createElement("div",null,a.a.createElement(te,{className:i?"bot":""})),a.a.createElement(re,null,a.a.createElement(ae,null,a.a.createElement("strong",null,e),i&&a.a.createElement("span",null,"Bot"),a.a.createElement("time",null,t)),a.a.createElement(oe,null,r)))},le=function(){var n=Object(r.useRef)();return Object(r.useEffect)((function(){var e=n.current;e&&(e.scrollTop=e.scrollHeight)}),[n]),a.a.createElement(Pn,null,a.a.createElement(Gn,{ref:n},Array.from(Array(15).keys()).map((function(n){return a.a.createElement(ce,{key:n,author:"Vinicius Samuel",date:"12/12/2020",content:"Hoje \xe9 o meu anivers\xe1rio!"})})),a.a.createElement(ce,{author:"Guilherme Rodz",date:"12/12/2020",content:a.a.createElement(a.a.Fragment,null,a.a.createElement(ie,null,"@Vinicius Samuel"),", me carrega no LoL e CS de novo por favor?"),hasMention:!0,isBot:!0}),a.a.createElement(ce,{author:"Jo\xe3o Paulo",date:"12/12/2020",content:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"})),a.a.createElement(Kn,null,a.a.createElement(Qn,{type:"text",placeholder:"Conversar em #chat-livre"}),a.a.createElement(Wn,null)))},ue=function(){return a.a.createElement(d,null,a.a.createElement(w,null),a.a.createElement(C,null),a.a.createElement(M,null),a.a.createElement(ln,null),a.a.createElement(Un,null),a.a.createElement(le,null),a.a.createElement(xn,null))};var se=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ue,null),a.a.createElement(s,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(se,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.25b13fbf.chunk.js.map