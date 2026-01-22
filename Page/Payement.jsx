jsx
"use client":
import {useState}from"react";
export default function paiement (){
const[txid,setTxid]-
use state("");
const wallet _ADDRESS-
"TXXXXXXXXXXXXXXXXXXXXXXX://
Adress usdt TRC20 Galaxy 
const AMOUNT-"25",//usdt
const PLAN "PRO";
const submit("veillez entrer le TXID");
  return;
  }
//phase1; enregistrement simple(plus tard supabase)
alerte ("paiement soumis avec succès.activation en cours")
};
return (
<div style -{{padding:20max width500,margin"auto"color:"white"}}>
<h2>paiement Galaxy trading<h2>
<div style -{{background :
"#020617",padding :15,
borderRadius10}}>
<p><strong>plan:</strong>
{plan</p>
{p><strong montant:</strong>
{amount}usdt</p>
<p><strong>Réseau :</strong>TRC20(Tron)</p>
<p><strong>adress de paiement :</strong></p>
<div style-{{background :"#020617"
padding :10
World Breack:"breack-all"
border:1px solid
#334155"
  }}>
wallet _ADDRESS}
  </div>
<p style-{{margin Top 10
fontsize:12 color:"#94a3b8":}}>
envoyer exactement 
<strong>{AMOUNT}usdt(TRC20)</strong>a cette adresse puis entrez le TXId ci-dessous 
  </p>
<input
placeholder-"Transaction Hash(TxId")
value-{txid}
onchange-{(e,)->
setTxid(e,target.value)}
style-{{
width:"100%",
padding :10,
marginTop :10,
borderRadius:6
  }}
/>
button 
onclick -{submit payement}
style-{{
marginTop :15,
width:"100%"
padding:12
background :"#22c55e",
border:"none"
borderRadius:6
fontweigth:"bold"
             }}
>
confirmer le paiement 
  </button>
             </div>
<pstyle-{{marginTop:15,
fonfsize;12,color"#94a3b8"}}>
Galaxy Trading fournit les services et les signaux 
le Trading comporte des risques 
  </p>
<div>
  );
  }



