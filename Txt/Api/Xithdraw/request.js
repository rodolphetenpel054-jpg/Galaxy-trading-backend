import jwT from"jsonwebtoken";
Export jwT defaut Async function handler(request)}
return
res.status(405).json({message "methode non autorisée"});
}
try{
  const{amount method, destination}=req.body;
  const token=req handlers,authorization? split(("")[1];
    if(!token){
      return 
  res status(405).json({message :non autorisé"});
    }
  const user_jwT.verify(token,process.env.jwT_secret);
  if(amount<=o){
    return 
  res.status(400).json({message ;"montant invalide "});
}
//Enregistrer la demande de base de données 
//status:pending
return res.status(200).json({message : demande retrait envoyée,
                             statuts :pending 
                            });
}cacth(error){
return 
res.statuts(500).json({message"error server"});
    }
}

                        
