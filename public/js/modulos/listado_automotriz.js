console.log('--- Entrando a listado_automotriz.js ---');
// console.log($('#inputMessage').val());

// TODO: Probando Todo higlight
// FIXME: Probando el fixme

const intializeFormInfo = (data) => {
    $('#headerInfo').html(`INFORMACI&Oacute;N DE ${data._id}`);
    $('#inputInfoClave').val(data.clave);
    $('#inputInfoExistencia').val(data.existencia);
    $('#inputInfoControl').val(data.control);
    $('#inputInfoTipo').val(data.tipo);
    $('#inputInfoPrecio').val(data.precio);
    $('#inputInfoCreate').val(moment(data.createdAt).format('DD [de] MMMM, YYYY, h:mm a'));
    $('#inputInfoUpdate').val(moment(data.updatedAt).format('DD [de] MMMM, YYYY, h:mm a'));
};

(function(){
    const dt_automotrices = $('#table-automotrices').DataTable();

    $('.toast').toast('show');  

    $('#btnCrear').on('click', function(){
        $('#modalAutomotris').modal();
    });

    $('#btnRegistrar').on('click', function(){
        let data = {
            clave: $('#inputClave').val(),
            existencia: $('#inputExistencia').val(),
            control: $('#inputControl').val(),
            tipo: $('#selectTipo').val(),
            precio: $('#inputPrecio').val(),
        };      

        postOnDB('automotrices', data)
            .then(result => {
                // setTimeout(() => {
                    softReload();
                // }, 1000);
            })
            .catch(err => {
                console.log(err);
            });
    });

    $('.btn-ver').on('click', function(){
        let row = $(this).parents('tr');        
        let id = dt_automotrices.row(row).data()[0];
        getData(`automotrices/${id}`)
            .then(result => {
                let data = result.data;
                intializeFormInfo(data);
                $('#modalInfoAutomotriz').modal();
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    });

    $('.btn-eliminar').on('click', function(){
        let id = $(this).parents('tr').find('.id').text();

        deleteOnDB(`automotrices/${id}`)
            .then(result => {
                if(result.statusText === "OK"){
                    // setTimeout(function(){
                        softReload();
                    // }, 1000);
                }
            })  
            .catch(err => {
                console.log(err);
            });
    });

})();