!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var a,i=o("bpxeT"),c=o("2TvXO"),u=o("dIxxU"),l=o("xTqOg"),d=o("ejkSG"),s=document.querySelector("ul.gallery__container"),p=document.querySelector("[data-modal]");document.querySelector("[modal-close]");function f(){p.classList.toggle("is-hidden")}s.addEventListener("click",f),p.addEventListener("click",f);var m,v=document.querySelector("h2.modal-film-title"),y=document.querySelector("b.vote-data"),g=document.querySelector("b.votes-data"),b=document.querySelector("b.modal-popularity-data"),x=document.querySelector("b.modal-original-title-data"),h=document.querySelector("b.modal-genre-data"),q=document.querySelector("b.about-title-data"),S=document.querySelector("div.modal-image img"),w=(document.querySelector("ul.modal-film-features-list"),function(e){var t=[];return e.forEach((function(e){t.push(e.name)})),t.join(", ")});function T(e){return _.apply(this,arguments)}function _(){return(_=e(i)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.default.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(l.apiKey));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),d.Notify.failure("Wystąpił błąd podczas pobierania szczegółów filmu."),console.error("Błąd podczas pobierania szczegółów filmu:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}s.addEventListener("click",(m=e(i)(e(c).mark((function t(r){var n,o,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.target.closest(".movie-block"),o=n.querySelector(".film-info"),r.target.src,a=o.id,e.next=6,T(a);case 6:(i=e.sent)&&(S.src="https://image.tmdb.org/t/p/original".concat(i.poster_path),v.innerText=i.title,y.innerText=i.vote_average,g.innerText=i.vote_count,b.innerText=i.popularity,x.innerText=i.original_title,q.innerText=i.overview,h.innerText=w(i.genres));case 8:case"end":return e.stop()}}),t)}))),function(e){return m.apply(this,arguments)}))}();
//# sourceMappingURL=index.481d87b6.js.map