import './src/header/all_responsive.css';

document.querySelector('#header').innerHTML = `
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
                          <a href="https://corona.co/login">
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
`;
