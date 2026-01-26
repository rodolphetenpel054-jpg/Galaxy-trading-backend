JavaScript 
import react{useEffect)from"react";
const TradingviewWidgetspro-()->{
useEffect(()->{
script -
document.createElement("script")
script.src-
"https://s3.Tradingview.com/tv.js":
script.async-true;
document.body.appendingChild(script);
script.onload-()->{
const markets-[
  {symbole;"NASDAQ":AAPL"
containerId:"tv-Wifget-2"}
  {symbol:"FOREX:EURUSD,
containerId:"tv-widget-3"}
];
maerkets.forEach(({symbol,
containerId}->{
new
window.Tradingview.widget({width;"100%",
height:450
symbol:symbol
timezone;"Etc/UTC"
theme:"dark"
style:"1"
locale:"en"
toolbar_bg:"#1a1a1",
enable:_publishing:false,
allow_symbol_change:
true,
container_id:containerId
   });
  });
  };
  },[]);
return
<div style-{{display,"flex"
flexDirection"colom",gap
"25px",padding"10px}}>
<div id-tv-widget-1"
style-{{borderRadius"12px"
overflow"hidden" boxShadow "0
4px 10px rgba(0,0,0,0,3)"}}></div>
<div id-"tv-widget-2"
style-{{borderRadius"12px"
oveflow"hidden",boxShadow "0
4px 10px rgba(0,0,0,0,3)"}}></div>
<div id-"tv-widget-3
style-{{borderRadius:"12px
overflow"hidden",boxShadow:"0
4px 10px rgba(0,0,0,0,3)"}}></div>
                  </div
);
  };
export default.
TradingviewWidgetsPro;
