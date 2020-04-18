console.log('--- Entrando a listado_servicios.js ---');

(function(){

    $('#table-servicios').on('click', '.ver', function(){
        $('#modalServicios').modal(); 
    });

    $('#table-servicios').DataTable();
})();