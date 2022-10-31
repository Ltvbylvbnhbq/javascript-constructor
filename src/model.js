import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'


const text = `Практика написания JS без библиотек <p>Я создал ссылку на
<a href="https://www.mozilla.org/ru/">домашнюю страницу Mozilla</a>.
</p>`

export const model = [
    new TitleBlock ('КОНСТРУКТОР САЙТА', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: 'green',
            padding: '1.5rem',
            'text-align': 'center'
        }
        
        }),
    new ImageBlock (image, {
            styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),

    new ColumnsBlock ( [
        'Приложение на чистом JavaScript, без использования библиотек',
        'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#FFC0CB',
            'font-weight': 'bold'
        }
    }),
    new TextBlock (text, {
        styles: {
            background: 'linear-gradient(to left, #FFFF00, #4682B4)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]