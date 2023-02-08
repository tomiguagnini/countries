import React, { useState } from "react";
import * as style from "./index.module.css";

export function validate(inputs) {
    const errors = {};
    if (inputs.name.length === 0) {
        errors.name = "Se requiere un nombre";
    }
    if (
        isNaN(inputs.duration[0]) ||
        (inputs.duration.slice(2) !== "semana" &&
            inputs.duration.slice(2) !== "semanas" &&
            inputs.duration.slice(2) !== "mes" &&
            inputs.duration.slice(2) !== "meses")
    ) {
        errors.duration = "ejmplos validos(1 mes, 1 semana)";
    }
    return errors;
}

export default function ActivityForm() {
    const [inputs, setInputs] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(errors).length === 0) {
            alert("Datos completos");
            setInputs(() => {
                return {
                    name: "",
                    difficulty: "",
                    duration: "",
                    season: "",
                };
            });
            setErrors(() => {
                return {
                    name: "",
                    difficulty: "",
                    duration: "",
                    season: "",
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
                        placeholder="Escribe el nombre de la act..."
                        type="text"
                    />
                    <p className={style.danger}>{errors.name}</p>
                    <label>Dificultad:</label>
                    <input
                        name="difficulty"
                        className={errors.difficulty && "warning"}
                        value={inputs.difficulty}
                        onChange={handleChange}
                        placeholder="dificultad del 1 a 5..."
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
                        placeholder="Ejemplo 1 semana..."
                        type="text"
                    />
                    <p className={style.danger}>{errors.duration}</p>
                    <label>Temporada:</label>
                    <input
                        name="season"
                        className={errors.season && "warning"}
                        value={inputs.season}
                        onChange={handleChange}
                        placeholder="Verano, invierno etc..."
                        type="text"
                    />
                    <p className="danger">{errors.season}</p>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    );
}
