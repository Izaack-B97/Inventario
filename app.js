let express = require('express');

let app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(8080, () => {
    console.log('El servidor esta corriendo en el puerto -> 8080');
});  