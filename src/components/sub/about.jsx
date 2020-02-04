import React from 'react';
import Emoji from "react-emoji-render";

export default class About extends React.Component{
    render(){
        return(
            <section className="about-section">
                <header className="main-header">About us</header>
                <section className="about-history">
                How did it start? Well, not that special as you can expect - I was watching a movie on youtube in which the US army and the Iran army were compared with each other.
                After I watched that comparison, I started thinking about why not make an app for it? That's how the mitenial had started.
                </section>
                <header className="next-header">What next?</header>
                <section className="future-section">
                    I'm planning to transform this app so the users can add and update armys's status. When is it going to be implemented? All I can say is as fast as possible <Emoji text = ";-)"/>
                </section>
            </section>
        );
    }
}