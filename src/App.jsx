import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App(){
    return(
        <div className="app">
            <Navbar />
            <Hero />
            <Card 
                image="kz.png"
                rating="5.0"
                reviews="6"
                country="USA"
                price="136"
                title="Life lessons with Katie Zaferes"
            />
        </div>
    )
}