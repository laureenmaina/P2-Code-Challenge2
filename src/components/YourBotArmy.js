import React from "react"
import  {useState,useEffect} from "react"


function BotArmy(){
    const [botArmy, setBotArmy]=useState([])

    useEffect(()=>{
        fetch("https://json-server-bot.onrender.com/bots", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then((response) => response.json())
            .then((data) => setBotArmy(data));
    },[])

    return(
        <div>


        </div>
    )
}
 export default BotArmy