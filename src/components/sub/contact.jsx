import React from 'react';

export default class Contact extends React.Component{
    render(){
        return(
            <section className="contact-section">
                <header className="main-header">Contact us</header>
                <div className="contact-container">
                    <div className="contact-item facebook">Facebook: <a href = "https://www.facebook.com/SGK-news-1990120751057327/">https://www.facebook.com/SGK-news-1990120751057327/</a></div>
                    <div className="contact-item github">Github: <a href = "https://github.com/SKupisz/mitential">https://github.com/SKupisz/mitential</a></div>
                </div>
            </section>
        );
    }
}