import React from "react";
import * as style from "./index.module.css"
function CountryCheckbox({countries, handleCheckBox}) {
    return (
        <div className={style.box}>
            
            {countries.map((c) => {
                return (
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            id={c.id}
                            name={c.name}
                            value={c.id}
                            onChange={handleCheckBox}
                        />
                        <label for={c.name}>{c.name}</label>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export default CountryCheckbox;
