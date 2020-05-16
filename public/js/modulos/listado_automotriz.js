console.log('--- Entrando a listado_automotriz.js ---');

$('#table-automotrices').DataTable();

(function(){

    getData('automotrices/data')
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            console.log(err);
        })

    $('#btnCrear').on('click', function(){
        $('#modalAutomotris').modal();        
    });

})();