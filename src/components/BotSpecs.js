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
                <div className="card mb-3" style="max-width: 540px;">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={viewBot.avatar_url} className="img-fluid rounded-start" alt={viewBot.name}></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Name: {viewBot.name}</h5>
                                <p class="card-text">{viewBot.catchphrase}</p>
                                <p class="card-text">Class:{viewBot.bot_class} </p>
                                <div className="card-footer">
                                    <small className="text-body-secondary">
                                        <i className="fa fa-heart">{viewBot.health}</i>
                                        <i className='fas fa-bolt'>{viewBot.damage}</i>
                                        <i className="	fas fa-shield-alt">{viewBot.armor}</i>
                                    </small>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>





    )

}
export default BotSpecs