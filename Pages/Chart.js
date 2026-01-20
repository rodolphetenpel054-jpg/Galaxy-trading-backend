jsx
import{useEffect,useRef}from react
import default function
Trading chart(){
const chartcontainerRef-useRef(null);
  useEffect (()->{
    constsctipt-
    document create("Élément");script.
    "https://upkg.com/lightweight_
script.async_time;
script.onload_()->{
const chart_
Window.lightcharts.createchart^√(
chartContainerRef.current,
width:
chartContenerRef.current.clientwith
height:400,
layout:{
baground:{color:"#"0bof1a"},
text color"#d1d4dc",},
  grid:{
  vertclines:{color"#1e222d"},
horzlines:{color:"#2e222d"},
},
timescale:{
timevisible:true,
  },
  },
  );
const candlerseries_
chart.addcandlestick services ({upcolor:'#26a69a",
downcolor:"#ef5350",
wickdowncolor:"#ef5350",
bordervisible:false,});
feth(
  "https://api.binance.com/api/v3/klines?dymbol=BTCUSDT&interval=1m& limit=100"
)
then((((res)->res.json())
    then(data)->{
    candler series.
    set data(
    data.map((d)->({
    time:d[o]/1000,
    Open:+d[1]
    high:+d[2],
    lov:+d[3],
    close:+d[4],
}))
  );
  ]);
Window.addEvebtlistiner
("resize",()->[
chart.applyOption({width ;
                   chartcontainerRef.current.cliebtwidth,
  });
  });
  };
document.body.appendchild(script ;},[]); return 
<div style _{{pandding 10}}>
<h3>BTC/USDT</h3>
<divret_{chartContainerRef}style_{{/>
  </div>
);
}
  
      
