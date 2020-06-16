console.log('--- editar_automotrices.js ---');

(function() {
    let data = JSON.parse($('#inputData').val());    

    // Inicializamos el select
    $('#selectTipo').val(data.tipo);
    
    $('#btnRegistrar').on('click', function(){
        let id = $('#id').text();
        
        let datos = {
            clave: $('#inputClave').val(),
            existencia: $('#inputExistencia').val(),
            control: $('#inputControl').val(),
            tipo: $('#selectTipo').val(),
            precio: $('#inputPrecio').val()
        };

        putOnDB(`automotrices/edit/${id}`, datos)
            .then(result => {
                if (result.statusText == "OK") {
                    window.location.href = '/automotrices';
                }
            })
            .catch(err => {
                console.log(err);
            });
    });

})();
