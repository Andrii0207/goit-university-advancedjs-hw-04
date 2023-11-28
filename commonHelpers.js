import{i as f,a as g}from"./assets/vendor-96017409.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(t){f.info({title:"INFO",message:t,timeout:3e3,position:"topLeft",color:"yellow"})}function h(t){f.success({title:"SUCCESS",message:`Hooray! We found ${t} images.`,timeout:3e3,position:"topLeft",color:"green"})}const y="https://pixabay.com/api/",b="29711315-8270253fad608a552f88c48ec";function d(t,o=1){return g({baseURL:y,params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40}})}function m(t){return t.map(({largeImageURL:o,tags:s,likes:c,views:e,comments:r,downloads:i})=>`<div class="photo-card">
    <img class="photo" src="${o}" alt="${s}" loading="lazy" />
    <div class="info">
        <p class="info-item">
            <b>Likes:</b> ${c}
        </p>
        <p class="info-item">
            <b>Views:</b> ${e}
        </p>
        <p class="info-item">
            <b>Comments:</b> ${r}
        </p>
        <p class="info-item">
            <b>Downloads:</b> ${i}
        </p>
    </div>
</div>`).join("")}const n={form:document.querySelector(".search-form"),input:document.querySelector(".input"),btn:document.querySelector(".submit-btn"),gallery:document.querySelector(".gallery"),guard:document.querySelector(".js-guard")};let a=1,l;const L={root:null,rootMargin:"100px",threshold:1};let p=new IntersectionObserver(v,L);n.form.addEventListener("submit",S);async function S(t){if(t.preventDefault(),a=11,l=t.target.searchQuery.value,l==="")return u("Sorry, there are no images matching your search query. Please try again.");p.observe(n.guard);const o=await d(l,a),s=o.data;if(console.log("resp (submit) >>>",o),console.log("resp.data (submit) >>>",s),console.log("data.total (submit) >>>",s.total),console.log("data.hits.length (submit) >>>",s.hits.length),s.hits.length===0)return u("Sorry, there are no images matching your search query. Please try again."),n.form.reset();h(s.total),n.gallery.innerHTML=m(s.hits),n.form.reset()}function v(t){t.forEach(async o=>{if(console.log(o),o.isIntersecting){a+=1;const s=await d(l,a);if(n.gallery.insertAdjacentHTML("beforeend",m(s.data.hits)),a>=13)return p.disconnect(),setTimeout(()=>{u("We're sorry, but you've reached the end of search results.")},9e3)}})}
//# sourceMappingURL=commonHelpers.js.map
