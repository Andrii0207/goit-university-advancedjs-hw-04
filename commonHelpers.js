import{i as f,a as g,S as b,l as L}from"./assets/vendor-4c10b834.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function u(t){f.info({title:"INFO",message:t,timeout:3e3,position:"topLeft",color:"yellow"})}function S(t){f.success({title:"SUCCESS",message:`Hooray! We found ${t} images.`,timeout:3e3,position:"topLeft",color:"green"})}const v="https://pixabay.com/api/",w="29711315-8270253fad608a552f88c48ec";function d(t,o=1){return g({baseURL:v,params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40}})}function p(t){return t.map(({largeImageURL:o,webformatURL:n,tags:a,likes:e,views:r,comments:l,downloads:h})=>`
    <li class="photo-card">
        <a class="photo-link" href="${o}">
            <img class="photo" src="${n}" alt="${a}" loading="lazy" />
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
            <b>Downloads:</b> ${h}
        </p>
    </div>
</li>
    `).join("")}const s={form:document.querySelector(".search-form"),input:document.querySelector(".input"),btn:document.querySelector(".submit-btn"),gallery:document.querySelector(".gallery"),guard:document.querySelector(".js-guard"),buttonUp:document.querySelector(".button-up")};let i=1,c;const m=new b(".gallery a",{showCounter:!1,captionDelay:250,captionPosition:"bottom",close:!1,overlayOpacity:1,captionsData:"alt"}),q={root:null,rootMargin:"100px",threshold:1};let y=new IntersectionObserver($,q);s.form.addEventListener("submit",M);window.addEventListener("scroll",L(E,500));async function M(t){if(t.preventDefault(),i=1,c=t.target.searchQuery.value,c==="")return u("Sorry, there are no images matching your search query. Please try again.");y.observe(s.guard);const o=await d(c,i);if(o.data.hits.length===0)return u("Sorry, there are no images matching your search query. Please try again."),s.form.reset();S(o.data.total),s.gallery.innerHTML=p(o.data.hits),m.refresh(),s.form.reset()}function $(t){t.forEach(async o=>{if(o.isIntersecting){i+=1;const n=await d(c,i),a=Math.ceil(n.data.totalHits/n.config.params.per_page);if(s.gallery.insertAdjacentHTML("beforeend",p(n.data.hits)),m.refresh(),i>=13||i>=a)return y.disconnect(),setTimeout(()=>{u("We're sorry, but you've reached the end of search results.")},7e3)}})}function E(){window.scrollY>=1e3?s.buttonUp.classList.toggle("visually-hidden",!1):s.buttonUp.classList.toggle("visually-hidden",!0)}
//# sourceMappingURL=commonHelpers.js.map
