import React, { useState } from 'react';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = (props) => {

    // name, company, title, email, message, theme, fileName, fileURL
    const [cards, setCards] = useState([
        {
            id : 1,
            name : 'Stella',
            company : 'dream company',
            title : 'Software Engineer',
            email : 'stella@gmail.com',
            message : 'go for it',
            theme : 'light',
            fileName : '',
            fileURL : null
        },
        {
            id : 2,
            name : 'Jimin',
            company : 'dream company',
            title : 'Software Engineer',
            email : 'jimin@gmail.com',
            message : 'borahae',
            theme : 'colorful',
            fileName : '',
            fileURL : null
        },
        {
            id : 3,
            name : 'Jungkook',
            company : 'dream company',
            title : 'Software Engineer',
            email : 'jungkook@gmail.com',
            message : 'focus on...',
            theme : 'dark',
            fileName : '',
            fileURL : null
        }
    ]);
    return(
        <section className={styles.maker}>
            <Header></Header>
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer></Footer>
        </section>
    );
}

export default Maker;