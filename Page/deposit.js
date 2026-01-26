JavaScript 
import {useStata}from"react";
import {supabase}from"--/lib/
export default function Deposit(){
const[amount,setAmount]-useState
const[txid,setTxid]-useState("")
const[message,setMessage]-useState("")
const handler submit-async(e){
e.preventDefault();
const{error}-await
supabase.from("deposit")insert([
  {
amount:amount
txid:txid
status:pendding 
  }
]);
if(error){
setMessage(errorlors de l'envoie X");
  }else{
setMessage("demande envoyee! vérification en cours")
setAmount("");
set(Txid("");
  }
};
return{
<div style-{{padding;20}}>
<h1>dépôt USDT(TRC20)</h1>
<p>Adresse de dépôt :</b></p>
<p style-{{backgroud
"#111,padding10,color"lime"}}>
TON_ADDRESSE_USDT_TRC20_ici
  </p>
           <p>Reseau:TRON(TRC20)</p>
<p>Minimum;10USDT</p>
<form on submit-{handlerSubmit}>
<input
type -"number"
placeholder-"Montant envoyé"
value-{amount}
onchange-{(e)->
setAmount(e.target.value)} requered/>
<br/><br/>
<input
type-"text"placehorlder-"TXID(Hash de transaction)"
value-{txid}
onchange-{(e)->
setTxid(e.target.value)}requered
/>
<br/><br/>
<button type"submit">j'ai payé</
  </form>
<p>{message}</p>
  </div>
);
}


