const express = require ('express');
const app = express ();
const path = require ('path');
// ROUTES
const mainRoutes = require('./src/routes/mainRoutes');

app.use(express.static('./public'));

app.set ('view engine', 'ejs');

app.use('/', mainRoutes); 

app.listen(3000, ()=>{console.log ('Server on port 3000')
});    