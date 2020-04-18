console.log('--- Entrando a listado_carcasas.js ---');

(function(){

    $('#table-carcasas').on('click', '.ver', function(){
        $('#modalCarcasas').modal(); 
    });
    $('#table-carcasas').DataTable();

})();
