import{A as P,S,N as E,K as x,a as y,i as R}from"./assets/vendor-ae6388e2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&n(v)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const _=document.querySelector(".description"),G=document.querySelector(".languages-swiper"),J=[{header:"ABOUT ME",descriptions:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{header:"ROLE",descriptions:["Frontend development","HeadlessCMS,Wordpress","Blender(enjoy)"]},{header:"EDUCATION",descriptions:["2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}],K=["HTML/CSS","JavaScript","React","Node. js","React Native","Vue .js","Angular","Soft skills"];function W(){let e="";J.forEach(t=>{e+=`<li class="description-li">
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
            </li>`}),_.innerHTML+=e}W();new P(".description",{elementClass:"description-li",triggerClass:"description-item",panelClass:"description-content",activeClass:"svg-flip"}).open(0);function z(){let e="";K.forEach(t=>{e+=`<li class="swiper-slide bg-color">${t}</li>`}),G.querySelector("ul").innerHTML+=e}z();new S(".languages-swiper",{modules:[E,x],slidesPerView:6,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},navigation:{nextEl:".languages-next-btn"},breakpoints:{320:{slidesPerView:2},462:{slidesPerView:3},592:{slidesPerView:4},722:{slidesPerView:5},768:{slidesPerView:3},1440:{slidesPerView:6}}});y.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function Y(e){return(await y.post("/requests",e)).data}const T=document.querySelectorAll(".marquee-element"),Z=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting)for(const n of T)n.classList.add("covers-show");else for(const n of T)n.classList.remove("covers-show")})},{rootMargin:"-50px"});Z.observe(document.getElementById("covers"));new P(".faq-accordion-container",{showMultiple:!0});const k=document.querySelector(".js-desk-menu"),Q=k.querySelector(".js-menu-btn"),b=k.querySelector(".js-menu-list");k.addEventListener("click",X);function X(e){if(e.target===Q){b.classList.toggle("is-open-menu"),e.stopPropagation(),document.addEventListener("click",$);return}e.target.classList.contains("menu-link")&&b.classList.remove("is-open-menu")}function $(e){e.target.nodeName!=="A"&&(b.classList.remove("is-open-menu"),document.removeEventListener("click",$))}const ee=document.querySelector(".js-burger-btn"),te=document.querySelector(".js-mob-menu");ee.addEventListener("click",oe);function oe(){document.body.classList.add("is-open")}const se=document.querySelector(".js-cross");se.addEventListener("click",ne);function ne(){document.body.classList.remove("is-open")}te.addEventListener("click",re);function re(e){e.target.nodeName==="A"&&document.body.classList.remove("is-open")}const ie="olive",ae={olive:"#9db425",orange:"#fe902b",rosy:"#e64f79",terracotta:"#9a4360",lilac:"#786bcb",turquoise:"#005d7c"},ce={olive:"#acc720",orange:"#ff8514",rosy:"#f35480",terracotta:"#9a4360",lilac:"#9679f8",turquoise:"#147da1"},q=document.querySelector(".color-selector-btn"),i=document.querySelector(".color-circles"),le=".bg-color",de=".text-color";let l=localStorage.getItem("colorTheme")||ie;h(l);q.addEventListener("click",ue);function ue(e){q.classList.add("hidden"),i.classList.remove("hidden"),document.addEventListener("mousedown",A),i.querySelector(`button[data-color=${l}]`).classList.add("active"),i.addEventListener("click",D),i.addEventListener("mousemove",N),i.addEventListener("mouseout",V)}function A(e){e.target.classList.contains("color-circle")||(i.classList.add("hidden"),q.classList.remove("hidden"),document.removeEventListener("mousedown",A),i.removeEventListener("click",D),i.removeEventListener("mousemove",N),i.removeEventListener("mouseout",V))}function D(e){e.target.nodeName==="BUTTON"&&(l=e.target.dataset.color,i.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),me(l),h(l))}function h(e){const t=document.querySelectorAll(le),s=document.querySelectorAll(de);t.forEach(n=>{n.style.setProperty("--main-color",ae[e])}),s.forEach(n=>{n.style.setProperty("--main-color-text",ce[e])})}function me(e){localStorage.setItem("colorTheme",e)}function N(e){const t=e.target.dataset.color;l!==t&&h(t)}function V(e){h(l)}const ve=document.querySelector(".js-swiper"),I="/img/projects/";//!=======================================================================
const B=[{description:"Window registration, white"},{description:"Pet love , dog"},{description:"Window registration, black"}];//!=======================================================================
B.forEach((e,t)=>{e.previewMob1x=`${I}img-mob/img${t+1}`,e.previewDesc1x=`${I}img-desk-tab/img${t+1}`});//!=======================================================================
function pe(e){return` <li class="swiper-slide">
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
                  media="(min-width: 1378px)"
                  srcset="
                    .${e.previewDesc1x}@1x.avif 1x,
                    .${e.previewDesc1x}@2x.avif 2x
                  "
                  type="image/avif"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="
                    .${e.previewDesc1x}@1x.avif 1x,
                    .${e.previewDesc1x}@2x.avif 2x
                  "
                  type="image/avif"
                />
                <source
                  media="(max-width: 767px)"
                  srcset="
                    .${e.previewMob1x}-mob@1x.avif 1x,
                    .${e.previewMob1x}-mob@2x.avif 2x
                  "
                  type="image/avif"
                />
                <img
                  src=".${e.previewDesc1x}"
                  alt="${e.description}"
                  class="img-projects"
                />
              </picture>
            </div>
          </div>
        </li>`}function fe(e){return e.map(pe).join("")}const ge=fe(B);ve.innerHTML=ge;//!=======================================================================
