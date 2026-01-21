jsx
"Use client";
import{UseEffect,useState}from"react";
export default function chart(){
const[symbol,setSymbol]-
useState("OANDA:XAUUSD");
useEffect(()->{
document.getElementById("tvchart")?.remove();
const container-
document.getElementById("chart");
container.innerHTML-" ";
const script-
document createElement("script");
script.id-"tvchart";
Script.src-
"https://s3.tradingview.com/tv.js"
script.async-true;
script.onload-->{new
window.Tradingview.widget({
container_id;"chart",
width:"100",
heighr:500,
symbol: symbol,
interval:"15"
timezone:"Africa/Douala"
thème :"dark",
locale:"fr"
style:"1"
toolba_bg"#020617"
enable_publishing:false
  });
  };
document.body.apprndchild(script);
}[symbol]);
return (
<div style-{{padding:30}}>
<h2 style-{{color
"white"}}>Galaxy trading</h2>
<select
onchange-{(e)->
setSymbol(e.Target.value)}
style-{{padding:10,maeginBotton:15}}
>
option 
value-"OANDA:XAUUSD">XAUUSD(or)</option 
value-"BINANCE:BTCUSDT">BTCUSDT/option 
<option -NASDAQ:NDX">NASDAQ100</option>
<option value-"SP:SPX">S&P500</option 
</select>
<div id"chart"</div>
</div>
);
  }
