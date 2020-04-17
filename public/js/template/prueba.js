$(document).ready( function () {
    $('#table-principal').on('click', 'tr', () => {
        console.log($(this).html());
    });
} );