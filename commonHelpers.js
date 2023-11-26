import{a as f}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const m="https://pixabay.com/api/",p="29711315-8270253fad608a552f88c48ec";function d(r,t=1){return f({baseURL:m,params:{key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:40}})}function u(r){return r.map(({largeImageURL:t,tags:n,likes:l,views:e,comments:o,downloads:s})=>`<div class="photo-card">
    <img class="photo" src="${t}" alt="${n}" loading="lazy" />
    <div class="info">
        <p class="info-item">
            <b>Likes:</b> ${l}
        </p>
        <p class="info-item">
            <b>Views:</b> ${e}
        </p>
        <p class="info-item">
            <b>Comments:</b> ${o}
        </p>
        <p class="info-item">
            <b>Downloads:</b> ${s}
        </p>
    </div>
</div>`).join("")}const a={form:document.querySelector(".search-form"),input:document.querySelector(".input"),btn:document.querySelector(".submit-btn"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")};a.loadMoreBtn.classList.add("visually-hidden");let i=1,c;a.form.addEventListener("submit",h);a.loadMoreBtn.addEventListener("click",y);async function y(){i+=1;const r=await d(c,i),t=r.data;let n=t.hits.total/t.hits.totalHits;if(console.log("resp load_more >>>",r),console.log("resp.data (load_more) >>>",r.data),a.gallery.insertAdjacentHTML("beforeend",u(t.hits)),n>=500||i>=13)return console.log("click LOAD_MORE"),a.loadMoreBtn.classList.add("visually-hidden")}async function h(r){r.preventDefault(),i=1,c=r.target.searchQuery.value;const t=await d(c,i),n=t.data;if(console.log("resp (submit) >>>",t),console.log("resp.data (submit) >>>",n),n.hits.lenght===0)return alert("Incorrect query name, try again");n.total>40&&a.loadMoreBtn.classList.remove("visually-hidden"),a.gallery.innerHTML=u(n.hits),a.form.reset()}
//# sourceMappingURL=commonHelpers.js.map
