console.log('--- Entrando a listado_automotriz.js ---');

(function(){

    $('#table-automotriz').on('click', 'tr', function(){
        $('#modalAutomotris').modal();        
    });

    $('#table-automotriz').DataTable();


})();