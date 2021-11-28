import React from 'react';
import News from '../../components/News/News'; 

const newsItems = [
    {
        id: 1,
        date: '11.11.2017',
        title: 'test1',
        description: 'В Архангельске зафиксировали вспышку коронавируса,',
        src: 'http://placehold.it/300x200',
    },
    {
        id: 2,
        date: '11.12.2017',
        title: 'test2',
        description: 'В Нижнем Новгороде скорректировали схему передвижения транспорта',
        src: 'http://placehold.it/300x200',
    },
    {
        id: 3,
        date: '14.11.2017',
        title: 'test3',
        description: 'В Севастополе ослабили масочный режим после волны COVID-19',
        src: 'http://placehold.it/300x200',
    },
    {
        id: 4,
        date: '20.11.2017',
        title: 'test4',
        description: '5 генераторов заголовков для статей, если вы устали придумывать сами',
        src: 'http://placehold.it/300x200',
    },
    {
        id: 5,
        date: '11.01.2017',
        title: 'test5',
        description: 'В Нижнем Новгороде объявили о начале досрочных каникул в школах и вузах',
        src: 'http://placehold.it/300x200',
    },
    {
        id: 6,
        date: '01.11.2017',
        title: 'test6',
        description: 'На западе Москвы провели проверку из-за смертельного ДТП',
        src: 'http://placehold.it/300x200',
    },
    {
        id: 7,
        date: '11.11.2007',
        title: 'test7',
        description: 'Обескураживающих заголовков пост',
        src: 'http://placehold.it/300x200',
    },
    {
        id: 8,
        date: '05.11.2017',
        title: 'test8',
        description: 'Громкие новостные заголовки от классиков русской литературы',
        src: 'http://placehold.it/300x200',
    },
    {
        id: 9,
        date: '21.11.2017',
        title: 'test9',
        description: 'Фермер из Новосибирска оплатил кредит Сбербанку навозом',
        src: 'http://placehold.it/300x200',
    },
];

function NewsPage() {
    return (
        <News newsItems={newsItems}/>
    )
}

export default NewsPage