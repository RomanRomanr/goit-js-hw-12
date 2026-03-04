import{a as v,S as b,i as a}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const S="https://pixabay.com/api/",P="54859534-8152a3885f48c1e8938887334";async function f(s,r=1){return(await v.get(S,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),q=new b(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const r=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p>Likes ${e.likes}</p>
        <p>Views ${e.views}</p>
        <p>Comments ${e.comments}</p>
        <p>Downloads ${e.downloads}</p>
      </div>
    </li>
  `).join("");m.insertAdjacentHTML("beforeend",r),q.refresh()}function E(){m.innerHTML=""}function h(){y.classList.add("visible")}function g(){y.classList.remove("visible")}const L=document.querySelector(".form"),$=L.elements["search-text"],c=document.querySelector(".load-more");let d="",n=1,u=0;const w=15;L.addEventListener("submit",async s=>{s.preventDefault();const r=$.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search term."});return}d=r,n=1,E(),c.classList.add("is-hidden"),h();try{const e=await f(d,n);if(u=e.totalHits,e.hits.length===0){a.error({title:"No result",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(e.hits),u>w&&c.classList.remove("is-hidden")}catch{a.error({message:"Something went wrong. Please try again."})}finally{g()}});c.addEventListener("click",async()=>{n+=1,h();try{const s=await f(d,n);p(s.hits),n*w>=u&&(c.classList.add("is-hidden"),a.error({message:"We're sorry, but you've reached the end of search results."}));const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}catch{a.error({message:"Something went wrong. Please try again."})}finally{g()}});
//# sourceMappingURL=index.js.map
