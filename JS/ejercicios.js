const settings = {
    async: true,
    crossDomain: true,
    url: 'https://exercisedb.p.rapidapi.com/status', // Asegúrate de que esta URL devuelva datos relevantes
    method: 'GET',
    headers: {
        'x-rapidapi-key': '19a13ff99bmsh3e02574968d89fbp121195jsna7a73cd0aa0f',  // Sustituye 'miclave' con tu clave de API
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

$.ajax(settings).done(function (response) {
    console.log(response); // Verifica la estructura de la respuesta en la consola

    // Asegúrate de que la propiedad con el array de ejercicios es correcta
    if (Array.isArray(response)) {
        response.forEach(function(exercise) {
            $('#exercise-list').append(`
                <div class="exercise-item">
                    <h2>${exercise.name}</h2>
                    <img src="${exercise.gifUrl}" alt="${exercise.name}" style="max-width:200px;">
                    <p>Body Part: ${exercise.bodyPart}</p>
                    <p>Target: ${exercise.target}</p>
                </div>
            `);
        });
    } else {
        console.error("La respuesta no contiene un arreglo de ejercicios o la estructura es diferente.");
    }
});

  