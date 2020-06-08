// $(() => {
//     $(document).ajaxStart(function(){
//         $('#loading').removeClass('hidden');
//     });

//     $(document).ajaxStop(function(){
//         $('#loading').hide();
//     });

//     setTimeout(() => {
//         $('#loading').hide();
//     }, 100);
// });

function softReload(){
    console.log('reloading');
    window.top.location.reload(true);
}

function preventURL(){
    window.history.back();
}