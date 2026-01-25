JavaScript 
import react{useEffect}from"react"
const Tradingviewwidget-({symbole -"NASDAQ:AAPL", width-"100%", height -400})->{
useEffect(()->{
const script -
document createElement("script");
script.async-
"https:s3Tradingviewwidget.com/tv.js",
script.async-true;
script.onload-()->{new
window.Tradingview.widget({widget: widget,
height : height 
symbol:symbol
inteval:"D"
timezone:"Etc/UTC,
theme:"light",
style:"1",
localr:"en",
toolbar_bg;"#f1f3ff6"
enable_publishing:false
allow_symbol.change:true,
  });
  };
document.getElementById("tv-widget-container")appendinChild
(script);},[symbol,widget,heiht]);
return<div
id-"tv.widget-container"></div>
export default Tradingviewxidget;
