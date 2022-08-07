import React from "react"

export default function Card(props) {

    let badgeText
    let badgeClass

    if (props.exp.openSpots === 0){
        badgeText = "SOLD OUT"
        badgeClass = "card--soldOut"

    } else if (props.exp.location === "Online"){
        badgeText = "ONLINE"
        badgeClass = "card--online"     
    }

    return (
        <div className="card">
            {badgeText && <div className={`card--badge ${badgeClass}`}>{badgeText}</div>}
            <img className="card--image" src={`images/${props.exp.coverImg}`}/>
            <div className="card--info">
                <img className="card--star" src="images/star.png"/>
                <p className="card--rating">{props.exp.stats.rating}</p>
                <p className="card--reviews gray">({props.exp.stats.reviewCount})</p>
                <p className="card--separator gray">•</p>
                <p className="card--location gray">{props.exp.location}</p>
            </div>
            <p className="card--text">{props.exp.title}</p>
            <p className="card--price"><b>From ${props.exp.price}</b> / person</p>            
        </div>
    )
}
