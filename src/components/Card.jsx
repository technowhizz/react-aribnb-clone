import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={`images/${props.image}`}/>
            <div className="card--info">
                <img className="card--star" src="images/star.png"/>
                <p className="card--rating">{props.rating}</p>
                <p className="card--reviews gray">({props.reviews})</p>
                <p className="card--separator gray">•</p>
                <p className="card--location gray">{props.location}</p>
            </div>
            <p className="card--text">{props.title}</p>
            <p className="card--price"><b>From ${props.price}</b> / person</p>            
        </div>
    )
}