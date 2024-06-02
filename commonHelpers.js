import{A as P,S as b,N as S,K as E,a as k,i as R}from"./assets/vendor-ae6388e2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&n(v)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const _=document.querySelector(".description"),z=document.querySelector(".languages-swiper"),G=[{header:"ABOUT ME",descriptions:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{header:"ROLE",descriptions:["Frontend development","HeadlessCMS,Wordpress","Blender(enjoy)"]},{header:"EDUCATION",descriptions:["2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}],J=["HTML/CSS","JavaScript","React","Node. js","React Native","Vue .js","Angular","Soft skills"];function K(){let e="";G.forEach(t=>{e+=`<li class="description-li">
                    <div class="description-item">
                        <h3 class="section-name">${t.header}</h3>
                            <button class="description-button">
                                <svg class="btn-svg" width="20" height="20">
                                <use href="../img/icons.svg#icon-arrow"></use>
                                </svg>
                            </button>
                            </div>
                            <div class="description-content">
                                <ul>`,t.descriptions.forEach(s=>{e+=`<li>${s}</li>`}),e+=`</ul>
                </div>
            </li>`}),_.innerHTML+=e}K();new P(".description",{elementClass:"description-li",triggerClass:"description-item",panelClass:"description-content",activeClass:"svg-flip"}).open(0);function W(){let e="";J.forEach(t=>{e+=`<li class="swiper-slide bg-color">${t}</li>`}),z.querySelector("ul").innerHTML+=e}W();new b(".languages-swiper",{modules:[S,E],slidesPerView:6,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},navigation:{nextEl:".languages-next-btn"},breakpoints:{320:{slidesPerView:2},462:{slidesPerView:3},592:{slidesPerView:4},722:{slidesPerView:5},768:{slidesPerView:3},1440:{slidesPerView:6}}});k.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function Y(e){return(await k.post("/requests",e)).data}async function Z(){return await k.get("/reviews")}const j=document.querySelectorAll(".marquee-element"),Q=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting)for(const n of j)n.classList.add("covers-show");else for(const n of j)n.classList.remove("covers-show")})},{rootMargin:"-50px"});Q.observe(document.getElementById("covers"));new P(".faq-accordion-container",{showMultiple:!0});const x=document.querySelector(".js-desk-menu"),X=x.querySelector(".js-menu-btn"),L=x.querySelector(".js-menu-list");x.addEventListener("click",ee);function ee(e){if(e.target===X){L.classList.toggle("is-open-menu"),e.stopPropagation(),document.addEventListener("click",A);return}e.target.classList.contains("menu-link")&&L.classList.remove("is-open-menu")}function A(e){e.target.nodeName!=="A"&&(L.classList.remove("is-open-menu"),document.removeEventListener("click",A))}const te=document.querySelector(".js-burger-btn"),oe=document.querySelector(".js-mob-menu");te.addEventListener("click",se);function se(){document.body.classList.add("is-open")}const ne=document.querySelector(".js-cross");ne.addEventListener("click",re);function re(){document.body.classList.remove("is-open")}oe.addEventListener("click",ie);function ie(e){e.target.nodeName==="A"&&document.body.classList.remove("is-open")}const ae="olive",ce={olive:"#9db425",orange:"#fe902b",rosy:"#e64f79",terracotta:"#9a4360",lilac:"#786bcb",turquoise:"#005d7c"},le={olive:"#acc720",orange:"#ff8514",rosy:"#f35480",terracotta:"#9a4360",lilac:"#9679f8",turquoise:"#147da1"},q=document.querySelector(".color-selector-btn"),i=document.querySelector(".color-circles"),de=".bg-color",ue=".text-color";let l=localStorage.getItem("colorTheme")||ae;y(l);q.addEventListener("click",me);function me(e){q.classList.add("hidden"),i.classList.remove("hidden"),document.addEventListener("mousedown",$),i.querySelector(`button[data-color=${l}]`).classList.add("active"),i.addEventListener("click",N),i.addEventListener("mousemove",V),i.addEventListener("mouseout",D)}function $(e){e.target.classList.contains("color-circle")||(i.classList.add("hidden"),q.classList.remove("hidden"),document.removeEventListener("mousedown",$),i.removeEventListener("click",N),i.removeEventListener("mousemove",V),i.removeEventListener("mouseout",D))}function N(e){e.target.nodeName==="BUTTON"&&(l=e.target.dataset.color,i.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),ve(l),y(l))}function y(e){const t=document.querySelectorAll(de),s=document.querySelectorAll(ue);t.forEach(n=>{n.style.setProperty("--main-color",ce[e])}),s.forEach(n=>{n.style.setProperty("--main-color-text",le[e])})}function ve(e){localStorage.setItem("colorTheme",e)}function V(e){const t=e.target.dataset.color;l!==t&&y(t)}function D(e){y(l)}const fe=document.querySelector(".js-swiper"),I="/img/projects/";//!=======================================================================
