import React from "react"
import SortBar from "./SortBar";
import BotSpecs from "./BotSpecs";


function BotArmy({ bot,id}){

    function DeleteBot(id){
        fetch(`https://json-server-bot.onrender.com/bots/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=> response.json())
        .then((data)=>console.log(("Deleted bots")))
    }

   return(
  <div>
        <SortBar/>
    <div className="bg bg-primary">
     <div className="row" >  
        <div  className="col-sm-3 mb-3 mb-sm-2" >
        <h1>{bot.id}</h1>
        <img src={bot.avatar_url} alt={bot.id} />
        <p>{bot.catchphrase}</p>
        <input>
        <link rel="icon" href="src/Images/heartbeat.png">{bot.health}</link>
        <link rel="icon" href="src/Images/lightning.png">{bot.damage}</link>
        <link rel="icon" href="src/Images/shield.png">{bot.armor}</link>
        </input>
        <button type="button" className="btn btn-secondary">Go Back</button>
        <button type="button" className="btn btn-secondary" onClick={()=>BotSpecs()}>Enlist</button>
        <button type="button" className="btn btn-danger" onClick={()=>DeleteBot(id)}>X</button>
      </div>
      </div> 
      </div>
      </div>
    );
  };
    

 export default BotArmy