import React, { useState, useEffect } from "react";

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("https://json-server-bot.onrender.com/bots", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div className="row">       
      {bots.map((bot) => (
        <div  className="col-sm-3 mb-3 mb-sm-2" >
            <div className="card" key={bot.id}>
          <img src={bot.avatar_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{bot.name}</h5>
            <p className="card-text">{bot.catchphrase}</p>
          </div>
        </div>
        </div>
      ))}
         </div>  
        
 
  );
}
{/*    
      
    
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div> */}

export default BotCollection;
