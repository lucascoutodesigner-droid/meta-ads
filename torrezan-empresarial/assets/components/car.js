/* Componente: carro 3D estilizado, visto de cima. <div data-tz="car" class="car" style="width:120px;height:215px"></div> */
(function(){
  var TZ=window.TZ=window.TZ||{};TZ.components=TZ.components||{};
  TZ.components.car=function(el){
    var h='<div class="c-shadow"></div><div class="c-solid">';
    var P={blue:['#04384f','#05425d','#065072','#075e86','#0A6B96','#1a82b1'],ice:['#2a6f8a','#3a84a0','#4a98b5','#5cacc8','#7CC3DC','#a6dcec'],gold:['#7A5414','#A87818','#C8922A','#D9A93A','#F2C763','#FFE39A']};
    var cols=P[el.getAttribute('data-color')]||P.blue;
    // rodas e faróis primeiro (abaixo/dentro da carroceria)
    h+='<div class="cw" style="left:-6%;top:15%;transform:translateZ(6px)"></div><div class="cw" style="right:-6%;top:15%;transform:translateZ(6px)"></div>';
    h+='<div class="cw" style="left:-6%;top:63%;transform:translateZ(6px)"></div><div class="cw" style="right:-6%;top:63%;transform:translateZ(6px)"></div>';
    for(var i=0;i<cols.length;i++){h+='<div class="cb" style="background:'+cols[i]+';transform:translateZ('+(i*5)+'px)"></div>'}
    h+='<div class="cb" style="transform:translateZ(26px);background:linear-gradient(160deg,rgba(255,255,255,.34),rgba(255,255,255,0) 55%)"></div>';
    var rc=['#0b2f42','#0d3a52','#8ed0e6','#b8e3f1'];
    for(var j=0;j<rc.length;j++){h+='<div class="cc" style="background:'+rc[j]+';transform:translateZ('+(26+j*4)+'px)"></div>'}
    h+='<div class="cl" style="left:11%;top:2%;transform:translateZ(18px)"></div><div class="cl" style="right:11%;top:2%;transform:translateZ(18px)"></div>';
    h+='</div><div class="c-line"></div>';
    el.innerHTML=h;
  };
})();
