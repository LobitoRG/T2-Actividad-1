function firstTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Primera tarea completada');
            resolve(10);  // Resolvemos la promesa con el valor 10
        }, 1000);
    });
}

function secondTask(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Segunda tarea completada, resultado anterior: ${result}`);
            resolve(result * 2);  // Multiplicamos el valor recibido por 2
        }, 1000);
    });
}

function thirdTask(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Tercera tarea completada, resultado anterior: ${result}`);
            resolve(result + 5);  // Sumamos 5 al valor recibido
        }, 1000);
    });
}

// Encadenamos la tercera tarea a las anteriores
firstTask()
    .then(result => secondTask(result))  // El resultado de firstTask se pasa a secondTask
    .then(result => thirdTask(result))   // El resultado de secondTask se pasa a thirdTask
    .then(finalResult => {
        console.log(`Resultado final de thirdTask: ${finalResult}`);
    });
