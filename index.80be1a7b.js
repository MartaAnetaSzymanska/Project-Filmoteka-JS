var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("2shzp"),i=r("4v6BD"),a=r("1GAPJ");const l=document.querySelector("ul.gallery__container"),c=document.querySelector("[data-modal]");document.querySelector("[modal-close]");function d(){c.classList.toggle("is-hidden")}let u;l.addEventListener("click",d),c.addEventListener("click",d);const s=document.querySelector("h2.modal-film-title"),m=document.querySelector("b.vote-data"),p=document.querySelector("b.votes-data"),f=document.querySelector("b.modal-popularity-data"),y=document.querySelector("b.modal-original-title-data"),g=document.querySelector("b.modal-genre-data"),v=document.querySelector("b.about-title-data"),b=document.querySelector("div.modal-image img");document.querySelector("ul.modal-film-features-list");l.addEventListener("click",(async e=>{const t=e.target.closest(".movie-block").querySelector(".film-info");e.target.src;u=t.id;const o=await async function(e){try{return(await n.default.get(`https://api.themoviedb.org/3/movie/${e}?api_key=${i.apiKey}`)).data}catch(e){return a.Notify.failure("Wystąpił błąd podczas pobierania szczegółów filmu."),console.error("Błąd podczas pobierania szczegółów filmu:",e),null}}(u);o&&(b.src=`https://image.tmdb.org/t/p/original${o.poster_path}`,s.innerText=o.title,m.innerText=o.vote_average,p.innerText=o.vote_count,f.innerText=o.popularity,y.innerText=o.original_title,v.innerText=o.overview,g.innerText=(e=>{const t=[];return e.forEach((e=>{t.push(e.name)})),t.join(", ")})(o.genres))}));
//# sourceMappingURL=index.80be1a7b.js.map
