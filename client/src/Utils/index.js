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