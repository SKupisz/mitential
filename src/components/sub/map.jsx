import React from "react";

import MainMap from "../main.jsx";

export default class Map extends React.Component{
    render(){
        return(
            <section className="map-container">
            <header className = "main-header">
                    Potential Map
                </header>
                <MainMap/>
                <section className="adding-space">
                </section>
            </section>
        );
    }
}