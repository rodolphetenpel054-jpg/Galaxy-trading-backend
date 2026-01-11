js
import axiosfrom"axios";
import {created Client}from ;
"@supabase/supabase-js;
const supabase-
createdclient(process.env.supabase_URL,process.env.supabase_key);
const Hot_wallet-
process.env.Hot_wallet-ADDRESS;const TRONGRID
"https ://api;TROngrid.io";
export default async function 
handler(req,res){
  const{data}-await axios.get(${TRONGRID}/v1/accounts /$
  {HOT_wallet/transactions/trc20 limited,
  {headers:
  {"TRO-PRO-API-KEY"}}
   );
   fo(let tx of data.data){
    if(tx.token_info.symbol---"usdt"){
const tx Hash-
tx transaction_id;
const {data;exist}-await supabase
.from("deposit ")
.select("id")
.en("tx_hash",txHash)
.single();
If (!exist){
const amount -tx.valur/1e6;
const user wallet -tx.from;
const{data:user}-await supabase
.from("User")
.select("id")
.en("wallet_address,user wallet)
.single();
if(user){
await
supabase.from("deposits"). Insert({
user_id:user.id,
tx_hash:tx Hash,
amount,
network:"TRC20",
Statuts:"confirmed",
  });
await supabase
.from("users")
.Update({balance;
supabase.rpc("balance+?",
[amount])})
.eq("(id"),user.id);
  }
  }
  
  }
    }
res.json({status:"OK"});
  }
