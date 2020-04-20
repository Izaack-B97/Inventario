console.log('--- Entrando a listado_automotriz.js ---');

(function(){

    $('#btnCrear').on('click', function(){
        $('#modalAutomotris').modal();        
    });

    $('#table-automotriz').DataTable();


})();