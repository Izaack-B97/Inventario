console.log('--- Entrando a listado_controles.js');

(function(){

    $('#table-controles').on('click', '.ver', function(){
        $('#modalControles').modal(); 
    });

    $('#table-controles').DataTable();
})();