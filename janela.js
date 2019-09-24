<!--
function MM_showHideLayers() {
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
function MM_findObj(n, d) { 
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

document.write('<div id="fechada" style="position:absolute;widht:100px;height:100px;left:10px;top:152px;visibility:visible;">')

document.write('<table border=0 style="border:1px solid #f1f1f1;background-color:#990000;filter:Alpha(Opacity=200,FinishOpacity=80,Style=2,StartX=100,StartY=100,FinishX=100,FinishY=1);"><tr><td>')
document.write('<table width="100" height="125" border="0" cellspacing="1" cellpadding="1">')
document.write('<tr align=right>')
document.write("<td><input type='button' style='background-color:#fefefe;cursor:hand;color:#333333;border:0px;font-face:arial,verdana;font-size:8pt;font-weight:bold;' value=' x ' onClick=\"MM_showHideLayers('fechada','','hide')\" title='Fechar!'>")
document.write('</td>')
document.write('</tr>')
document.write('<tr>')


document.write('<td><input type=image src=imagem.gif style="width:338;height:98;border:0px;" onclick=\'window.open("https://adalagoas.com.br/noticias/14226/ad-benedito-bentes-2-departamento-de-jovens-vasos-de-honra-celebra-31-anos-de-fundacao","_blank","")\' title="DESTAQUE!"></td>')
document.write('</tr>')

document.write('</table>')
document.write('</td>')
document.write('</tr>')
document.write('</table>')
document.write('</div>')

//--------------------------------------------------------------------------------------------------

var comingdate = new Date("Sep 16, 2019 07:00:00");

var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

var x = setInterval(function(){
  var now = new Date();
  var des = comingdate.getTime() - now.getTime();
  var days = Math.floor(des/(1000 * 60 * 60 * 24));
  var hours = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 *60));
  var mins = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
  var secs = Math.floor(des%(1000 * 60) / 1000);

  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

  if(des <= 0) clearInterval(x);

},1000);

function getTrueNumber(x) {
  if (x<10) return '0'+x;
  else return x;
}