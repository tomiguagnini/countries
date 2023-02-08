import React, { useState } from "react";
import * as style from "./index.module.css";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;
    const pagesCount = Math.ceil(countries.length / pageSize);

    const itemsOnCurrentPage = countries.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <>
            <div className={style.cardContainer}>
                {itemsOnCurrentPage.map((c) => {
                    return (
                        <Link to={`/country/${c.id}`} className={style.ln}>
                            <div className={style.card} key={c.id}>
                                <img
                                    className={style.img}
                                    src={c.flag.split(",")[0]}
                                    alt={c.name}
                                />
                                <div className={style.info}>
                                    <h3>{c.name.slice(0, 15)}</h3>
                                    <h4>{c.continent}</h4>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className={style.pageButton}>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Anterior
                </button>
                <button
                    disabled={currentPage === pagesCount}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Siguiente
                </button>
            </div>
        </>
    );
}

export default CountriesList;
