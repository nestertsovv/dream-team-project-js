import{A as $,S,N as E,K as x,a as j,i as R}from"./assets/vendor-ae6388e2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const z=document.querySelector(".description"),J=document.querySelector(".languages-swiper"),K=[{header:"ABOUT ME",descriptions:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{header:"ROLE",descriptions:["Frontend development","HeadlessCMS,Wordpress","Blender(enjoy)"]},{header:"EDUCATION",descriptions:["2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}],W=["HTML/CSS","JavaScript","React","Node. js","React Native","Vue .js","Angular","Soft skills"];function G(){let e="";K.forEach(t=>{e+=`<li class="description-li">
                    <div class="description-item">
                        <h3 class="section-name">${t.header}</h3>
                            <button class="description-button">
                                <svg class="btn-svg" width="20" height="20">
                                <use href="./img/icons.svg#icon-arrow"></use>
                                </svg>
                            </button>
                            </div>
                            <div class="description-content">
                                <ul>`,t.descriptions.forEach(s=>{e+=`<li>${s}</li>`}),e+=`</ul>
                </div>
            </li>`}),z.innerHTML+=e}G();new $(".description",{elementClass:"description-li",triggerClass:"description-item",panelClass:"description-content",activeClass:"svg-flip"}).open(0);function Y(){let e="";W.forEach(t=>{e+=`<li class="swiper-slide bg-color">${t}</li>`}),J.querySelector("ul").innerHTML+=e}Y();new S(".languages-swiper",{modules:[E,x],slidesPerView:6,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},navigation:{nextEl:".languages-next-btn"},breakpoints:{320:{slidesPerView:2},462:{slidesPerView:3},592:{slidesPerView:4},722:{slidesPerView:5},768:{slidesPerView:3},1440:{slidesPerView:6}}});j.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function Z(e){return(await j.post("/requests",e)).data}async function Q(){return await j.get("/reviews")}const I=document.querySelectorAll(".marquee-element"),X=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting)for(const o of I)o.classList.add("covers-show");else for(const o of I)o.classList.remove("covers-show")})},{rootMargin:"-50px"});X.observe(document.getElementById("covers"));new $(".faq-accordion-container",{showMultiple:!0});const k=document.querySelector(".js-desk-menu"),ee=k.querySelector(".js-menu-btn"),L=k.querySelector(".js-menu-list");k.addEventListener("click",te);function te(e){if(e.target===ee){L.classList.toggle("is-open-menu"),e.stopPropagation(),document.addEventListener("click",D);return}e.target.classList.contains("menu-link")&&L.classList.remove("is-open-menu")}function D(e){e.target.nodeName!=="A"&&(L.classList.remove("is-open-menu"),document.removeEventListener("click",D))}const se=document.querySelector(".js-burger-btn"),oe=document.querySelector(".js-mob-menu");se.addEventListener("click",ne);function ne(){document.body.classList.add("is-open")}const re=document.querySelector(".js-cross");re.addEventListener("click",ae);function ae(){document.body.classList.remove("is-open")}oe.addEventListener("click",ie);function ie(e){e.target.nodeName==="A"&&document.body.classList.remove("is-open")}const ce="olive",le={olive:"#9db425",orange:"#fe902b",rosy:"#e64f79",terracotta:"#9a4360",lilac:"#786bcb",turquoise:"#005d7c"},de={olive:"#acc720",orange:"#ff8514",rosy:"#f35480",terracotta:"#9a4360",lilac:"#9679f8",turquoise:"#147da1"},q=document.querySelector(".color-selector-btn"),a=document.querySelector(".color-circles"),me=".bg-color",ue=".text-color";let l=localStorage.getItem("colorTheme")||ce;document.addEventListener("DOMContentLoaded",()=>{y(l)});q.addEventListener("click",ve);function ve(e){q.classList.add("hidden"),a.classList.remove("hidden"),document.addEventListener("mousedown",A),a.querySelector(`button[data-color=${l}]`).classList.add("active"),a.addEventListener("click",N),a.addEventListener("mousemove",V),a.addEventListener("mouseout",O)}function A(e){e.target.classList.contains("color-circle")||(a.classList.add("hidden"),q.classList.remove("hidden"),document.removeEventListener("mousedown",A),a.removeEventListener("click",N),a.removeEventListener("mousemove",V),a.removeEventListener("mouseout",O))}function N(e){e.target.nodeName==="BUTTON"&&(l=e.target.dataset.color,a.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),ge(l),y(l))}function y(e){const t=document.querySelectorAll(me),s=document.querySelectorAll(ue);t.forEach(o=>{o.style.setProperty("--main-color",le[e])}),s.forEach(o=>{o.style.setProperty("--main-color-text",de[e])})}function ge(e){localStorage.setItem("colorTheme",e)}function V(e){const t=e.target.dataset.color;l!==t&&y(t)}function O(e){y(l)}const fe="/dream-team-project-js/assets/img1@1x-0f8a4e12.avif",pe="/dream-team-project-js/assets/img1@2x-8e606818.avif",we="/dream-team-project-js/assets/img2@1x-bfc2a704.avif",ye="/dream-team-project-js/assets/img2@2x-42d28cb6.avif",be="/dream-team-project-js/assets/img3@1x-ad75eb64.avif",he="/dream-team-project-js/assets/img3@2x-a20e7a8b.avif",Le="/dream-team-project-js/assets/img1-mob@1x-cbc44f2d.avif",Se="/dream-team-project-js/assets/img1-mob@2x-f20a14e9.avif",Ee="/dream-team-project-js/assets/img2-mob@1x-a2630414.avif",xe="/dream-team-project-js/assets/img2-mob@2x-3cb8d9b8.avif",je="/dream-team-project-js/assets/img3-mob@1x-ef60d70f.avif",ke="/dream-team-project-js/assets/img3-mob@2x-e7e43d82.avif",b=[fe,we,be,Le,Ee,je],P=[pe,ye,he,Se,xe,ke],qe=document.querySelector(".js-swiper"),B=[{description:"Window registration, white"},{description:"Pet love , dog"},{description:"Window registration, black"}];B.forEach((e,t)=>{const s=b.length/2;e.previewMob1x=`${b[s+t]}`,e.previewMob2x=`${P[s+t]}`,e.previewDesc1x=`${b[t]}`,e.previewDesc2x=`${P[t]}`});function Me(e){return` <li class="swiper-slide">
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
                    ${e.previewDesc1x} 1x,
                    ${e.previewDesc2x} 2x
                  "
                  type="image/avif"
                />
                <source
                  media="(max-width: 767px)"
                  srcset="
                    ${e.previewMob1x} 1x,
                    ${e.previewMob2x} 2x
                  "
                  type="image/avif"
                />
                <img
                  src="${e.previewDesc2x}"
                  alt="${e.description}"
                  class="img-projects"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </li>`}function Ce(e){return e.map(Me).join("")}const Te=Ce(B);qe.innerHTML=Te;//!=======================================================================
