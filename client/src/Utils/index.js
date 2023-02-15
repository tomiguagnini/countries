export function validate(inputs) {
    const errors = {};
    if (inputs.name.length === 0 || inputs.name.length > 253) {
        errors.name = "Se requiere un nombre";
    }
    if (
        isNaN(inputs.duration[0]) ||
        (   inputs.duration.slice(2) !== "dia" &&
            inputs.duration.slice(2) !== "dias" &&
            inputs.duration.slice(2) !== "semana" &&
            inputs.duration.slice(2) !== "semanas" &&
            inputs.duration.slice(2) !== "mes" &&
            inputs.duration.slice(2) !== "meses" )
    ) {
        errors.duration = "ejmplos validos(1 mes, 1 semana)";
    }
    if (inputs.season === "") {
        errors.season = "Debe elegir una opcion";
    }
    if (inputs.countriesId.length === 0) {
        errors.countriesId = "Debe elegir un pais";
    }
    return errors;
}
