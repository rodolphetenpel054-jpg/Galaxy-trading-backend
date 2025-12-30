js
import{usdstatus}from "react"
export défaut function deposit (){const[amount,setAmount]-usdstate(" ");
                                  const[method,setMethod]-use state("mobile_money");const
                                    handler deposit _async()->{const res-await fetch("api/deposit",{method;"post",
                                    handlers:{"content-Type:"application/json"},body;json.stringify({amount,method}),
                                             });
                                  const data_await res,json();alert(data_await res,json();alert(data.message);
                                 };
return(
  <div style={{padding:20}}>
    <h2>dépôt Galaxy trading </h2>
 <input  
   Type="number "
   placeholder=montant value{amount}
   onechange-{(e)->
    setAmount(e,target value)}/>
    <br/><br/>
    <select value_method}
    onechange_{(e)->
      setmethod(e.target.value)}>
    <option 
      value_mobile_money>mobile Money</option>
    <option value_"usdt">USDT</option 
                <option value_"usdt">usdt</option>
                                  </select>
<br/><br/>
<button
oncick_{handker deposit}>valider le dépôt</div>
                                 }
