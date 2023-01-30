import React from 'react';
import { Link } from 'react-router-dom';
import * as style from './index.module.css'

function Home(props) {
    return (
        <div className={style.bg}>

            <div className={style.container}>
                <div className={style.titleContainer}>
                    <h1>Countries</h1>
                    <Link to='/dashboard'>
                    <button className={style.btn}>Dashboard</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Home;