import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards = data.map(exp => {
        return (
            <Card 
                image={exp.coverImg}
                rating={exp.stats.rating}
                reviews={exp.stats.reviewCount}
                location={exp.location}
                price={exp.price}
                title={exp.title}
            />
        )
    })
    return(
        <div className="app">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}