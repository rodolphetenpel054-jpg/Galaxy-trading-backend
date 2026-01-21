jsx
"Use client"
import {useEffect}"react"
export default function chart(){
UseEffect(()=>{
const loadscript-id,symbol,container)->{
document.createElement("script");
script,id-id;
script.src_
https://s3.tradingview.com/tv."js";
script.async-true;script.onload-()->{new
window.tradingview.widget({
container_id: container,width:100%,
height:400,
symbol:symbol
interval:"15",
timezone: "Afrique"/Douala,
theme;"dark"
style"1"
locale:"fr"
toolbar_bg:"#0f172a"
enable_publishing;false,
hede_top_toolbar:false,
hide.legend:false
save_image:false,
});
};
document.body.appenchild(script);
};
"loadscript("tv2"
OANDA xauusE""chart1");
loadsctipt("tv2"NASDA:NDX",
"chart2")
loadscript("tv3FX:EURUSD","chart3");
  },[]);
return (
<div style-{{padding.20}}>
<h2 style-{{color:
"white"}} Galaxy trading -live Market</h2>
<div style-{{display"grid",
gridtemplateColumns:"1fr 1fr 1fr"
gap:10}}>
<div id-"chart1"></div>
<div id-"chart2"></div>
<div id-"chart3></div>
  </div>
  </div>
