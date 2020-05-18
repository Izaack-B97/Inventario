console.log('--- Entrando a listado_automotriz.js ---');
// console.log($('#inputMessage').val());

$('#table-automotrices').DataTable();

(function(){

    $('#btnRegistrar').on('click', function(){
        let data = {
            clave: $('#inputClave').val(),
            existencia: $('#inputExistencia').val(),
            control: $('#inputControl').val(),
            tipo: $('#selectTipo').val(),
            precio: $('#inputPrecio').val(),
        };      
        // console.log(data);

        postOnDB('automotrices/crear', data)
            .then(result => {
                setTimeout(() => {
                    softReload();
                }, 1000);
            })
            .catch(err => {
                console.log(err);
            });
    });

    $('.btn-eliminar').on('click', function(){
        let id = $(this).parents('tr').find('.id').text();

        deleteOnDB(`automotrices/delete/${id}`)
            .then(result => {
                if(result.statusText === "OK"){
                    // alert('Se elimino correctamente');
                    setTimeout(function(){
                        softReload();
                    }, 1000);

                }
            })  
            .catch(err => {
                console.log(err);
            });
    });

})();