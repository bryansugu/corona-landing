(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();document.querySelector("#header").innerHTML=`
<header class="coc-header">
      <div class="hidden-xs hidden-sm menu-tracker"></div>
      <div class="coc-header-overlay"></div>
      <div class="container">
          <nav class="coc-nav">
              <div class="coc-nav-top-actions hidden-xs hidden-sm">
                  <div class="yCmsComponent yComponentWrapper">
                      <div class="hidden-xs hidden-sm coc-top-menu-links-wp">
                          <div class="coc-top-menu-links">
                              <a href="https://empresa.corona.co/" title="Sitio Corporativo" target="_blank"
                                  rel="noopener noreferrer">Sitio Corporativo</a><a
                                  href="https://centrocorona.corona.co/" title="Centros Corona" target="_blank"
                                  rel="noopener noreferrer">Centros Corona</a><a href="https://corona.co/grival"
                                  title="Grival">Grival</a><a
                                  href="https://clubmaestros.co/?utm_source=corona.co&amp;utm_medium=referral&amp;utm_campaign=corona"
                                  title="Club Maestros" target="_blank" rel="noopener noreferrer">Club Maestros</a><a
                                  href="https://corona.co/store-finder" title="Mapa de tiendas">Mapa de tiendas</a><a
                                  href="https://corona.co/guest/order" title="Estado de pedido">Estado de pedido</a>
                          </div>
                      </div>
                  </div>
                  <div class="yCmsComponent yComponentWrapper">
                      <div class="coc-country-selector">
                          <div class="coc-selected-country js-country-selector-trigger">
                              <div class="coc-country-selected-option">
                                  <span style=" width: 13px; height: 13px; ">
                                      <img src="https://corona.co/medias/colombia-flag.svg?context=bWFzdGVyfGltYWdlc3w3MDJ8aW1hZ2Uvc3ZnK3htbHxhRFZrTDJoaE5TODROemsyTVRZMk5USXdPRFl5TDJOdmJHOXRZbWxoTFdac1lXY3VjM1pufGIwZmM5NjI0NGVlMzJiMTJiZTAyNWRkZmQ3OGNmNDdmYmU0ZDMzZjMzOGZkNDAyMGE3NjNjYmMxMDFmYjZlM2E"
                                          alt="Colombia">
                                  </span>
                                  <span class="coc-country-name">
                                      <a href="https://corona.co/" title="Colombia">Colombia</a></span>
                              </div>
                              <span class="country-select-arrow">
                                  <svg class="icon icon-chevron-down-sm">
                                      <use xlink:href="icons.svg#icon-chevron-down-sm">
                                      </use>
                                  </svg>
                              </span>
                          </div>
                          <div class="coc-country-selector-options">
                              <div class="coc-country-option">
                                  <span style=" width: 13px; height: 13px; ">
                                      <img src="https://corona.co/medias/mexico-flag.svg?context=bWFzdGVyfGltYWdlc3w1ODkzfGltYWdlL3N2Zyt4bWx8YURCakwyaGhOaTg0TnprMk1UWTJOVGcyTXprNEwyMWxlR2xqYnkxbWJHRm5Mbk4yWnd8NDhmYWI1ZTEyOWEwZTQ0ZDEyYjljODYzYThlNzNhODUxYzczMWE5ZDQ3NGU5NGUxOGFkYWY2YTcyZjViOTNiYg"
                                          alt="México">
                                  </span>
                                  <span class="coc-country-name">
                                      <a href="https://www.coronamexico.com/" title="México">México</a></span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="coc-nav_top corona-co">
                  <div class="coc-logo">
                      <div class="yCmsComponent yComponentWrapper">
                          <div class="banner__component simple-banner coc-simple-banner">
                              <a href="https://corona.co/"><img title="Corona" alt="Corona"
                                      src="/img/menu/logo-corona.svg"></a>
                          </div>
      
                      </div>
                  </div>
                  <div class="coc-mega-menu">
                      <ul class="coc-mega-menu-items " role="menu">
                          <li class="first-level coc-mega-menu-item coc-menu-parent ">
                              <a href="https://corona.co/productos/c/categories" title="Productos">Productos</a><span
                                  class="coc-menu-sub-action js-coc-menu-sub-action">
                                  <div class="sub-action-icon">
                                      <svg class="icon icon-chevron-right">
                                          <use
                                              xlink:href="icons.svg#icon-chevron-right">
                                          </use>
                                      </svg>
                                  </div>
                              </span>
                              <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                  <li class="coc-mega-menu-item coc-mega-menu-back">
                                      <span class="coc-menu-sub-action js-sub-menu-back">
                                          <svg class="icon icon-chevron-left">
                                              <use
                                                  xlink:href="icons.svg#icon-chevron-left">
                                              </use>
                                          </svg>
                                      </span>
                                      <h2>Productos</h2>
                                  </li>
      
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/lanzamientos" title="Lanzamientos">Lanzamientos</a>
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/sanitarios/c/sanitarios"
                                          title="Sanitarios">Sanitarios</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Sanitarios</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/sanitarios/sanitarios-individuales/c/sanitarios-individuales"
                                                  title="Sanitarios Individuales">Sanitarios Individuales</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/sanitarios/combos-sanitarios/c/combos-sanitarios"
                                                  title="Combos Sanitarios">Combos Sanitarios</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/asientos-sanitarios/c/asientos-sanitarios"
                                                  title="asientos sanitarios ">asientos sanitarios </a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/c/sanitarios?q=:relevance:uso:institucional"
                                                  title="Sanitarios Institucionales">Sanitarios Institucionales</a>
                                          </li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/revestimientos/pisos/c/pisos"
                                          title="Pisos">Pisos</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Pisos</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/pisos/pisos-exteriores/c/pisos-exteriores"
                                                  title="Pisos para Exteriores">Pisos para Exteriores</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/pisos/guardaescobas/c/guardaescobas"
                                                  title="Guardaescobas">Guardaescobas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/pisos/gres-porcelanico/c/porcelanato?sort=relevance&amp;q=%3Astock-priority&amp;show=Page#"
                                                  title="Porcelanato">Porcelanato</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/pisos/pisos-maderas/c/pisos-maderas"
                                                  title="Maderas">Maderas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/pisos/pisos-marmolizados-brillantes/c/pisos-marmolizados-brillantes"
                                                  title="Marmolizados Brillantes">Marmolizados Brillantes</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/pisos/pisos-acabado-mate/c/pisos-acabado-mate"
                                                  title="Acabado Mate">Acabado Mate</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/pisos/pisos-planos/c/pisos-planos"
                                                  title="Planos">Planos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/pisos/pisos-con-alta-resistencia-al-deslizamiento/c/pisos-ard"
                                                  title="Alta Resistencia al Deslizamiento">Alta Resistencia al
                                                  Deslizamiento</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pisos-importados/c/pisos-importados"
                                                  title="Pisos de gran formato">Pisos de gran formato</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/pisos/escalones/c/escalones"
                                                  title="Escalones">Escalones</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/piscinas/c/piscinas"
                                                  title="Piscinas">Piscinas</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/griferias" title="Griferías">Griferías</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Griferías</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/griferias/griferia-para-lavamanos/c/griferia-para-lavamanos"
                                                  title="Griferías para Lavamanos">Griferías para Lavamanos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/griferias/griferia-para-lavaplatos/c/griferia-para-lavaplatos"
                                                  title="Griferías para Lavaplatos">Griferías para Lavaplatos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/griferias/griferia-para-lavaderos/c/griferia-para-lavaderos"
                                                  title="Griferías para Lavaderos">Griferías para Lavaderos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/c/griferias?q=:relevance:uso:institucional"
                                                  title="Griferías Institucionales">Griferías Institucionales</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/duchas/c/duchas"
                                                  title="Griferías para Duchas">Griferías para Duchas</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/revestimientos/decorados/c/decorados"
                                          title="Decorados">Decorados</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Decorados</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/hidraulicos/c/hidraulicos"
                                                  title="Hidráulicos">Hidráulicos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pinturas/c/pinturas"
                                                  title="Pinturas">Pinturas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/decorados/mosaicos/c/mosaicos"
                                                  title="Mosaicos">Mosaicos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/decorados/cenefas/c/cenefas"
                                                  title="Cenefas">Cenefas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/decorados/base-decorada/c/base-decorada"
                                                  title="Base Decorada">Base Decorada</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/pisos/escalones/c/escalones"
                                                  title="Escalones">Escalones</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/piscinas/c/piscinas"
                                                  title="Piscinas">Piscinas</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/revestimientos/paredes/c/paredes"
                                          title="Paredes">Paredes</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Paredes</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/c/revestimientos?q=%3Arelevance%3Acategory%3Aparedes%3Acategory%3Aparedes-blancas"
                                                  title="Paredes blancas">Paredes blancas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/paredes/fachaleta/c/fachaleta"
                                                  title="Fachaletas">Fachaletas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/paredes/paredes-marmolizadas-brillantes/c/paredes-marmolizadas-brillantes"
                                                  title="Marmolizadas Brillantes">Marmolizadas Brillantes</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/paredes/paredes-acabado-mate/c/paredes-acabado-mate"
                                                  title="Acabado Mate">Acabado Mate</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/paredes/paredes-decoradas/c/paredes-decoradas"
                                                  title="Decoradas">Decoradas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                          </li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/decorados/mosaicos/c/mosaicos"
                                                  title="Mosaicos">Mosaicos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/decorados/cenefas/c/cenefas"
                                                  title="Cenefas">Cenefas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/revestimientos/decorados/base-decorada/c/base-decorada"
                                                  title="Base Decorada">Base Decorada</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pinturas/c/pinturas"
                                                  title="Pinturas">Pinturas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/piscinas/c/piscinas"
                                                  title="Piscinas">Piscinas</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/pisos-importados/c/pisos-importados"
                                          title="Pisos Importados">Pisos Importados</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/pinturas/c/pinturas"
                                          title="Pinturas">Pinturas</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Pinturas</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pinturas/pinturas-para-techo/c/pinturas-para-techo"
                                                  title="Pinturas para Techo">Pinturas para Techo</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pinturas/pinturas-para-exteriores/c/pinturas-para-exteriores"
                                                  title="Pinturas para Exteriores">Pinturas para Exteriores</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pinturas/pinturas-para-interiores/c/pinturas-para-interiores"
                                                  title="Pinturas para Interiores">Pinturas para Interiores</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pinturas/pinturas-para-especialidades/c/pinturas-para-especialidades"
                                                  title="Pinturas para Especialidades">Pinturas para
                                                  Especialidades</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pinturas/pinturas-para-maderas/c/pinturas-para-maderas"
                                                  title="Pinturas para Maderas">Pinturas para Maderas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pinturas/esmaltes/c/esmaltes"
                                                  title="Esmaltes">Esmaltes</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/herramientas/c/herramientas"
                                                  title="Herramientas">Herramientas</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/sanitarios/asientos-sanitarios/c/asientos-sanitarios"
                                          title="Asientos Sanitarios">Asientos Sanitarios</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/lavamanos/c/lavamanos"
                                          title="Lavamanos">Lavamanos</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Lavamanos</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/lavamanos-individuales"
                                                  title="Lavamanos Individuales">Lavamanos Individuales</a><span
                                                  class="coc-menu-sub-action js-coc-menu-sub-action">
                                                  <div class="sub-action-icon">
                                                      <svg class="icon icon-chevron-right">
                                                          <use
                                                              xlink:href="icons.svg#icon-chevron-right">
                                                          </use>
                                                      </svg>
                                                  </div>
                                              </span>
                                              <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                                  <li class="coc-mega-menu-item coc-mega-menu-back">
                                                      <span class="coc-menu-sub-action js-sub-menu-back">
                                                          <svg class="icon icon-chevron-left">
                                                              <use
                                                                  xlink:href="icons.svg#icon-chevron-left">
                                                              </use>
                                                          </svg>
                                                      </span>
                                                      <h2>Lavamanos Individuales</h2>
                                                  </li>
      
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/lavamanos/lavamanos-clasicos/c/lavamanos-clasicos"
                                                          title="Lavamanos clásicos">Lavamanos clásicos</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/lavamanos/lavamanos-tipo-vessel/c/lavamanos-tipo-vessel"
                                                          title="Lavamanos vessel">Lavamanos vessel</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/lavamanos/lavamanos-para-incrustar/c/lavamanos-para-incrustar"
                                                          title="Lavamanos para incrustar">Lavamanos para
                                                          incrustar</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/lavamanos/lavamanos-para-sobreponer/c/lavamanos-para-sobreponer"
                                                          title="Lavamanos para Sobreponer">Lavamanos para
                                                          Sobreponer</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/lavamanos/estaciones-de-lavado/c/estaciones-de-lavado"
                                                          title="Estaciones de lavado">Estaciones de lavado</a></li>
                                              </ul>
      
                                          </li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/griferias/griferia-para-lavamanos/c/griferia-para-lavamanos"
                                                  title="Griferías para Lavamanos">Griferías para Lavamanos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/muebles-para-banos/muebles-con-lavamanos/c/muebles-con-lavamanos"
                                                  title="Lavamanos con Mueble">Lavamanos con Mueble</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/muebles-para-banos/muebles-para-vessel/c/muebles-para-vessel"
                                                  title="Muebles para Lavamanos Vessel">Muebles para Lavamanos
                                                  Vessel</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/lavamanos-complementos"
                                                  title="Complementos">Complementos</a><span
                                                  class="coc-menu-sub-action js-coc-menu-sub-action">
                                                  <div class="sub-action-icon">
                                                      <svg class="icon icon-chevron-right">
                                                          <use
                                                              xlink:href="icons.svg#icon-chevron-right">
                                                          </use>
                                                      </svg>
                                                  </div>
                                              </span>
                                              <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                                  <li class="coc-mega-menu-item coc-mega-menu-back">
                                                      <span class="coc-menu-sub-action js-sub-menu-back">
                                                          <svg class="icon icon-chevron-left">
                                                              <use
                                                                  xlink:href="icons.svg#icon-chevron-left">
                                                              </use>
                                                          </svg>
                                                      </span>
                                                      <h2>Complementos</h2>
                                                  </li>
      
                                              </ul>
      
                                          </li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/duchas/c/duchas"
                                          title="Duchas">Duchas</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Duchas</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/duchas/teleducha/c/teleducha"
                                                  title="Teleduchas">Teleduchas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/duchas/torres-de-ducha/c/torres-de-ducha"
                                                  title="Torres de Ducha">Torres de Ducha</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/duchas/regaderas/c/regaderas"
                                                  title="Regaderas">Regaderas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/accesorios/accesorios-individuales/c/accesorios-individuales"
                                                  title="Complementos">Complementos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/duchas/regaderas-con-mezclador/c/regaderas-con-mezclador"
                                                  title="Regaderas con mezclador">Regaderas con mezclador</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/duchas/mezcladores-y-registros/c/mezcladores-y-registros"
                                                  title="Mezcladores con registros">Mezcladores con registros</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/tinas-e-hidromasajes/c/tinas-e-hidromasajes"
                                          title="Tinas e Hidromasajes">Tinas e Hidromasajes</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/plomeria/c/plomeria"
                                          title="Plomería">Plomería</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Plomería</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/plomeria/canastillas-desagues-y-sifones/c/canastillas-desagues-y-sifones"
                                                  title="Desagües y Sifones">Desagües y Sifones</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/plomeria/regulaciones-y-acoples/c/regulaciones-y-acoples"
                                                  title="Regulaciones y Acoples">Regulaciones y Acoples</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/plomeria/valvulas-y-llaves-de-paso/c/valvulas-y-llaves-de-paso"
                                                  title="Válvulas">Válvulas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/plomeria/repuestos-para-plomeria/c/repuestos-plomeria"
                                                  title="Repuestos de Plomería">Repuestos de Plomería</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/repuestos/c/repuestos"
                                          title="Repuestos ">Repuestos </a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/muebles-para-cocinas/c/muebles-para-cocinas"
                                          title="Muebles para cocina">Muebles para cocina</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Muebles para Cocinas</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/muebles-para-cocinas/cocinas-listas-para-armar/c/cocinas"
                                                  title="Cocinas listas para armar">Cocinas listas para armar</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/muebles-para-cocinas/alacenas/c/alacenas"
                                                  title="Alacenas">Alacenas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/muebles-para-cocinas/barras/c/barras"
                                                  title="Barras">Barras</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/griferias/griferia-para-lavaplatos/c/griferia-para-lavaplatos"
                                                  title="Griferías para Cocinas">Griferías para Cocinas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/lavaplatos/c/lavaplatos"
                                                  title="Lavaplatos">Lavaplatos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/electrodomesticos/c/electrodomesticos"
                                                  title="electrodomésticos">electrodomésticos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/gasodomesticos/c/gasodomesticos"
                                                  title="Gasodomésticos">Gasodomésticos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/griferias/griferia-para-lavaderos/c/griferia-para-lavaderos"
                                                  title="Griferías para lavaderos">Griferías para lavaderos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/lavaderos/c/lavaderos"
                                                  title="Lavaderos">Lavaderos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://www.vajillascorona.com.co/?utm_source=corona.co&amp;utm_medium=referral&amp;utm_campaign=corona.co"
                                                  title="Vajillas">Vajillas</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/muebles-para-banos/c/muebles-para-banos"
                                          title="Muebles para Baños">Muebles para Baños</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Muebles para Baños</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/muebles-para-banos/gabinetes/c/gabinetes"
                                                  title="Gabinetes">Gabinetes</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/muebles-para-banos/muebles-con-lavamanos/c/muebles-con-lavamanos"
                                                  title="Muebles con Lavamanos">Muebles con Lavamanos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/muebles-para-banos/muebles-para-vessel/c/muebles-para-vessel"
                                                  title="Muebles para Lavamanos Vessel">Muebles para Lavamanos
                                                  Vessel</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/espejos/c/espejos"
                                                  title="Espejos">Espejos</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/muebles-para-banos/muebles-en-combo/c/muebles-en-combo"
                                                  title="Muebles en Combo">Muebles en Combo</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/materiales-de-construccion"
                                          title="Materiales de Construcción">Materiales de Construcción</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Materiales de Construcción</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pegantes/c/pegantes"
                                                  title="Pegantes">Pegantes</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/boquillas/c/boquillas"
                                                  title="Boquillas">Boquillas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/impermeabilizantes/c/impermeabilizantes"
                                                  title="impermeabilizantes">impermeabilizantes</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/obra-gris/c/obra-gris"
                                                  title="Obra gris">Obra gris</a><span
                                                  class="coc-menu-sub-action js-coc-menu-sub-action">
                                                  <div class="sub-action-icon">
                                                      <svg class="icon icon-chevron-right">
                                                          <use
                                                              xlink:href="icons.svg#icon-chevron-right">
                                                          </use>
                                                      </svg>
                                                  </div>
                                              </span>
                                              <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                                  <li class="coc-mega-menu-item coc-mega-menu-back">
                                                      <span class="coc-menu-sub-action js-sub-menu-back">
                                                          <svg class="icon icon-chevron-left">
                                                              <use
                                                                  xlink:href="icons.svg#icon-chevron-left">
                                                              </use>
                                                          </svg>
                                                      </span>
                                                      <h2>Obra gris</h2>
                                                  </li>
      
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/obra-gris/morteros/c/morteros"
                                                          title="Morteros">Morteros</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/obra-gris/aditivos/c/aditivos"
                                                          title="Aditivos">Aditivos</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/obra-gris/sellos/c/sellos"
                                                          title="Sellos">Sellos</a></li>
                                              </ul>
      
                                          </li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/acabados/c/acabados"
                                                  title="Acabados">Acabados</a><span
                                                  class="coc-menu-sub-action js-coc-menu-sub-action">
                                                  <div class="sub-action-icon">
                                                      <svg class="icon icon-chevron-right">
                                                          <use
                                                              xlink:href="icons.svg#icon-chevron-right">
                                                          </use>
                                                      </svg>
                                                  </div>
                                              </span>
                                              <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                                  <li class="coc-mega-menu-item coc-mega-menu-back">
                                                      <span class="coc-menu-sub-action js-sub-menu-back">
                                                          <svg class="icon icon-chevron-left">
                                                              <use
                                                                  xlink:href="icons.svg#icon-chevron-left">
                                                              </use>
                                                          </svg>
                                                      </span>
                                                      <h2>Acabados</h2>
                                                  </li>
      
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/acabados/yesos/c/yesos"
                                                          title="Yesos">Yesos</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/acabados/estucos/c/estucos"
                                                          title="Estucos">Estucos</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/acabados/drywall/c/drywall"
                                                          title="Drywall">Drywall</a></li>
                                              </ul>
      
                                          </li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/limpiadores/c/limpiadores"
                                                  title="LIMPIADORES">LIMPIADORES</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/institucional"
                                          title="Institucional">Institucional</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Institucional</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/c/orinales?q=:relevance:uso:institucional"
                                                  title="Orinales">Orinales</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/griferias/griferias-institucionales/c/griferias-institucionales"
                                                  title="Griferías">Griferías</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/accesorios/c/accesorios?q=%3Arelevance%3Auso%3AInstitucional%3Acategory%3Aaccesorios-individuales"
                                                  title="Accesorios Individuales">Accesorios Individuales</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/accesorios/c/accesorios?q=%3Arelevance%3Auso%3AInstitucional%3Acategory%3Asecadores"
                                                  title="Secadores">Secadores</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/sanitarios/sanitarios-individuales/c/sanitarios-individuales?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                  title="Sanitarios">Sanitarios</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/sanitarios/tazas/c/tazas"
                                                  title="Tazas">Tazas</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/muebles-para-banos/muebles-con-lavamanos/c/muebles-con-lavamanos?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                  title="Estaciones de lavado">Estaciones de lavado</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/pisos-institucionales"
                                                  title="Pisos">Pisos</a><span
                                                  class="coc-menu-sub-action js-coc-menu-sub-action">
                                                  <div class="sub-action-icon">
                                                      <svg class="icon icon-chevron-right">
                                                          <use
                                                              xlink:href="icons.svg#icon-chevron-right">
                                                          </use>
                                                      </svg>
                                                  </div>
                                              </span>
                                              <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                                  <li class="coc-mega-menu-item coc-mega-menu-back">
                                                      <span class="coc-menu-sub-action js-sub-menu-back">
                                                          <svg class="icon icon-chevron-left">
                                                              <use
                                                                  xlink:href="icons.svg#icon-chevron-left">
                                                              </use>
                                                          </svg>
                                                      </span>
                                                      <h2>Pisos</h2>
                                                  </li>
      
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/pisos/pisos-exteriores/c/pisos-exteriores?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Pisos para Exteriores">Pisos para Exteriores</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/c/guardaescobas?q=:relevance:uso:institucional"
                                                          title="Guardaescobas">Guardaescobas</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/pisos/porcelanato/c/porcelanato?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Porcelanato">Porcelanato</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/pisos/pisos-maderas/c/pisos-maderas?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Maderas">Maderas</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/materiales-de-construccion"
                                                          title="Pegantes y Boquillas">Pegantes y Boquillas</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/limpiadores/c/limpiadores"
                                                          title="LIMPIADORES">LIMPIADORES</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/pisos/pisos-marmolizados-brillantes/c/pisos-marmolizados-brillantes?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Marmolizados Brillantes">Marmolizados Brillantes</a>
                                                  </li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/paredes/paredes-acabado-mate/c/paredes-acabado-mate?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Acabado Mate">Acabado Mate</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/pisos/pisos-planos/c/pisos-planos?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Planos">Planos</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/pisos/pisos-con-alta-resistencia-al-deslizamiento/c/pisos-ard?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Alta Resistencia al Deslizamiento">Alta Resistencia
                                                          al Deslizamiento</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/obra-gris/c/obra-gris"
                                                          title="Obra gris">Obra gris</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/herramientas/c/herramientas"
                                                          title="Herramientas">Herramientas</a></li>
                                              </ul>
      
                                          </li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/paredes-institucionales"
                                                  title="Paredes">Paredes</a><span
                                                  class="coc-menu-sub-action js-coc-menu-sub-action">
                                                  <div class="sub-action-icon">
                                                      <svg class="icon icon-chevron-right">
                                                          <use
                                                              xlink:href="icons.svg#icon-chevron-right">
                                                          </use>
                                                      </svg>
                                                  </div>
                                              </span>
                                              <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                                  <li class="coc-mega-menu-item coc-mega-menu-back">
                                                      <span class="coc-menu-sub-action js-sub-menu-back">
                                                          <svg class="icon icon-chevron-left">
                                                              <use
                                                                  xlink:href="icons.svg#icon-chevron-left">
                                                              </use>
                                                          </svg>
                                                      </span>
                                                      <h2>Paredes</h2>
                                                  </li>
      
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/paredes/fachaleta/c/fachaleta?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Fachaletas">Fachaletas</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/paredes/paredes-marmolizadas-brillantes/c/paredes-marmolizadas-brillantes?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Marmolizadas Brillantes">Marmolizadas Brillantes</a>
                                                  </li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/c/paredes-acabado-mate?q=:relevance:uso:institucional"
                                                          title="Acabado Mate">Acabado Mate</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/paredes/paredes-decoradas/c/paredes-decoradas?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Decoradas">Decoradas</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/paredes/paredes-planas/c/paredes-planas?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Planas">Planas</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/decorados/mosaicos/c/mosaicos?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Mosaicos">Mosaicos</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/c/cenefas?q=:relevance:uso:institucional"
                                                          title="Cenefas">Cenefas</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/revestimientos/decorados/base-decorada/c/base-decorada?q=%3Arelevance%3Auso%3AInstitucional&amp;text=#"
                                                          title="Base Decorada">Base Decorada</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/pinturas/c/pinturas"
                                                          title="Pinturas">Pinturas</a></li>
                                                  <li class="coc-mega-menu-item coc-menu-parent">
                                                      <a href="https://corona.co/productos/herramientas/c/herramientas"
                                                          title="Herramientas">Herramientas</a></li>
                                              </ul>
      
                                          </li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/limpiadores/c/limpiadores"
                                                  title="LIMPIADORES">LIMPIADORES</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/pinturas/pinturas-para-especialidades/c/pinturas-para-especialidades"
                                                  title="Pinturas institucionales link">Pinturas institucionales
                                                  link</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/electrodomesticos/c/electrodomesticos"
                                          title="Electrodomésticos">Electrodomésticos</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/accesorios-para-banos"
                                          title="Accesorios para Baño">Accesorios para Baño</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Accesorios para Baño</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/accesorios/accesorios-individuales/c/accesorios-individuales"
                                                  title="Accesorios Individuales">Accesorios Individuales</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/accesorios/kit-de-accesorios/c/kit-de-accesorios"
                                                  title="Kits de Accesorios">Kits de Accesorios</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/espejos/c/espejos"
                                                  title="Espejos">Espejos</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/lavaplatos/c/lavaplatos"
                                          title="lavaplatos">lavaplatos</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/herramientas/c/herramientas"
                                          title="Herramientas">Herramientas</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://www.vajillascorona.com.co/?utm_source=corona.co&amp;utm_medium=referral&amp;utm_campaign=corona.co"
                                          title="Vajillas" target="_blank" rel="noopener noreferrer">Vajillas</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/molduras/c/molduras"
                                          title="Molduras">Molduras</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/guia-de-compras" title="Guías de compras">Guías de
                                          compras</a></li>
                              </ul>
      
                              <div class="coc-mega-menu-desktop hidden-xs hidden-sm">
                                  <div class="menu-item-list-wp menu-item-list-expanded">
                                      <div class="megamenu-side megamenu-side-left">
                                          <div class="megamenu-line"></div>
                                      </div>
                                      <div class="megamenu-side megamenu-side-right">
                                          <div class="megamenu-line"></div>
                                      </div>
                                      <div class="menu-item-list">
                                          <div class="megamenu-line"></div>
                                          <ul class="coc-menu-item-desktop md-no-left-border lg-no-left-border ">
                                              <li class="highlighted">
                                                  <a href="https://corona.co/lanzamientos"
                                                      title="Lanzamientos">Lanzamientos</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/sanitarios/c/sanitarios"
                                                      title="Sanitarios">Sanitarios</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/revestimientos/pisos/c/pisos"
                                                      title="Pisos">Pisos</a></li>
                                              <li>
                                                  <a href="https://corona.co/griferias"
                                                      title="Griferías">Griferías</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/revestimientos/decorados/c/decorados"
                                                      title="Decorados">Decorados</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/revestimientos/paredes/c/paredes"
                                                      title="Paredes">Paredes</a></li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop ">
                                              <li>
                                                  <a href="https://corona.co/productos/pisos-importados/c/pisos-importados"
                                                      title="Pisos Importados">Pisos Importados</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/pinturas/c/pinturas"
                                                      title="Pinturas">Pinturas</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/sanitarios/asientos-sanitarios/c/asientos-sanitarios"
                                                      title="Asientos Sanitarios">Asientos Sanitarios</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/lavamanos/c/lavamanos"
                                                      title="Lavamanos">Lavamanos</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/duchas/c/duchas"
                                                      title="Duchas">Duchas</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/tinas-e-hidromasajes/c/tinas-e-hidromasajes"
                                                      title="Tinas e Hidromasajes">Tinas e Hidromasajes</a></li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop md-no-border ">
                                              <li>
                                                  <a href="https://corona.co/productos/plomeria/c/plomeria"
                                                      title="Plomería">Plomería</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/repuestos/c/repuestos"
                                                      title="Repuestos ">Repuestos </a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/muebles-para-cocinas/c/muebles-para-cocinas"
                                                      title="Muebles para cocina">Muebles para cocina</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/muebles-para-banos/c/muebles-para-banos"
                                                      title="Muebles para Baños">Muebles para Baños</a></li>
                                              <li>
                                                  <a href="https://corona.co/materiales-de-construccion"
                                                      title="Materiales de Construcción">Materiales de
                                                      Construcción</a></li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop md-no-left-border ">
                                              <li>
                                                  <a href="https://corona.co/institucional"
                                                      title="Institucional">Institucional</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/electrodomesticos/c/electrodomesticos"
                                                      title="Electrodomésticos">Electrodomésticos</a></li>
                                              <li>
                                              </li>
                                              <li>
                                                  <a href="https://corona.co/accesorios-para-banos"
                                                      title="Accesorios para Baño">Accesorios para Baño</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/lavaplatos/c/lavaplatos"
                                                      title="lavaplatos">lavaplatos</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/herramientas/c/herramientas"
                                                      title="Herramientas">Herramientas</a></li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop lg-no-border ">
                                              <li>
                                                  <a href="https://www.vajillascorona.com.co/?utm_source=corona.co&amp;utm_medium=referral&amp;utm_campaign=corona.co"
                                                      title="Vajillas" target="_blank"
                                                      rel="noopener noreferrer">Vajillas</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/molduras/c/molduras"
                                                      title="Molduras">Molduras</a></li>
                                              <li>
                                              </li>
                                              <li>
                                                  <a href="https://corona.co/guia-de-compras"
                                                      title="Guías de compras">Guías de compras</a></li>
                                          </ul>
                                      </div>
                                      <div class="coc-menu-banner">
                                          <div class="megamenu-line"></div>
                                          <div class="coc-menu-banner_image"
                                              style="background-image: url(&#39;https://corona.co/medias/corona-catalogo.jpg?context=bWFzdGVyfGltYWdlc3wyNzgwMXxpbWFnZS9qcGVnfGFERmxMMmd3TUM4NE9EZzVNVEV6TnpjeU1EWXlMMk52Y205dVlWOWpZWFJoYkc5bmJ5NXFjR2N8OTIyOWRiMTU0YjU2NTNjNTZjM2JlMGNjY2U5NTdiZDI1YTk0ZTdjNjYwZjQ5ZWI0YTZiOWY5M2IwODVhMjNiOQ&#39;)">
                                          </div>
                                          <p class="coc-menu-banner_description">Consulta los catálogos en PDF</p>
                                          <a href="https://corona.co/catalogo" class="coc-menu-banner_cta">Ir a la
                                              sección</a>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li class="first-level coc-mega-menu-item coc-menu-parent ">
                              <a href="https://corona.co/ambientes" title="Ambientes">Ambientes</a><span
                                  class="coc-menu-sub-action js-coc-menu-sub-action">
                                  <div class="sub-action-icon">
                                      <svg class="icon icon-chevron-right">
                                          <use
                                              xlink:href="icons.svg#icon-chevron-right">
                                          </use>
                                      </svg>
                                  </div>
                              </span>
                              <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                  <li class="coc-mega-menu-item coc-mega-menu-back">
                                      <span class="coc-menu-sub-action js-sub-menu-back">
                                          <svg class="icon icon-chevron-left">
                                              <use
                                                  xlink:href="icons.svg#icon-chevron-left">
                                              </use>
                                          </svg>
                                      </span>
                                      <h2>Ambientes</h2>
                                  </li>
      
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/ambientes-banos" title="Baños">Baños</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Baños</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-banos/bano-privado"
                                                  title="Baño privado">Baño privado</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-banos/bano-social"
                                                  title="Baño social">Baño social</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-banos/bano-seguro"
                                                  title="Baño seguro">Baño seguro</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/ambientes-interiores"
                                          title="Interiores">Interiores</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Ambientes Interiores</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-interiores/alcoba"
                                                  title="Alcoba">Alcoba</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-interiores/sala"
                                                  title="Sala">Sala</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-interiores/comedor"
                                                  title="Comedor">Comedor</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-interiores/estudio"
                                                  title="Estudio">Estudio</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/ambientes-exteriores"
                                          title="Exteriores">Exteriores</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Exteriores</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-exteriores/balcon"
                                                  title="Balcón">Balcón</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-exteriores/terraza"
                                                  title="Terraza">Terraza</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-exteriores/piscina"
                                                  title="Piscina">Piscina</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-exteriores/espacios-abiertos"
                                                  title="Espacios abiertos">Espacios abiertos</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/ambientes-cocinas" title="Cocinas">Cocinas</a><span
                                          class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Cocinas</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-cocinas/cocina-lineal"
                                                  title="Cocina lineal">Cocina lineal</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-cocinas/cocina-lineal-con-isla"
                                                  title="Cocina lineal con isla">Cocina lineal con isla</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/ambientes-cocinas/cuarto-de-lavado"
                                                  title="Cuarto de lavado">Cuarto de lavado</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/simuladores" title="Simuladores">Simuladores</a></li>
                              </ul>
      
                              <div class="coc-mega-menu-desktop hidden-xs hidden-sm">
                                  <div class="menu-item-list-wp menu-item-list-expanded">
                                      <div class="megamenu-side megamenu-side-left">
                                          <div class="megamenu-line"></div>
                                      </div>
                                      <div class="megamenu-side megamenu-side-right">
                                          <div class="megamenu-line"></div>
                                      </div>
                                      <div class="menu-item-list">
                                          <div class="megamenu-line"></div>
                                          <ul class="coc-menu-item-desktop md-no-left-border lg-no-left-border ">
                                              <li class="node-title ">
                                                  <a href="https://corona.co/ambientes-banos" title="Baños">Baños</a>
                                              </li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-banos/bano-privado"
                                                      title="Baño privado">Baño privado</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-banos/bano-social"
                                                      title="Baño social">Baño social</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-banos/bano-seguro"
                                                      title="Baño seguro">Baño seguro</a></li>
                                              <li class="view-all-node">
                                                  <a href="https://corona.co/ambientes-banos">Ver todos</a>
                                              </li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop ">
                                              <li class="node-title ">
                                                  <a href="https://corona.co/ambientes-interiores"
                                                      title="Interiores">Interiores</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-interiores/alcoba"
                                                      title="Alcoba">Alcoba</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-interiores/sala"
                                                      title="Sala">Sala</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-interiores/comedor"
                                                      title="Comedor">Comedor</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-interiores/estudio"
                                                      title="Estudio">Estudio</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-interiores/pasillo"
                                                      title="Pasillo">Pasillo</a></li>
                                              <li class="view-all-node">
                                                  <a href="https://corona.co/ambientes-interiores">Ver todos</a>
                                              </li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop md-no-border ">
                                              <li class="node-title ">
                                                  <a href="https://corona.co/ambientes-exteriores"
                                                      title="Exteriores">Exteriores</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-exteriores/balcon"
                                                      title="Balcón">Balcón</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-exteriores/terraza"
                                                      title="Terraza">Terraza</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-exteriores/piscina"
                                                      title="Piscina">Piscina</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-exteriores/espacios-abiertos"
                                                      title="Espacios abiertos">Espacios abiertos</a></li>
                                              <li class="view-all-node">
                                                  <a href="https://corona.co/ambientes-exteriores">Ver todos</a>
                                              </li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop md-no-left-border ">
                                              <li class="node-title ">
                                                  <a href="https://corona.co/ambientes-cocinas"
                                                      title="Cocinas">Cocinas</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-cocinas/cocina-lineal"
                                                      title="Cocina lineal">Cocina lineal</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-cocinas/cocina-lineal-con-isla"
                                                      title="Cocina lineal con isla">Cocina lineal con isla</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-cocinas/cuarto-de-lavado"
                                                      title="Cuarto de lavado">Cuarto de lavado</a></li>
                                              <li class="view-all-node">
                                                  <a href="https://corona.co/ambientes-cocinas">Ver todos</a>
                                              </li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop lg-no-border ">
                                              <li class="node-title ">
                                                  <a href="https://corona.co/ambientes-institucionales"
                                                      title="Institucionales">Institucionales</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-institucionales/banos"
                                                      title="Baños">Baños</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-institucionales/oficinas"
                                                      title="Oficinas">Oficinas</a></li>
                                              <li>
                                                  <a href="https://corona.co/ambientes-institucionales/cafeterias"
                                                      title="Cafeterías">Cafeterías</a></li>
                                              <li>
                                              </li>
                                              <li class="view-all-node">
                                                  <a href="https://corona.co/ambientes-institucionales">Ver todos</a>
                                              </li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop lg-no-left-border md-no-border ">
                                              <li class="node-title ">
                                                  <a href="https://corona.co/simuladores"
                                                      title="Simuladores">Simuladores</a></li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop md-no-left-border ">
                                              <li class="node-title ">
                                              </li>
                                          </ul>
                                      </div>
                                      <div class="coc-menu-banner">
                                          <div class="megamenu-line"></div>
                                          <div class="coc-menu-banner_image"
                                              style="background-image: url(&#39;https://corona.co/medias/card-ambiente.jpg?context=bWFzdGVyfHJvb3R8MzI3Nzl8aW1hZ2UvanBlZ3xhREUxTDJnNU1TODVNekV4T1RnME1UZzVORGN3TDJOaGNtUXRZVzFpYVdWdWRHVXVhbkJufDM1NWExNTZjZDcwM2UxNTViOTVkNDdhMjFlODJmMzc5ZmNmYjMyNzMxMjg0MWVkNDVlMTM0MjRlNjdmNGMwZTY&#39;)">
                                          </div>
                                          <p class="coc-menu-banner_description">Visualiza tu espacio ideal</p>
                                          <a href="https://corona.co/simuladores" class="coc-menu-banner_cta">Ir a
                                              simuladores</a>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li class="first-level coc-mega-menu-item coc-menu-parent relative-node">
                              <a href="https://corona.co/productos/servicios/c/servicios"
                                  title="Servicios">Servicios</a><span
                                  class="coc-menu-sub-action js-coc-menu-sub-action">
                                  <div class="sub-action-icon">
                                      <svg class="icon icon-chevron-right">
                                          <use
                                              xlink:href="icons.svg#icon-chevron-right">
                                          </use>
                                      </svg>
                                  </div>
                              </span>
                              <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                  <li class="coc-mega-menu-item coc-mega-menu-back">
                                      <span class="coc-menu-sub-action js-sub-menu-back">
                                          <svg class="icon icon-chevron-left">
                                              <use
                                                  xlink:href="icons.svg#icon-chevron-left">
                                              </use>
                                          </svg>
                                      </span>
                                      <h2>Servicios</h2>
                                  </li>
      
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/servicios/asesorias/c/servicio-asesorias"
                                          title="Asesorías">Asesorías</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/productos/servicios/instalaciones/c/servicio-instalaciones"
                                          title="Instalaciones">Instalaciones</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/directorio-maestros"
                                          title="Directorio de maestros">Directorio de maestros</a></li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <a href="https://corona.co/financiacion" title="Financiación">Financiación</a>
                                  </li>
                              </ul>
      
                              <div class="menu-dropdown hidden-xs hidden-sm">
                                  <ul>
                                      <li>
                                          <a href="https://corona.co/productos/servicios/asesorias/c/servicio-asesorias"
                                              title="Asesorías">Asesorías</a></li>
                                      <li>
                                      </li>
                                      <li>
                                          <a href="https://corona.co/productos/servicios/instalaciones/c/servicio-instalaciones"
                                              title="Instalaciones">Instalaciones</a></li>
                                      <li>
                                      </li>
                                      <li>
                                      </li>
                                      <li>
                                      </li>
                                      <li>
                                          <a href="https://corona.co/directorio-maestros"
                                              title="Directorio de maestros">Directorio de maestros</a></li>
                                      <li>
                                          <a href="https://corona.co/financiacion"
                                              title="Financiación">Financiación</a></li>
                                  </ul>
                              </div>
                          </li>
                          <li class="first-level coc-mega-menu-item coc-menu-parent ">
                              <div class="coc-single-menu-item">
                                  <p style="line-height: 100%;margin: 0px;white-space: nowrap;">Planifica tu proyecto
                                  </p>
                              </div>
                              <span class="coc-menu-sub-action js-coc-menu-sub-action">
                                  <div class="sub-action-icon">
                                      <svg class="icon icon-chevron-right">
                                          <use
                                              xlink:href="icons.svg#icon-chevron-right">
                                          </use>
                                      </svg>
                                  </div>
                              </span>
                              <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                  <li class="coc-mega-menu-item coc-mega-menu-back">
                                      <span class="coc-menu-sub-action js-sub-menu-back">
                                          <svg class="icon icon-chevron-left">
                                              <use
                                                  xlink:href="icons.svg#icon-chevron-left">
                                              </use>
                                          </svg>
                                      </span>
                                      <h2>
                                          <p style="line-height: 100%;margin: 0px;white-space: nowrap;">Planifica tu
                                              proyecto</p>
                                      </h2>
                                  </li>
      
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <h4>Cómo elegir</h4>
                                      <span class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Cómo elegir</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/guias-de-compra/como-elegir-muebles-de-bano"
                                                  title="Muebles para baño ">Muebles para baño </a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/guias-de-compra/como-elegir-sanitarios"
                                                  title="El sanitario adecuado">El sanitario adecuado</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://tusolucion.corona.co/?origin=corona&amp;utm_source=referral&amp;utm_medium=corona.co&amp;utm_campaign=Traffic_Corona.co&amp;_gl=1*1dbdagt*_ga*MjA5NTk2MDY4MC4xNjkzNDQ5MjI2*_ga_7132HLKT6G*MTY5NDAyODg1MC4zMS4xLjE2OTQwMzQ2MzAuNTguMC4w"
                                                  title="Repuestos sanitarios" target="_blank"
                                                  rel="noopener noreferrer">Repuestos sanitarios</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/porque-comprar-pegacor"
                                                  title="El Pegacor ideal">El Pegacor ideal</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/guia-remodelar-casa"
                                                  title="Guía de remodelación">Guía de remodelación</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <h4>Míralo en tu espacio</h4>
                                      <span class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Míralo en tu espacio</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/simulador-de-ambientes"
                                                  title="Simula tu ambiente">Simula tu ambiente</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/simulador-pinturas-color-corona"
                                                  title="Pintura en tu espacio">Pintura en tu espacio</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/paleta-colores-corona"
                                                  title="Paleta de colores">Paleta de colores</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/c/realidad-aumentada"
                                                  title="Realidad aumentada">Realidad aumentada</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <h4>Aliados para tu proyecto</h4>
                                      <span class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Aliados para tu proyecto</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/directorio-maestros"
                                                  title="Buscar un maestro">Buscar un maestro</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/productos/servicios/instalaciones/c/servicio-instalaciones"
                                                  title="Servicios de instalación">Servicios de instalación</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/financiacion"
                                                  title="Financiación">Financiación</a></li>
                                      </ul>
      
                                  </li>
                                  <li class="coc-mega-menu-item coc-menu-parent">
                                      <h4>Por qué corona</h4>
                                      <span class="coc-menu-sub-action js-coc-menu-sub-action">
                                          <div class="sub-action-icon">
                                              <svg class="icon icon-chevron-right">
                                                  <use
                                                      xlink:href="icons.svg#icon-chevron-right">
                                                  </use>
                                              </svg>
                                          </div>
                                      </span>
                                      <ul class="coc-mega-menu-items coc-sub-menu hidden-md hidden-lg">
                                          <li class="coc-mega-menu-item coc-mega-menu-back">
                                              <span class="coc-menu-sub-action js-sub-menu-back">
                                                  <svg class="icon icon-chevron-left">
                                                      <use
                                                          xlink:href="icons.svg#icon-chevron-left">
                                                      </use>
                                                  </svg>
                                              </span>
                                              <h2>Por qué corona</h2>
                                          </li>
      
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/premios-disenos-corona"
                                                  title="Premios e innovación">Premios e innovación</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/sello-ambiental-colombiano"
                                                  title="Sello ambiental colombiano">Sello ambiental colombiano</a>
                                          </li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/acabado-antimicrobiano"
                                                  title="Protección antimicrobiana">Protección antimicrobiana</a></li>
                                          <li class="coc-mega-menu-item coc-menu-parent">
                                              <a href="https://corona.co/garantia-suplementaria-pegacor-revestimientos"
                                                  title="Garantía de por vida">Garantía de por vida</a></li>
                                      </ul>
      
                                  </li>
                              </ul>
      
                              <div class="coc-mega-menu-desktop hidden-xs hidden-sm">
                                  <div class="menu-item-list-wp menu-item-list-expanded">
                                      <div class="megamenu-side megamenu-side-left">
                                          <div class="megamenu-line"></div>
                                      </div>
                                      <div class="megamenu-side megamenu-side-right">
                                          <div class="megamenu-line"></div>
                                      </div>
                                      <div class="menu-item-list">
                                          <div class="megamenu-line"></div>
                                          <ul class="coc-menu-item-desktop md-no-left-border lg-no-left-border ">
                                              <li class="node-title">
                                                  <span>Cómo elegir</span>
                                              </li>
                                              <li>
                                                  <a href="https://corona.co/guias-de-compra/como-elegir-muebles-de-bano"
                                                      title="Muebles para baño ">Muebles para baño </a></li>
                                              <li>
                                              </li>
                                              <li>
                                                  <a href="https://corona.co/guias-de-compra/como-elegir-sanitarios"
                                                      title="El sanitario adecuado">El sanitario adecuado</a></li>
                                              <li>
                                                  <a href="https://tusolucion.corona.co/?origin=corona&amp;utm_source=referral&amp;utm_medium=corona.co&amp;utm_campaign=Traffic_Corona.co&amp;_gl=1*1dbdagt*_ga*MjA5NTk2MDY4MC4xNjkzNDQ5MjI2*_ga_7132HLKT6G*MTY5NDAyODg1MC4zMS4xLjE2OTQwMzQ2MzAuNTguMC4w"
                                                      title="Repuestos sanitarios" target="_blank"
                                                      rel="noopener noreferrer">Repuestos sanitarios</a></li>
                                              <li>
                                                  <a href="https://corona.co/porque-comprar-pegacor"
                                                      title="El Pegacor ideal">El Pegacor ideal</a></li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop ">
                                              <li class="node-title">
                                                  <span>Míralo en tu espacio</span>
                                              </li>
                                              <li>
                                                  <a href="https://corona.co/simulador-de-ambientes"
                                                      title="Simula tu ambiente">Simula tu ambiente</a></li>
                                              <li>
                                                  <a href="https://corona.co/simulador-pinturas-color-corona"
                                                      title="Pintura en tu espacio">Pintura en tu espacio</a></li>
                                              <li>
                                                  <a href="https://corona.co/paleta-colores-corona"
                                                      title="Paleta de colores">Paleta de colores</a></li>
                                              <li>
                                                  <a href="https://corona.co/c/realidad-aumentada"
                                                      title="Realidad aumentada">Realidad aumentada</a></li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop md-no-border ">
                                              <li class="node-title">
                                                  <span>Aliados para tu proyecto</span>
                                              </li>
                                              <li>
                                                  <a href="https://corona.co/directorio-maestros"
                                                      title="Buscar un maestro">Buscar un maestro</a></li>
                                              <li>
                                                  <a href="https://corona.co/productos/servicios/instalaciones/c/servicio-instalaciones"
                                                      title="Servicios de instalación">Servicios de instalación</a>
                                              </li>
                                              <li>
                                              </li>
                                              <li>
                                                  <a href="https://corona.co/financiacion"
                                                      title="Financiación">Financiación</a></li>
                                          </ul>
                                          <ul class="coc-menu-item-desktop md-no-left-border ">
                                              <li class="node-title">
                                                  <span>Por qué corona</span>
                                              </li>
                                              <li>
                                                  <a href="https://corona.co/premios-disenos-corona"
                                                      title="Premios e innovación">Premios e innovación</a></li>
                                              <li>
                                                  <a href="https://corona.co/sello-ambiental-colombiano"
                                                      title="Sello ambiental colombiano">Sello ambiental
                                                      colombiano</a></li>
                                              <li>
                                                  <a href="https://corona.co/acabado-antimicrobiano"
                                                      title="Protección antimicrobiana">Protección antimicrobiana</a>
                                              </li>
                                              <li>
                                                  <a href="https://corona.co/garantia-suplementaria-pegacor-revestimientos"
                                                      title="Garantía de por vida">Garantía de por vida</a></li>
                                          </ul>
                                      </div>
                                      <div class="coc-menu-banner">
                                          <div class="megamenu-line"></div>
                                          <div class="coc-menu-banner_image"
                                              style="background-image: url(&#39;https://corona.co/medias/Card-Guia-remodelacion-w-800.jpg?context=bWFzdGVyfGltYWdlc3w4MjkzNHxpbWFnZS9qcGVnfGFHTmtMMmhrTkM4NU56SXdNamt5TXpjMk5qQTJMME5oY21RdFIzVnBZUzF5WlcxdlpHVnNZV05wYjI0dGR5MDRNREF1YW5Cbnw4MTU0NDgxZGVmZDg2OTA3MjBhNjE1NWJmNjMwMTA0OTBjYjE1Y2U3ZTU2ZDQyMGE3YjlmYmU5YjJkMmRiYzVj&#39;)">
                                          </div>
                                          <p class="coc-menu-banner_description">¿Vas a remodelar tu casa? Te contamos
                                              por dónde empezar</p>
                                          <a href="https://corona.co/guia-remodelar-casa"
                                              class="coc-menu-banner_cta">Consulta nuestra guía</a>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li class="first-level coc-mega-menu-item coc-menu-parent ">
                              <a href="https://inspirame.corona.co/?utm_source=corona.co&amp;utm_medium=referral&amp;utm_campaign=corona.co"
                                  title="Inspírame" target="_blank" rel="noopener noreferrer">Inspírame</a></li>
                          <li class="first-level coc-mega-menu-item coc-menu-parent hidden-mdrelative-node">
                              <a href="https://corona.co/productos/promociones/c/promociones?sort=discount-percentage-desc&amp;q=%3Arelevance&amp;show=Page#"
                                  title="Ofertas">Ofertas</a></li>
                      </ul>
                      <div class="hidden-md hidden-lg">
                          <div class="yCmsComponent hidden-md hidden-lg yComponentWrapper">
                              <div class="hidden-xs hidden-sm coc-top-menu-links-wp">
                                  <div class="coc-top-menu-links">
                                      <a href="https://empresa.corona.co/" title="Sitio Corporativo" target="_blank"
                                          rel="noopener noreferrer">Sitio Corporativo</a><a
                                          href="https://centrocorona.corona.co/" title="Centros Corona"
                                          target="_blank" rel="noopener noreferrer">Centros Corona</a><a
                                          href="https://corona.co/grival" title="Grival">Grival</a><a
                                          href="https://clubmaestros.co/?utm_source=corona.co&amp;utm_medium=referral&amp;utm_campaign=corona"
                                          title="Club Maestros" target="_blank" rel="noopener noreferrer">Club
                                          Maestros</a><a href="https://corona.co/store-finder"
                                          title="Mapa de tiendas">Mapa de tiendas</a><a
                                          href="https://corona.co/guest/order" title="Estado de pedido">Estado de
                                          pedido</a></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="coc-nav-icons">
                      <div class="header-icon account-icon-desktop hidden-xs hidden-sm">
                          <a href="https://corona.co/">
                              <div class="account-pre-text">
                                  <span class="coc-account-highlighted">
                                    Inicio</span>
                              </div>
                              <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8 7.1L13.8 2.6C13.27 2.2 12.63 2 12 2C11.37 2 10.73 2.2 10.2 2.6L4.2 7.1C3.44 7.67 3 8.56 3 9.5V18.5C3 20.16 4.34 21.5 6 21.5H18C19.66 21.5 21 20.16 21 18.5V9.5C21 8.56 20.56 7.67 19.8 7.1ZM10.5 20V13H13.5V20H10.5ZM19.5 18.5C19.5 19.33 18.83 20 18 20H15V13C15 12.17 14.33 11.5 13.5 11.5H10.5C9.67 11.5 9 12.17 9 13V20H6C5.17 20 4.5 19.33 4.5 18.5V9.5C4.5 9.03 4.72001 8.58 5.10001 8.3L11.1 3.8C11.36 3.6 11.67 3.5 12 3.5C12.33 3.5 12.64 3.6 12.9 3.8L18.9 8.3C19.28 8.58 19.5 9.03 19.5 9.5V18.5Z" fill="#0069B4"/>
                                    </svg>
                              </span>
                          </a>
                      </div>
                      <div class="hidden-md hidden-lg header-icon coc-icon-hamburger">
                          <span class="js-hamburger-menu">
                              <button class="hamburger hamburger--spring" type="button">
                                  <span class="hamburger-box">
                                      <span class="hamburger-inner"></span>
                                  </span>
                              </button>
                          </span>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
      </header>
`;document.querySelector("#carusel").innerHTML=`
<section>
<div class="swiper-container slideshow">
  <div class="swiper-wrapper">
    <!-- Diapositiva 1 -->
    <div class="swiper-slide slide">
      <div
        class="slide-image"
        style="
          background-image: url(/img/swiper/Portada-1.jpg);
        "
      >
        <!-- Overlay para oscurecer la imagen -->
        <div class="image-overlay"></div>
      </div>

      <!-- Contenedor del contenido -->
      <div class="slide-content">
        <span class="slide-title">
        Casas <br> que <span class="bold-highlight">gritan</span> <span class="bold-highlight">tendencia</span>
        </span>
        <!-- <span class="slide-title">Exotic places</span> -->
        <p class="slide-description">
        Inspírate con nuestras cuatro casas y conoce las tendencias de diseño 2025
        </p>
      </div>
    </div>

    <!-- Diapositiva 2 -->
    <div class="swiper-slide slide">
      <div
        class="slide-image"
        style="
          background-image: url(/img/swiper/Casa%20playera.jpg);
        "
      >
        <div class="image-overlay"></div>
      </div>

      <div class="slide-content">
        <span class="slide-title">
          Casa <br> <span class="bold-highlight">playera</span>
        </span>
        <!-- <span class="slide-title">Meet ocean</span> -->
        <p class="slide-description">
        ¿Amas la playa? Tu casa puede sentirse como una.
        </p>
        <button class="slide-button">VER LA CASA</button>
      </div>
      <div class="additional-content">
        <p class="subtitle">Tendencia 01</p>
        <p class="bold-text"><strong>Brisa costera</strong></p>
      </div>
    </div>

    <!-- Diapositiva 3 -->
    <div class="swiper-slide slide">
      <div
        class="slide-image"
        style="
          background-image: url(/img/swiper/casa%20campestre.jpg);
        "
      >
        <div class="image-overlay"></div>
      </div>

      <div class="slide-content">
        <span class="slide-title">
          Casa <span class="bold-highlight">Campestre</span>
        </span>
        <!-- <span class="slide-title">Around the world</span> -->
        <p class="slide-description">
        ¿Te gusta la sensación acogedora de una cabaña? Tu casa puede sentirse así.
        </p>
        <button class="slide-button">VER LA CASA</button>
      </div>
      <div class="additional-content">
        <p class="subtitle">Tendencia 02</p>
        <p class="bold-text"><strong>Encanto campestre</strong></p>
      </div>
    </div>
    <!-- Diapositiva 3 -->
    <div class="swiper-slide slide">
      <div
        class="slide-image"
        style="
          background-image: url(/img/swiper/Casa%20Multicultural-1.jpg);
        "
      >
        <div class="image-overlay"></div>
      </div>

      <div class="slide-content">
        <span class="slide-title">
          Casa <span class="bold-highlight">Multicultural</span>
        </span>
        <!-- <span class="slide-title">Around the world</span> -->
        <p class="slide-description">
        ¿Eres amante de las culturas del mundo y los viajes? Tu casa puede sentirse como uno.
        </p>
        <button class="slide-button">VER LA CASA</button>
      </div>
      <div class="additional-content">
        <p class="subtitle">Tendencia 03</p>
        <p class="bold-text"><strong>Manifiesto ancestral</strong></p>
      </div>
    </div>
    <!-- Diapositiva 4 -->
    <div class="swiper-slide slide">
      <div
        class="slide-image"
        style="
          background-image: url(/img/swiper/Casa%20colorida-1.jpg);
        "
      >
        <div class="image-overlay"></div>
      </div>

      <div class="slide-content">
        <span class="slide-title">
          Casa <span class="bold-highlight">Colorida</span>
        </span>
        <!-- <span class="slide-title">Around the world</span> -->
        <p class="slide-description">
        ¿Eres extrovertido y te gustan los espacios coloridos? Tu casa puede expresar eso.
        </p>
        <button class="slide-button">VER LA CASA</button>
      </div>
      <div class="additional-content">
        <p class="subtitle">Tendencia 04</p>
        <p class="bold-text"><strong>Surrealismo l</strong></p>
      </div>
    </div>
  </div>

  <!-- Paginación -->
  <div class="slideshow-pagination"></div>

  <!-- Botones de navegación -->
  <div class="slideshow-navigation">
    <div class="slideshow-navigation-button prev">
      <span class="fas fa-chevron-left"></span>
    </div>
    <div class="slideshow-navigation-button next">
      <span class="fas fa-chevron-right"></span>
    </div>
  </div>
</div>
</section>
`;console.log("WASAAAAAA");class wo{constructor(e){this.DOM={el:e},this.config={slideshow:{delay:8500,pagination:{duration:5.5}}},this.init()}init(){var e=this;this.slideshow=new Swiper(this.DOM.el,{direction:"horizontal",loop:!0,allowTouchMove:!1,autoplay:{delay:this.config.slideshow.delay,disableOnInteraction:!1},speed:500,preloadImages:!0,updateOnImagesReady:!0,pagination:{el:".slideshow-pagination",clickable:!0,bulletClass:"slideshow-pagination-item",bulletActiveClass:"active",clickableClass:"slideshow-pagination-clickable",modifierClass:"slideshow-pagination-",renderBullet:function(t,i){var s=t,a=t<=8?"0"+(s+1):s+1,n='<span class="slideshow-pagination-item">';return n+='<span class="pagination-number">'+a+"</span>",n=t<=8?n+'<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>':n,n+="</span>",n}},navigation:{nextEl:".slideshow-navigation-button.next",prevEl:".slideshow-navigation-button.prev"},scrollbar:{el:".swiper-scrollbar"},on:{init:function(){e.animateSlide(),e.animatePagination()},slideChangeTransitionStart:function(){e.animateSlideOut(),e.resetPagination()},slideChangeTransitionEnd:function(){e.animateSlide(),e.animatePagination()}}}),this.initNavigationButtons()}initNavigationButtons(){const e=this;document.querySelector(".slideshow-navigation-button.next").addEventListener("click",function(t){t.preventDefault(),e.animateSlideOut(),setTimeout(function(){e.slideshow.slideNext()},500)}),document.querySelector(".slideshow-navigation-button.prev").addEventListener("click",function(t){t.preventDefault(),e.animateSlideOut(),setTimeout(function(){e.slideshow.slidePrev()},500)})}waitForImageLoad(e,t){const i=new Image,s=window.getComputedStyle(e).backgroundImage;if(s!=="none"){const a=s.slice(5,-2);i.src=a,i.onload=function(){t()}}else t()}animateSlide(){this.DOM.activeSlide=this.DOM.el.querySelector(".swiper-slide-active"),this.DOM.activeSlideContent=this.DOM.activeSlide.querySelector(".slide-content"),this.DOM.activeSlideAdditionalContent=this.DOM.activeSlide.querySelector(".additional-content");const e=this.DOM.activeSlide.querySelector(".slide-image");this.DOM.el.querySelectorAll(".slide-content").forEach(a=>{gsap.set(a,{opacity:0,x:"-100%"})}),this.DOM.el.querySelectorAll(".additional-content").forEach(a=>{gsap.set(a,{opacity:0})});const s=this.DOM.activeSlide.querySelectorAll(".bold-highlight");s.forEach(a=>{gsap.set(a,{opacity:1}),a.classList.remove("animate")}),this.waitForImageLoad(e,()=>{gsap.fromTo(this.DOM.activeSlideContent,{opacity:0,x:"-100%"},{opacity:1,x:"0%",duration:.5,ease:"power2.out"}),gsap.to(this.DOM.activeSlideContent,{delay:7.5,duration:.5,ease:"power2.in",opacity:0,x:"100%",onStart:function(){console.log("Contenido desapareciendo después de 3.5 segundos")}}),this.DOM.activeSlideAdditionalContent&&(gsap.to(this.DOM.activeSlideAdditionalContent,{duration:.5,ease:"power2.out",opacity:1}),gsap.to(this.DOM.activeSlideAdditionalContent,{delay:3.5,duration:.5,ease:"power2.in",opacity:0,onStart:function(){console.log("Contenido adicional desapareciendo después de 3.5 segundos")}})),s.forEach(a=>{setTimeout(()=>{a.classList.add("animate")},1e3)})})}animateSlideOut(){this.DOM.activeSlideContent&&gsap.to(this.DOM.activeSlideContent,{duration:.5,ease:"power2.in",opacity:0,x:"100%",onStart:function(){console.log("Contenido desapareciendo antes de cambiar la diapositiva")}})}animatePagination(){const e=document.querySelectorAll(".pagination-separator-loader"),t=document.querySelector(".slideshow-pagination-item.active .pagination-separator-loader");e.forEach(i=>{gsap.set(i,{scaleX:0})}),t&&gsap.to(t,{duration:this.config.slideshow.pagination.duration,scaleX:1,ease:"linear"})}resetPagination(){document.querySelectorAll(".pagination-separator-loader").forEach(t=>{gsap.set(t,{scaleX:0})})}}new wo(document.querySelector(".slideshow"));function rt(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function on(l,e){l.prototype=Object.create(e.prototype),l.prototype.constructor=l,l.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Le={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ci={duration:.5,overwrite:!1,delay:0},na,ye,te,Ge=1e8,ee=1/Ge,Bs=Math.PI*2,To=Bs/4,ko=0,rn=Math.sqrt,Mo=Math.cos,Po=Math.sin,ge=function(e){return typeof e=="string"},ne=function(e){return typeof e=="function"},ht=function(e){return typeof e=="number"},oa=function(e){return typeof e>"u"},at=function(e){return typeof e=="object"},ke=function(e){return e!==!1},ra=function(){return typeof window<"u"},Ui=function(e){return ne(e)||ge(e)},cn=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},we=Array.isArray,Fs=/(?:-?\.?\d|\.)+/gi,ln=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ei=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ws=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,un=/[+-]=-?[.\d]+/,dn=/[^,'"\[\]\s]+/gi,So=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ie,et,js,ca,Ie={},is={},hn,mn=function(e){return(is=Ut(e,Ie))&&Ce},la=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Li=function(e,t){return!t&&console.warn(e)},pn=function(e,t){return e&&(Ie[e]=t)&&is&&(is[e]=t)||Ie},Ii=function(){return 0},Co={suppressEvents:!0,isStart:!0,kill:!1},$i={suppressEvents:!0,kill:!1},Do={suppressEvents:!0},ua={},Mt=[],Ys={},fn,Ae={},Ts={},Oa=30,Qi=[],da="",ha=function(e){var t=e[0],i,s;if(at(t)||ne(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=Qi.length;s--&&!Qi[s].targetTest(t););i=Qi[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Fn(e[s],i)))||e.splice(s,1);return e},Yt=function(e){return e._gsap||ha(Xe(e))[0]._gsap},gn=function(e,t,i){return(i=e[t])&&ne(i)?e[t]():oa(i)&&e.getAttribute&&e.getAttribute(t)||i},Me=function(e,t){return(e=e.split(",")).forEach(t)||e},le=function(e){return Math.round(e*1e5)/1e5||0},fe=function(e){return Math.round(e*1e7)/1e7||0},ii=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},Ao=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},ss=function(){var e=Mt.length,t=Mt.slice(0),i,s;for(Ys={},Mt.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},_n=function(e,t,i,s){Mt.length&&!ye&&ss(),e.render(t,i,ye&&t<0&&(e._initted||e._startAt)),Mt.length&&!ye&&ss()},vn=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dn).length<2?t:ge(e)?e.trim():e},bn=function(e){return e},We=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Eo=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},Ut=function(e,t){for(var i in t)e[i]=t[i];return e},Ra=function l(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=at(t[i])?l(e[i]||(e[i]={}),t[i]):t[i]);return e},as=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},Ci=function(e){var t=e.parent||ie,i=e.keyframes?Eo(we(e.keyframes)):We;if(ke(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Oo=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},xn=function(e,t,i,s,a){var n=e[s],o;if(a)for(o=t[a];n&&n[a]>o;)n=n._prev;return n?(t._next=n._next,n._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=n,t.parent=t._dp=e,t},ds=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t._prev,n=t._next;a?a._next=n:e[i]===t&&(e[i]=n),n?n._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},St=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vt=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Ro=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Vs=function(e,t,i,s){return e._startAt&&(ye?e._startAt.revert($i):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},Lo=function l(e){return!e||e._ts&&l(e.parent)},La=function(e){return e._repeat?li(e._tTime,e=e.duration()+e._rDelay)*e:0},li=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},ns=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},hs=function(e){return e._end=fe(e._start+(e._tDur/Math.abs(e._ts||e._rts||ee)||0))},ms=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=fe(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),hs(e),i._dirty||Vt(i,e)),e},yn=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ns(e.rawTime(),t),(!t._dur||Gi(0,t.totalDuration(),i)-t._tTime>ee)&&t.render(i,!0)),Vt(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ee}},tt=function(e,t,i,s){return t.parent&&St(t),t._start=fe((ht(i)?i:i||e!==ie?Ve(e,i,t):e._time)+t._delay),t._end=fe(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),xn(e,t,"_first","_last",e._sort?"_start":0),Gs(t)||(e._recent=t),s||yn(e,t),e._ts<0&&ms(e,e._tTime),e},wn=function(e,t){return(Ie.ScrollTrigger||la("scrollTrigger",t))&&Ie.ScrollTrigger.create(t,e)},Tn=function(e,t,i,s,a){if(pa(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!ye&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&fn!==Ee.frame)return Mt.push(e),e._lazy=[a,s],1},Io=function l(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||l(t))},Gs=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},No=function(e,t,i,s){var a=e.ratio,n=t<0||!t&&(!e._start&&Io(e)&&!(!e._initted&&Gs(e))||(e._ts<0||e._dp._ts<0)&&!Gs(e))?0:1,o=e._rDelay,u=0,c,d,m;if(o&&e._repeat&&(u=Gi(0,e._tDur,t),d=li(u,o),e._yoyo&&d&1&&(n=1-n),d!==li(e._tTime,o)&&(a=1-n,e.vars.repeatRefresh&&e._initted&&e.invalidate())),n!==a||ye||s||e._zTime===ee||!t&&e._zTime){if(!e._initted&&Tn(e,t,s,i,u))return;for(m=e._zTime,e._zTime=t||(i?ee:0),i||(i=t&&!m),e.ratio=n,e._from&&(n=1-n),e._time=0,e._tTime=u,c=e._pt;c;)c.r(n,c.d),c=c._next;t<0&&Vs(e,t,i,!0),e._onUpdate&&!i&&Re(e,"onUpdate"),u&&e._repeat&&!i&&e.parent&&Re(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===n&&(n&&St(e,1),!i&&!ye&&(Re(e,n?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},zo=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},ui=function(e,t,i,s){var a=e._repeat,n=fe(t)||0,o=e._tTime/e._tDur;return o&&!s&&(e._time*=n/e._dur),e._dur=n,e._tDur=a?a<0?1e10:fe(n*(a+1)+e._rDelay*a):n,o>0&&!s&&ms(e,e._tTime=e._tDur*o),e.parent&&hs(e),i||Vt(e.parent,e),e},Ia=function(e){return e instanceof Te?Vt(e):ui(e,e._dur)},Bo={_start:0,endTime:Ii,totalDuration:Ii},Ve=function l(e,t,i){var s=e.labels,a=e._recent||Bo,n=e.duration()>=Ge?a.endTime(!1):e._dur,o,u,c;return ge(t)&&(isNaN(t)||t in s)?(u=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),u==="<"||u===">"?(o>=0&&(t=t.replace(/=/,"")),(u==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?a:i).totalDuration()/100:1)):o<0?(t in s||(s[t]=n),s[t]):(u=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(u=u/100*(we(i)?i[0]:i).totalDuration()),o>1?l(e,t.substr(0,o-1),i)+u:n+u)):t==null?n:+t},Di=function(e,t,i){var s=ht(t[1]),a=(s?2:1)+(e<2?0:1),n=t[a],o,u;if(s&&(n.duration=t[1]),n.parent=i,e){for(o=n,u=i;u&&!("immediateRender"in o);)o=u.vars.defaults||{},u=ke(u.vars.inherit)&&u.parent;n.immediateRender=ke(o.immediateRender),e<2?n.runBackwards=1:n.startAt=t[a-1]}return new de(t[0],n,t[a+1])},Dt=function(e,t){return e||e===0?t(e):t},Gi=function(e,t,i){return i<e?e:i>t?t:i},xe=function(e,t){return!ge(e)||!(t=So.exec(e))?"":t[1]},Fo=function(e,t,i){return Dt(i,function(s){return Gi(e,t,s)})},Xs=[].slice,kn=function(e,t){return e&&at(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&at(e[0]))&&!e.nodeType&&e!==et},jo=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var a;return ge(s)&&!t||kn(s,1)?(a=i).push.apply(a,Xe(s)):i.push(s)})||i},Xe=function(e,t,i){return te&&!t&&te.selector?te.selector(e):ge(e)&&!i&&(js||!di())?Xs.call((t||ca).querySelectorAll(e),0):we(e)?jo(e,i):kn(e)?Xs.call(e,0):e?[e]:[]},Ws=function(e){return e=Xe(e)[0]||Li("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Xe(t,i.querySelectorAll?i:i===e?Li("Invalid scope")||ca.createElement("div"):e)}},Mn=function(e){return e.sort(function(){return .5-Math.random()})},Pn=function(e){if(ne(e))return e;var t=at(e)?e:{each:e},i=Gt(t.ease),s=t.from||0,a=parseFloat(t.base)||0,n={},o=s>0&&s<1,u=isNaN(s)||o,c=t.axis,d=s,m=s;return ge(s)?d=m={center:.5,edges:.5,end:1}[s]||0:!o&&u&&(d=s[0],m=s[1]),function(p,r,g){var h=(g||t).length,v=n[h],x,y,S,C,b,D,k,w,M;if(!v){if(M=t.grid==="auto"?0:(t.grid||[1,Ge])[1],!M){for(k=-Ge;k<(k=g[M++].getBoundingClientRect().left)&&M<h;);M<h&&M--}for(v=n[h]=[],x=u?Math.min(M,h)*d-.5:s%M,y=M===Ge?0:u?h*m/M-.5:s/M|0,k=0,w=Ge,D=0;D<h;D++)S=D%M-x,C=y-(D/M|0),v[D]=b=c?Math.abs(c==="y"?C:S):rn(S*S+C*C),b>k&&(k=b),b<w&&(w=b);s==="random"&&Mn(v),v.max=k-w,v.min=w,v.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(M>h?h-1:c?c==="y"?h/M:M:Math.max(M,h/M))||0)*(s==="edges"?-1:1),v.b=h<0?a-h:a,v.u=xe(t.amount||t.each)||0,i=i&&h<0?Nn(i):i}return h=(v[p]-v.min)/v.max||0,fe(v.b+(i?i(h):h)*v.v)+v.u}},qs=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=fe(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(ht(i)?0:xe(i))}},Sn=function(e,t){var i=we(e),s,a;return!i&&at(e)&&(s=i=e.radius||Ge,e.values?(e=Xe(e.values),(a=!ht(e[0]))&&(s*=s)):e=qs(e.increment)),Dt(t,i?ne(e)?function(n){return a=e(n),Math.abs(a-n)<=s?a:n}:function(n){for(var o=parseFloat(a?n.x:n),u=parseFloat(a?n.y:0),c=Ge,d=0,m=e.length,p,r;m--;)a?(p=e[m].x-o,r=e[m].y-u,p=p*p+r*r):p=Math.abs(e[m]-o),p<c&&(c=p,d=m);return d=!s||c<=s?e[d]:n,a||d===n||ht(n)?d:d+xe(n)}:qs(e))},Cn=function(e,t,i,s){return Dt(we(e)?!t:i===!0?!!(i=0):!s,function(){return we(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},Yo=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(a,n){return n(a)},s)}},Vo=function(e,t){return function(i){return e(parseFloat(i))+(t||xe(i))}},Go=function(e,t,i){return An(e,t,0,1,i)},Dn=function(e,t,i){return Dt(i,function(s){return e[~~t(s)]})},Xo=function l(e,t,i){var s=t-e;return we(e)?Dn(e,l(0,e.length),t):Dt(i,function(a){return(s+(a-e)%s)%s+e})},Wo=function l(e,t,i){var s=t-e,a=s*2;return we(e)?Dn(e,l(0,e.length-1),t):Dt(i,function(n){return n=(a+(n-e)%a)%a||0,e+(n>s?a-n:n)})},Ni=function(e){for(var t=0,i="",s,a,n,o;~(s=e.indexOf("random(",t));)n=e.indexOf(")",s),o=e.charAt(s+7)==="[",a=e.substr(s+7,n-s-7).match(o?dn:Fs),i+=e.substr(t,s-t)+Cn(o?a:+a[0],o?0:+a[1],+a[2]||1e-5),t=n+1;return i+e.substr(t,e.length-t)},An=function(e,t,i,s,a){var n=t-e,o=s-i;return Dt(a,function(u){return i+((u-e)/n*o||0)})},qo=function l(e,t,i,s){var a=isNaN(e+t)?0:function(r){return(1-r)*e+r*t};if(!a){var n=ge(e),o={},u,c,d,m,p;if(i===!0&&(s=1)&&(i=null),n)e={p:e},t={p:t};else if(we(e)&&!we(t)){for(d=[],m=e.length,p=m-2,c=1;c<m;c++)d.push(l(e[c-1],e[c]));m--,a=function(g){g*=m;var h=Math.min(p,~~g);return d[h](g-h)},i=t}else s||(e=Ut(we(e)?[]:{},e));if(!d){for(u in t)ma.call(o,e,u,"get",t[u]);a=function(g){return _a(g,o)||(n?e.p:e)}}}return Dt(i,a)},Na=function(e,t,i){var s=e.labels,a=Ge,n,o,u;for(n in s)o=s[n]-t,o<0==!!i&&o&&a>(o=Math.abs(o))&&(u=n,a=o);return u},Re=function(e,t,i){var s=e.vars,a=s[t],n=te,o=e._ctx,u,c,d;if(a)return u=s[t+"Params"],c=s.callbackScope||e,i&&Mt.length&&ss(),o&&(te=o),d=u?a.apply(c,u):a.call(c),te=n,d},wi=function(e){return St(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ye),e.progress()<1&&Re(e,"onInterrupt"),e},ti,En=[],On=function(e){if(e)if(e=!e.name&&e.default||e,ra()||e.headless){var t=e.name,i=ne(e),s=t&&!i&&e.init?function(){this._props=[]}:e,a={init:Ii,render:_a,add:ma,kill:cr,modifier:rr,rawVars:0},n={targetTest:0,get:0,getSetter:ga,aliases:{},register:0};if(di(),e!==s){if(Ae[t])return;We(s,We(as(e,a),n)),Ut(s.prototype,Ut(a,as(e,n))),Ae[s.prop=t]=s,e.targetTest&&(Qi.push(s),ua[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}pn(t,s),e.register&&e.register(Ce,s,Pe)}else En.push(e)},K=255,Ti={aqua:[0,K,K],lime:[0,K,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,K],navy:[0,0,128],white:[K,K,K],olive:[128,128,0],yellow:[K,K,0],orange:[K,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[K,0,0],pink:[K,192,203],cyan:[0,K,K],transparent:[K,K,K,0]},ks=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*K+.5|0},Rn=function(e,t,i){var s=e?ht(e)?[e>>16,e>>8&K,e&K]:0:Ti.black,a,n,o,u,c,d,m,p,r,g;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ti[e])s=Ti[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),n=e.charAt(2),o=e.charAt(3),e="#"+a+a+n+n+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&K,s&K,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&K,e&K]}else if(e.substr(0,3)==="hsl"){if(s=g=e.match(Fs),!t)u=+s[0]%360/360,c=+s[1]/100,d=+s[2]/100,n=d<=.5?d*(c+1):d+c-d*c,a=d*2-n,s.length>3&&(s[3]*=1),s[0]=ks(u+1/3,a,n),s[1]=ks(u,a,n),s[2]=ks(u-1/3,a,n);else if(~e.indexOf("="))return s=e.match(ln),i&&s.length<4&&(s[3]=1),s}else s=e.match(Fs)||Ti.transparent;s=s.map(Number)}return t&&!g&&(a=s[0]/K,n=s[1]/K,o=s[2]/K,m=Math.max(a,n,o),p=Math.min(a,n,o),d=(m+p)/2,m===p?u=c=0:(r=m-p,c=d>.5?r/(2-m-p):r/(m+p),u=m===a?(n-o)/r+(n<o?6:0):m===n?(o-a)/r+2:(a-n)/r+4,u*=60),s[0]=~~(u+.5),s[1]=~~(c*100+.5),s[2]=~~(d*100+.5)),i&&s.length<4&&(s[3]=1),s},Ln=function(e){var t=[],i=[],s=-1;return e.split(Pt).forEach(function(a){var n=a.match(ei)||[];t.push.apply(t,n),i.push(s+=n.length+1)}),t.c=i,t},za=function(e,t,i){var s="",a=(e+s).match(Pt),n=t?"hsla(":"rgba(",o=0,u,c,d,m;if(!a)return e;if(a=a.map(function(p){return(p=Rn(p,t,1))&&n+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),i&&(d=Ln(e),u=i.c,u.join(s)!==d.c.join(s)))for(c=e.replace(Pt,"1").split(ei),m=c.length-1;o<m;o++)s+=c[o]+(~u.indexOf(o)?a.shift()||n+"0,0,0,0)":(d.length?d:a.length?a:i).shift());if(!c)for(c=e.split(Pt),m=c.length-1;o<m;o++)s+=c[o]+a[o];return s+c[m]},Pt=function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ti)l+="|"+e+"\\b";return new RegExp(l+")","gi")}(),Uo=/hsl[a]?\(/,In=function(e){var t=e.join(" "),i;if(Pt.lastIndex=0,Pt.test(t))return i=Uo.test(t),e[1]=za(e[1],i),e[0]=za(e[0],i,Ln(e[1])),!0},zi,Ee=function(){var l=Date.now,e=500,t=33,i=l(),s=i,a=1e3/240,n=a,o=[],u,c,d,m,p,r,g=function h(v){var x=l()-s,y=v===!0,S,C,b,D;if((x>e||x<0)&&(i+=x-t),s+=x,b=s-i,S=b-n,(S>0||y)&&(D=++m.frame,p=b-m.time*1e3,m.time=b=b/1e3,n+=S+(S>=a?4:a-S),C=1),y||(u=c(h)),C)for(r=0;r<o.length;r++)o[r](b,p,D,v)};return m={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(v){return p/(1e3/(v||60))},wake:function(){hn&&(!js&&ra()&&(et=js=window,ca=et.document||{},Ie.gsap=Ce,(et.gsapVersions||(et.gsapVersions=[])).push(Ce.version),mn(is||et.GreenSockGlobals||!et.gsap&&et||{}),En.forEach(On)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&m.sleep(),c=d||function(v){return setTimeout(v,n-m.time*1e3+1|0)},zi=1,g(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(u),zi=0,c=Ii},lagSmoothing:function(v,x){e=v||1/0,t=Math.min(x||33,e)},fps:function(v){a=1e3/(v||240),n=m.time*1e3+a},add:function(v,x,y){var S=x?function(C,b,D,k){v(C,b,D,k),m.remove(S)}:v;return m.remove(v),o[y?"unshift":"push"](S),di(),S},remove:function(v,x){~(x=o.indexOf(v))&&o.splice(x,1)&&r>=x&&r--},_listeners:o},m}(),di=function(){return!zi&&Ee.wake()},V={},Ho=/^[\d.\-M][\d.\-,\s]/,Zo=/["']/g,$o=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],a=1,n=i.length,o,u,c;a<n;a++)u=i[a],o=a!==n-1?u.lastIndexOf(","):u.length,c=u.substr(0,o),t[s]=isNaN(c)?c.replace(Zo,"").trim():+c,s=u.substr(o+1).trim();return t},Qo=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},Ko=function(e){var t=(e+"").split("("),i=V[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[$o(t[1])]:Qo(e).split(",").map(vn)):V._CE&&Ho.test(e)?V._CE("",e):i},Nn=function(e){return function(t){return 1-e(1-t)}},zn=function l(e,t){for(var i=e._first,s;i;)i instanceof Te?l(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?l(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},Gt=function(e,t){return e&&(ne(e)?e:V[e]||Ko(e))||t},$t=function(e,t,i,s){i===void 0&&(i=function(u){return 1-t(1-u)}),s===void 0&&(s=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:s},n;return Me(e,function(o){V[o]=Ie[o]=a,V[n=o.toLowerCase()]=i;for(var u in a)V[n+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=V[o+"."+u]=a[u]}),a},Bn=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ms=function l(e,t,i){var s=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),n=a/Bs*(Math.asin(1/s)||0),o=function(d){return d===1?1:s*Math.pow(2,-10*d)*Po((d-n)*a)+1},u=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Bn(o);return a=Bs/a,u.config=function(c,d){return l(e,c,d)},u},Ps=function l(e,t){t===void 0&&(t=1.70158);var i=function(n){return n?--n*n*((t+1)*n+t)+1:0},s=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:Bn(i);return s.config=function(a){return l(e,a)},s};Me("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,e){var t=e<5?e+1:e;$t(l+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});V.Linear.easeNone=V.none=V.Linear.easeIn;$t("Elastic",Ms("in"),Ms("out"),Ms());(function(l,e){var t=1/e,i=2*t,s=2.5*t,a=function(o){return o<t?l*o*o:o<i?l*Math.pow(o-1.5/e,2)+.75:o<s?l*(o-=2.25/e)*o+.9375:l*Math.pow(o-2.625/e,2)+.984375};$t("Bounce",function(n){return 1-a(1-n)},a)})(7.5625,2.75);$t("Expo",function(l){return l?Math.pow(2,10*(l-1)):0});$t("Circ",function(l){return-(rn(1-l*l)-1)});$t("Sine",function(l){return l===1?1:-Mo(l*To)+1});$t("Back",Ps("in"),Ps("out"),Ps());V.SteppedEase=V.steps=Ie.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),a=t?1:0,n=1-ee;return function(o){return((s*Gi(0,n,o)|0)+a)*i}}};ci.ease=V["quad.out"];Me("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return da+=l+","+l+"Params,"});var Fn=function(e,t){this.id=ko++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:gn,this.set=t?t.getSetter:ga},Bi=function(){function l(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ui(this,+t.duration,1,1),this.data=t.data,te&&(this._ctx=te,te.data.push(this)),zi||Ee.wake()}var e=l.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ui(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(di(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(ms(this,i),!a._dp||a.parent||yn(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&tt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===ee||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),_n(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+La(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+La(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,s):this._repeat?li(this._tTime,a)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-ee?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?ns(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ee?0:this._rts,this.totalTime(Gi(-Math.abs(this._delay),this._tDur,a),s!==!1),hs(this),Ro(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(di(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ee&&(this._tTime-=ee)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&tt(s,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ke(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ns(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Do);var s=ye;return ye=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ye=s,this},e.globalTime=function(i){for(var s=this,a=arguments.length?i:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ia(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,Ia(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Ve(this,i),ke(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,ke(s))},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ee:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ee,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=s&&a<this.endTime(!0)-ee)},e.eventCallback=function(i,s,a){var n=this.vars;return arguments.length>1?(s?(n[i]=s,a&&(n[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=s)):delete n[i],this):n[i]},e.then=function(i){var s=this;return new Promise(function(a){var n=ne(i)?i:bn,o=function(){var c=s.then;s.then=null,ne(n)&&(n=n(s))&&(n.then||n===s)&&(s.then=c),a(n),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?o():s._prom=o})},e.kill=function(){wi(this)},l}();We(Bi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ee,_prom:0,_ps:!1,_rts:1});var Te=function(l){on(e,l);function e(i,s){var a;return i===void 0&&(i={}),a=l.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=ke(i.sortChildren),ie&&tt(i.parent||ie,rt(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&wn(rt(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,n){return Di(0,arguments,this),this},t.from=function(s,a,n){return Di(1,arguments,this),this},t.fromTo=function(s,a,n,o){return Di(2,arguments,this),this},t.set=function(s,a,n){return a.duration=0,a.parent=this,Ci(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new de(s,a,Ve(this,n),1),this},t.call=function(s,a,n){return tt(this,de.delayedCall(0,s,a),n)},t.staggerTo=function(s,a,n,o,u,c,d){return n.duration=a,n.stagger=n.stagger||o,n.onComplete=c,n.onCompleteParams=d,n.parent=this,new de(s,n,Ve(this,u)),this},t.staggerFrom=function(s,a,n,o,u,c,d){return n.runBackwards=1,Ci(n).immediateRender=ke(n.immediateRender),this.staggerTo(s,a,n,o,u,c,d)},t.staggerFromTo=function(s,a,n,o,u,c,d,m){return o.startAt=n,Ci(o).immediateRender=ke(o.immediateRender),this.staggerTo(s,a,o,u,c,d,m)},t.render=function(s,a,n){var o=this._time,u=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=s<=0?0:fe(s),m=this._zTime<0!=s<0&&(this._initted||!c),p,r,g,h,v,x,y,S,C,b,D,k;if(this!==ie&&d>u&&s>=0&&(d=u),d!==this._tTime||n||m){if(o!==this._time&&c&&(d+=this._time-o,s+=this._time-o),p=d,C=this._start,S=this._ts,x=!S,m&&(c||(o=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(D=this._yoyo,v=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(v*100+s,a,n);if(p=fe(d%v),d===u?(h=this._repeat,p=c):(h=~~(d/v),h&&h===d/v&&(p=c,h--),p>c&&(p=c)),b=li(this._tTime,v),!o&&this._tTime&&b!==h&&this._tTime-b*v-this._dur<=0&&(b=h),D&&h&1&&(p=c-p,k=1),h!==b&&!this._lock){var w=D&&b&1,M=w===(D&&h&1);if(h<b&&(w=!w),o=w?0:d%c?c:d,this._lock=1,this.render(o||(k?0:fe(h*v)),a,!c)._lock=0,this._tTime=d,!a&&this.parent&&Re(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1),o&&o!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,u=this._tDur,M&&(this._lock=2,o=w?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;zn(this,k)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=zo(this,fe(o),fe(p)),y&&(d-=p-(p=y._start))),this._tTime=d,this._time=p,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&p&&!a&&!h&&(Re(this,"onStart"),this._tTime!==d))return this;if(p>=o&&s>=0)for(r=this._first;r;){if(g=r._next,(r._act||p>=r._start)&&r._ts&&y!==r){if(r.parent!==this)return this.render(s,a,n);if(r.render(r._ts>0?(p-r._start)*r._ts:(r._dirty?r.totalDuration():r._tDur)+(p-r._start)*r._ts,a,n),p!==this._time||!this._ts&&!x){y=0,g&&(d+=this._zTime=-ee);break}}r=g}else{r=this._last;for(var B=s<0?s:p;r;){if(g=r._prev,(r._act||B<=r._end)&&r._ts&&y!==r){if(r.parent!==this)return this.render(s,a,n);if(r.render(r._ts>0?(B-r._start)*r._ts:(r._dirty?r.totalDuration():r._tDur)+(B-r._start)*r._ts,a,n||ye&&(r._initted||r._startAt)),p!==this._time||!this._ts&&!x){y=0,g&&(d+=this._zTime=B?-ee:ee);break}}r=g}}if(y&&!a&&(this.pause(),y.render(p>=o?0:-ee)._zTime=p>=o?1:-1,this._ts))return this._start=C,hs(this),this.render(s,a,n);this._onUpdate&&!a&&Re(this,"onUpdate",!0),(d===u&&this._tTime>=this.totalDuration()||!d&&o)&&(C===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(d===u&&this._ts>0||!d&&this._ts<0)&&St(this,1),!a&&!(s<0&&!o)&&(d||o||!u)&&(Re(this,d===u&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var n=this;if(ht(a)||(a=Ve(this,a,s)),!(s instanceof Bi)){if(we(s))return s.forEach(function(o){return n.add(o,a)}),this;if(ge(s))return this.addLabel(s,a);if(ne(s))s=de.delayedCall(0,s);else return this}return this!==s?tt(this,s,a):this},t.getChildren=function(s,a,n,o){s===void 0&&(s=!0),a===void 0&&(a=!0),n===void 0&&(n=!0),o===void 0&&(o=-Ge);for(var u=[],c=this._first;c;)c._start>=o&&(c instanceof de?a&&u.push(c):(n&&u.push(c),s&&u.push.apply(u,c.getChildren(!0,a,n)))),c=c._next;return u},t.getById=function(s){for(var a=this.getChildren(1,1,1),n=a.length;n--;)if(a[n].vars.id===s)return a[n]},t.remove=function(s){return ge(s)?this.removeLabel(s):ne(s)?this.killTweensOf(s):(ds(this,s),s===this._recent&&(this._recent=this._last),Vt(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fe(Ee.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),l.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=Ve(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,n){var o=de.delayedCall(0,a||Ii,n);return o.data="isPause",this._hasPause=1,tt(this,o,Ve(this,s))},t.removePause=function(s){var a=this._first;for(s=Ve(this,s);a;)a._start===s&&a.data==="isPause"&&St(a),a=a._next},t.killTweensOf=function(s,a,n){for(var o=this.getTweensOf(s,n),u=o.length;u--;)yt!==o[u]&&o[u].kill(s,a);return this},t.getTweensOf=function(s,a){for(var n=[],o=Xe(s),u=this._first,c=ht(a),d;u;)u instanceof de?Ao(u._targets,o)&&(c?(!yt||u._initted&&u._ts)&&u.globalTime(0)<=a&&u.globalTime(u.totalDuration())>a:!a||u.isActive())&&n.push(u):(d=u.getTweensOf(o,a)).length&&n.push.apply(n,d),u=u._next;return n},t.tweenTo=function(s,a){a=a||{};var n=this,o=Ve(n,s),u=a,c=u.startAt,d=u.onStart,m=u.onStartParams,p=u.immediateRender,r,g=de.to(n,We({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(c&&"time"in c?c.time:n._time))/n.timeScale())||ee,onStart:function(){if(n.pause(),!r){var v=a.duration||Math.abs((o-(c&&"time"in c?c.time:n._time))/n.timeScale());g._dur!==v&&ui(g,v,0,1).render(g._time,!0,!0),r=1}d&&d.apply(g,m||[])}},a));return p?g.render(0):g},t.tweenFromTo=function(s,a,n){return this.tweenTo(a,We({startAt:{time:Ve(this,s)}},n))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Na(this,Ve(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Na(this,Ve(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+ee)},t.shiftChildren=function(s,a,n){n===void 0&&(n=0);for(var o=this._first,u=this.labels,c;o;)o._start>=n&&(o._start+=s,o._end+=s),o=o._next;if(a)for(c in u)u[c]>=n&&(u[c]+=s);return Vt(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return l.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,n;a;)n=a._next,this.remove(a),a=n;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Vt(this)},t.totalDuration=function(s){var a=0,n=this,o=n._last,u=Ge,c,d,m;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-s:s));if(n._dirty){for(m=n.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>u&&n._sort&&o._ts&&!n._lock?(n._lock=1,tt(n,o,d-o._delay,1)._lock=0):u=d,d<0&&o._ts&&(a-=d,(!m&&!n._dp||m&&m.smoothChildTiming)&&(n._start+=d/n._ts,n._time-=d,n._tTime-=d),n.shiftChildren(-d,!1,-1/0),u=0),o._end>a&&o._ts&&(a=o._end),o=c;ui(n,n===ie&&n._time>a?n._time:a,1,1),n._dirty=0}return n._tDur},e.updateRoot=function(s){if(ie._ts&&(_n(ie,ns(s,ie)),fn=Ee.frame),Ee.frame>=Oa){Oa+=Le.autoSleep||120;var a=ie._first;if((!a||!a._ts)&&Le.autoSleep&&Ee._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Ee.sleep()}}},e}(Bi);We(Te.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jo=function(e,t,i,s,a,n,o){var u=new Pe(this._pt,e,t,0,1,Wn,null,a),c=0,d=0,m,p,r,g,h,v,x,y;for(u.b=i,u.e=s,i+="",s+="",(x=~s.indexOf("random("))&&(s=Ni(s)),n&&(y=[i,s],n(y,e,t),i=y[0],s=y[1]),p=i.match(ws)||[];m=ws.exec(s);)g=m[0],h=s.substring(c,m.index),r?r=(r+1)%5:h.substr(-5)==="rgba("&&(r=1),g!==p[d++]&&(v=parseFloat(p[d-1])||0,u._pt={_next:u._pt,p:h||d===1?h:",",s:v,c:g.charAt(1)==="="?ii(v,g)-v:parseFloat(g)-v,m:r&&r<4?Math.round:0},c=ws.lastIndex);return u.c=c<s.length?s.substring(c,s.length):"",u.fp=o,(un.test(s)||x)&&(u.e=0),this._pt=u,u},ma=function(e,t,i,s,a,n,o,u,c,d){ne(s)&&(s=s(a||0,e,n));var m=e[t],p=i!=="get"?i:ne(m)?c?e[t.indexOf("set")||!ne(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():m,r=ne(m)?c?ar:Gn:fa,g;if(ge(s)&&(~s.indexOf("random(")&&(s=Ni(s)),s.charAt(1)==="="&&(g=ii(p,s)+(xe(p)||0),(g||g===0)&&(s=g))),!d||p!==s||Us)return!isNaN(p*s)&&s!==""?(g=new Pe(this._pt,e,t,+p||0,s-(p||0),typeof m=="boolean"?or:Xn,0,r),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!m&&!(t in e)&&la(t,s),Jo.call(this,e,t,p,s,r,u||Le.stringFilter,c))},er=function(e,t,i,s,a){if(ne(e)&&(e=Ai(e,a,t,i,s)),!at(e)||e.style&&e.nodeType||we(e)||cn(e))return ge(e)?Ai(e,a,t,i,s):e;var n={},o;for(o in e)n[o]=Ai(e[o],a,t,i,s);return n},jn=function(e,t,i,s,a,n){var o,u,c,d;if(Ae[e]&&(o=new Ae[e]).init(a,o.rawVars?t[e]:er(t[e],s,a,n,i),i,s,n)!==!1&&(i._pt=u=new Pe(i._pt,a,e,0,1,o.render,o,0,o.priority),i!==ti))for(c=i._ptLookup[i._targets.indexOf(a)],d=o._props.length;d--;)c[o._props[d]]=u;return o},yt,Us,pa=function l(e,t,i){var s=e.vars,a=s.ease,n=s.startAt,o=s.immediateRender,u=s.lazy,c=s.onUpdate,d=s.runBackwards,m=s.yoyoEase,p=s.keyframes,r=s.autoRevert,g=e._dur,h=e._startAt,v=e._targets,x=e.parent,y=x&&x.data==="nested"?x.vars.targets:v,S=e._overwrite==="auto"&&!na,C=e.timeline,b,D,k,w,M,B,L,j,E,Q,U,F,N;if(C&&(!p||!a)&&(a="none"),e._ease=Gt(a,ci.ease),e._yEase=m?Nn(Gt(m===!0?a:m,ci.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!C&&!!s.runBackwards,!C||p&&!s.stagger){if(j=v[0]?Yt(v[0]).harness:0,F=j&&s[j.prop],b=as(s,ua),h&&(h._zTime<0&&h.progress(1),t<0&&d&&o&&!r?h.render(-1,!0):h.revert(d&&g?$i:Co),h._lazy=0),n){if(St(e._startAt=de.set(v,We({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!h&&ke(u),startAt:null,delay:0,onUpdate:c&&function(){return Re(e,"onUpdate")},stagger:0},n))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ye||!o&&!r)&&e._startAt.revert($i),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(d&&g&&!h){if(t&&(o=!1),k=We({overwrite:!1,data:"isFromStart",lazy:o&&!h&&ke(u),immediateRender:o,stagger:0,parent:x},b),F&&(k[j.prop]=F),St(e._startAt=de.set(v,k)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ye?e._startAt.revert($i):e._startAt.render(-1,!0)),e._zTime=t,!o)l(e._startAt,ee,ee);else if(!t)return}for(e._pt=e._ptCache=0,u=g&&ke(u)||u&&!g,D=0;D<v.length;D++){if(M=v[D],L=M._gsap||ha(v)[D]._gsap,e._ptLookup[D]=Q={},Ys[L.id]&&Mt.length&&ss(),U=y===v?D:y.indexOf(M),j&&(E=new j).init(M,F||b,e,U,y)!==!1&&(e._pt=w=new Pe(e._pt,M,E.name,0,1,E.render,E,0,E.priority),E._props.forEach(function(he){Q[he]=w}),E.priority&&(B=1)),!j||F)for(k in b)Ae[k]&&(E=jn(k,b,e,U,M,y))?E.priority&&(B=1):Q[k]=w=ma.call(e,M,k,"get",b[k],U,y,0,s.stringFilter);e._op&&e._op[D]&&e.kill(M,e._op[D]),S&&e._pt&&(yt=e,ie.killTweensOf(M,Q,e.globalTime(t)),N=!e.parent,yt=0),e._pt&&u&&(Ys[L.id]=1)}B&&qn(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,p&&t<=0&&C.render(Ge,!0,!0)},tr=function(e,t,i,s,a,n,o,u){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,m,p,r;if(!c)for(c=e._ptCache[t]=[],p=e._ptLookup,r=e._targets.length;r--;){if(d=p[r][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Us=1,e.vars[t]="+=0",pa(e,o),Us=0,u?Li(t+" not eligible for reset"):1;c.push(d)}for(r=c.length;r--;)m=c[r],d=m._pt||m,d.s=(s||s===0)&&!a?s:d.s+(s||0)+n*d.c,d.c=i-d.s,m.e&&(m.e=le(i)+xe(m.e)),m.b&&(m.b=d.s+xe(m.b))},ir=function(e,t){var i=e[0]?Yt(e[0]).harness:0,s=i&&i.aliases,a,n,o,u;if(!s)return t;a=Ut({},t);for(n in s)if(n in a)for(u=s[n].split(","),o=u.length;o--;)a[u[o]]=a[n];return a},sr=function(e,t,i,s){var a=t.ease||s||"power1.inOut",n,o;if(we(t))o=i[e]||(i[e]=[]),t.forEach(function(u,c){return o.push({t:c/(t.length-1)*100,v:u,e:a})});else for(n in t)o=i[n]||(i[n]=[]),n==="ease"||o.push({t:parseFloat(e),v:t[n],e:a})},Ai=function(e,t,i,s,a){return ne(e)?e.call(t,i,s,a):ge(e)&&~e.indexOf("random(")?Ni(e):e},Yn=da+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vn={};Me(Yn+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return Vn[l]=1});var de=function(l){on(e,l);function e(i,s,a,n){var o;typeof s=="number"&&(a.duration=s,s=a,a=null),o=l.call(this,n?s:Ci(s))||this;var u=o.vars,c=u.duration,d=u.delay,m=u.immediateRender,p=u.stagger,r=u.overwrite,g=u.keyframes,h=u.defaults,v=u.scrollTrigger,x=u.yoyoEase,y=s.parent||ie,S=(we(i)||cn(i)?ht(i[0]):"length"in s)?[i]:Xe(i),C,b,D,k,w,M,B,L;if(o._targets=S.length?ha(S):Li("GSAP target "+i+" not found. https://gsap.com",!Le.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=r,g||p||Ui(c)||Ui(d)){if(s=o.vars,C=o.timeline=new Te({data:"nested",defaults:h||{},targets:y&&y.data==="nested"?y.vars.targets:S}),C.kill(),C.parent=C._dp=rt(o),C._start=0,p||Ui(c)||Ui(d)){if(k=S.length,B=p&&Pn(p),at(p))for(w in p)~Yn.indexOf(w)&&(L||(L={}),L[w]=p[w]);for(b=0;b<k;b++)D=as(s,Vn),D.stagger=0,x&&(D.yoyoEase=x),L&&Ut(D,L),M=S[b],D.duration=+Ai(c,rt(o),b,M,S),D.delay=(+Ai(d,rt(o),b,M,S)||0)-o._delay,!p&&k===1&&D.delay&&(o._delay=d=D.delay,o._start+=d,D.delay=0),C.to(M,D,B?B(b,M,S):0),C._ease=V.none;C.duration()?c=d=0:o.timeline=0}else if(g){Ci(We(C.vars.defaults,{ease:"none"})),C._ease=Gt(g.ease||s.ease||"none");var j=0,E,Q,U;if(we(g))g.forEach(function(F){return C.to(S,F,">")}),C.duration();else{D={};for(w in g)w==="ease"||w==="easeEach"||sr(w,g[w],D,g.easeEach);for(w in D)for(E=D[w].sort(function(F,N){return F.t-N.t}),j=0,b=0;b<E.length;b++)Q=E[b],U={ease:Q.e,duration:(Q.t-(b?E[b-1].t:0))/100*c},U[w]=Q.v,C.to(S,U,j),j+=U.duration;C.duration()<c&&C.to({},{duration:c-C.duration()})}}c||o.duration(c=C.duration())}else o.timeline=0;return r===!0&&!na&&(yt=rt(o),ie.killTweensOf(S),yt=0),tt(y,rt(o),a),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(m||!c&&!g&&o._start===fe(y._time)&&ke(m)&&Lo(rt(o))&&y.data!=="nested")&&(o._tTime=-ee,o.render(Math.max(0,-d)||0)),v&&wn(rt(o),v),o}var t=e.prototype;return t.render=function(s,a,n){var o=this._time,u=this._tDur,c=this._dur,d=s<0,m=s>u-ee&&!d?u:s<ee?0:s,p,r,g,h,v,x,y,S,C;if(!c)No(this,s,a,n);else if(m!==this._tTime||!s||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(p=m,S=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(h*100+s,a,n);if(p=fe(m%h),m===u?(g=this._repeat,p=c):(g=~~(m/h),g&&g===fe(m/h)&&(p=c,g--),p>c&&(p=c)),x=this._yoyo&&g&1,x&&(C=this._yEase,p=c-p),v=li(this._tTime,h),p===o&&!n&&this._initted&&g===v)return this._tTime=m,this;g!==v&&(S&&this._yEase&&zn(S,x),this.vars.repeatRefresh&&!x&&!this._lock&&this._time!==h&&this._initted&&(this._lock=n=1,this.render(fe(h*g),!0).invalidate()._lock=0))}if(!this._initted){if(Tn(this,d?s:p,n,a,m))return this._tTime=0,this;if(o!==this._time&&!(n&&this.vars.repeatRefresh&&g!==v))return this;if(c!==this._dur)return this.render(s,a,n)}if(this._tTime=m,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(C||this._ease)(p/c),this._from&&(this.ratio=y=1-y),p&&!o&&!a&&!g&&(Re(this,"onStart"),this._tTime!==m))return this;for(r=this._pt;r;)r.r(y,r.d),r=r._next;S&&S.render(s<0?s:S._dur*S._ease(p/this._dur),a,n)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(d&&Vs(this,s,a,n),Re(this,"onUpdate")),this._repeat&&g!==v&&this.vars.onRepeat&&!a&&this.parent&&Re(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(d&&!this._onUpdate&&Vs(this,s,!0,!0),(s||!c)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&St(this,1),!a&&!(d&&!o)&&(m||o||x)&&(Re(this,m===u?"onComplete":"onReverseComplete",!0),this._prom&&!(m<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),l.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,n,o,u){zi||Ee.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||pa(this,c),d=this._ease(c/this._dur),tr(this,s,a,n,o,d,c,u)?this.resetTo(s,a,n,o,1):(ms(this,0),this.parent||xn(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?wi(this):this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,yt&&yt.vars.overwrite!==!0)._first||wi(this),this.parent&&n!==this.timeline.totalDuration()&&ui(this,this._dur*this.timeline._tDur/n,0,1),this}var o=this._targets,u=s?Xe(s):o,c=this._ptLookup,d=this._pt,m,p,r,g,h,v,x;if((!a||a==="all")&&Oo(o,u))return a==="all"&&(this._pt=0),wi(this);for(m=this._op=this._op||[],a!=="all"&&(ge(a)&&(h={},Me(a,function(y){return h[y]=1}),a=h),a=ir(o,a)),x=o.length;x--;)if(~u.indexOf(o[x])){p=c[x],a==="all"?(m[x]=a,g=p,r={}):(r=m[x]=m[x]||{},g=a);for(h in g)v=p&&p[h],v&&((!("kill"in v.d)||v.d.kill(h)===!0)&&ds(this,v,"_pt"),delete p[h]),r!=="all"&&(r[h]=1)}return this._initted&&!this._pt&&d&&wi(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return Di(1,arguments)},e.delayedCall=function(s,a,n,o){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:o})},e.fromTo=function(s,a,n){return Di(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,n){return ie.killTweensOf(s,a,n)},e}(Bi);We(de.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Me("staggerTo,staggerFrom,staggerFromTo",function(l){de[l]=function(){var e=new Te,t=Xs.call(arguments,0);return t.splice(l==="staggerFromTo"?5:4,0,0),e[l].apply(e,t)}});var fa=function(e,t,i){return e[t]=i},Gn=function(e,t,i){return e[t](i)},ar=function(e,t,i,s){return e[t](s.fp,i)},nr=function(e,t,i){return e.setAttribute(t,i)},ga=function(e,t){return ne(e[t])?Gn:oa(e[t])&&e.setAttribute?nr:fa},Xn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},or=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Wn=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},_a=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},rr=function(e,t,i,s){for(var a=this._pt,n;a;)n=a._next,a.p===s&&a.modifier(e,t,i),a=n},cr=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?ds(this,t,"_pt"):t.dep||(i=1),t=s;return!i},lr=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},qn=function(e){for(var t=e._pt,i,s,a,n;t;){for(i=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:n)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:n=t,t=i}e._pt=a},Pe=function(){function l(t,i,s,a,n,o,u,c,d){this.t=i,this.s=a,this.c=n,this.p=s,this.r=o||Xn,this.d=u||this,this.set=c||fa,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=l.prototype;return e.modifier=function(i,s,a){this.mSet=this.mSet||this.set,this.set=lr,this.m=i,this.mt=a,this.tween=s},l}();Me(da+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(l){return ua[l]=1});Ie.TweenMax=Ie.TweenLite=de;Ie.TimelineLite=Ie.TimelineMax=Te;ie=new Te({sortChildren:!1,defaults:ci,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Le.stringFilter=In;var Xt=[],Ki={},ur=[],Ba=0,dr=0,Ss=function(e){return(Ki[e]||ur).map(function(t){return t()})},Hs=function(){var e=Date.now(),t=[];e-Ba>2&&(Ss("matchMediaInit"),Xt.forEach(function(i){var s=i.queries,a=i.conditions,n,o,u,c;for(o in s)n=et.matchMedia(s[o]).matches,n&&(u=1),n!==a[o]&&(a[o]=n,c=1);c&&(i.revert(),u&&t.push(i))}),Ss("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),Ba=e,Ss("matchMedia"))},Un=function(){function l(t,i){this.selector=i&&Ws(i),this.data=[],this._r=[],this.isReverted=!1,this.id=dr++,t&&this.add(t)}var e=l.prototype;return e.add=function(i,s,a){ne(i)&&(a=s,s=i,i=ne);var n=this,o=function(){var c=te,d=n.selector,m;return c&&c!==n&&c.data.push(n),a&&(n.selector=Ws(a)),te=n,m=s.apply(n,arguments),ne(m)&&n._r.push(m),te=c,n.selector=d,n.isReverted=!1,m};return n.last=o,i===ne?o(n,function(u){return n.add(null,u)}):i?n[i]=o:o},e.ignore=function(i){var s=te;te=null,i(this),te=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof l?i.push.apply(i,s.getTweens()):s instanceof de&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var a=this;if(i?function(){for(var o=a.getTweens(),u=a.data.length,c;u--;)c=a.data[u],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,m){return m.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),u=a.data.length;u--;)c=a.data[u],c instanceof Te?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof de)&&c.revert&&c.revert(i);a._r.forEach(function(d){return d(i,a)}),a.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var n=Xt.length;n--;)Xt[n].id===this.id&&Xt.splice(n,1)},e.revert=function(i){this.kill(i||{})},l}(),hr=function(){function l(t){this.contexts=[],this.scope=t,te&&te.data.push(this)}var e=l.prototype;return e.add=function(i,s,a){at(i)||(i={matches:i});var n=new Un(0,a||this.scope),o=n.conditions={},u,c,d;te&&!n.selector&&(n.selector=te.selector),this.contexts.push(n),s=n.add("onMatch",s),n.queries=i;for(c in i)c==="all"?d=1:(u=et.matchMedia(i[c]),u&&(Xt.indexOf(n)<0&&Xt.push(n),(o[c]=u.matches)&&(d=1),u.addListener?u.addListener(Hs):u.addEventListener("change",Hs)));return d&&s(n,function(m){return n.add(null,m)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},l}(),os={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return On(s)})},timeline:function(e){return new Te(e)},getTweensOf:function(e,t){return ie.getTweensOf(e,t)},getProperty:function(e,t,i,s){ge(e)&&(e=Xe(e)[0]);var a=Yt(e||{}).get,n=i?bn:vn;return i==="native"&&(i=""),e&&(t?n((Ae[t]&&Ae[t].get||a)(e,t,i,s)):function(o,u,c){return n((Ae[o]&&Ae[o].get||a)(e,o,u,c))})},quickSetter:function(e,t,i){if(e=Xe(e),e.length>1){var s=e.map(function(d){return Ce.quickSetter(d,t,i)}),a=s.length;return function(d){for(var m=a;m--;)s[m](d)}}e=e[0]||{};var n=Ae[t],o=Yt(e),u=o.harness&&(o.harness.aliases||{})[t]||t,c=n?function(d){var m=new n;ti._pt=0,m.init(e,i?d+i:d,ti,0,[e]),m.render(1,m),ti._pt&&_a(1,ti)}:o.set(e,u);return n?c:function(d){return c(e,u,i?d+i:d,o,1)}},quickTo:function(e,t,i){var s,a=Ce.to(e,Ut((s={},s[t]="+=0.1",s.paused=!0,s),i||{})),n=function(u,c,d){return a.resetTo(t,u,c,d)};return n.tween=a,n},isTweening:function(e){return ie.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gt(e.ease,ci.ease)),Ra(ci,e||{})},config:function(e){return Ra(Le,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,a=e.defaults,n=e.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!Ae[o]&&!Ie[o]&&Li(t+" effect requires "+o+" plugin.")}),Ts[t]=function(o,u,c){return i(Xe(o),We(u||{},a),c)},n&&(Te.prototype[t]=function(o,u,c){return this.add(Ts[t](o,at(u)?u:(c=u)&&{},this),c)})},registerEase:function(e,t){V[e]=Gt(t)},parseEase:function(e,t){return arguments.length?Gt(e,t):V},getById:function(e){return ie.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Te(e),s,a;for(i.smoothChildTiming=ke(e.smoothChildTiming),ie.remove(i),i._dp=0,i._time=i._tTime=ie._time,s=ie._first;s;)a=s._next,(t||!(!s._dur&&s instanceof de&&s.vars.onComplete===s._targets[0]))&&tt(i,s,s._start-s._delay),s=a;return tt(ie,i,0),i},context:function(e,t){return e?new Un(e,t):te},matchMedia:function(e){return new hr(e)},matchMediaRefresh:function(){return Xt.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||Hs()},addEventListener:function(e,t){var i=Ki[e]||(Ki[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ki[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:Xo,wrapYoyo:Wo,distribute:Pn,random:Cn,snap:Sn,normalize:Go,getUnit:xe,clamp:Fo,splitColor:Rn,toArray:Xe,selector:Ws,mapRange:An,pipe:Yo,unitize:Vo,interpolate:qo,shuffle:Mn},install:mn,effects:Ts,ticker:Ee,updateRoot:Te.updateRoot,plugins:Ae,globalTimeline:ie,core:{PropTween:Pe,globals:pn,Tween:de,Timeline:Te,Animation:Bi,getCache:Yt,_removeLinkedListItem:ds,reverting:function(){return ye},context:function(e){return e&&te&&(te.data.push(e),e._ctx=te),te},suppressOverwrites:function(e){return na=e}}};Me("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return os[l]=de[l]});Ee.add(Te.updateRoot);ti=os.to({},{duration:0});var mr=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},pr=function(e,t){var i=e._targets,s,a,n;for(s in t)for(a=i.length;a--;)n=e._ptLookup[a][s],n&&(n=n.d)&&(n._pt&&(n=mr(n,s)),n&&n.modifier&&n.modifier(t[s],e,i[a],s))},Cs=function(e,t){return{name:e,rawVars:1,init:function(s,a,n){n._onInit=function(o){var u,c;if(ge(a)&&(u={},Me(a,function(d){return u[d]=1}),a=u),t){u={};for(c in a)u[c]=t(a[c]);a=u}pr(o,a)}}}},Ce=os.registerPlugin({name:"attr",init:function(e,t,i,s,a){var n,o,u;this.tween=i;for(n in t)u=e.getAttribute(n)||"",o=this.add(e,"setAttribute",(u||0)+"",t[n],s,a,0,0,n),o.op=n,o.b=u,this._props.push(n)},render:function(e,t){for(var i=t._pt;i;)ye?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Cs("roundProps",qs),Cs("modifiers"),Cs("snap",Sn))||os;de.version=Te.version=Ce.version="3.12.5";hn=1;ra()&&di();V.Power0;V.Power1;V.Power2;V.Power3;V.Power4;V.Linear;V.Quad;V.Cubic;V.Quart;V.Quint;V.Strong;V.Elastic;V.Back;V.SteppedEase;V.Bounce;V.Sine;V.Expo;V.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fa,wt,si,va,jt,ja,ba,fr=function(){return typeof window<"u"},mt={},Bt=180/Math.PI,ai=Math.PI/180,Qt=Math.atan2,Ya=1e8,xa=/([A-Z])/g,gr=/(left|right|width|margin|padding|x)/i,_r=/[\s,\(]\S/,it={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zs=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},br=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xr=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Hn=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zn=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},yr=function(e,t,i){return e.style[t]=i},wr=function(e,t,i){return e.style.setProperty(t,i)},Tr=function(e,t,i){return e._gsap[t]=i},kr=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Mr=function(e,t,i,s,a){var n=e._gsap;n.scaleX=n.scaleY=i,n.renderTransform(a,n)},Pr=function(e,t,i,s,a){var n=e._gsap;n[t]=i,n.renderTransform(a,n)},se="transform",Se=se+"Origin",Sr=function l(e,t){var i=this,s=this.target,a=s.style,n=s._gsap;if(e in mt&&a){if(this.tfm=this.tfm||{},e!=="transform")e=it[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ct(s,o)}):this.tfm[e]=n.x?n[e]:ct(s,e),e===Se&&(this.tfm.zOrigin=n.zOrigin);else return it.transform.split(",").forEach(function(o){return l.call(i,o,t)});if(this.props.indexOf(se)>=0)return;n.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Se,t,"")),e=se}(a||t)&&this.props.push(e,t,a[e])},$n=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Cr=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,a,n;for(a=0;a<e.length;a+=3)e[a+1]?t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(xa,"-$1").toLowerCase());if(this.tfm){for(n in this.tfm)s[n]=this.tfm[n];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=ba(),(!a||!a.isStart)&&!i[se]&&($n(i),s.zOrigin&&i[Se]&&(i[Se]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Qn=function(e,t){var i={target:e,props:[],revert:Cr,save:Sr};return e._gsap||Ce.core.getCache(e),t&&t.split(",").forEach(function(s){return i.save(s)}),i},Kn,$s=function(e,t){var i=wt.createElementNS?wt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wt.createElement(e);return i&&i.style?i:wt.createElement(e)},st=function l(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(xa,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&l(e,hi(t)||t,1)||""},Va="O,Moz,ms,Ms,Webkit".split(","),hi=function(e,t,i){var s=t||jt,a=s.style,n=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);n--&&!(Va[n]+e in a););return n<0?null:(n===3?"ms":n>=0?Va[n]:"")+e},Qs=function(){fr()&&window.document&&(Fa=window,wt=Fa.document,si=wt.documentElement,jt=$s("div")||{style:{}},$s("div"),se=hi(se),Se=se+"Origin",jt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kn=!!hi("perspective"),ba=Ce.core.reverting,va=1)},Ds=function l(e){var t=$s("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,s=this.nextSibling,a=this.style.cssText,n;if(si.appendChild(t),t.appendChild(this),this.style.display="block",e)try{n=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=l}catch{}else this._gsapBBox&&(n=this._gsapBBox());return i&&(s?i.insertBefore(this,s):i.appendChild(this)),si.removeChild(t),this.style.cssText=a,n},Ga=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Jn=function(e){var t;try{t=e.getBBox()}catch{t=Ds.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ds||(t=Ds.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ga(e,["x","cx","x1"])||0,y:+Ga(e,["y","cy","y1"])||0,width:0,height:0}:t},eo=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jn(e))},Ht=function(e,t){if(t){var i=e.style,s;t in mt&&t!==Se&&(t=se),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(xa,"-$1").toLowerCase())):i.removeAttribute(t)}},Tt=function(e,t,i,s,a,n){var o=new Pe(e._pt,t,i,0,1,n?Zn:Hn);return e._pt=o,o.b=s,o.e=a,e._props.push(i),o},Xa={deg:1,rad:1,turn:1},Dr={grid:1,flex:1},Ct=function l(e,t,i,s){var a=parseFloat(i)||0,n=(i+"").trim().substr((a+"").length)||"px",o=jt.style,u=gr.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(u?"Width":"Height"),m=100,p=s==="px",r=s==="%",g,h,v,x;if(s===n||!a||Xa[s]||Xa[n])return a;if(n!=="px"&&!p&&(a=l(e,t,i,"px")),x=e.getCTM&&eo(e),(r||n==="%")&&(mt[t]||~t.indexOf("adius")))return g=x?e.getBBox()[u?"width":"height"]:e[d],le(r?a/g*m:a/100*g);if(o[u?"width":"height"]=m+(p?n:s),h=~t.indexOf("adius")||s==="em"&&e.appendChild&&!c?e:e.parentNode,x&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===wt||!h.appendChild)&&(h=wt.body),v=h._gsap,v&&r&&v.width&&u&&v.time===Ee.time&&!v.uncache)return le(a/v.width*m);if(r&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=m+s,g=e[d],y?e.style[t]=y:Ht(e,t)}else(r||n==="%")&&!Dr[st(h,"display")]&&(o.position=st(e,"position")),h===e&&(o.position="static"),h.appendChild(jt),g=jt[d],h.removeChild(jt),o.position="absolute";return u&&r&&(v=Yt(h),v.time=Ee.time,v.width=h[d]),le(p?g*a/m:g&&a?m/g*a:0)},ct=function(e,t,i,s){var a;return va||Qs(),t in it&&t!=="transform"&&(t=it[t],~t.indexOf(",")&&(t=t.split(",")[0])),mt[t]&&t!=="transform"?(a=ji(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:cs(st(e,Se))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=rs[t]&&rs[t](e,t,i)||st(e,t)||gn(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?Ct(e,t,a,i)+i:a},Ar=function(e,t,i,s){if(!i||i==="none"){var a=hi(t,e,1),n=a&&st(e,a,1);n&&n!==i?(t=a,i=n):t==="borderColor"&&(i=st(e,"borderTopColor"))}var o=new Pe(this._pt,e.style,t,0,1,Wn),u=0,c=0,d,m,p,r,g,h,v,x,y,S,C,b;if(o.b=i,o.e=s,i+="",s+="",s==="auto"&&(h=e.style[t],e.style[t]=s,s=st(e,t)||s,h?e.style[t]=h:Ht(e,t)),d=[i,s],In(d),i=d[0],s=d[1],p=i.match(ei)||[],b=s.match(ei)||[],b.length){for(;m=ei.exec(s);)v=m[0],y=s.substring(u,m.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),v!==(h=p[c++]||"")&&(r=parseFloat(h)||0,C=h.substr((r+"").length),v.charAt(1)==="="&&(v=ii(r,v)+C),x=parseFloat(v),S=v.substr((x+"").length),u=ei.lastIndex-S.length,S||(S=S||Le.units[t]||C,u===s.length&&(s+=S,o.e+=S)),C!==S&&(r=Ct(e,t,h,S)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:r,c:x-r,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=u<s.length?s.substring(u,s.length):""}else o.r=t==="display"&&s==="none"?Zn:Hn;return un.test(s)&&(o.e=0),this._pt=o,o},Wa={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Er=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=Wa[i]||i,t[1]=Wa[s]||s,t.join(" ")},Or=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,a=t.u,n=i._gsap,o,u,c;if(a==="all"||a===!0)s.cssText="",u=1;else for(a=a.split(","),c=a.length;--c>-1;)o=a[c],mt[o]&&(u=1,o=o==="transformOrigin"?Se:se),Ht(i,o);u&&(Ht(i,se),n&&(n.svg&&i.removeAttribute("transform"),ji(i,1),n.uncache=1,$n(s)))}},rs={clearProps:function(e,t,i,s,a){if(a.data!=="isFromStart"){var n=e._pt=new Pe(e._pt,t,i,0,0,Or);return n.u=s,n.pr=-10,n.tween=a,e._props.push(i),1}}},Fi=[1,0,0,1,0,0],to={},io=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qa=function(e){var t=st(e,se);return io(t)?Fi:t.substr(7).match(ln).map(le)},ya=function(e,t){var i=e._gsap||Yt(e),s=e.style,a=qa(e),n,o,u,c;return i.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,a=[u.a,u.b,u.c,u.d,u.e,u.f],a.join(",")==="1,0,0,1,0,0"?Fi:a):(a===Fi&&!e.offsetParent&&e!==si&&!i.svg&&(u=s.display,s.display="block",n=e.parentNode,(!n||!e.offsetParent)&&(c=1,o=e.nextElementSibling,si.appendChild(e)),a=qa(e),u?s.display=u:Ht(e,"display"),c&&(o?n.insertBefore(e,o):n?n.appendChild(e):si.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Ks=function(e,t,i,s,a,n){var o=e._gsap,u=a||ya(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,m=o.xOffset||0,p=o.yOffset||0,r=u[0],g=u[1],h=u[2],v=u[3],x=u[4],y=u[5],S=t.split(" "),C=parseFloat(S[0])||0,b=parseFloat(S[1])||0,D,k,w,M;i?u!==Fi&&(k=r*v-g*h)&&(w=C*(v/k)+b*(-h/k)+(h*y-v*x)/k,M=C*(-g/k)+b*(r/k)-(r*y-g*x)/k,C=w,b=M):(D=Jn(e),C=D.x+(~S[0].indexOf("%")?C/100*D.width:C),b=D.y+(~(S[1]||S[0]).indexOf("%")?b/100*D.height:b)),s||s!==!1&&o.smooth?(x=C-c,y=b-d,o.xOffset=m+(x*r+y*h)-x,o.yOffset=p+(x*g+y*v)-y):o.xOffset=o.yOffset=0,o.xOrigin=C,o.yOrigin=b,o.smooth=!!s,o.origin=t,o.originIsAbsolute=!!i,e.style[Se]="0px 0px",n&&(Tt(n,o,"xOrigin",c,C),Tt(n,o,"yOrigin",d,b),Tt(n,o,"xOffset",m,o.xOffset),Tt(n,o,"yOffset",p,o.yOffset)),e.setAttribute("data-svg-origin",C+" "+b)},ji=function(e,t){var i=e._gsap||new Fn(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,a=i.scaleX<0,n="px",o="deg",u=getComputedStyle(e),c=st(e,Se)||"0",d,m,p,r,g,h,v,x,y,S,C,b,D,k,w,M,B,L,j,E,Q,U,F,N,he,At,pt,H,X,ae,W,Ne;return d=m=p=h=v=x=y=S=C=0,r=g=1,i.svg=!!(e.getCTM&&eo(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(s[se]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[se]!=="none"?u[se]:"")),s.scale=s.rotate=s.translate="none"),k=ya(e,i.svg),i.svg&&(i.uncache?(he=e.getBBox(),c=i.xOrigin-he.x+"px "+(i.yOrigin-he.y)+"px",N=""):N=!t&&e.getAttribute("data-svg-origin"),Ks(e,N||c,!!N||i.originIsAbsolute,i.smooth!==!1,k)),b=i.xOrigin||0,D=i.yOrigin||0,k!==Fi&&(L=k[0],j=k[1],E=k[2],Q=k[3],d=U=k[4],m=F=k[5],k.length===6?(r=Math.sqrt(L*L+j*j),g=Math.sqrt(Q*Q+E*E),h=L||j?Qt(j,L)*Bt:0,y=E||Q?Qt(E,Q)*Bt+h:0,y&&(g*=Math.abs(Math.cos(y*ai))),i.svg&&(d-=b-(b*L+D*E),m-=D-(b*j+D*Q))):(Ne=k[6],ae=k[7],pt=k[8],H=k[9],X=k[10],W=k[11],d=k[12],m=k[13],p=k[14],w=Qt(Ne,X),v=w*Bt,w&&(M=Math.cos(-w),B=Math.sin(-w),N=U*M+pt*B,he=F*M+H*B,At=Ne*M+X*B,pt=U*-B+pt*M,H=F*-B+H*M,X=Ne*-B+X*M,W=ae*-B+W*M,U=N,F=he,Ne=At),w=Qt(-E,X),x=w*Bt,w&&(M=Math.cos(-w),B=Math.sin(-w),N=L*M-pt*B,he=j*M-H*B,At=E*M-X*B,W=Q*B+W*M,L=N,j=he,E=At),w=Qt(j,L),h=w*Bt,w&&(M=Math.cos(w),B=Math.sin(w),N=L*M+j*B,he=U*M+F*B,j=j*M-L*B,F=F*M-U*B,L=N,U=he),v&&Math.abs(v)+Math.abs(h)>359.9&&(v=h=0,x=180-x),r=le(Math.sqrt(L*L+j*j+E*E)),g=le(Math.sqrt(F*F+Ne*Ne)),w=Qt(U,F),y=Math.abs(w)>2e-4?w*Bt:0,C=W?1/(W<0?-W:W):0),i.svg&&(N=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!io(st(e,se)),N&&e.setAttribute("transform",N))),Math.abs(y)>90&&Math.abs(y)<270&&(a?(r*=-1,y+=h<=0?180:-180,h+=h<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=d-((i.xPercent=d&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+n,i.y=m-((i.yPercent=m&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+n,i.z=p+n,i.scaleX=le(r),i.scaleY=le(g),i.rotation=le(h)+o,i.rotationX=le(v)+o,i.rotationY=le(x)+o,i.skewX=y+o,i.skewY=S+o,i.transformPerspective=C+n,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(s[Se]=cs(c)),i.xOffset=i.yOffset=0,i.force3D=Le.force3D,i.renderTransform=i.svg?Lr:Kn?so:Rr,i.uncache=0,i},cs=function(e){return(e=e.split(" "))[0]+" "+e[1]},As=function(e,t,i){var s=xe(t);return le(parseFloat(t)+parseFloat(Ct(e,"x",i+"px",s)))+s},Rr=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,so(e,t)},Lt="0deg",xi="0px",It=") ",so=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,n=i.x,o=i.y,u=i.z,c=i.rotation,d=i.rotationY,m=i.rotationX,p=i.skewX,r=i.skewY,g=i.scaleX,h=i.scaleY,v=i.transformPerspective,x=i.force3D,y=i.target,S=i.zOrigin,C="",b=x==="auto"&&e&&e!==1||x===!0;if(S&&(m!==Lt||d!==Lt)){var D=parseFloat(d)*ai,k=Math.sin(D),w=Math.cos(D),M;D=parseFloat(m)*ai,M=Math.cos(D),n=As(y,n,k*M*-S),o=As(y,o,-Math.sin(D)*-S),u=As(y,u,w*M*-S+S)}v!==xi&&(C+="perspective("+v+It),(s||a)&&(C+="translate("+s+"%, "+a+"%) "),(b||n!==xi||o!==xi||u!==xi)&&(C+=u!==xi||b?"translate3d("+n+", "+o+", "+u+") ":"translate("+n+", "+o+It),c!==Lt&&(C+="rotate("+c+It),d!==Lt&&(C+="rotateY("+d+It),m!==Lt&&(C+="rotateX("+m+It),(p!==Lt||r!==Lt)&&(C+="skew("+p+", "+r+It),(g!==1||h!==1)&&(C+="scale("+g+", "+h+It),y.style[se]=C||"translate(0, 0)"},Lr=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,n=i.x,o=i.y,u=i.rotation,c=i.skewX,d=i.skewY,m=i.scaleX,p=i.scaleY,r=i.target,g=i.xOrigin,h=i.yOrigin,v=i.xOffset,x=i.yOffset,y=i.forceCSS,S=parseFloat(n),C=parseFloat(o),b,D,k,w,M;u=parseFloat(u),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,u+=d),u||c?(u*=ai,c*=ai,b=Math.cos(u)*m,D=Math.sin(u)*m,k=Math.sin(u-c)*-p,w=Math.cos(u-c)*p,c&&(d*=ai,M=Math.tan(c-d),M=Math.sqrt(1+M*M),k*=M,w*=M,d&&(M=Math.tan(d),M=Math.sqrt(1+M*M),b*=M,D*=M)),b=le(b),D=le(D),k=le(k),w=le(w)):(b=m,w=p,D=k=0),(S&&!~(n+"").indexOf("px")||C&&!~(o+"").indexOf("px"))&&(S=Ct(r,"x",n,"px"),C=Ct(r,"y",o,"px")),(g||h||v||x)&&(S=le(S+g-(g*b+h*k)+v),C=le(C+h-(g*D+h*w)+x)),(s||a)&&(M=r.getBBox(),S=le(S+s/100*M.width),C=le(C+a/100*M.height)),M="matrix("+b+","+D+","+k+","+w+","+S+","+C+")",r.setAttribute("transform",M),y&&(r.style[se]=M)},Ir=function(e,t,i,s,a){var n=360,o=ge(a),u=parseFloat(a)*(o&&~a.indexOf("rad")?Bt:1),c=u-s,d=s+c+"deg",m,p;return o&&(m=a.split("_")[1],m==="short"&&(c%=n,c!==c%(n/2)&&(c+=c<0?n:-n)),m==="cw"&&c<0?c=(c+n*Ya)%n-~~(c/n)*n:m==="ccw"&&c>0&&(c=(c-n*Ya)%n-~~(c/n)*n)),e._pt=p=new Pe(e._pt,t,i,s,c,vr),p.e=d,p.u="deg",e._props.push(i),p},Ua=function(e,t){for(var i in t)e[i]=t[i];return e},Nr=function(e,t,i){var s=Ua({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",n=i.style,o,u,c,d,m,p,r,g;s.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),n[se]=t,o=ji(i,1),Ht(i,se),i.setAttribute("transform",c)):(c=getComputedStyle(i)[se],n[se]=t,o=ji(i,1),n[se]=c);for(u in mt)c=s[u],d=o[u],c!==d&&a.indexOf(u)<0&&(r=xe(c),g=xe(d),m=r!==g?Ct(i,u,c,g):parseFloat(c),p=parseFloat(d),e._pt=new Pe(e._pt,o,u,m,p-m,Zs),e._pt.u=g||0,e._props.push(u));Ua(o,s)};Me("padding,margin,Width,Radius",function(l,e){var t="Top",i="Right",s="Bottom",a="Left",n=(e<3?[t,i,s,a]:[t+a,t+i,s+i,s+a]).map(function(o){return e<2?l+o:"border"+o+l});rs[e>1?"border"+l:l]=function(o,u,c,d,m){var p,r;if(arguments.length<4)return p=n.map(function(g){return ct(o,g,c)}),r=p.join(" "),r.split(p[0]).length===5?p[0]:r;p=(d+"").split(" "),r={},n.forEach(function(g,h){return r[g]=p[h]=p[h]||p[(h-1)/2|0]}),o.init(u,r,m)}});var ao={name:"css",register:Qs,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,a){var n=this._props,o=e.style,u=i.vars.startAt,c,d,m,p,r,g,h,v,x,y,S,C,b,D,k,w;va||Qs(),this.styles=this.styles||Qn(e),w=this.styles.props,this.tween=i;for(h in t)if(h!=="autoRound"&&(d=t[h],!(Ae[h]&&jn(h,t,i,s,e,a)))){if(r=typeof d,g=rs[h],r==="function"&&(d=d.call(i,s,e,a),r=typeof d),r==="string"&&~d.indexOf("random(")&&(d=Ni(d)),g)g(this,e,h,d,i)&&(k=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),d+="",Pt.lastIndex=0,Pt.test(c)||(v=xe(c),x=xe(d)),x?v!==x&&(c=Ct(e,h,c,x)+x):v&&(d+=v),this.add(o,"setProperty",c,d,s,a,0,0,h),n.push(h),w.push(h,0,o[h]);else if(r!=="undefined"){if(u&&h in u?(c=typeof u[h]=="function"?u[h].call(i,s,e,a):u[h],ge(c)&&~c.indexOf("random(")&&(c=Ni(c)),xe(c+"")||c==="auto"||(c+=Le.units[h]||xe(ct(e,h))||""),(c+"").charAt(1)==="="&&(c=ct(e,h))):c=ct(e,h),p=parseFloat(c),y=r==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),m=parseFloat(d),h in it&&(h==="autoAlpha"&&(p===1&&ct(e,"visibility")==="hidden"&&m&&(p=0),w.push("visibility",0,o.visibility),Tt(this,o,"visibility",p?"inherit":"hidden",m?"inherit":"hidden",!m)),h!=="scale"&&h!=="transform"&&(h=it[h],~h.indexOf(",")&&(h=h.split(",")[0]))),S=h in mt,S){if(this.styles.save(h),C||(b=e._gsap,b.renderTransform&&!t.parseTransform||ji(e,t.parseTransform),D=t.smoothOrigin!==!1&&b.smooth,C=this._pt=new Pe(this._pt,o,se,0,1,b.renderTransform,b,0,-1),C.dep=1),h==="scale")this._pt=new Pe(this._pt,b,"scaleY",b.scaleY,(y?ii(b.scaleY,y+m):m)-b.scaleY||0,Zs),this._pt.u=0,n.push("scaleY",h),h+="X";else if(h==="transformOrigin"){w.push(Se,0,o[Se]),d=Er(d),b.svg?Ks(e,d,0,D,0,this):(x=parseFloat(d.split(" ")[2])||0,x!==b.zOrigin&&Tt(this,b,"zOrigin",b.zOrigin,x),Tt(this,o,h,cs(c),cs(d)));continue}else if(h==="svgOrigin"){Ks(e,d,1,D,0,this);continue}else if(h in to){Ir(this,b,h,p,y?ii(p,y+d):d);continue}else if(h==="smoothOrigin"){Tt(this,b,"smooth",b.smooth,d);continue}else if(h==="force3D"){b[h]=d;continue}else if(h==="transform"){Nr(this,d,e);continue}}else h in o||(h=hi(h)||h);if(S||(m||m===0)&&(p||p===0)&&!_r.test(d)&&h in o)v=(c+"").substr((p+"").length),m||(m=0),x=xe(d)||(h in Le.units?Le.units[h]:v),v!==x&&(p=Ct(e,h,c,x)),this._pt=new Pe(this._pt,S?b:o,h,p,(y?ii(p,y+m):m)-p,!S&&(x==="px"||h==="zIndex")&&t.autoRound!==!1?xr:Zs),this._pt.u=x||0,v!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=br);else if(h in o)Ar.call(this,e,h,c,y?y+d:d);else if(h in e)this.add(e,h,c||e[h],y?y+d:d,s,a);else if(h!=="parseTransform"){la(h,d);continue}S||(h in o?w.push(h,0,o[h]):w.push(h,1,c||e[h])),n.push(h)}}k&&qn(this)},render:function(e,t){if(t.tween._time||!ba())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ct,aliases:it,getSetter:function(e,t,i){var s=it[t];return s&&s.indexOf(",")<0&&(t=s),t in mt&&t!==Se&&(e._gsap.x||ct(e,"x"))?i&&ja===i?t==="scale"?kr:Tr:(ja=i||{})&&(t==="scale"?Mr:Pr):e.style&&!oa(e.style[t])?yr:~t.indexOf("-")?wr:ga(e,t)},core:{_removeProperty:Ht,_getMatrix:ya}};Ce.utils.checkPrefix=hi;Ce.core.getStyleSaver=Qn;(function(l,e,t,i){var s=Me(l+","+e+","+t,function(a){mt[a]=1});Me(e,function(a){Le.units[a]="deg",to[a]=1}),it[s[13]]=l+","+e,Me(i,function(a){var n=a.split(":");it[n[1]]=s[n[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Me("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){Le.units[l]="px"});Ce.registerPlugin(ao);var no=Ce.registerPlugin(ao)||Ce;no.core.Tween;/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ut,Wt,wa,ps,ki,Ji,ls,Ei,Qe="transform",Js=Qe+"Origin",oo,ro=function(e){var t=e.ownerDocument||e;for(!(Qe in e.style)&&("msTransform"in e.style)&&(Qe="msTransform",Js=Qe+"Origin");t.parentNode&&(t=t.parentNode););if(Wt=window,ls=new Zt,t){ut=t,wa=t.documentElement,ps=t.body,Ei=ut.createElementNS("http://www.w3.org/2000/svg","g"),Ei.style.transform="none";var i=t.createElement("div"),s=t.createElement("div"),a=t&&(t.body||t.firstElementChild);a&&a.appendChild&&(a.appendChild(i),i.appendChild(s),i.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),oo=s.offsetParent!==i,a.removeChild(i))}return t},zr=function(e){for(var t,i;e&&e!==ps;)i=e._gsap,i&&i.uncache&&i.get(e,"x"),i&&!i.scaleX&&!i.scaleY&&i.renderTransform&&(i.scaleX=i.scaleY=1e-4,i.renderTransform(1,i),t?t.push(i):t=[i]),e=e.parentNode;return t},co=[],lo=[],Br=function(){return Wt.pageYOffset||ut.scrollTop||wa.scrollTop||ps.scrollTop||0},Fr=function(){return Wt.pageXOffset||ut.scrollLeft||wa.scrollLeft||ps.scrollLeft||0},Ta=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},jr=function l(e){if(Wt.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return l(e)},Es=function l(e,t){if(e.parentNode&&(ut||ro(e))){var i=Ta(e),s=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=i?t?"rect":"g":"div",n=t!==2?0:100,o=t===3?100:0,u="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=ut.createElementNS?ut.createElementNS(s.replace(/^https/,"http"),a):ut.createElement(a);return t&&(i?(Ji||(Ji=l(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+n+","+o+")"),Ji.appendChild(c)):(ki||(ki=l(e),ki.style.cssText=u),c.style.cssText=u+"width:0.1px;height:0.1px;top:"+o+"px;left:"+n+"px",ki.appendChild(c))),c}throw"Need document and parent."},Yr=function(e){for(var t=new Zt,i=0;i<e.numberOfItems;i++)t.multiply(e.getItem(i).matrix);return t},Vr=function(e){var t=e.getCTM(),i;return t||(i=e.style[Qe],e.style[Qe]="none",e.appendChild(Ei),t=Ei.getCTM(),e.removeChild(Ei),i?e.style[Qe]=i:e.style.removeProperty(Qe.replace(/([A-Z])/g,"-$1").toLowerCase())),t||ls.clone()},Gr=function(e,t){var i=Ta(e),s=e===i,a=i?co:lo,n=e.parentNode,o,u,c,d,m,p;if(e===Wt)return e;if(a.length||a.push(Es(e,1),Es(e,2),Es(e,3)),o=i?Ji:ki,i)s?(c=Vr(e),d=-c.e/c.a,m=-c.f/c.d,u=ls):e.getBBox?(c=e.getBBox(),u=e.transform?e.transform.baseVal:{},u=u.numberOfItems?u.numberOfItems>1?Yr(u):u.getItem(0).matrix:ls,d=u.a*c.x+u.c*c.y,m=u.b*c.x+u.d*c.y):(u=new Zt,d=m=0),(s?i:n).appendChild(o),o.setAttribute("transform","matrix("+u.a+","+u.b+","+u.c+","+u.d+","+(u.e+d)+","+(u.f+m)+")");else{if(d=m=0,oo)for(u=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==u&&c.parentNode;)(Wt.getComputedStyle(c)[Qe]+"").length>4&&(d=c.offsetLeft,m=c.offsetTop,c=0);if(p=Wt.getComputedStyle(e),p.position!=="absolute"&&p.position!=="fixed")for(u=e.offsetParent;n&&n!==u;)d+=n.scrollLeft||0,m+=n.scrollTop||0,n=n.parentNode;c=o.style,c.top=e.offsetTop-m+"px",c.left=e.offsetLeft-d+"px",c[Qe]=p[Qe],c[Js]=p[Js],c.position=p.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(o)}return o},Os=function(e,t,i,s,a,n,o){return e.a=t,e.b=i,e.c=s,e.d=a,e.e=n,e.f=o,e},Zt=function(){function l(t,i,s,a,n,o){t===void 0&&(t=1),i===void 0&&(i=0),s===void 0&&(s=0),a===void 0&&(a=1),n===void 0&&(n=0),o===void 0&&(o=0),Os(this,t,i,s,a,n,o)}var e=l.prototype;return e.inverse=function(){var i=this.a,s=this.b,a=this.c,n=this.d,o=this.e,u=this.f,c=i*n-s*a||1e-10;return Os(this,n/c,-s/c,-a/c,i/c,(a*u-n*o)/c,-(i*u-s*o)/c)},e.multiply=function(i){var s=this.a,a=this.b,n=this.c,o=this.d,u=this.e,c=this.f,d=i.a,m=i.c,p=i.b,r=i.d,g=i.e,h=i.f;return Os(this,d*s+p*n,d*a+p*o,m*s+r*n,m*a+r*o,u+g*s+h*n,c+g*a+h*o)},e.clone=function(){return new l(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(i){var s=this.a,a=this.b,n=this.c,o=this.d,u=this.e,c=this.f;return s===i.a&&a===i.b&&n===i.c&&o===i.d&&u===i.e&&c===i.f},e.apply=function(i,s){s===void 0&&(s={});var a=i.x,n=i.y,o=this.a,u=this.b,c=this.c,d=this.d,m=this.e,p=this.f;return s.x=a*o+n*c+m||0,s.y=a*u+n*d+p||0,s},l}();function Ft(l,e,t,i){if(!l||!l.parentNode||(ut||ro(l)).documentElement===l)return new Zt;var s=zr(l),a=Ta(l),n=a?co:lo,o=Gr(l),u=n[0].getBoundingClientRect(),c=n[1].getBoundingClientRect(),d=n[2].getBoundingClientRect(),m=o.parentNode,p=jr(l),r=new Zt((c.left-u.left)/100,(c.top-u.top)/100,(d.left-u.left)/100,(d.top-u.top)/100,u.left+(p?0:Fr()),u.top+(p?0:Br()));if(m.removeChild(o),s)for(u=s.length;u--;)c=s[u],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?r.inverse():r}function Ha(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function Xr(l,e){l.prototype=Object.create(e.prototype),l.prototype.constructor=l,l.__proto__=e}var Y,J,Oe,Ke,dt,Rs,lt,ea,Mi,kt,uo,ta,Yi,ka,Pi,Ze,Si,es,ho,ia,us=0,mo=function(){return typeof window<"u"},po=function(){return Y||mo()&&(Y=window.gsap)&&Y.registerPlugin&&Y},xt=function(e){return typeof e=="function"},Oi=function(e){return typeof e=="object"},$e=function(e){return typeof e>"u"},ts=function(){return!1},Ri="transform",sa="transformOrigin",vt=function(e){return Math.round(e*1e4)/1e4},yi=Array.isArray,Hi=function(e,t){var i=Oe.createElementNS?Oe.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/,"http"),e):Oe.createElement(e);return i.style?i:Oe.createElement(e)},Za=180/Math.PI,Nt=1e20,Wr=new Zt,bt=Date.now||function(){return new Date().getTime()},qt=[],ni={},qr=0,Ur=/^(?:a|input|textarea|button|select)$/i,$a=0,Kt={},ot={},fo=function(e,t){var i={},s;for(s in e)i[s]=t?e[s]*t:e[s];return i},Hr=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Qa=function l(e,t){for(var i=e.length,s;i--;)t?e[i].style.touchAction=t:e[i].style.removeProperty("touch-action"),s=e[i].children,s&&s.length&&l(s,t)},go=function(){return qt.forEach(function(e){return e()})},Zr=function(e){qt.push(e),qt.length===1&&Y.ticker.add(go)},Ka=function(){return!qt.length&&Y.ticker.remove(go)},Ja=function(e){for(var t=qt.length;t--;)qt[t]===e&&qt.splice(t,1);Y.to(Ka,{overwrite:!0,delay:15,duration:0,onComplete:Ka,data:"_draggable"})},$r=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},me=function(e,t,i,s){if(e.addEventListener){var a=Yi[t];s=s||(uo?{passive:!1}:null),e.addEventListener(a||t,i,s),a&&t!==a&&e.addEventListener(t,i,s)}},ue=function(e,t,i,s){if(e.removeEventListener){var a=Yi[t];e.removeEventListener(a||t,i,s),a&&t!==a&&e.removeEventListener(t,i,s)}},je=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},Qr=function(e,t){for(var i=e.length;i--;)if(e[i].identifier===t)return!0},Kr=function l(e){ka=e.touches&&us<e.touches.length,ue(e.target,"touchend",l)},en=function(e){ka=e.touches&&us<e.touches.length,me(e.target,"touchend",Kr)},oi=function(e){return J.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},ri=function(e){return J.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},tn=function l(e,t){me(e,"scroll",t),mi(e.parentNode)||l(e.parentNode,t)},sn=function l(e,t){ue(e,"scroll",t),mi(e.parentNode)||l(e.parentNode,t)},mi=function(e){return!e||e===Ke||e.nodeType===9||e===Oe.body||e===J||!e.nodeType||!e.parentNode},an=function(e,t){var i=t==="x"?"Width":"Height",s="scroll"+i,a="client"+i;return Math.max(0,mi(e)?Math.max(Ke[s],dt[s])-(J["inner"+i]||Ke[a]||dt[a]):e[s]-e[a])},Ls=function l(e,t){var i=an(e,"x"),s=an(e,"y");mi(e)?e=ot:l(e.parentNode,t),e._gsMaxScrollX=i,e._gsMaxScrollY=s,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},Is=function(e,t,i){var s=e.style;s&&($e(s[t])&&(t=Mi(t,e)||t),i==null?s.removeProperty&&s.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):s[t]=i)},Vi=function(e){return J.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},zt={},Jt=function(e){if(e===J)return zt.left=zt.top=0,zt.width=zt.right=Ke.clientWidth||e.innerWidth||dt.clientWidth||0,zt.height=zt.bottom=(e.innerHeight||0)-20<Ke.clientHeight?Ke.clientHeight:e.innerHeight||dt.clientHeight||0,zt;var t=e.ownerDocument||Oe,i=$e(e.pageX)?!e.nodeType&&!$e(e.left)&&!$e(e.top)?e:kt(e)[0].getBoundingClientRect():{left:e.pageX-ri(t),top:e.pageY-oi(t),right:e.pageX-ri(t)+1,bottom:e.pageY-oi(t)+1};return $e(i.right)&&!$e(i.width)?(i.right=i.left+i.width,i.bottom=i.top+i.height):$e(i.width)&&(i={width:i.right-i.left,height:i.bottom-i.top,right:i.right,left:i.left,bottom:i.bottom,top:i.top}),i},ce=function(e,t,i){var s=e.vars,a=s[i],n=e._listeners[t],o;return xt(a)&&(o=a.apply(s.callbackScope||e,s[i+"Params"]||[e.pointerEvent])),n&&e.dispatchEvent(t)===!1&&(o=!1),o},nn=function(e,t){var i=kt(e)[0],s,a,n;return!i.nodeType&&i!==J?$e(e.left)?(a=e.min||e.minX||e.minRotation||0,s=e.min||e.minY||0,{left:a,top:s,width:(e.max||e.maxX||e.maxRotation||0)-a,height:(e.max||e.maxY||0)-s}):(n={x:0,y:0},{left:e.left-n.x,top:e.top-n.y,width:e.width,height:e.height}):Jr(i,t)},Ye={},Jr=function(e,t){t=kt(t)[0];var i=e.getBBox&&e.ownerSVGElement,s=e.ownerDocument||Oe,a,n,o,u,c,d,m,p,r,g,h,v,x;if(e===J)o=oi(s),a=ri(s),n=a+(s.documentElement.clientWidth||e.innerWidth||s.body.clientWidth||0),u=o+((e.innerHeight||0)-20<s.documentElement.clientHeight?s.documentElement.clientHeight:e.innerHeight||s.body.clientHeight||0);else{if(t===J||$e(t))return e.getBoundingClientRect();a=o=0,i?(g=e.getBBox(),h=g.width,v=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(a=g.x||0,o=g.y||0,h=g.width,v=g.height),h||(x=Vi(e),g=x.boxSizing==="border-box",h=(parseFloat(x.width)||e.clientWidth||0)+(g?0:parseFloat(x.borderLeftWidth)+parseFloat(x.borderRightWidth)),v=(parseFloat(x.height)||e.clientHeight||0)+(g?0:parseFloat(x.borderTopWidth)+parseFloat(x.borderBottomWidth)))),n=h,u=v}return e===t?{left:a,top:o,width:n-a,height:u-o}:(c=Ft(t,!0).multiply(Ft(e)),d=c.apply({x:a,y:o}),m=c.apply({x:n,y:o}),p=c.apply({x:n,y:u}),r=c.apply({x:a,y:u}),a=Math.min(d.x,m.x,p.x,r.x),o=Math.min(d.y,m.y,p.y,r.y),{left:a,top:o,width:Math.max(d.x,m.x,p.x,r.x)-a,height:Math.max(d.y,m.y,p.y,r.y)-o})},Ns=function(e,t,i,s,a,n){var o={},u,c,d;if(t)if(a!==1&&t instanceof Array){if(o.end=u=[],d=t.length,Oi(t[0]))for(c=0;c<d;c++)u[c]=fo(t[c],a);else for(c=0;c<d;c++)u[c]=t[c]*a;i+=1.1,s-=1.1}else xt(t)?o.end=function(m){var p=t.call(e,m),r,g;if(a!==1)if(Oi(p)){r={};for(g in p)r[g]=p[g]*a;p=r}else p*=a;return p}:o.end=t;return(i||i===0)&&(o.max=i),(s||s===0)&&(o.min=s),n&&(o.velocity=0),o},ec=function l(e){var t;return!e||!e.getAttribute||e===dt?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(Ur.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:l(e.parentNode)},Zi=function(e,t){for(var i=e.length,s;i--;)s=e[i],s.ondragstart=s.onselectstart=t?null:ts,Y.set(s,{lazy:!0,userSelect:t?"text":"none"})},tc=function l(e){if(Vi(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return l(e)},_o,aa,ic=function(e,t){e=Y.utils.toArray(e)[0],t=t||{};var i=document.createElement("div"),s=i.style,a=e.firstChild,n=0,o=0,u=e.scrollTop,c=e.scrollLeft,d=e.scrollWidth,m=e.scrollHeight,p=0,r=0,g=0,h,v,x,y,S,C;_o&&t.force3D!==!1?(S="translate3d(",C="px,0px)"):Ri&&(S="translate(",C="px)"),this.scrollTop=function(b,D){if(!arguments.length)return-this.top();this.top(-b,D)},this.scrollLeft=function(b,D){if(!arguments.length)return-this.left();this.left(-b,D)},this.left=function(b,D){if(!arguments.length)return-(e.scrollLeft+o);var k=e.scrollLeft-c,w=o;if((k>2||k<-2)&&!D){c=e.scrollLeft,Y.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-c),t.onKill&&t.onKill();return}b=-b,b<0?(o=b-.5|0,b=0):b>r?(o=b-r|0,b=r):o=0,(o||w)&&(this._skip||(s[Ri]=S+-o+"px,"+-n+C),o+p>=0&&(s.paddingRight=o+p+"px")),e.scrollLeft=b|0,c=e.scrollLeft},this.top=function(b,D){if(!arguments.length)return-(e.scrollTop+n);var k=e.scrollTop-u,w=n;if((k>2||k<-2)&&!D){u=e.scrollTop,Y.killTweensOf(this,{top:1,scrollTop:1}),this.top(-u),t.onKill&&t.onKill();return}b=-b,b<0?(n=b-.5|0,b=0):b>g?(n=b-g|0,b=g):n=0,(n||w)&&(this._skip||(s[Ri]=S+-o+"px,"+-n+C)),e.scrollTop=b|0,u=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return r},this.disable=function(){for(a=i.firstChild;a;)y=a.nextSibling,e.appendChild(a),a=y;e===i.parentNode&&e.removeChild(i)},this.enable=function(){if(a=e.firstChild,a!==i){for(;a;)y=a.nextSibling,i.appendChild(a),a=y;e.appendChild(i),this.calibrate()}},this.calibrate=function(b){var D=e.clientWidth===h,k,w,M;u=e.scrollTop,c=e.scrollLeft,!(D&&e.clientHeight===v&&i.offsetHeight===x&&d===e.scrollWidth&&m===e.scrollHeight&&!b)&&((n||o)&&(w=this.left(),M=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),k=Vi(e),(!D||b)&&(s.display="block",s.width="auto",s.paddingRight="0px",p=Math.max(0,e.scrollWidth-e.clientWidth),p&&(p+=parseFloat(k.paddingLeft)+(aa?parseFloat(k.paddingRight):0))),s.display="inline-block",s.position="relative",s.overflow="visible",s.verticalAlign="top",s.boxSizing="content-box",s.width="100%",s.paddingRight=p+"px",aa&&(s.paddingBottom=k.paddingBottom),h=e.clientWidth,v=e.clientHeight,d=e.scrollWidth,m=e.scrollHeight,r=e.scrollWidth-h,g=e.scrollHeight-v,x=i.offsetHeight,s.display="block",(w||M)&&(this.left(w),this.top(M)))},this.content=i,this.element=e,this._skip=!1,this.enable()},zs=function(e){if(mo()&&document.body){var t=window&&window.navigator;J=window,Oe=document,Ke=Oe.documentElement,dt=Oe.body,Rs=Hi("div"),es=!!window.PointerEvent,lt=Hi("div"),lt.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",Si=lt.style.cursor==="grab"?"grab":"move",Pi=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,ta="ontouchstart"in Ke&&"orientation"in J||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),aa=function(){var i=Hi("div"),s=Hi("div"),a=s.style,n=dt,o;return a.display="inline-block",a.position="relative",i.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",i.appendChild(s),n.appendChild(i),o=s.offsetHeight+18>i.scrollHeight,n.removeChild(i),o}(),Yi=function(i){for(var s=i.split(","),a=("onpointerdown"in Rs?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in Rs?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":i).split(","),n={},o=4;--o>-1;)n[s[o]]=a[o],n[a[o]]=s[o];try{Ke.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){uo=1}}))}catch{}return n}("touchstart,touchmove,touchend,touchcancel"),me(Oe,"touchcancel",ts),me(J,"touchmove",ts),dt&&dt.addEventListener("touchstart",ts),me(Oe,"contextmenu",function(){for(var i in ni)ni[i].isPressed&&ni[i].endDrag()}),Y=ea=po()}Y?(Ze=Y.plugins.inertia,ho=Y.core.context||function(){},Mi=Y.utils.checkPrefix,Ri=Mi(Ri),sa=Mi(sa),kt=Y.utils.toArray,ia=Y.core.getStyleSaver,_o=!!Mi("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},sc=function(){function l(t){this._listeners={},this.target=t||this}var e=l.prototype;return e.addEventListener=function(i,s){var a=this._listeners[i]||(this._listeners[i]=[]);~a.indexOf(s)||a.push(s)},e.removeEventListener=function(i,s){var a=this._listeners[i],n=a&&a.indexOf(s);n>=0&&a.splice(n,1)},e.dispatchEvent=function(i){var s=this,a;return(this._listeners[i]||[]).forEach(function(n){return n.call(s,{type:i,target:s.target})===!1&&(a=!1)}),a},l}(),pi=function(l){Xr(e,l);function e(t,i){var s;s=l.call(this)||this,ea||zs(1),t=kt(t)[0],s.styles=ia&&ia(t,"transform,left,top"),Ze||(Ze=Y.plugins.inertia),s.vars=i=fo(i||{}),s.target=t,s.x=s.y=s.rotation=0,s.dragResistance=parseFloat(i.dragResistance)||0,s.edgeResistance=isNaN(i.edgeResistance)?1:parseFloat(i.edgeResistance)||0,s.lockAxis=i.lockAxis,s.autoScroll=i.autoScroll||0,s.lockedAxis=null,s.allowEventDefault=!!i.allowEventDefault,Y.getProperty(t,"x");var a=(i.type||"x,y").toLowerCase(),n=~a.indexOf("x")||~a.indexOf("y"),o=a.indexOf("rotation")!==-1,u=o?"rotation":n?"x":"left",c=n?"y":"top",d=!!(~a.indexOf("x")||~a.indexOf("left")||a==="scroll"),m=!!(~a.indexOf("y")||~a.indexOf("top")||a==="scroll"),p=i.minimumMovement||2,r=Ha(s),g=kt(i.trigger||i.handle||t),h={},v=0,x=!1,y=i.autoScrollMarginTop||40,S=i.autoScrollMarginRight||40,C=i.autoScrollMarginBottom||40,b=i.autoScrollMarginLeft||40,D=i.clickableTest||ec,k=0,w=t._gsap||Y.core.getCache(t),M=tc(t),B=function(f,T){return parseFloat(w.get(t,f,T))},L=t.ownerDocument||Oe,j,E,Q,U,F,N,he,At,pt,H,X,ae,W,Ne,ze,fi,pe,fs,ft,gt,Et,gi,_e,q,Ma,Be,qe,gs,_s,Pa,De,Sa,Xi,Ca=function(f){return je(f),f.stopImmediatePropagation&&f.stopImmediatePropagation(),!1},Je=function I(f){if(r.autoScroll&&r.isDragging&&(x||pe)){var T=t,_=r.autoScroll*15,P,A,O,z,R,Z,G,$;for(x=!1,ot.scrollTop=J.pageYOffset!=null?J.pageYOffset:L.documentElement.scrollTop!=null?L.documentElement.scrollTop:L.body.scrollTop,ot.scrollLeft=J.pageXOffset!=null?J.pageXOffset:L.documentElement.scrollLeft!=null?L.documentElement.scrollLeft:L.body.scrollLeft,z=r.pointerX-ot.scrollLeft,R=r.pointerY-ot.scrollTop;T&&!A;)A=mi(T.parentNode),P=A?ot:T.parentNode,O=A?{bottom:Math.max(Ke.clientHeight,J.innerHeight||0),right:Math.max(Ke.clientWidth,J.innerWidth||0),left:0,top:0}:P.getBoundingClientRect(),Z=G=0,m&&($=P._gsMaxScrollY-P.scrollTop,$<0?G=$:R>O.bottom-C&&$?(x=!0,G=Math.min($,_*(1-Math.max(0,O.bottom-R)/C)|0)):R<O.top+y&&P.scrollTop&&(x=!0,G=-Math.min(P.scrollTop,_*(1-Math.max(0,R-O.top)/y)|0)),G&&(P.scrollTop+=G)),d&&($=P._gsMaxScrollX-P.scrollLeft,$<0?Z=$:z>O.right-S&&$?(x=!0,Z=Math.min($,_*(1-Math.max(0,O.right-z)/S)|0)):z<O.left+b&&P.scrollLeft&&(x=!0,Z=-Math.min(P.scrollLeft,_*(1-Math.max(0,z-O.left)/b)|0)),Z&&(P.scrollLeft+=Z)),A&&(Z||G)&&(J.scrollTo(P.scrollLeft,P.scrollTop),bi(r.pointerX+Z,r.pointerY+G)),T=P}if(pe){var oe=r.x,be=r.y;o?(r.deltaX=oe-parseFloat(w.rotation),r.rotation=oe,w.rotation=oe+"deg",w.renderTransform(1,w)):E?(m&&(r.deltaY=be-E.top(),E.top(be)),d&&(r.deltaX=oe-E.left(),E.left(oe))):n?(m&&(r.deltaY=be-parseFloat(w.y),w.y=be+"px"),d&&(r.deltaX=oe-parseFloat(w.x),w.x=oe+"px"),w.renderTransform(1,w)):(m&&(r.deltaY=be-parseFloat(t.style.top||0),t.style.top=be+"px"),d&&(r.deltaX=oe-parseFloat(t.style.left||0),t.style.left=oe+"px")),At&&!f&&!gs&&(gs=!0,ce(r,"drag","onDrag")===!1&&(d&&(r.x-=r.deltaX),m&&(r.y-=r.deltaY),I(!0)),gs=!1)}pe=!1},Ot=function(f,T){var _=r.x,P=r.y,A,O;t._gsap||(w=Y.core.getCache(t)),w.uncache&&Y.getProperty(t,"x"),n?(r.x=parseFloat(w.x),r.y=parseFloat(w.y)):o?r.x=r.rotation=parseFloat(w.rotation):E?(r.y=E.top(),r.x=E.left()):(r.y=parseFloat(t.style.top||(O=Vi(t))&&O.top)||0,r.x=parseFloat(t.style.left||(O||{}).left)||0),(ft||gt||Et)&&!T&&(r.isDragging||r.isThrowing)&&(Et&&(Kt.x=r.x,Kt.y=r.y,A=Et(Kt),A.x!==r.x&&(r.x=A.x,pe=!0),A.y!==r.y&&(r.y=A.y,pe=!0)),ft&&(A=ft(r.x),A!==r.x&&(r.x=A,o&&(r.rotation=A),pe=!0)),gt&&(A=gt(r.y),A!==r.y&&(r.y=A),pe=!0)),pe&&Je(!0),f||(r.deltaX=r.x-_,r.deltaY=r.y-P,ce(r,"throwupdate","onThrowUpdate"))},vs=function(f,T,_,P){return T==null&&(T=-Nt),_==null&&(_=Nt),xt(f)?function(A){var O=r.isPressed?1-r.edgeResistance:1;return f.call(r,(A>_?_+(A-_)*O:A<T?T+(A-T)*O:A)*P)*P}:yi(f)?function(A){for(var O=f.length,z=0,R=Nt,Z,G;--O>-1;)Z=f[O],G=Z-A,G<0&&(G=-G),G<R&&Z>=T&&Z<=_&&(z=O,R=G);return f[z]}:isNaN(f)?function(A){return A}:function(){return f*P}},vo=function(f,T,_,P,A,O,z){return O=O&&O<Nt?O*O:Nt,xt(f)?function(R){var Z=r.isPressed?1-r.edgeResistance:1,G=R.x,$=R.y,oe,be,nt;return R.x=G=G>_?_+(G-_)*Z:G<T?T+(G-T)*Z:G,R.y=$=$>A?A+($-A)*Z:$<P?P+($-P)*Z:$,oe=f.call(r,R),oe!==R&&(R.x=oe.x,R.y=oe.y),z!==1&&(R.x*=z,R.y*=z),O<Nt&&(be=R.x-G,nt=R.y-$,be*be+nt*nt>O&&(R.x=G,R.y=$)),R}:yi(f)?function(R){for(var Z=f.length,G=0,$=Nt,oe,be,nt,Fe;--Z>-1;)nt=f[Z],oe=nt.x-R.x,be=nt.y-R.y,Fe=oe*oe+be*be,Fe<$&&(G=Z,$=Fe);return $<=O?f[G]:R}:function(R){return R}},bs=function(){var f,T,_,P;he=!1,E?(E.calibrate(),r.minX=X=-E.maxScrollLeft(),r.minY=W=-E.maxScrollTop(),r.maxX=H=r.maxY=ae=0,he=!0):i.bounds&&(f=nn(i.bounds,t.parentNode),o?(r.minX=X=f.left,r.maxX=H=f.left+f.width,r.minY=W=r.maxY=ae=0):!$e(i.bounds.maxX)||!$e(i.bounds.maxY)?(f=i.bounds,r.minX=X=f.minX,r.minY=W=f.minY,r.maxX=H=f.maxX,r.maxY=ae=f.maxY):(T=nn(t,t.parentNode),r.minX=X=Math.round(B(u,"px")+f.left-T.left),r.minY=W=Math.round(B(c,"px")+f.top-T.top),r.maxX=H=Math.round(X+(f.width-T.width)),r.maxY=ae=Math.round(W+(f.height-T.height))),X>H&&(r.minX=H,r.maxX=H=X,X=r.minX),W>ae&&(r.minY=ae,r.maxY=ae=W,W=r.minY),o&&(r.minRotation=X,r.maxRotation=H),he=!0),i.liveSnap&&(_=i.liveSnap===!0?i.snap||{}:i.liveSnap,P=yi(_)||xt(_),o?(ft=vs(P?_:_.rotation,X,H,1),gt=null):_.points?Et=vo(P?_:_.points,X,H,W,ae,_.radius,E?-1:1):(d&&(ft=vs(P?_:_.x||_.left||_.scrollLeft,X,H,E?-1:1)),m&&(gt=vs(P?_:_.y||_.top||_.scrollTop,W,ae,E?-1:1))))},bo=function(){r.isThrowing=!1,ce(r,"throwcomplete","onThrowComplete")},xo=function(){r.isThrowing=!1},xs=function(f,T){var _,P,A,O;f&&Ze?(f===!0&&(_=i.snap||i.liveSnap||{},P=yi(_)||xt(_),f={resistance:(i.throwResistance||i.resistance||1e3)/(o?10:1)},o?f.rotation=Ns(r,P?_:_.rotation,H,X,1,T):(d&&(f[u]=Ns(r,P?_:_.points||_.x||_.left,H,X,E?-1:1,T||r.lockedAxis==="x")),m&&(f[c]=Ns(r,P?_:_.points||_.y||_.top,ae,W,E?-1:1,T||r.lockedAxis==="y")),(_.points||yi(_)&&Oi(_[0]))&&(f.linkedProps=u+","+c,f.radius=_.radius))),r.isThrowing=!0,O=isNaN(i.overshootTolerance)?i.edgeResistance===1?0:1-r.edgeResistance+.2:i.overshootTolerance,f.duration||(f.duration={max:Math.max(i.minDuration||0,"maxDuration"in i?i.maxDuration:2),min:isNaN(i.minDuration)?O===0||Oi(f)&&f.resistance>1e3?0:.5:i.minDuration,overshoot:O}),r.tween=A=Y.to(E||t,{inertia:f,data:"_draggable",inherit:!1,onComplete:bo,onInterrupt:xo,onUpdate:i.fastMode?ce:Ot,onUpdateParams:i.fastMode?[r,"onthrowupdate","onThrowUpdate"]:_&&_.radius?[!1,!0]:[]}),i.fastMode||(E&&(E._skip=!0),A.render(1e9,!0,!0),Ot(!0,!0),r.endX=r.x,r.endY=r.y,o&&(r.endRotation=r.x),A.play(0),Ot(!0,!0),E&&(E._skip=!1))):he&&r.applyBounds()},Da=function(f){var T=q,_;q=Ft(t.parentNode,!0),f&&r.isPressed&&!q.equals(T||new Zt)&&(_=T.inverse().apply({x:Q,y:U}),q.apply(_,_),Q=_.x,U=_.y),q.equals(Wr)&&(q=null)},Wi=function(){var f=1-r.edgeResistance,T=M?ri(L):0,_=M?oi(L):0,P,A,O;n&&(w.x=B(u,"px")+"px",w.y=B(c,"px")+"px",w.renderTransform()),Da(!1),Ye.x=r.pointerX-T,Ye.y=r.pointerY-_,q&&q.apply(Ye,Ye),Q=Ye.x,U=Ye.y,pe&&(bi(r.pointerX,r.pointerY),Je(!0)),Sa=Ft(t),E?(bs(),N=E.top(),F=E.left()):(_i()?(Ot(!0,!0),bs()):r.applyBounds(),o?(P=t.ownerSVGElement?[w.xOrigin-t.getBBox().x,w.yOrigin-t.getBBox().y]:(Vi(t)[sa]||"0 0").split(" "),fi=r.rotationOrigin=Ft(t).apply({x:parseFloat(P[0])||0,y:parseFloat(P[1])||0}),Ot(!0,!0),A=r.pointerX-fi.x-T,O=fi.y-r.pointerY+_,F=r.x,N=r.y=Math.atan2(O,A)*Za):(N=B(c,"px"),F=B(u,"px"))),he&&f&&(F>H?F=H+(F-H)/f:F<X&&(F=X-(X-F)/f),o||(N>ae?N=ae+(N-ae)/f:N<W&&(N=W-(W-N)/f))),r.startX=F=vt(F),r.startY=N=vt(N)},_i=function(){return r.tween&&r.tween.isActive()},yo=function(){lt.parentNode&&!_i()&&!r.isDragging&&lt.parentNode.removeChild(lt)},vi=function(f,T){var _;if(!j||r.isPressed||!f||(f.type==="mousedown"||f.type==="pointerdown")&&!T&&bt()-k<30&&Yi[r.pointerEvent.type]){De&&f&&j&&je(f);return}if(Ma=_i(),Xi=!1,r.pointerEvent=f,Yi[f.type]?(_e=~f.type.indexOf("touch")?f.currentTarget||f.target:L,me(_e,"touchend",Ue),me(_e,"touchmove",Rt),me(_e,"touchcancel",Ue),me(L,"touchstart",en)):(_e=null,me(L,"mousemove",Rt)),qe=null,(!es||!_e)&&(me(L,"mouseup",Ue),f&&f.target&&me(f.target,"mouseup",Ue)),gi=D.call(r,f.target)&&i.dragClickables===!1&&!T,gi){me(f.target,"change",Ue),ce(r,"pressInit","onPressInit"),ce(r,"press","onPress"),Zi(g,!0),De=!1;return}if(Be=!_e||d===m||r.vars.allowNativeTouchScrolling===!1||r.vars.allowContextMenu&&f&&(f.ctrlKey||f.which>2)?!1:d?"y":"x",De=!Be&&!r.allowEventDefault,De&&(je(f),me(J,"touchforcechange",je)),f.changedTouches?(f=Ne=f.changedTouches[0],ze=f.identifier):f.pointerId?ze=f.pointerId:Ne=ze=null,us++,Zr(Je),U=r.pointerY=f.pageY,Q=r.pointerX=f.pageX,ce(r,"pressInit","onPressInit"),(Be||r.autoScroll)&&Ls(t.parentNode),t.parentNode&&r.autoScroll&&!E&&!o&&t.parentNode._gsMaxScrollX&&!lt.parentNode&&!t.getBBox&&(lt.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(lt)),Wi(),r.tween&&r.tween.kill(),r.isThrowing=!1,Y.killTweensOf(E||t,h,!0),E&&Y.killTweensOf(t,{scrollTo:1},!0),r.tween=r.lockedAxis=null,(i.zIndexBoost||!o&&!E&&i.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),r.isPressed=!0,At=!!(i.onDrag||r._listeners.drag),pt=!!(i.onMove||r._listeners.move),i.cursor!==!1||i.activeCursor)for(_=g.length;--_>-1;)Y.set(g[_],{cursor:i.activeCursor||i.cursor||(Si==="grab"?"grabbing":Si)});ce(r,"press","onPress")},Rt=function(f){var T=f,_,P,A,O,z,R;if(!j||ka||!r.isPressed||!f){De&&f&&j&&je(f);return}if(r.pointerEvent=f,_=f.changedTouches,_){if(f=_[0],f!==Ne&&f.identifier!==ze){for(O=_.length;--O>-1&&(f=_[O]).identifier!==ze&&f.target!==t;);if(O<0)return}}else if(f.pointerId&&ze&&f.pointerId!==ze)return;if(_e&&Be&&!qe&&(Ye.x=f.pageX-(M?ri(L):0),Ye.y=f.pageY-(M?oi(L):0),q&&q.apply(Ye,Ye),P=Ye.x,A=Ye.y,z=Math.abs(P-Q),R=Math.abs(A-U),(z!==R&&(z>p||R>p)||Pi&&Be===qe)&&(qe=z>R&&d?"x":"y",Be&&qe!==Be&&me(J,"touchforcechange",je),r.vars.lockAxisOnTouchScroll!==!1&&d&&m&&(r.lockedAxis=qe==="x"?"y":"x",xt(r.vars.onLockAxis)&&r.vars.onLockAxis.call(r,T)),Pi&&Be===qe))){Ue(T);return}!r.allowEventDefault&&(!Be||qe&&Be!==qe)&&T.cancelable!==!1?(je(T),De=!0):De&&(De=!1),r.autoScroll&&(x=!0),bi(f.pageX,f.pageY,pt)},bi=function(f,T,_){var P=1-r.dragResistance,A=1-r.edgeResistance,O=r.pointerX,z=r.pointerY,R=N,Z=r.x,G=r.y,$=r.endX,oe=r.endY,be=r.endRotation,nt=pe,Fe,_t,ve,re,ys,He;r.pointerX=f,r.pointerY=T,M&&(f-=ri(L),T-=oi(L)),o?(re=Math.atan2(fi.y-T,f-fi.x)*Za,ys=r.y-re,ys>180?(N-=360,r.y=re):ys<-180&&(N+=360,r.y=re),r.x!==F||Math.abs(N-re)>p?(r.y=re,ve=F+(N-re)*P):ve=F):(q&&(He=f*q.a+T*q.c+q.e,T=f*q.b+T*q.d+q.f,f=He),_t=T-U,Fe=f-Q,_t<p&&_t>-p&&(_t=0),Fe<p&&Fe>-p&&(Fe=0),(r.lockAxis||r.lockedAxis)&&(Fe||_t)&&(He=r.lockedAxis,He||(r.lockedAxis=He=d&&Math.abs(Fe)>Math.abs(_t)?"y":m?"x":null,He&&xt(r.vars.onLockAxis)&&r.vars.onLockAxis.call(r,r.pointerEvent)),He==="y"?_t=0:He==="x"&&(Fe=0)),ve=vt(F+Fe*P),re=vt(N+_t*P)),(ft||gt||Et)&&(r.x!==ve||r.y!==re&&!o)&&(Et&&(Kt.x=ve,Kt.y=re,He=Et(Kt),ve=vt(He.x),re=vt(He.y)),ft&&(ve=vt(ft(ve))),gt&&(re=vt(gt(re)))),he&&(ve>H?ve=H+Math.round((ve-H)*A):ve<X&&(ve=X+Math.round((ve-X)*A)),o||(re>ae?re=Math.round(ae+(re-ae)*A):re<W&&(re=Math.round(W+(re-W)*A)))),(r.x!==ve||r.y!==re&&!o)&&(o?(r.endRotation=r.x=r.endX=ve,pe=!0):(m&&(r.y=r.endY=re,pe=!0),d&&(r.x=r.endX=ve,pe=!0)),!_||ce(r,"move","onMove")!==!1?!r.isDragging&&r.isPressed&&(r.isDragging=Xi=!0,ce(r,"dragstart","onDragStart")):(r.pointerX=O,r.pointerY=z,N=R,r.x=Z,r.y=G,r.endX=$,r.endY=oe,r.endRotation=be,pe=nt))},Ue=function I(f,T){if(!j||!r.isPressed||f&&ze!=null&&!T&&(f.pointerId&&f.pointerId!==ze&&f.target!==t||f.changedTouches&&!Qr(f.changedTouches,ze))){De&&f&&j&&je(f);return}r.isPressed=!1;var _=f,P=r.isDragging,A=r.vars.allowContextMenu&&f&&(f.ctrlKey||f.which>2),O=Y.delayedCall(.001,yo),z,R,Z,G,$;if(_e?(ue(_e,"touchend",I),ue(_e,"touchmove",Rt),ue(_e,"touchcancel",I),ue(L,"touchstart",en)):ue(L,"mousemove",Rt),ue(J,"touchforcechange",je),(!es||!_e)&&(ue(L,"mouseup",I),f&&f.target&&ue(f.target,"mouseup",I)),pe=!1,P&&(v=$a=bt(),r.isDragging=!1),Ja(Je),gi&&!A){f&&(ue(f.target,"change",I),r.pointerEvent=_),Zi(g,!1),ce(r,"release","onRelease"),ce(r,"click","onClick"),gi=!1;return}for(R=g.length;--R>-1;)Is(g[R],"cursor",i.cursor||(i.cursor!==!1?Si:null));if(us--,f){if(z=f.changedTouches,z&&(f=z[0],f!==Ne&&f.identifier!==ze)){for(R=z.length;--R>-1&&(f=z[R]).identifier!==ze&&f.target!==t;);if(R<0&&!T)return}r.pointerEvent=_,r.pointerX=f.pageX,r.pointerY=f.pageY}return A&&_?(je(_),De=!0,ce(r,"release","onRelease")):_&&!P?(De=!1,Ma&&(i.snap||i.bounds)&&xs(i.inertia||i.throwProps),ce(r,"release","onRelease"),(!Pi||_.type!=="touchmove")&&_.type.indexOf("cancel")===-1&&(ce(r,"click","onClick"),bt()-k<300&&ce(r,"doubleclick","onDoubleClick"),G=_.target||t,k=bt(),$=function(){k!==_s&&r.enabled()&&!r.isPressed&&!_.defaultPrevented&&(G.click?G.click():L.createEvent&&(Z=L.createEvent("MouseEvents"),Z.initMouseEvent("click",!0,!0,J,1,r.pointerEvent.screenX,r.pointerEvent.screenY,r.pointerX,r.pointerY,!1,!1,!1,!1,0,null),G.dispatchEvent(Z)))},!Pi&&!_.defaultPrevented&&Y.delayedCall(.05,$))):(xs(i.inertia||i.throwProps),!r.allowEventDefault&&_&&(i.dragClickables!==!1||!D.call(r,_.target))&&P&&(!Be||qe&&Be===qe)&&_.cancelable!==!1?(De=!0,je(_)):De=!1,ce(r,"release","onRelease")),_i()&&O.duration(r.tween.duration()),P&&ce(r,"dragend","onDragEnd"),!0},qi=function(f){if(f&&r.isDragging&&!E){var T=f.target||t.parentNode,_=T.scrollLeft-T._gsScrollX,P=T.scrollTop-T._gsScrollY;(_||P)&&(q?(Q-=_*q.a+P*q.c,U-=P*q.d+_*q.b):(Q-=_,U-=P),T._gsScrollX+=_,T._gsScrollY+=P,bi(r.pointerX,r.pointerY))}},Aa=function(f){var T=bt(),_=T-k<100,P=T-v<50,A=_&&_s===k,O=r.pointerEvent&&r.pointerEvent.defaultPrevented,z=_&&Pa===k,R=f.isTrusted||f.isTrusted==null&&_&&A;if((A||P&&r.vars.suppressClickOnDrag!==!1)&&f.stopImmediatePropagation&&f.stopImmediatePropagation(),_&&!(r.pointerEvent&&r.pointerEvent.defaultPrevented)&&(!A||R&&!z)){R&&A&&(Pa=k),_s=k;return}(r.isPressed||P||_)&&(!R||!f.detail||!_||O)&&je(f),!_&&!P&&!Xi&&(f&&f.target&&(r.pointerEvent=f),ce(r,"click","onClick"))},Ea=function(f){return q?{x:f.x*q.a+f.y*q.c+q.e,y:f.x*q.b+f.y*q.d+q.f}:{x:f.x,y:f.y}};return fs=e.get(t),fs&&fs.kill(),s.startDrag=function(I,f){var T,_,P,A;vi(I||r.pointerEvent,!0),f&&!r.hitTest(I||r.pointerEvent)&&(T=Jt(I||r.pointerEvent),_=Jt(t),P=Ea({x:T.left+T.width/2,y:T.top+T.height/2}),A=Ea({x:_.left+_.width/2,y:_.top+_.height/2}),Q-=P.x-A.x,U-=P.y-A.y),r.isDragging||(r.isDragging=Xi=!0,ce(r,"dragstart","onDragStart"))},s.drag=Rt,s.endDrag=function(I){return Ue(I||r.pointerEvent,!0)},s.timeSinceDrag=function(){return r.isDragging?0:(bt()-v)/1e3},s.timeSinceClick=function(){return(bt()-k)/1e3},s.hitTest=function(I,f){return e.hitTest(r.target,I,f)},s.getDirection=function(I,f){var T=I==="velocity"&&Ze?I:Oi(I)&&!o?"element":"start",_,P,A,O,z,R;return T==="element"&&(z=Jt(r.target),R=Jt(I)),_=T==="start"?r.x-F:T==="velocity"?Ze.getVelocity(t,u):z.left+z.width/2-(R.left+R.width/2),o?_<0?"counter-clockwise":"clockwise":(f=f||2,P=T==="start"?r.y-N:T==="velocity"?Ze.getVelocity(t,c):z.top+z.height/2-(R.top+R.height/2),A=Math.abs(_/P),O=A<1/f?"":_<0?"left":"right",A<f&&(O!==""&&(O+="-"),O+=P<0?"up":"down"),O)},s.applyBounds=function(I,f){var T,_,P,A,O,z;if(I&&i.bounds!==I)return i.bounds=I,r.update(!0,f);if(Ot(!0),bs(),he&&!_i()){if(T=r.x,_=r.y,T>H?T=H:T<X&&(T=X),_>ae?_=ae:_<W&&(_=W),(r.x!==T||r.y!==_)&&(P=!0,r.x=r.endX=T,o?r.endRotation=T:r.y=r.endY=_,pe=!0,Je(!0),r.autoScroll&&!r.isDragging))for(Ls(t.parentNode),A=t,ot.scrollTop=J.pageYOffset!=null?J.pageYOffset:L.documentElement.scrollTop!=null?L.documentElement.scrollTop:L.body.scrollTop,ot.scrollLeft=J.pageXOffset!=null?J.pageXOffset:L.documentElement.scrollLeft!=null?L.documentElement.scrollLeft:L.body.scrollLeft;A&&!z;)z=mi(A.parentNode),O=z?ot:A.parentNode,m&&O.scrollTop>O._gsMaxScrollY&&(O.scrollTop=O._gsMaxScrollY),d&&O.scrollLeft>O._gsMaxScrollX&&(O.scrollLeft=O._gsMaxScrollX),A=O;r.isThrowing&&(P||r.endX>H||r.endX<X||r.endY>ae||r.endY<W)&&xs(i.inertia||i.throwProps,P)}return r},s.update=function(I,f,T){if(f&&r.isPressed){var _=Ft(t),P=Sa.apply({x:r.x-F,y:r.y-N}),A=Ft(t.parentNode,!0);A.apply({x:_.e-P.x,y:_.f-P.y},P),r.x-=P.x-A.e,r.y-=P.y-A.f,Je(!0),Wi()}var O=r.x,z=r.y;return Da(!f),I?r.applyBounds():(pe&&T&&Je(!0),Ot(!0)),f&&(bi(r.pointerX,r.pointerY),pe&&Je(!0)),r.isPressed&&!f&&(d&&Math.abs(O-r.x)>.01||m&&Math.abs(z-r.y)>.01&&!o)&&Wi(),r.autoScroll&&(Ls(t.parentNode,r.isDragging),x=r.isDragging,Je(!0),sn(t,qi),tn(t,qi)),r},s.enable=function(I){var f={lazy:!0},T,_,P;if(i.cursor!==!1&&(f.cursor=i.cursor||Si),Y.utils.checkPrefix("touchCallout")&&(f.touchCallout="none"),I!=="soft"){for(Qa(g,d===m?"none":i.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||i.allowEventDefault?"manipulation":d?"pan-y":"pan-x"),_=g.length;--_>-1;)P=g[_],es||me(P,"mousedown",vi),me(P,"touchstart",vi),me(P,"click",Aa,!0),Y.set(P,f),P.getBBox&&P.ownerSVGElement&&d!==m&&Y.set(P.ownerSVGElement,{touchAction:i.allowNativeTouchScrolling||i.allowEventDefault?"manipulation":d?"pan-y":"pan-x"}),i.allowContextMenu||me(P,"contextmenu",Ca);Zi(g,!1)}return tn(t,qi),j=!0,Ze&&I!=="soft"&&Ze.track(E||t,n?"x,y":o?"rotation":"top,left"),t._gsDragID=T="d"+qr++,ni[T]=r,E&&(E.enable(),E.element._gsDragID=T),(i.bounds||o)&&Wi(),i.bounds&&r.applyBounds(),r},s.disable=function(I){for(var f=r.isDragging,T=g.length,_;--T>-1;)Is(g[T],"cursor",null);if(I!=="soft"){for(Qa(g,null),T=g.length;--T>-1;)_=g[T],Is(_,"touchCallout",null),ue(_,"mousedown",vi),ue(_,"touchstart",vi),ue(_,"click",Aa,!0),ue(_,"contextmenu",Ca);Zi(g,!0),_e&&(ue(_e,"touchcancel",Ue),ue(_e,"touchend",Ue),ue(_e,"touchmove",Rt)),ue(L,"mouseup",Ue),ue(L,"mousemove",Rt)}return sn(t,qi),j=!1,Ze&&I!=="soft"&&(Ze.untrack(E||t,n?"x,y":o?"rotation":"top,left"),r.tween&&r.tween.kill()),E&&E.disable(),Ja(Je),r.isDragging=r.isPressed=gi=!1,f&&ce(r,"dragend","onDragEnd"),r},s.enabled=function(I,f){return arguments.length?I?r.enable(f):r.disable(f):j},s.kill=function(){return r.isThrowing=!1,r.tween&&r.tween.kill(),r.disable(),Y.set(g,{clearProps:"userSelect"}),delete ni[t._gsDragID],r},s.revert=function(){this.kill(),this.styles&&this.styles.revert()},~a.indexOf("scroll")&&(E=s.scrollProxy=new ic(t,Hr({onKill:function(){r.isPressed&&Ue(null)}},i)),t.style.overflowY=m&&!ta?"auto":"hidden",t.style.overflowX=d&&!ta?"auto":"hidden",t=E.content),o?h.rotation=1:(d&&(h[u]=1),m&&(h[c]=1)),w.force3D="force3D"in i?i.force3D:!0,ho(Ha(s)),s.enable(),s}return e.register=function(i){Y=i,zs()},e.create=function(i,s){return ea||zs(!0),kt(i).map(function(a){return new e(a,s)})},e.get=function(i){return ni[(kt(i)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(bt()-$a)/1e3},e.hitTest=function(i,s,a){if(i===s)return!1;var n=Jt(i),o=Jt(s),u=n.top,c=n.left,d=n.right,m=n.bottom,p=n.width,r=n.height,g=o.left>d||o.right<c||o.top>m||o.bottom<u,h,v,x;return g||!a?!g:(x=(a+"").indexOf("%")!==-1,a=parseFloat(a)||0,h={left:Math.max(c,o.left),top:Math.max(u,o.top)},h.width=Math.min(d,o.right)-h.left,h.height=Math.min(m,o.bottom)-h.top,h.width<0||h.height<0?!1:x?(a*=.01,v=h.width*h.height,v>=p*r*a||v>=o.width*o.height*a):h.width>a&&h.height>a)},e}(sc);$r(pi.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});pi.zIndex=1e3;pi.version="3.12.5";po()&&Y.registerPlugin(pi);console.log("GSAP");no.registerPlugin(pi);pi.create("#text",{type:"rotation",inertia:!0});
