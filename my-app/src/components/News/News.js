import React, { useState } from 'react';
import './News.scss';


function News() {

    const newsItems = [
        {
            id: 1,
            date: '11.11.2017',
            title: 'Новость',
            description: 'В Архангельске зафиксировали вспышку коронавируса,',
            src: 'http://placehold.it/300x200',
        },
        {
            id: 2,
            date: '11.12.2017',
            title: 'Не новость',
            description: 'В Нижнем Новгороде скорректировали схему передвижения транспорта',
            src: 'http://placehold.it/300x200',
        },
        {
            id: 3,
            date: '14.11.2017',
            title: 'Желтая пресса',
            description: 'В Севастополе ослабили масочный режим после волны COVID-19',
            src: 'http://placehold.it/300x200',
        },
        {
            id: 4,
            date: '20.11.2017',
            title: 'Утка',
            description: '5 генераторов заголовков для статей, если вы устали придумывать сами',
            src: 'http://placehold.it/300x200',
        },
        {
            id: 5,
            date: '11.01.2017',
            title: 'Фейк',
            description: 'В Нижнем Новгороде объявили о начале досрочных каникул в школах и вузах',
            src: 'http://placehold.it/300x200',
        },
        {
            id: 6,
            date: '01.11.2017',
            title: 'Событие',
            description: 'На западе Москвы провели проверку из-за смертельного ДТП',
            src: 'http://placehold.it/300x200',
        },
        {
            id: 7,
            date: '11.11.2007',
            title: 'Мероприятие',
            description: 'Обескураживающих заголовков пост',
            src: 'http://placehold.it/300x200',
        },
        {
            id: 8,
            date: '05.11.2017',
            title: 'Текст',
            description: 'Громкие новостные заголовки от классиков русской литературы',
            src: 'http://placehold.it/300x200',
        },
        {
            id: 9,
            date: '21.11.2017',
            title: 'Lorem Ipsum',
            description: 'Фермер из Новосибирска оплатил кредит Сбербанку навозом',
            src: 'http://placehold.it/300x200',
        },
    ];
    
    const [newsValue, setNewsValue] = useState('');
    
    const filterdNews = newsItems.filter(correctNews => {
        return correctNews.title.toLowerCase().includes(newsValue.toLowerCase())
    })
    
    return (
        <section className="news">
            <div className="container">
                <h2 className="news__title">Новости</h2>
                <div className="news__search">
                    <input className="news__search-input input" type="text" onChange={(e) => setNewsValue(e.target.value)}/>
                    <button className="news__search-button"></button>
                </div>
                
                <ul className="news__list">
                    {filterdNews.map((post) => {
                        return (
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
                            )
                        })
                    }
                </ul>
            </div>                
        </section>
    )
}

export default News