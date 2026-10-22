/* Componente: loja/empresa em 3D (caixa com toldo, janelas acesas e porta). <div data-tz="shop" class="shop"></div>
   Janelas acesas: .wl (opacity animável). Tamanho base 300×230×220; escale pelo GSAP. */
(function(){
  var TZ=window.TZ=window.TZ||{};TZ.components=TZ.components||{};
  var W=300,D=220,H=230;
  function F(w,h,tf,cls,css,inner){return '<div class="sf '+(cls||'')+'" style="width:'+w+'px;height:'+h+'px;left:'+(-w/2)+'px;top:'+(-h/2)+'px;transform:'+tf+';'+(css||'')+'">'+(inner||'')+'</div>'}
  TZ.components.shop=function(el){
    var win=function(x){return '<div class="win" style="left:'+x+'px"><div class="wl"></div></div>'};
    var front='<div class="sg"></div>'+win(26)+win(190)+'<div class="dr" style="left:112px"><div class="wl"></div><i></i></div><div class="sign"></div>';
    var h='<div class="s-shadow"></div><div class="sp">';
    h+=F(W,H,'translateZ('+(-D/2)+'px) rotateY(180deg)','sb','background:linear-gradient(180deg,#05425d,#032c40)');
    h+=F(D,H,'rotateY(-90deg) translateZ('+(W/2)+'px)','sl','background:linear-gradient(90deg,#043a52,#05425d)');
    h+=F(D,H,'rotateY(90deg) translateZ('+(W/2)+'px)','sr','background:linear-gradient(90deg,#065072,#043f58)','<div class="win" style="left:60px;top:70px"><div class="wl"></div></div>');
    h+=F(W,D,'rotateX(90deg) translateZ('+(H/2)+'px)','st','background:linear-gradient(135deg,#a6dcec,#5aa7c4)');
    h+=F(W+16,26,'translateY('+(-H/2-10)+'px) translateZ('+(D/2+8)+'px)','par','background:linear-gradient(180deg,#FFE39A,#D9A93A)');
    h+=F(W,H,'translateZ('+(D/2)+'px)','sf0','background:linear-gradient(160deg,#0f7fb0,#0A6B96 45%,#075a82)',front);
    h+=F(W+34,74,'translateY('+(-H/2+92)+'px) translateZ('+(D/2+34)+'px) rotateX(-38deg)','awn','background:repeating-linear-gradient(90deg,#F2C763 0 30px,#fff6dc 30px 60px);box-shadow:0 14px 18px rgba(0,16,26,.35)');
    h+='</div>';
    el.innerHTML=h;
  };
})();