new S(".mySwiper",{navigation:{nextEl:".js-arrow-r",prevEl:".js-arrow-l"},simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},modules:[E,x]});const Ie="/dream-team-project-js/assets/error-d5cf2823.svg",Pe=document.querySelector(".js-swiper-rev");document.addEventListener("DOMContentLoaded",De);function $e(e){return e.map(t=>`
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
      </li>`).join("")}async function De(){try{const e=await Q();e.data.forEach(t=>{t.review.length>=180&&(t.review=t.review.slice(0,180)+"...")}),Pe.insertAdjacentHTML("beforeend",$e(e.data))}catch{R.error({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:Ie,message:"Not found!",backgroundColor:"red",position:"topRight"})}}new S(".revSwiper",{navigation:{nextEl:".js-r",prevEl:".js-l"},simulateTouch:!0,slidesPerView:4,freeMode:!0,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},modules:[E,x],breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});const Ae="/dream-team-project-js/assets/close-e4839c2d.svg";async function Ne(e,t){let s="";return await fetch(Ae).then(o=>o.text()).then(o=>{s=o}),`<div class="modal-message">
    <button type="button" class="close-modal-btn js-modal-btn">
      ${s}
    </button>
    <h4 class="modal-title">${e}</h4>
    <p class="modal-descr">
      ${t}
    </p>
  </div>`}function Ve(e){m.classList.remove("is-open"),document.body.style.overflow=""}function Oe(e){e.target===e.currentTarget&&(m.classList.remove("is-open"),document.body.style.overflow="")}function _(e){e.key==="Escape"&&(m.classList.remove("is-open"),document.removeEventListener("keydown",_),document.body.style.overflow="")}let i=null,d=null;const H=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;let c={email:"",comment:""};function Be(e){g.addEventListener("focus",Ue),f.addEventListener("focus",Re);const t=new FormData(p);c.email=t.get("email").trim(),c.comment=t.get("comment").trim(),g.addEventListener("blur",_e),f.addEventListener("blur",He);const s=JSON.stringify(c);localStorage.setItem(T,s),c.email&&c.comment?w.disabled=!1:w.disabled=!0}function _e(e){i=c.email;const t=e.target.closest(".small-text").querySelector(".validation");let s;g.addEventListener("click",F),i.length>45&&(s=i.slice(0,45)+"...",e.target.value=s),H.test(i)?M(t):C(t),i.length===0&&u(t)}function He(e){d=c.comment;const t=e.target.closest(".small-text").querySelector(".validation");let s;f.addEventListener("click",U),d.length>35&&(s=d.slice(0,35)+"...",e.target.value=s),d.length<1?C(t):M(t),d.length===0&&u(t)}function M(e){e.innerHTML="Success!",e.classList.add("success"),e.closest(".small-text").querySelector(".works-input").classList.add("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("error")}function C(e){const t=e.dataset.input;e.innerHTML=`Invalid ${t}, try again!`,e.classList.add("error"),e.closest(".small-text").querySelector(".works-input").classList.add("error"),e.closest(".small-text").querySelector(".works-input").classList.remove("success")}function u(e){e.innerHTML="",e.classList.remove("error"),e.classList.remove("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("error")}function Fe(e){return` <div class="error-wrapper">
    <h4 class="error-title">Error!</h4>
    <p class="error-message">&#160;&#160;&#160;${e.response.data.message}</p>
  </div>`}function F(e){document.activeElement===e.target&&(e.target.value=i,H.test(i)?M(e.target):C(e.target))}function U(e){document.activeElement===e.target&&(e.target.value=d)}function Ue(e){const t=e.target.closest(".small-text").querySelector(".validation");u(t)}function Re(e){const t=e.target.closest(".small-text").querySelector(".validation");u(t)}function ze(){const e=localStorage.getItem(T);if(!e)return;const t=JSON.parse(e);p.elements.email.value=t.email,p.elements.comment.value=t.comment,t.email&&t.comment&&(w.disabled=!1)}const m=document.querySelector("#modal"),g=document.querySelector(".email-input"),f=document.querySelector(".comment-input"),w=document.querySelector(".js-works-btn"),T="feedback-form-works",p=document.querySelector(".js-works-form"),Je=document.querySelector(".js-small-email"),Ke=document.querySelector(".js-small-comment"),h=document.querySelector("#modal-error");p.addEventListener("submit",We);p.addEventListener("input",Be);document.addEventListener("DOMContentLoaded",ze);async function We(e){e.preventDefault();const t=new FormData(e.target),s={email:t.get("email"),comment:t.get("comment")};try{const o=await Z(s),n=o.title,r=o.message,v=await Ne(n,r);m.innerHTML=v,m.classList.add("is-open"),document.querySelector(".js-modal-btn").addEventListener("click",Ve),m.addEventListener("click",Oe),document.addEventListener("keydown",_),document.body.style.overflow="hidden",u(Je),u(Ke),g.value="",f.value="",w.disabled=!0,localStorage.removeItem(T),e.target.reset()}catch(o){h.classList.add("is-open"),h.innerHTML=Fe(o),setTimeout(async()=>{h.classList.remove("is-open")},5e3)}finally{g.removeEventListener("click",F),f.removeEventListener("click",U)}}
//# sourceMappingURL=commonHelpers.js.map