const B=[{description:"Window registration, white"},{description:"Pet love , dog"},{description:"Window registration, black"}];//!=======================================================================
B.forEach((e,t)=>{e.previewMob1x=`${I}img-mob/img${t+1}`,e.previewDesc1x=`${I}img-desk-tab/img${t+1}`});//!=======================================================================
function pe(e){return console.log(e),` <li class="swiper-slide">
          <div class="box-content js-content">
            <div class="box-text">
              <div class="box-it-text">
                <p class="it-text">#react</p>
                <p class="it-text">#js</p>
                <p class="it-text">#node js</p>
                <p class="it-text">#git</p>
              </div>
              <h3 class="caption-project">
                Programming Across Borders: Ideas, Technologies, Innovations
              </h3>
              <a
                href="https://github.com/nestertsovv/dream-team-project-js"
                class="main-btn btn-mail"
                target="_blank"
              >
                <div class="btn-bg bg-color btn-projects"></div>
                <span>See project</span>
              </a>
            </div>
            <div class="box-img">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ${e.previewDesc1x}@1x.avif 1x,
                    ${e.previewDesc1x}@2x.avif 2x
                  "
                  type="image/avif"
                />
                <source
                  media="(max-width: 767px)"
                  srcset="
                    ${e.previewMob1x}-mob@1x.avif 1x,
                    ${e.previewMob1x}-mob@2x.avif 2x
                  "
                  type="image/avif"
                />
                <img
                  src="${e.previewDesc1x}@2x.avif"
                  alt="${e.description}"
                  class="img-projects"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </li>`}function ge(e){return e.map(pe).join("")}const we=ge(B);fe.innerHTML=we;//!=======================================================================
