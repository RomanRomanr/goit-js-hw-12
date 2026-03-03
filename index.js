import{a as f,S as d,i as a}from"./assets/vendor-D8kWkXeg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="https://pixabay.com/api/",p="54859534-8152a3885f48c1e8938887334";function y(s){return f.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>(console.error("Error:",t),{hits:[]}))}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p>Likes ${r.likes}</p>
        <p>Views ${r.views}</p>
        <p>Comments ${r.comments}</p>
        <p>Downloads ${r.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){c.innerHTML=""}function b(){l.classList.add("visible")}function v(){l.classList.remove("visible")}const u=document.querySelector(".form"),w=u.elements["search-text"];u.addEventListener("submit",s=>{s.preventDefault();const t=w.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search term."});return}L(),b(),y(t).then(r=>{if(r.hits.length===0){a.error({title:"No result",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(r.hits)}).catch(r=>{a.error({title:"Error",message:"Something went wrong. Please try again."}),console.error(r)}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
