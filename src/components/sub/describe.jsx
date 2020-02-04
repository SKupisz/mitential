import React from 'react';
import Emoji from "react-emoji-render";

export default class Describe extends React.Component{
    render(){
        return(
            <section className="describe-content">
                <header className="main-header">Military potential</header>
                <div className="short-describe">
                    <header className="short-describe-header">What is it?</header>
                    <div className="short-describe-content">It's a simple app to check the speculated military potential of the country you want to</div>
                </div>
                <div className="short-describe right-aligned">
                    <header className="short-describe-header">How does it work?</header>
                    <div className="short-describe-content">
                        <Emoji text = "Just go to Map section, pick the country, and enjoy ;-)"/>
                    </div>
                </div>
            </section>
        )
    }
}