import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./assets/data";

export default function App() {
    
    const cards = data.map(item => {
        return <Card objectInfo={item} />
    })

    return (
        <React.Fragment>
            <div className="app">
                <Header />
                <section className="travel-section">
                    {cards}
                </section>
            </div>
        </React.Fragment>

    );
}