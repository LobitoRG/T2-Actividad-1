var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);  // Petición GET asíncrona
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('Datos recibidos:', xhr.responseText);
    } else {
        console.error('Error en la solicitud');
    }
};
xhr.send();
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (response.ok) {
            return response.json();  // Convertimos la respuesta a JSON
        } else {
            throw new Error('Error en la solicitud');
        }
    })
    .then(data => {
        console.log('Datos recibidos:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
