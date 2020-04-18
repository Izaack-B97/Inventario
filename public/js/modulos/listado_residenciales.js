console.log('--- Entrando a listado_residenciales.js');

(function(){

    $('#table-residencial').on('click', '.ver', function(){
        $('#modalResidenciales').modal(); 
    });

    $('#table-residencial').DataTable();
})();