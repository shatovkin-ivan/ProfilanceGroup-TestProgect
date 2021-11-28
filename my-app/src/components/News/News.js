import React from 'react';
import './News.scss';

function News(props) {
    return (
        <section className="news">
            <div className="container">
                <h2 className="news__title">Новости</h2>
                <input className="news__search input" type="search"/>
                <ul className="news__list">
                    {props.newsItems.map((post) => 
                        <li className="news__item" key={post.id}>
                            <div className="news__item-img">
                                <img src={post.src} alt=""></img>
                            </div>
                            <div className="news__item-content">
                                <time className="news__item-date">{post.date}</time>
                                <h3 className="news__item-subtitle">
                                    {post.title}
                                </h3>
                                <p className="news__item-description">
                                    {post.description}
                                </p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>                
        </section>
    )
}

export default News