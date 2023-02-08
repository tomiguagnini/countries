import React, { useState } from "react";
import * as style from "./index.module.css";
import {useDispatch} from "react-redux"
import * as actions from "../../redux/actions"
import {validate} from "../../Utils"


export default function ActivityForm() {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({
        name: "",
        difficulty: "1",
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
            dispatch(actions.createActivity(inputs))
            setInputs(() => {
                return {
                    name: "",
                    difficulty: "1",
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
                    <input
                        name="season"
                        className={errors.season && "warning"}
                        value={inputs.season}
                        onChange={handleChange}
                        placeholder="Verano, invierno, Primaver, Otoño..."
                        type="text"
                    />
                    <p className="danger">{errors.season}</p>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    );
}