new b(".mySwiper",{navigation:{nextEl:".js-arrow-r",prevEl:".js-arrow-l"},simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},modules:[S,E]});const ye="/dream-team-project-js/assets/error-d5cf2823.svg",he=document.querySelector(".js-swiper-rev");document.addEventListener("DOMContentLoaded",be);function Le(e){return e.map(t=>`
      <li class="swiper-slide reviews-item">
        <div class="reviews-list-container">
          <img class ="reviews-image" src="${t.avatar_url}" 
          alt="picture" loading="lazy"/>
        </div>
        <div class= "text-container-img">
          <h2 class="title-rev">${t.author}</h2>
          <p class = "text-rev">
            ${t.review}
          </p> 
        </div>
      </li>`).join("")}async function be(){try{const e=await Z();e.data.forEach(t=>{t.review.length>=180&&(t.review=t.review.slice(0,180)+"...")}),he.insertAdjacentHTML("beforeend",Le(e.data))}catch{R.error({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:ye,message:"Not found!",backgroundColor:"red",position:"topRight"})}}new b(".revSwiper",{navigation:{nextEl:".js-r",prevEl:".js-l"},simulateTouch:!0,slidesPerView:4,freeMode:!0,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},modules:[S,E],breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});function Se(e,t){return`<div class="modal-message">
    <button type="button" class="close-modal-btn js-modal-btn">
      <svg class="modal-pict" width="24" height="24">
        <use href="/img/icons.svg#icon-close"></use>
      </svg>
    </button>
    <h4 class="modal-title">${e}</h4>
    <p class="modal-descr">
      ${t}
    </p>
  </div>`}function Ee(e){u.classList.remove("is-open"),document.body.style.overflow=""}function ke(e){e.target===e.currentTarget&&(u.classList.remove("is-open"),document.body.style.overflow="")}function O(e){e.key==="Escape"&&(u.classList.remove("is-open"),document.removeEventListener("keydown",O),document.body.style.overflow="")}let a=null,d=null;const H=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;let c={email:"",comment:""};function xe(e){f.addEventListener("focus",Te),p.addEventListener("focus",je);const t=new FormData(g);c.email=t.get("email").trim(),c.comment=t.get("comment").trim(),f.addEventListener("blur",qe),p.addEventListener("blur",Me);const s=JSON.stringify(c);localStorage.setItem(T,s),c.email&&c.comment?w.disabled=!1:w.disabled=!0}function qe(e){a=c.email;const t=e.target.closest(".small-text").querySelector(".validation");let s;f.addEventListener("click",F),a.length>45&&(s=a.slice(0,45)+"...",e.target.value=s),H.test(a)?M(t):C(t),a.length===0&&m(t)}function Me(e){d=c.comment;const t=e.target.closest(".small-text").querySelector(".validation");let s;p.addEventListener("click",U),d.length>35&&(s=d.slice(0,35)+"...",e.target.value=s),d.length<1?C(t):M(t),d.length===0&&m(t)}function M(e){e.innerHTML="Success!",e.classList.add("success"),e.closest(".small-text").querySelector(".works-input").classList.add("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("error")}function C(e){const t=e.dataset.input;e.innerHTML=`Invalid ${t}, try again!`,e.classList.add("error"),e.closest(".small-text").querySelector(".works-input").classList.add("error"),e.closest(".small-text").querySelector(".works-input").classList.remove("success")}function m(e){e.innerHTML="",e.classList.remove("error"),e.classList.remove("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("error")}function Ce(e){return` <div class="error-wrapper">
    <h4 class="error-title">Error!</h4>
    <p class="error-message">&#160;&#160;&#160;${e.response.data.message}</p>
  </div>`}function F(e){document.activeElement===e.target&&(e.target.value=a,H.test(a)?M(e.target):C(e.target))}function U(e){document.activeElement===e.target&&(e.target.value=d)}function Te(e){const t=e.target.closest(".small-text").querySelector(".validation");m(t)}function je(e){const t=e.target.closest(".small-text").querySelector(".validation");m(t)}function Ie(){const e=localStorage.getItem(T);if(!e)return;const t=JSON.parse(e);g.elements.email.value=t.email,g.elements.comment.value=t.comment,t.email&&t.comment&&(w.disabled=!1)}const u=document.querySelector("#modal"),f=document.querySelector(".email-input"),p=document.querySelector(".comment-input"),w=document.querySelector(".js-works-btn"),T="feedback-form-works",g=document.querySelector(".js-works-form"),Pe=document.querySelector(".js-small-email"),Ae=document.querySelector(".js-small-comment"),h=document.querySelector("#modal-error");g.addEventListener("submit",$e);g.addEventListener("input",xe);document.addEventListener("DOMContentLoaded",Ie);async function $e(e){e.preventDefault();const t=new FormData(e.target),s={email:t.get("email"),comment:t.get("comment")};try{const n=await Y(s),o=n.title,r=n.message,v=Se(o,r);u.innerHTML=v,u.classList.add("is-open"),document.querySelector(".js-modal-btn").addEventListener("click",Ee),u.addEventListener("click",ke),document.addEventListener("keydown",O),document.body.style.overflow="hidden",m(Pe),m(Ae),f.value="",p.value="",w.disabled=!0,localStorage.removeItem(T),e.target.reset()}catch(n){h.classList.add("is-open"),h.innerHTML=Ce(n),setTimeout(async()=>{h.classList.remove("is-open")},5e3)}finally{f.removeEventListener("click",F),p.removeEventListener("click",U)}}
//# sourceMappingURL=commonHelpers.js.map