new S(".mySwiper",{navigation:{nextEl:".js-arrow-r",prevEl:".js-arrow-l"},simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},modules:[E,x]});const we="/dream-team-project-js/assets/error-d5cf2823.svg",ye=document.querySelector(".js-swiper-rev");document.addEventListener("DOMContentLoaded",be);y.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function he(){return await y.get("/reviews")}function Le(e){return e.map(t=>`<li class="swiper-slide reviews-item">
    <div class="reviews-list-container">
    <img class ="reviews-image" src="${t.avatar_url}" 
    alt="picture"/>
        </div>
        <div class= "text-container-img">
        <h2 class="title-rev">${t.author}</h2>
        <p class = "text-rev">
${t.review}
         </p> 
        </div>
    </li>`).join("")}async function be(){try{const e=await he();e.data.forEach(t=>{t.review.length>=180&&(t.review=t.review.slice(0,180)+"...")}),ye.insertAdjacentHTML("beforeend",Le(e.data))}catch{R.error({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:we,message:"Not found!",backgroundColor:"red",position:"topRight"})}}new S(".revSwiper",{navigation:{nextEl:".js-r",prevEl:".js-l"},simulateTouch:!0,slidesPerView:4,freeMode:!0,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},modules:[E,x],breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});function Se(e,t){return`<div class="modal-message">
    <button type="button" class="close-modal-btn js-modal-btn">
      <svg class="modal-pict" width="24" height="24">
        <use href="../img/icons.svg#icon-close"></use>
      </svg>
    </button>
    <h4 class="modal-title">${e}</h4>
    <p class="modal-descr">
      ${t}
    </p>
  </div>`}function Ee(e){u.classList.remove("is-open"),document.body.style.overflow=""}function xe(e){e.target===e.currentTarget&&(u.classList.remove("is-open"),document.body.style.overflow="")}function O(e){e.key==="Escape"&&(u.classList.remove("is-open"),document.removeEventListener("keydown",O),document.body.style.overflow="")}let a=null,d=null;const H=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;let c={email:"",comment:""};function ke(e){p.addEventListener("focus",je),f.addEventListener("focus",Te);const t=new FormData(g);c.email=t.get("email").trim(),c.comment=t.get("comment").trim(),p.addEventListener("blur",qe),f.addEventListener("blur",Me);const s=JSON.stringify(c);localStorage.setItem(j,s),c.email&&c.comment?w.disabled=!1:w.disabled=!0}function qe(e){a=c.email;const t=e.target.closest(".small-text").querySelector(".validation");let s;p.addEventListener("click",F),a.length>45&&(s=a.slice(0,45)+"...",e.target.value=s),H.test(a)?M(t):C(t),a.length===0&&m(t)}function Me(e){d=c.comment;const t=e.target.closest(".small-text").querySelector(".validation");let s;f.addEventListener("click",U),d.length>35&&(s=d.slice(0,35)+"...",e.target.value=s),d.length<1?C(t):M(t),d.length===0&&m(t)}function M(e){e.innerHTML="Success!",e.classList.add("success"),e.closest(".small-text").querySelector(".works-input").classList.add("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("error")}function C(e){const t=e.dataset.input;e.innerHTML=`Invalid ${t}, try again!`,e.classList.add("error"),e.closest(".small-text").querySelector(".works-input").classList.add("error"),e.closest(".small-text").querySelector(".works-input").classList.remove("success")}function m(e){e.innerHTML="",e.classList.remove("error"),e.classList.remove("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("error")}function Ce(e){return` <div class="error-wrapper">
    <h4 class="error-title">Error!</h4>
    <p class="error-message">&#160;&#160;&#160;${e.response.data.message}</p>
  </div>`}function F(e){document.activeElement===e.target&&(e.target.value=a,H.test(a)?M(e.target):C(e.target))}function U(e){document.activeElement===e.target&&(e.target.value=d)}function je(e){const t=e.target.closest(".small-text").querySelector(".validation");m(t)}function Te(e){const t=e.target.closest(".small-text").querySelector(".validation");m(t)}function Ie(){const e=localStorage.getItem(j),t=JSON.parse(e);t&&(g.elements.email.value=t.email,g.elements.comment.value=t.comment,w.disabled=!1)}const u=document.querySelector("#modal"),p=document.querySelector(".email-input"),f=document.querySelector(".comment-input"),w=document.querySelector(".js-works-btn"),j="feedback-form-works",g=document.querySelector(".js-works-form"),Pe=document.querySelector(".js-small-email"),$e=document.querySelector(".js-small-comment"),L=document.querySelector("#modal-error");g.addEventListener("submit",Ae);g.addEventListener("input",ke);document.addEventListener("DOMContentLoaded",Ie);async function Ae(e){e.preventDefault();const t=new FormData(e.target),s={email:t.get("email"),comment:t.get("comment")};try{const n=await Y(s),o=n.title,r=n.message,v=Se(o,r);u.innerHTML=v,u.classList.add("is-open"),document.querySelector(".js-modal-btn").addEventListener("click",Ee),u.addEventListener("click",xe),document.addEventListener("keydown",O),document.body.style.overflow="hidden",m(Pe),m($e),p.value="",f.value="",w.disabled=!0,localStorage.removeItem(j),e.target.reset()}catch(n){L.classList.add("is-open"),L.innerHTML=Ce(n),setTimeout(async()=>{L.classList.remove("is-open")},5e3)}finally{p.removeEventListener("click",F),f.removeEventListener("click",U)}}
//# sourceMappingURL=commonHelpers.js.map
