import React, { useState } from "react";
import * as style from "./index.module.css";
import { useSelector } from "react-redux";

import { validate } from "../../Utils";
import { createActivity } from "../../Services/createActivity";
import CountryCheckbox from "../../Components/CountryCheckbox";

export default function ActivityForm() {
    const countries = useSelector((state) => {
        return [...state.countries];
    });
    const [inputs, setInputs] = useState({
        name: "",
        difficulty: "1",
        duration: "",
        season: "",
        countriesId: [],
    });
    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countriesId: [],
    });
    console.log(inputs, errors);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(errors).length === 0) {
            createActivity(inputs).then(
                (res) => {
                    if (res.status === 200) {
                        alert("Activity creada correctamente");
                    }
                },
                (error) => {
                    console.log(error.message);
                    alert("error al crear actividad");
                }
            );
            setInputs(() => {
                return {
                    name: "",
                    difficulty: "1",
                    duration: "",
                    season: "",
                    countriesId: [],
                };
            });
            setErrors(() => {
                return {
                    name: "",
                    difficulty: "",
                    duration: "",
                    season: "",
                    countriesId: [],
                };
            });
        } else {
            alert("Debe llenar todos los campos");
        }
    };
    const handleChange = (e) => {
        setInputs((prevValue) => {
            return {
                ...prevValue,
                [e.target.name]: e.target.value,
            };
        });
        setErrors(
            validate({
                ...inputs,
                [e.target.name]: e.target.value,
            })
        );
    };
    const handleSelect = (e) => {
        const select = e.target.selectedIndex;
        const option = e.target.options[select].value;
        console.log(option);
        setInputs((prevValue) => {
            return {
                ...prevValue,
                season: option,
            };
        });
        setErrors(validate({ ...inputs, season: option }));
    };
    const handleCheckBox = (e) => {
        console.log(e.target.id);
        setInputs((prevValue) => {
            return {
                ...prevValue,
                countriesId: prevValue.countriesId.concat(e.target.id),
            };
        });
        setErrors(
            validate({
                ...inputs,
                [e.target.name]: e.target.value,
            })
        );
    };

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <label>Nombre:</label>
                    <input
                        name="name"
                        className={errors.name && style.warning}
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder="Escribe el nombre de la actividad..."
                        type="text"
                    />
                    <p className={style.danger}>{errors.name}</p>
                    <label>Dificultad:</label>
                    <span>{inputs.difficulty}</span>
                    <input
                        name="difficulty"
                        className={errors.difficulty && "warning"}
                        value={inputs.difficulty}
                        onChange={handleChange}
                        placeholder="Dificultad del 1 a 5..."
                        type="range"
                        min="1"
                        max="5"
                        step="1"
                    />
                    <p className={style.danger}>{errors.difficulty}</p>
                    <label>Duracion:</label>
                    <input
                        name="duration"
                        className={errors.duration && "warning"}
                        value={inputs.duration}
                        onChange={handleChange}
                        placeholder="Ejemplo 1 semana, 1 mes..."
                        type="text"
                    />
                    <p className={style.danger}>{errors.duration}</p>
                    <label>Temporada:</label>
                    <select onChange={handleSelect}>
                        <option value="">---</option>
                        <option value="Verano">Verano</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Primaver">Primavera</option>
                    </select>
                    <p className={style.danger}>{errors.season}</p>
                    <label>Paises:</label>
                    <CountryCheckbox
                        countries={countries}
                        handleCheckBox={handleCheckBox}
                    />
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    );
}
