import{a as f}from"./assets/vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="29711315-8270253fad608a552f88c48ec";function d(r,o=1){return f({baseURL:m,params:{key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40}})}function u(r){return r.map(({largeImageURL:o,tags:i,likes:s,views:e,comments:t,downloads:a})=>`<div class="photo-card">
    <img class="photo" src="${o}" alt="${i}" loading="lazy" />
    <div class="info">
        <p class="info-item">
            <b>Likes:</b> ${s}
        </p>
        <p class="info-item">
            <b>Views:</b> ${e}
        </p>
        <p class="info-item">
            <b>Comments:</b> ${t}
        </p>
        <p class="info-item">
            <b>Downloads:</b> ${a}
        </p>
    </div>
</div>`).join("")}const n={form:document.querySelector(".search-form"),input:document.querySelector(".input"),btn:document.querySelector(".submit-btn"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")};n.loadMoreBtn.classList.add("visually-hidden");let l=1,c;n.form.addEventListener("submit",h);n.loadMoreBtn.addEventListener("click",y);async function y(){l+=1;const r=await d(c,l);console.log(r),n.gallery.insertAdjacentHTML("beforeend",u(r.data.hits))}async function h(r){r.preventDefault(),c=r.target.searchQuery.value;const o=await d(c,l);if(console.log(o.data),o.data.hits.length===0)return alert("Please, try again");n.loadMoreBtn.classList.toggle("visually-hidden"),n.gallery.innerHTML=u(o.data.hits),n.form.reset()}
//# sourceMappingURL=commonHelpers.js.map
