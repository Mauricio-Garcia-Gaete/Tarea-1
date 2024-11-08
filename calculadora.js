let num1 = parseFloat(prompt ("Ingresar un número entero" ));
let num2 = parseFloat(prompt ("Ingresar un segundo número entero"));

let op1 = "suma";
let op2 = "resta";
let op3 = "multiplicacion";
let op4 = "division";
let op5 = "salir";

let operaciones = [op1, op2, op3, op4, op5];

for (let i = 0; i < operaciones.length; i++){
    console.log(operaciones[i]);
}

let opcion = 0;

while (opcion != op5) {
    opcion = prompt ("Selecciona una operacion");
    
    function sumatoria(num1, num2) {
        resultado = (num1 + num2);
        return console.log(`El total de la suma entre ${num1} y ${num2} es ${resultado}`);
    }

    function substraccion(num1, num2) {
        resultado = (num1 - num2);
        return console.log(`El total de la resta entre ${num1} y ${num2} es ${resultado}`);
    }

    function producto(num1, num2) {
        resultado = (num1 * num2);
        return console.log(`El total de la multiplicacion entre ${num1} y ${num2} es ${resultado}`);
    }

    function cociente(num1, num2) {
        resultado = (num1 / num2);
        return console.log(`El total de la division entre ${num1} y ${num2} es ${resultado}`);
    }

    switch (opcion) {
        case "suma":
            console.log(sumatoria(num1, num2));
            break;
        case "resta":
            console.log(substraccion(num1, num2));
            break;
        case "multiplicacion":
            console.log(producto(num1, num2));
            break;
        case "division":
            console.log(cociente(num1, num2));
            break;
        case "salir":
                console.log(`Gracias por usar el algoritmo`);
                opcion == op5;
                break;
        default:
            console.log(`Operacion no valida. Intente otra.`);
            break;
    }
}

console.log(`Hasta luego`);