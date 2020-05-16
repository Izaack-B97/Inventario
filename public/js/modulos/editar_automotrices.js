console.log('--- editar_automotrices.js ---');


(function() {
    let data = JSON.parse($('#inputData').val());    

    // Inicializamos el select
    $('#selectTipo').val(data.tipo);
    

})();
