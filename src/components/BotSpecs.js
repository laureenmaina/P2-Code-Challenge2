import React from "react"
import { useState, useEffect} from "react"

function BotSpecs() {
    const [viewBots, setViewBots] = useState([])

    useEffect(() => {
        fetch("https://json-server-bot.onrender.com/bots", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => setViewBots(data));
    }, []);

    return (
        <div >
            {viewBots.map((viewBot) => (
                <div className="card mb-3"key={viewBot.id} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={viewBot.avatar_url} className="img-fluid rounded-start" alt={viewBot.name}></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">

                                <h5 className="card-title">Name: {viewBot.name}</h5>
                                <p className="card-text">ID: {viewBot.id}</p>
                                <p className="card-text">{viewBot.catchphrase}</p>
                                <p className="card-text">Class: {viewBot.bot_class} </p>
                                <div className="card-footer">
                                    <small className="text-body-secondary">
                                        <i className="fa fa-heart">{viewBot.health}</i>
                                        <i className='fas fa-bolt'>{viewBot.damage}</i>
                                        <i className="	fas fa-shield-alt">{viewBot.armor}</i>
                                    </small>
                                </div> <br/>
                                
                                <div  className="d-grid gap-2 col-4 ">
                                <a href="/" role="button" className="btn btn-secondary">Go Back</a>  
                                <button className="btn btn-secondary">Enlist</button>                            
                                </div> <br/>

                               
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>





    )

}
export default BotSpecs