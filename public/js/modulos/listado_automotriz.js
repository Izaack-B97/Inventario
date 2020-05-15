console.log('--- Entrando a listado_automotriz.js ---');


$('#table-automotrices').DataTable();

(function(){

    $('#btnCrear').on('click', function(){
        $('#modalAutomotris').modal();        
    });

})();