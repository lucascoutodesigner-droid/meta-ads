/* Monta os componentes: substitui o conteúdo de todo [data-tz="nome"] dentro de um escopo. */
(function(){
  var TZ=window.TZ=window.TZ||{};
  TZ.mount=function(scope){
    (scope||document).querySelectorAll('[data-tz]').forEach(function(el){
      if(el.hasAttribute('data-tz-done'))return;
      var f=TZ.components&&TZ.components[el.getAttribute('data-tz')];
      if(!f)return;el.setAttribute('data-tz-done','');var out=f(el);if(typeof out==='string')el.innerHTML=out;
    });
  };
  /* quebra um texto em palavras animáveis (determinístico) */
  TZ.words=function(el){
    var w=el.textContent.trim().split(/\s+/);
    el.innerHTML=w.map(function(x){return'<span class="word">'+x+'</span>'}).join(' ');
    return el.querySelectorAll('.word');
  };
})();
