import React from 'react';
import * as style from './index.module.css'
function Dashboard(props) {
    return (
        <div className={style.bg}>
            <div className={style.container}>
                <input placeholder='Search'></input>
            </div>

        </div>
    );
}

export default Dashboard;