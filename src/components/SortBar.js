import React from "react"
import { useState } from "react"


function SortBar(){
    const [searchBot, setSearchBot]= useState([])

    function HandleSearchBot(event){
        setSearchBot(event.target.value)
    }
    
    return(
        <div>
        <form className="d-flex" role="search">
        <input
         className="form-control me-2"
          type="search" 
          placeholder="Search" 
          aria-label="Search"
          value={searchBot}
          onChange={HandleSearchBot}></input>  
        </form>
        </div>
    )
}

export default SortBar