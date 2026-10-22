/* Componente: escudo 3D dourado (miolo petróleo + check dourado). Uso: <div data-tz="shield" class="shield3d" style="width:..;height:.."></div> */
(function(){
  var TZ=window.TZ=window.TZ||{};TZ.components=TZ.components||{};
  var P="M100 8C70 28 40 34 14 34V120C14 176 52 214 100 234C148 214 186 176 186 120V34C160 34 130 28 100 8Z";
  var I="M100 30C76 46 52 52 34 53V120C34 166 62 196 100 213C138 196 166 166 166 120V53C148 52 124 46 100 30Z";
  var C="M68 124L91 148L137 94";
  function mix(a,b,t){var r=function(h){return[1,3,5].map(function(i){return parseInt(h.substr(i,2),16)})};
    var x=r(a),y=r(b);return'rgb('+x.map(function(v,k){return Math.round(v+(y[k]-v)*t)}).join(',')+')'}
  function L(z,body){return'<div class="sh-l" style="transform:translateZ('+z+'px)"><svg viewBox="0 0 200 244">'+body+'</svg></div>'}
  TZ.components.shield=function(){
    var h='';
    for(var i=16;i>=1;i--){h+=L(-i*1.6,'<path d="'+P+'" fill="'+mix('#A87818','#7A5414',i/16)+'"/>')}
    h+=L(0,'<defs><linearGradient id="tzGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFEDB0"/><stop offset=".45" stop-color="#F2C763"/><stop offset="1" stop-color="#D9A93A"/></linearGradient>'+
      '<linearGradient id="tzPet" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0A6B96"/><stop offset="1" stop-color="#002a3d"/></linearGradient></defs>'+
      '<path d="'+P+'" fill="url(#tzGold)"/>');
    h+=L(1,'<path d="'+I+'" fill="#001f2e"/>');
    h+=L(2.2,'<path d="'+I+'" fill="url(#tzPet)" transform="translate(100 120) scale(.97) translate(-100 -120)"/>');
    for(var k=5;k>=1;k--){h+=L(2.4+k*1.1,'<path d="'+C+'" fill="none" stroke="'+mix('#A87818','#D9A93A',(6-k)/5)+'" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>')}
    h+=L(9.5,'<path d="'+C+'" fill="none" stroke="url(#tzGold)" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>');
    h+=L(10.5,'<path d="M100 8C70 28 40 34 14 34V80C70 70 120 50 100 8Z" fill="#fff" opacity=".18"/>');
    return h;
  };
})();
