/* Componente: ícones de traço simples (WhatsApp estilizado, seta). Uso: <div data-tz="icon" data-icon="whatsapp"></div> */
(function(){
  var TZ=window.TZ=window.TZ||{};TZ.components=TZ.components||{};
  var S={
    whatsapp:'<svg viewBox="0 0 48 48"><path fill="#fff" d="M24 5C13.5 5 5 13.4 5 23.8c0 3.6 1 7 2.9 9.9L5.4 42.6l9.2-2.4a19 19 0 0 0 9.4 2.5C34.5 42.7 43 34.3 43 23.800 43 13.400 34.500 5 24 5Zm0 33.600c-2.900 0-5.600-.8-8-2.300l-.6-.3-5.500 1.400 1.500-5.300-.4-.6a15.400 15.400 0 0 1-2.400-8.200C8.600 15.500 15.500 8.700 24 8.700s15.400 6.800 15.400 15.100S32.500 38.600 24 38.600Zm8.500-11.500c-.5-.2-2.800-1.400-3.200-1.500s-.8-.2-1.100.2-1.200 1.500-1.500 1.800-.6.300-1 .1a12.600 12.600 0 0 1-6.200-5.400c-.5-.8.500-.8 1.400-2.600.2-.3.100-.6 0-.8s-1.100-2.600-1.500-3.600c-.4-.9-.8-.8-1.100-.8h-.9a1.700 1.700 0 0 0-1.300.6 5.300 5.300 0 0 0-1.700 4c0 2.300 1.700 4.600 1.900 4.900s3.300 5 8 7c3 1.200 4.100 1.300 5.600 1.100.9-.1 2.800-1.100 3.200-2.200s.4-2 .3-2.200-.4-.3-.9-.5Z"/></svg>',
    arrow:'<svg viewBox="0 0 64 64"><defs><linearGradient id="tzArr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFEDB0"/><stop offset=".5" stop-color="#F2C763"/><stop offset="1" stop-color="#D9A93A"/></linearGradient></defs><path d="M10 32H48M32 14L50 32L32 50" fill="none" stroke="#7A5414" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 3)"/><path d="M10 32H48M32 14L50 32L32 50" fill="none" stroke="url(#tzArr)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  TZ.components.icon=function(el){el.innerHTML=S[el.getAttribute('data-icon')]||''};
})();
