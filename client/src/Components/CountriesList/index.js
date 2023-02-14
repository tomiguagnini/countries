import React, { useState } from "react";
import * as style from "./index.module.css";
import { Link } from "react-router-dom";
import Card from "../Card";

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
                            <Card id={c.id} flag={c.flag} name={c.name} continent={c.continent}/>
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
