import{a as m}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const y="https://pixabay.com/api/",g="29711315-8270253fad608a552f88c48ec";function d(r,t=1){return m({baseURL:y,params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:40}})}function f(r){return r.map(({largeImageURL:t,tags:n,likes:s,views:e,comments:o,downloads:i})=>`<div class="photo-card">
    <img class="photo" src="${t}" alt="${n}" loading="lazy" />
    <div class="info">
        <p class="info-item">
            <b>Likes:</b> ${s}
        </p>
        <p class="info-item">
            <b>Views:</b> ${e}
        </p>
        <p class="info-item">
            <b>Comments:</b> ${o}
        </p>
        <p class="info-item">
            <b>Downloads:</b> ${i}
        </p>
    </div>
</div>`).join("")}const a={form:document.querySelector(".search-form"),input:document.querySelector(".input"),btn:document.querySelector(".submit-btn"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more"),guard:document.querySelector(".js-guard")};a.loadMoreBtn.classList.add("visually-hidden");let l=1,c;const h={root:null,rootMargin:"300px",threshold:1};let p=new IntersectionObserver(b,h);p.observe(a.guard);a.form.addEventListener("submit",L);function b(r){r.forEach(async t=>{if(console.log(t),t.isIntersecting){l+=1;const s=(await d(c,l)).data;a.gallery.insertAdjacentHTML("beforeend",f(s.hits)),l>=13&&(console.log("THE END"),p.disconnect())}})}const u=resp.data;u.hits.total/u.hits.totalHits;async function L(r){r.preventDefault(),l=11,c=r.target.searchQuery.value;const t=await d(c,l),n=t.data;if(console.log("resp (submit) >>>",t),console.log("resp.data (submit) >>>",n),console.log("data.total (submit) >>>",n.total),n.hits.lenght===0)return alert("Incorrect query name, try again");a.gallery.innerHTML=f(n.hits),a.form.reset()}
//# sourceMappingURL=commonHelpers.js.map
