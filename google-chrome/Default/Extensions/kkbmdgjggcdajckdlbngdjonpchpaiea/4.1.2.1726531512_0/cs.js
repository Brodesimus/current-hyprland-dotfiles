!function e(t,n,s){function i(r,o){if(!n[r]){if(!t[r]){var a="function"==typeof require&&require;if(!o&&a)return a(r,!0);if(l)return l(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[r]={exports:{}};t[r][0].call(d.exports,(function(e){return i(t[r][1][e]||e)}),d,d.exports,e,t,n,s)}return n[r].exports}for(var l="function"==typeof require&&require,r=0;r<s.length;r++)i(s[r]);return i}({1:[function(e,t,n){"use strict";var s=document.createElement("a");s.href=window.location.href,chrome.runtime.sendMessage({incHit:!0,host:s.hostname},(function(){}));var i=null,l=function(e){if(!i){var t=document.createElement("section"),n=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=document.createElementNS("http://www.w3.org/2000/svg","path");t.style.position="fixed",t.style.zIndex="2147483647",t.style.top="0",t.style.left="0",t.style.height="100vh",t.style.width="100vw",t.style.display="flex",t.style.alignItems="center",t.style.flexDirection="column",t.style.color="#666e80",t.style.justifyContent="center",t.style.textAlign="center",t.style.background="linear-gradient(to bottom, #ebebeb, #dddddd)",t.style.font='14px / 1.3 "Roboto", Arial, sans-serif',t.style.margin="0",t.style["-webkit-font-smoothing"]="antialiased",t.style["-moz-osx-font-smoothing"]="grayscale",n.style.alignItems="center",n.style.backgroundImage="linear-gradient(-180deg, #fcba44 0%, #f89e3d 100%)",n.style.borderRadius="64px",n.style.boxShadow="0 15px 30px 0 rgba(0, 0, 0, 0.10)",n.style.color="rgba(255, 255, 255, 0.8)",n.style.display="flex",n.style.flex="0 1 auto",n.style.height="112px",n.style.margin="32px",n.style.overflow="hidden",s.style.color="white",s.style.font='24px "Roboto", Arial, sans-serif',s.style.padding="0 64px 0 48px",l.style.alignItems="center",l.style.background="white",l.style.display="flex",l.style.flexShrink="0",l.style.height="112px",l.style.justifyContent="center",l.style.width="112px",r.setAttribute("width","48"),r.setAttribute("height","48"),r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r.style.position="relative",r.style.left="4px",o.setAttribute("d","M19.497 45c5.475 0 9.363-1.261 11.9-3.873L44.124 28.4a3.004 3.004 0 0 0 0-4.244 2.981 2.981 0 0 0-2.121-.874c-.806 0-1.559.311-2.121.874L31.5 32.538V9c0-1.65-1.35-3-3-3s-3 1.35-3 3v15.75c0 .413-.337.75-.75.75a.752.752 0 0 1-.75-.75V6c0-1.65-1.35-3-3-3s-3 1.35-3 3v17.203c0 .413-.338.75-.75.75a.752.752 0 0 1-.75-.75V9c0-1.65-1.35-3-3-3s-3 1.35-3 3v15.75c0 .413-.338.75-.75.75a.752.752 0 0 1-.75-.75V15c0-1.65-1.35-3-3-3s-3 1.35-3 3v16.5h-.003c0 7.445 7.403 13.5 16.5 13.5M6 9c.52 0 1.017.087 1.5.213V9c0-3.309 2.691-6 6-6 .747 0 1.454.154 2.114.404C16.585 1.398 18.623 0 21 0c2.374 0 4.413 1.398 5.385 3.404A5.971 5.971 0 0 1 28.5 3c3.309 0 6 2.691 6 6v16.296l3.261-3.263a5.963 5.963 0 0 1 4.242-1.752c1.605 0 3.111.625 4.242 1.752a6.008 6.008 0 0 1 0 8.487L33.533 43.231C30.416 46.44 25.826 48 19.496 48 8.745 48 0 40.597 0 31.5V15c0-3.309 2.691-6 6-6"),o.setAttribute("fill","#f89e3d"),s.innerText=e||null,r.appendChild(o),n.appendChild(l),n.appendChild(s),l.appendChild(r),t.appendChild(n),document.body.appendChild(t),i=t}if(e){var a=i.querySelector("div + div");if(!a){var c=document.createElement("div");c.style.color="white",c.style.font='24px "Roboto", Arial, sans-serif',c.style.padding="0 64px 0 48px",i.blockScreenMessage=c,i.appendChild(c)}a.innerText=e}i.style.display="flex"};chrome.runtime.onMessage.addListener((function(e,t,n){if(t.id===chrome.runtime.id){switch(e.action){case"lock":l(e.message);break;case"unlock":i&&(i.style.display="none")}return n({status:"OK"}),!0}})),chrome.extension.sendRequest({locked:"?"},(function(e){e.state&&l(e.message)}))},{}]},{},[1]);