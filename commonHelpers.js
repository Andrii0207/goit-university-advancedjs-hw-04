import{i as d,a as g,S as b,l as L}from"./assets/vendor-4c10b834.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function c(o){d.info({title:"INFO",message:o,timeout:3e3,position:"topLeft",color:"yellow"})}function S(o){d.success({title:"SUCCESS",message:`Hooray! We found ${o} images.`,timeout:3e3,position:"topLeft",color:"green"})}const v="https://pixabay.com/api/",w="29711315-8270253fad608a552f88c48ec";function p(o,t=1){return g({baseURL:v,params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:40}})}function m(o){return o.map(({largeImageURL:t,webformatURL:s,tags:n,likes:e,views:r,comments:l,downloads:y})=>`
    <li class="photo-card">
        <a class="photo-link" href="${t}">
            <img class="photo" src="${s}" alt="${n}" loading="lazy" />
        </a>
    <div class="info">
        <p class="info-item">
            <b>Likes:</b> ${e}
        </p>
        <p class="info-item">
            <b>Views:</b> ${r}
        </p>
        <p class="info-item">
            <b>Comments:</b> ${l}
        </p>
        <p class="info-item">
            <b>Downloads:</b> ${y}
        </p>
    </div>
</li>
    `).join("")}const a={form:document.querySelector(".search-form"),input:document.querySelector(".input"),btn:document.querySelector(".submit-btn"),gallery:document.querySelector(".gallery"),guard:document.querySelector(".js-guard"),buttonUp:document.querySelector(".button-up")};let i=1,u;const h=new b(".gallery a",{showCounter:!1,captionDelay:250,captionPosition:"bottom",close:!1,overlayOpacity:1,captionsData:"alt"}),q={root:null,rootMargin:"200px",threshold:1};let f=new IntersectionObserver(_,q);a.form.addEventListener("submit",M);window.addEventListener("scroll",L($,500));async function M(o){if(o.preventDefault(),i=1,u=o.target.searchQuery.value.trim().toLowerCase(),u==="")return c("Sorry, there are no images matching your search query. Please try again.");a.gallery.innerHTML="",f.disconnect();const t=await p(u,i);if(t.data.hits.length===0)return a.form.reset(),c("Sorry, there are no images matching your search query. Please try again.");S(t.data.total);const s=Math.ceil(t.data.totalHits/t.config.params.per_page);if(a.gallery.innerHTML=m(t.data.hits),h.refresh(),a.form.reset(),s===1||!t.data.hits)return setTimeout(()=>{c("We're sorry, but you've reached the end of search results.")},5e3);f.observe(a.guard)}function _(o){o.forEach(async t=>{if(t.isIntersecting){i+=1;const s=await p(u,i),n=Math.ceil(s.data.totalHits/s.config.params.per_page);if(a.gallery.insertAdjacentHTML("beforeend",m(s.data.hits)),h.refresh(),i>=13||i>=n)return f.disconnect(),setTimeout(()=>{c("We're sorry, but you've reached the end of search results.")},5e3)}})}function $(){window.scrollY>=1e3?a.buttonUp.classList.toggle("visually-hidden",!1):a.buttonUp.classList.toggle("visually-hidden",!0)}
//# sourceMappingURL=commonHelpers.js.map
