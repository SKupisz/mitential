import React from 'react';

export default class Contact extends React.Component{
    render(){
        return(
            <section className="contact-section">
                <header className="main-header">Contact us</header>
                <div className="contact-container">
                    <div className="contact-item facebook">Facebook: lorem ipsum</div>
                    <div className="contact-item github">Github: lorem ipsum</div>
                </div>
            </section>
        );
    }
}